package com.app.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.pojo.Courier;
import com.app.service.CourierService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/courier")
public class CourierController {

	@Autowired
	private CourierService courierService;
	//**********************************get all Courier List***************************************
	 @GetMapping("/getcourier")
	 public List <Courier> getAll(){
		List <Courier> Result = courierService.getAllCouriers();
		 
		 return Result;
	 }
	 
	 //******************************Add Courier to list ******************************************
	 @PostMapping ("/addcourier")
	 public Courier addCourier(@RequestBody Courier courier) {
		 Courier Result = courierService.addCourier(courier);
		 return Result;
	 }
	 
	 //******************************Get Courier By Id *******************************************
	 
	 @GetMapping("/Courier/{id}")
		 public Optional<Courier> getCourierById(@PathVariable Integer id) {
			 Optional<Courier> Result = courierService.getCourierById(id);
			 return Result;
		 }
		 
	//******************************Delete Courier By Id *****************************************
	 
	 @DeleteMapping("/delCourier/{id}")
		 public String deleteCourierById(@PathVariable Integer id) {
		 	courierService.deleteCourierById(id);
		 	return "Record Deleted";
		 	
		 }
		 
}
