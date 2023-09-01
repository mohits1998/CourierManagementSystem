package com.couriermanagement.utility;

public class Constants {
	
	public enum DeliveryStatus {
		DELIVERED("Delivered"),
		ON_THE_WAY("On the Way"),
		PENDING("Pending"),   // If admin doesn't take any action
		PROCESSING("Processing");
		
		
		private String status;

	    private DeliveryStatus(String status) {
	      this.status = status;
	    }

	    public String value() {
	      return this.status;
	    }
	     
	}
	
	public enum DeliveryTime {
		MORNING("Morning"),
		AFTERNOON("Afternoon"),
		EVENING("Evening"),  
		NIGHT("Night"),
        DEFAULT("");	
		
		
		private String time;

	    private DeliveryTime(String time) {
	      this.time = time;
	    }

	    public String value() {
	      return this.time;
	    }
	     
	}
	
	public enum IsDeliveryAssigned {
		YES("Yes"),
		NO("No");
		
		private String isDeliveryAssigned;

	    private IsDeliveryAssigned(String isDeliveryAssigned) {
	      this.isDeliveryAssigned = isDeliveryAssigned;
	    }

	    public String value() {
	      return this.isDeliveryAssigned;
	    }
	     
	}
	
	public enum Category {
		
		DOCUMENTS("Documents"),
		ELECTRONICS("Electronics"),
		FURNITURE("Furniture"),  
		EATABLES("Eatables"),
		JEWELLERY("Jewellery"),
		LUGGAGES("Luggages");	
		
		
		private String category;

	    private Category(String category) {
	      this.category = category;
	    }

	    public String value() {
	      return this.category;
	    }
	}

}
