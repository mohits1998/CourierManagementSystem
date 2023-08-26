package com.app.pojo;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

public class Credentials {
	@Email 
	@NotBlank
	@NotNull
	private String email;
	@Size(min = 3)
	@NotBlank
	private String password;
	
public Credentials() {
		
	}

public Credentials(@Email @NotBlank @NotNull String email, @Size(min = 3) @NotBlank String password) {
	this.email = email;
	this.password = password;
}

public String getEmail() {
	return email;
}
public void setEmail(String email) {
	this.email = email;
}
public String getPassword() {
	return password;
}
public void setPassword(String password) {
	this.password = password;
}
@Override
public String toString() {
	return "Credentials [email=" + email + ", password=" + password + "]";
}


}