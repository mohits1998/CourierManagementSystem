package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;	
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dao.BranchDao;
import com.app.dao.CourierDao;
import com.app.dao.UserDao;
import com.app.pojo.Courier;
import com.app.service.CourierService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/customer")
public class CustomerController {

	@Autowired
	private CourierService courierService;

	
	public CustomerController() {
		System.out.println("in ctor of : "+getClass().getName());
	}
	
	
		@PostMapping("/addcourier")
			public Courier CreateCourier(@RequestBody Courier courier) {
				//return courierServiceImpl.addCourier(courier);
			return courierService.addCourier(courier);
			}
	
		@GetMapping("/track/{trackingid}")
			public ResponseEntity<Courier> getCourierBytrackingId(@PathVariable String trackingId) {
				Courier courier = courierService.findByTrackingId(trackingId);
				return ResponseEntity.ok(courier);
			}
		
		@PostMapping("/updatecourier/{courierId}")
		public Courier updateCourier(@PathVariable int courierId,@RequestBody Courier courier) {
			return courierService.updateCourier(courierId,courier);
		}
}
