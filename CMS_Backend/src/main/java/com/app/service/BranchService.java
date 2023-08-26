package com.app.service;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.stereotype.Service;

import com.app.pojo.Branch;
import com.app.pojo.Courier;

@Transactional
@Service
public interface BranchService {

	List<Branch> getAllBranches();

	
	Optional<Branch>getBranchById(int id);
	

	Branch addBranch(Branch branch);

	
	
	

}
