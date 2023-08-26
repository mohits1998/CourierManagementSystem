package com.app.controller;


import java.util.List;	

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.app.DTO.UserDTO;
import com.app.exc_handler.ResourceNotFoundException;
import com.app.pojo.Credentials;
import com.app.pojo.Response;
import com.app.pojo.Role;
import com.app.pojo.User;
import com.app.service.JwtUserDetailsService;
import com.app.service.UserService;



@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/User")
public class UserController {


	@Autowired
	private UserService userservice;
	@Autowired
	private JwtUserDetailsService userDetailsService;

	
	private Role role;
	
     
	@GetMapping("/users")
	public List<User> getAllUsers(){
		return userservice.findAll();
	}	
	

		@PostMapping("/user")
		public User createEmployee(@RequestBody User user) {
			return userservice.save(user);
		}
		
		@GetMapping("/users/{id}")
		public ResponseEntity<User> getUserById(@PathVariable Long id) {
			User user = userservice.findById(id)
					.orElseThrow(() -> new ResourceNotFoundException("user not exist with id :" + id));
			return ResponseEntity.ok(user);
		}
	
		
		@RequestMapping(value = "/register", method = RequestMethod.POST)
		public ResponseEntity<?> saveUser(@RequestBody UserDTO user) throws Exception {
			user.setRole(Role.CUSTOMER);
			return ResponseEntity.ok(userDetailsService.save(user));
		}

		
		@PostMapping("/signin")
	    public ResponseEntity<?>  signIn(@RequestBody Credentials cred) {
			System.out.println("In signin method of admin controller, credentials :" +cred );
	    	User user = userservice.findUserByEmail(cred);
	    	
	    	if(user == null)
	    		return Response.error("user not found");
	    	if(user.getRole()==role.CUSTOMER)
	    		return Response.success(user);
	    		else
	    			return Response.error("You are not admin!! enter correct details");
		}
	
}
