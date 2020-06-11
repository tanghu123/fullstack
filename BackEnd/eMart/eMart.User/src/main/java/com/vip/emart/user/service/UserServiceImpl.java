package com.vip.emart.user.service;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;

import com.vip.emart.user.dao.UserDao;
import com.vip.emart.user.entity.User;

@Service
public class UserServiceImpl implements UserService {
	
	private static final Logger logger = LoggerFactory.getLogger(UserServiceImpl.class);
	
	@Autowired
	private UserDao dao;

	@Override
	public User getUserByName(String userName) {
		return dao.findByUserName(userName);
	}

	@Override
	public User getUserByID(int id) {
		return dao.findById(id);
	}

	@Override
	public List<User> getAllUsers() {
		return dao.findAll();
	}

	@Override
	public void delUser(int id) {
		try {
			dao.deleteById(id);			
		} catch (Exception e) {
			if(e instanceof EmptyResultDataAccessException) {
				logger.warn("The User is not existed, id = " + id);
			}else {
				logger.warn(e.getLocalizedMessage());
			}
		}
		
	}

	@Override
	public void addUser(User user) {
		dao.save(user);
	}

	@Override
	public void updateUser(User user) {
		dao.save(user);
	}

	@Override
	public void lockUser(int id) {
//		return false;
	}

	@Override
	public void unlockUser(int id) {
//		return false;
	}

}
