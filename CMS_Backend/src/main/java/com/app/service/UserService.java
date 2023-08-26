package com.app.service;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.stereotype.Service;

import com.app.pojo.Credentials;
import com.app.pojo.User;

@Transactional
@Service
public interface UserService {

	List<User> findAll();

	User save(User user);
	
	Optional<User> findById(Long Id);

	User findUserByEmail(Credentials cred);

	
	

}
