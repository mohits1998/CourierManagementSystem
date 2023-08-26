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
import org.springframework.web.bind.annotation.RestController;

import com.app.exc_handler.ResourceNotFoundException;
import com.app.pojo.Branch;
import com.app.service.BranchService;




@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/branches")

public class BranchController {

	  @Autowired
		private BranchService branchservice;
	
	//*****************************Add branch ***********************************
	
		
	
	@GetMapping("/branch")
	public List<Branch> getAllBranches(){
		return branchservice.getAllBranches();
	}		
	
	@GetMapping("/branch/{id}")
	public ResponseEntity<Branch> getUserById(@PathVariable int id) {
		Branch branch = branchservice.getBranchById(id).
				orElseThrow(() -> new ResourceNotFoundException("user not exist with id :" + id));
		return ResponseEntity.ok(branch);
	}
		
	
	@PostMapping("/addbranch")
	public Branch CreateBranch(@RequestBody Branch branch) {
		return branchservice.addBranch(branch);
	}
}
