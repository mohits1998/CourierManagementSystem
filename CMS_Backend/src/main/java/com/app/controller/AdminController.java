package com.app.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Properties;

import javax.mail.Authenticator;
import javax.mail.Message;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.app.DTO.UserDTO;
import com.app.dao.UserDao;
import com.app.exc_handler.ResourceNotFoundException;
import com.app.pojo.Branch;
import com.app.pojo.Courier;
import com.app.pojo.Credentials;
import com.app.pojo.Response;
import com.app.pojo.Role;
import com.app.pojo.User;
import com.app.service.BranchServiceImpl;
import com.app.service.CourierServiceImpl;
import com.app.service.JwtUserDetailsService;
import com.app.service.UserService;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/admin")
public class AdminController {

	@Autowired
	private UserService userservice;
	@Autowired
	private UserDao userRepository;
	@Autowired
	private CourierServiceImpl courierserviceimpl;
	@Autowired
	private BranchServiceImpl branchserviceimpl;
	@Autowired
	private PasswordEncoder bcryptEncoder;
	@Autowired
	private JwtUserDetailsService userDetailsService;
	
	
	private Role role;

	public AdminController() {
		System.out.println("in ctor of : " + getClass().getName());
	}



	@RequestMapping(value = "/register", method = RequestMethod.POST)
	public ResponseEntity<?> saveUser(@RequestBody UserDTO user) throws Exception {
		user.setRole(Role.ADMIN);
		return new ResponseEntity<>(userDetailsService.save(user), (HttpStatus.OK));
	}

	@PostMapping("/signin")
    public Object  signIn(@RequestBody Credentials cred) {
		System.out.println("In sign in method of admin controller, credentials :" +cred );
    	User user = userservice.findUserByEmail(cred);
    	
    	if(user == null) {
    		
    		return Response.error("user not found");
    	}
    	if(user.getRole()==role.ADMIN)
    		return Response.success(user);
    	else
    		return Response.error("You are not admin!! enter correct details");
	}

	

	@RequestMapping(value = "/addemployee", method = RequestMethod.POST)
	public ResponseEntity<?> saveEmployee(@RequestBody UserDTO user) throws Exception {
		user.setRole(Role.EMPLOYEE);

		sendEmail(user);
		return ResponseEntity.ok(userDetailsService.save(user));
	}

		private void sendEmail(@Valid UserDTO user) throws Exception {
		    String host = "mail.frankelsinfotech.com"; 
		    String port = "587";
		    String username = "cdac.patna@frankelsinfotech.com"; 
		    String password = "ZgD25@Tjpz=8";

		    String recipient = user.getEmail(); 
		    String subject = "New Employee Added"; 
		    String body = "Dear " + user.getFirstName() + user.getLastName()+ ",\n\nYou are added as new employee to our system." +"\n"+ user.getEmail()+"\n"+user.getPassword()+"\n\nRegards,\nThe Admin Team"; // email body

		    Properties props = new Properties();
		    props.put("mail.smtp.auth", "true");
		    props.put("mail.smtp.starttls.enable", "true");
		    props.put("mail.smtp.host", host);
		    props.put("mail.smtp.port", port);

		    Session session = Session.getInstance(props, new Authenticator() {
		        protected PasswordAuthentication getPasswordAuthentication() {
		            return new PasswordAuthentication(username, password);
		        }
		    });

		    Message message = new MimeMessage(session);
		    message.setFrom(new InternetAddress(username));
		    message.setRecipients(Message.RecipientType.TO, InternetAddress.parse(recipient));
		    message.setSubject(subject);
		    message.setText(body);

		    Transport.send(message);
		}

	@GetMapping("/employee/{id}")
	public ResponseEntity<User> getUserById(@PathVariable Long id) {
		User user = userservice.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("user not exist with id :" + id));
		return ResponseEntity.ok(user);
	}

	
	@DeleteMapping("/employee_del/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteUser(@PathVariable Long id) {
		User user = userRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("User not exist with id :" + id));

		userRepository.delete(user);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}


	
	@PutMapping("/employee_updt/{id}")
	@CrossOrigin(origins = "*", allowedHeaders = "*")
	public ResponseEntity<User> updateEmployee(@PathVariable Long id, @RequestBody User userDetails) {
		User user = userservice.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("user not exist with id :" + id));

		user.setFirstName(userDetails.getFirstName());
		user.setLastName(userDetails.getLastName());
		user.setEmail(userDetails.getEmail());

		User updatedUser = userRepository.save(user);
		return ResponseEntity.ok(updatedUser);
	}

	
	@GetMapping("/track/{trackingid}")
	public ResponseEntity<Courier> getCourierBytrackingId(@PathVariable String trackingId) {
		Courier courier = courierserviceimpl.findByTrackingId(trackingId);


		return ResponseEntity.ok(courier);
	}

	
	@PostMapping("/add_emp/{id}")
	public String updateUserDetails(@PathVariable Integer id, @RequestBody User userDetails) {

		User user = userRepository.getOne(id);
		
		user.setFirstName(userDetails.getFirstName());
		user.setLastName(userDetails.getLastName());
		user.setEmail(userDetails.getEmail());
		user.setRole(userDetails.getRole());
		user.setPassword(bcryptEncoder.encode(userDetails.getPassword()));  
		userRepository.save(user);
		return userDetails.getFirstName()+" updated successfully";
	}
	
	
	@PostMapping(value = "/addbranch")
	public ResponseEntity<?> saveBranch(@RequestBody Branch branch) throws Exception {
		return ResponseEntity.ok(branchserviceimpl.addBranch(branch));
	}
	
	@GetMapping("/allbranch")
	public List<Branch> getAllBranchs(){
		return branchserviceimpl.getAllBranches();
	}		
	
	
	@GetMapping("/getcourier")
	public List<Courier> getAllCourier(){
		return courierserviceimpl.getAllCouriers();
	}
	
	@GetMapping("/courier/{id}")
	public ResponseEntity<Courier> getCourierById(@PathVariable Integer id) {
		Courier courier = courierserviceimpl.getCourierById(id)
				.orElseThrow(() -> new ResourceNotFoundException("courier not exist with id :" + id));
		return ResponseEntity.ok(courier);
	
}
	
	@GetMapping("/getemployees")
	public List<User> getAllEmployees(){
		return userservice.findAll();
	}		
	
}

