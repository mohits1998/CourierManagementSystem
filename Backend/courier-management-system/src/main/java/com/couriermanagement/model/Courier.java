package com.couriermanagement.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Transient;

@Entity
public class Courier {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	
	private String courierId;
	
	private String courierName;
	
	@OneToOne
	@JoinColumn(name = "user_id")
	private User user;
	
	private String courierDate;  // 13-01-2022 10:00 PM
	
	private String deliveryStatus;
	
	private String deliveryDate;
	
	private String deliveryTime; // evening, afternoon....

	private String deliveryAssigned;
	
	@OneToOne
	@JoinColumn(name = "deliveryPerson_id")
	private User deliveryPerson;

	private String receiversName; 
	
	private String receiversAddress;
	
	private String receiversPincode;
	
	private String category;
	
	private double weight;
	
	private double price;
	
	private String paymentStatus;
	
	@Transient
	private int userId;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getCourierId() {
		return courierId;
	}

	public void setCourierId(String courierId) {
		this.courierId = courierId;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public String getCourierDate() {
		return courierDate;
	}

	public void setCourierDate(String courierDate) {
		this.courierDate = courierDate;
	}

	public String getDeliveryStatus() {
		return deliveryStatus;
	}

	public void setDeliveryStatus(String deliveryStatus) {
		this.deliveryStatus = deliveryStatus;
	}

	public String getDeliveryDate() {
		return deliveryDate;
	}

	public void setDeliveryDate(String deliveryDate) {
		this.deliveryDate = deliveryDate;
	}

	public String getDeliveryTime() {
		return deliveryTime;
	}

	public void setDeliveryTime(String deliveryTime) {
		this.deliveryTime = deliveryTime;
	}

	public String getDeliveryAssigned() {
		return deliveryAssigned;
	}

	public void setDeliveryAssigned(String deliveryAssigned) {
		this.deliveryAssigned = deliveryAssigned;
	}

	public String getReceiversName() {
		return receiversName;
	}

	public void setReceiversName(String receiversName) {
		this.receiversName = receiversName;
	}

	public String getReceiversAddress() {
		return receiversAddress;
	}

	public void setReceiversAddress(String receiversAddress) {
		this.receiversAddress = receiversAddress;
	}

	public String getReceiversPincode() {
		return receiversPincode;
	}

	public void setReceiversPincode(String receiversPincode) {
		this.receiversPincode = receiversPincode;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	public double getWeight() {
		return weight;
	}

	public void setWeight(double weight) {
		this.weight = weight;
	}

	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	public String getCourierName() {
		return courierName;
	}

	public void setCourierName(String courierName) {
		this.courierName = courierName;
	}

	public User getDeliveryPerson() {
		return deliveryPerson;
	}

	public void setDeliveryPerson(User deliveryPerson) {
		this.deliveryPerson = deliveryPerson;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	public String getPaymentStatus() {
		return paymentStatus;
	}

	public void setPaymentStatus(String paymentStatus) {
		this.paymentStatus = paymentStatus;
	}
	
	
	
}
