package com.app.service;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.app.dao.UserDao;
import com.app.pojo.Credentials;
import com.app.pojo.User;
@Transactional
@Service
public class UserServiceImpl implements UserService{
	@Autowired
	private UserDao userdao;
	@Autowired
	private PasswordEncoder bcryptEncoder;
	@Override
	public List<User> findAll() {
		// TODO Auto-generated method stub
		List<User> L1 = userdao.findAll();
		return  L1;
	}
	@Override
	public User save(User user) {
		// TODO Auto-generated method stub
		return  userdao.save(user);
	}
	@Override
	public Optional<User> findById(Long Id) {
		// TODO Auto-generated method stub
		Optional<User> u1 = userdao.findById(Id);
		return u1;
	}
	@Override
	public User findUserByEmail(Credentials cred) {
		// TODO Auto-generated method stub
		User dbuser=userdao.findByEmail(cred.getEmail());
		System.out.println("db user :" +dbuser);
		String rawPassword= cred.getPassword();
		System.out.println("raw password :" +rawPassword);
		if(dbuser != null &&  BCrypt.checkpw(rawPassword, dbuser.getPassword()))
		{
			
			User result= dbuser;
		  
		     return result;
		}
		else {
		
		}
		return null;
	}	

}
