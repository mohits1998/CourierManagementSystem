package com.app.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.app.pojo.User;

@Repository
public interface UserDao extends JpaRepository<User, Integer> {

	Optional<User> findById(Long Id);
	
	void deleteById(Long Id);

	User findByEmail(String email);


}
