package com.app.service;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.stereotype.Service;

import com.app.pojo.Courier;

@Transactional
@Service
public interface CourierService {

	Courier addCourier(Courier courier);

	Courier findByTrackingId(String trackingId);

	Courier updateCourier(int courierId, Courier courier);

	List<Courier> getAllCouriers();

	Optional<Courier> getCourierById(Integer id);

	String deleteCourierById(int id);


	

}
