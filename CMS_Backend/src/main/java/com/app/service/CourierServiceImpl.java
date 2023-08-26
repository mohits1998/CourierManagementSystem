package com.app.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.CourierDao;
import com.app.pojo.Courier;




@Transactional
@Service
public class CourierServiceImpl implements CourierService{
	
@Autowired
	private CourierDao courierdao;

@Override
public Courier addCourier(Courier courier) {
	// TODO Auto-generated method stub
	double courierWeight = courier.getCourierWeight();
	double amt = courierWeight * 250;
	courier.setPrice(amt);
	return courierdao.save(courier);
}

@Override
public Courier findByTrackingId(String trackingId) {
	// TODO Auto-generated method stub
	return courierdao.findBytrackingId(trackingId);
}

@Override
public Courier updateCourier(int courierId, Courier courier) {
	// TODO Auto-generated method stub
	Courier newCourier = courierdao.findByCourierId(courierId);
	return courierdao.save(newCourier);
}

@Override
public List<Courier> getAllCouriers() {
	// TODO Auto-generated method stub
	return courierdao.findAll();
}

@Override
public Optional<Courier> getCourierById(Integer id) {
	// TODO Auto-generated method stub
	return courierdao.findById(id);
}

@Override
public String deleteCourierById(int id) {
	// TODO Auto-generated method stub
	 courierdao.deleteById(id);
	 return "Record Deleted";
}
}




