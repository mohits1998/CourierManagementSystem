package com.app.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.app.DTO.UserDTO;
import com.app.dao.BranchDao;
import com.app.dao.CourierDao;
import com.app.dao.UserDao;
import com.app.exc_handler.ResourceNotFoundException;
import com.app.pojo.Courier;
import com.app.pojo.Credentials;
import com.app.pojo.Response;
import com.app.pojo.Role;
import com.app.pojo.User;
import com.app.service.JwtUserDetailsService;
import com.app.service.UserService;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/employee")
public class EmployeeController {

	@Autowired
	private CourierDao courierRepository;
	@Autowired
	private JwtUserDetailsService userDetailsService;
	
	@Autowired
	private UserService userservice;
	
	private Role role;
	
	

	public EmployeeController() {
		System.out.println("in ctor of : "+getClass().getName());
	}
	

	@RequestMapping(value = "/register", method = RequestMethod.POST)
	public ResponseEntity<?> saveUser(@RequestBody UserDTO user) throws Exception {
		user.setRole(Role.EMPLOYEE);
		return ResponseEntity.ok(userDetailsService.save(user));
	}


	
	@PostMapping("/Signin_employee")
    public Object  signIn(@RequestBody Credentials cred) {
		System.out.println("In sign in method of Employee controller, credentials :" +cred );
    	User user = userservice.findUserByEmail(cred);
    	
    	if(user == null)
    		return Response.error("user not found");
    	if(user.getRole()==role.EMPLOYEE)
    		return Response.success(user);
    	else
    			return Response.error("You are not Employee!! enter correct details");
	}

	@GetMapping("/getcourier")
	public List<Courier> getAllCourier() {
		return courierRepository.findAll();
	}
	
	// add courier
		@PostMapping("/addcourier")
		public Courier CreateCourier(@RequestBody Courier courier) {
			return courierRepository.save(courier);
		}
		
		@GetMapping("/courier/{id}")
		public ResponseEntity<Courier> getUserById(@PathVariable Integer courierId) {
			Courier courier = courierRepository.findById(courierId)
					.orElseThrow(() -> new ResourceNotFoundException("courier not exist with id :" + courierId));
			return ResponseEntity.ok(courier);
		}
		
		@DeleteMapping("/delcourier/{id}")
		public ResponseEntity<Map<String, Boolean>> deleteUser(@PathVariable Integer id) {
			Courier courier = courierRepository.findById(id)
					.orElseThrow(() -> new ResourceNotFoundException("Courier not exist with given id :" + id));

			courierRepository.delete(courier);
			Map<String, Boolean> response = new HashMap<>();
			response.put("deleted", Boolean.TRUE);
			return ResponseEntity.ok(response);
		}
}
