package com.app.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.pojo.Branch;




@Repository
public interface BranchDao extends JpaRepository<Branch, Integer> {

	Optional<Branch> findById(Integer id);
		
	
}
