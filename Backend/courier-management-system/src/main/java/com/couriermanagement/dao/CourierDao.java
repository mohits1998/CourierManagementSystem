package com.couriermanagement.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.couriermanagement.model.Courier;
import com.couriermanagement.model.User;

@Repository
public interface CourierDao extends JpaRepository<Courier, Integer> {
	
	List<Courier> findByUser_id(int userId);
	List<Courier> findByCourierId(String courierId);
	List<Courier> findByUser(User user);
	List<Courier> findByDeliveryPerson(User deliveryPerson);
	 
}
