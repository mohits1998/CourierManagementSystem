package com.couriermanagement.controller;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.couriermanagement.dao.CourierDao;
import com.couriermanagement.dao.UserDao;
import com.couriermanagement.dto.UpdateDeliveryStatusRequest;
import com.couriermanagement.model.Courier;
import com.couriermanagement.model.User;
import com.couriermanagement.utility.Constants.Category;
import com.couriermanagement.utility.Constants.DeliveryStatus;
import com.couriermanagement.utility.Constants.DeliveryTime;
import com.couriermanagement.utility.Constants.IsDeliveryAssigned;
import com.couriermanagement.utility.Helper;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

@RestController
@RequestMapping("api/user/courier")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class CourierController {

	@Autowired
	private CourierDao courierDao;

	@Autowired
	private UserDao userDao;

	private ObjectMapper objectMapper = new ObjectMapper();
	
	@GetMapping("categories")
	public ResponseEntity getAllCategories() throws JsonProcessingException {
		
		List<String> categories = new ArrayList();
		
		for(Category category : Category.values()) {
			categories.add(category.value());
		}
		
		return new ResponseEntity(categories, HttpStatus.OK);
		
	}
	

	@PostMapping("add")
	public ResponseEntity addCourier(@RequestBody Courier courier) throws JsonProcessingException {

		System.out.println("request came for adding courier");

		User user = this.userDao.findById(courier.getUserId()).get();

		LocalDateTime currentDateTime = LocalDateTime.now();
		DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd-MM-yyyy HH:mm");
		String formatDateTime = currentDateTime.format(formatter);
		
		if(courier.getPrice() == 0) {
			
			String courierId = Helper.getAlphaNumericCourierId();
			courier.setCourierId(courierId);
			courier.setUser(user);
			courier.setCourierDate(formatDateTime);
			courier.setDeliveryDate(DeliveryStatus.PENDING.value());
			courier.setDeliveryStatus(DeliveryStatus.PENDING.value());
			courier.setDeliveryTime("Not Assigned");
			courier.setDeliveryAssigned(IsDeliveryAssigned.NO.value());
			
			if(courier.getWeight() < 5) {
				courier.setPrice(100.00);
			}
			
			if(courier.getWeight() > 5 && courier.getWeight() <= 10 ) {
				courier.setPrice(300.00);
			}
			
			if(courier.getWeight() > 10 && courier.getWeight() <= 20 ) {
				courier.setPrice(600.00);
			}
			
			if(courier.getWeight() > 20 && courier.getWeight() <= 30 ) {
				courier.setPrice(800.00);
			}
			
			if(courier.getWeight() > 30 && courier.getWeight() <= 50 ) {
				courier.setPrice(1200.00);
			}
			
			if(courier.getWeight() > 50) {
				courier.setPrice(2000.00);
			}
			
			return new ResponseEntity(courier, HttpStatus.OK);
			
		} else {
			
			courier.setPaymentStatus("Paid");
			courierDao.save(courier);
			
			return new ResponseEntity(courier, HttpStatus.OK);
		}
	
	}

	@GetMapping("myCouriers")
	public ResponseEntity getMyCourier(@RequestParam("userId") int userId) throws JsonProcessingException {

		System.out.println("request came for MY Couriers for USER ID : " + userId);

		List<Courier> userCourier = new ArrayList<>();
	
		List<Courier> couriers = courierDao.findByUser_id(userId);
		
		if(!couriers.isEmpty()) {
			return new ResponseEntity(couriers, HttpStatus.OK);
		}
		else {
			return new ResponseEntity(userCourier, HttpStatus.OK);
		}
		

	}

	@GetMapping("admin/allCouriers")
	public ResponseEntity getAllOrder() throws JsonProcessingException {

		List<Courier> couriers = new ArrayList<>();
		
		couriers = courierDao.findAll();

		return new ResponseEntity(couriers, HttpStatus.OK);

	}

	@GetMapping("admin/showCourier")
	public ResponseEntity getOrdersByOrderId(@RequestParam("courierId") String courierId) throws JsonProcessingException {

		List<Courier> couriers = new ArrayList<>();
		
		couriers = courierDao.findByCourierId(courierId);

		return new ResponseEntity(couriers, HttpStatus.OK);

	}

	@PostMapping("admin/deliveryStatus/update")
	public ResponseEntity updateOrderDeliveryStatus(@RequestBody UpdateDeliveryStatusRequest deliveryRequest)
			throws JsonProcessingException {

		System.out.println("response came for UPDATE DELIVERY STATUS");

		System.out.println(deliveryRequest);

		List<Courier> couriers = new ArrayList<>();
		
		couriers = courierDao.findByCourierId(deliveryRequest.getCourierId());

		Courier courier = couriers.get(0);
		
		courier.setDeliveryDate(deliveryRequest.getDeliveryDate());
		courier.setDeliveryStatus(deliveryRequest.getDeliveryStatus());
		courier.setDeliveryTime(deliveryRequest.getDeliveryTime());
		Courier updatedCourier = courierDao.save(courier);

		List<Courier> updatedCouriers = Arrays.asList(updatedCourier);

		return new ResponseEntity(updatedCouriers, HttpStatus.OK);
	}

	@PostMapping("admin/order/assignDelivery")
	public ResponseEntity assignDeliveryPersonForOrder(@RequestBody UpdateDeliveryStatusRequest deliveryRequest)
			throws JsonProcessingException {

		System.out.println("response came for ASSIGN DELIVERY PERSON FPOR Couriers");

		System.out.println(deliveryRequest);

		List<Courier> couriers = courierDao.findByCourierId(deliveryRequest.getCourierId());

		User deliveryPerson = null;

		Optional<User> optionalDeliveryPerson = this.userDao.findById(deliveryRequest.getDeliveryId());

		if (optionalDeliveryPerson.isPresent()) {
			deliveryPerson = optionalDeliveryPerson.get();
		}

		for (Courier courier : couriers) {
			courier.setDeliveryAssigned(IsDeliveryAssigned.YES.value());
			courier.setDeliveryPerson(deliveryPerson);
			courierDao.save(courier);
		}

		List<Courier> udpatedCouriers = courierDao.findByCourierId(deliveryRequest.getCourierId());

		return new ResponseEntity(udpatedCouriers, HttpStatus.OK);
	}

	@GetMapping("delivery/myorder")
	public ResponseEntity getMyDeliveryOrders(@RequestParam("deliveryPersonId") int deliveryPersonId)
			throws JsonProcessingException {

		System.out.println("request came for MY DELIVERY ORDER for USER ID : " + deliveryPersonId);

		User person = null;

		Optional<User> oD = this.userDao.findById(deliveryPersonId);

		if (oD.isPresent()) {
			person = oD.get();
		}

		List<Courier> couriers = courierDao.findByDeliveryPerson(person);

		return new ResponseEntity(couriers, HttpStatus.OK);

	}

}
