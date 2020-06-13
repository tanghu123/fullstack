package com.vip.emart.user.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;

import com.vip.emart.user.dao.UserDao;
import com.vip.emart.user.entity.User;
import com.vip.emart.utils.eMartUtils;

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
			if (e instanceof EmptyResultDataAccessException) {
				logger.warn("The User is not existed, id = " + id);
			} else {
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

	// Check if user is valid
	@Override
	public Map<String, Object> verifyUser(User user) {
		Map<String, Object> resultMap = new HashMap<String, Object>();
		// If user logon with email address
		String userName = user.getName();
		User findUser = null;
		if (userName.contains("@")) {
			findUser = dao.findByEmail(userName);
		} else {
			findUser = dao.findByUserName(userName);
		}
		if (findUser == null) {
			resultMap.put("result", "0");
			resultMap.put("message", "User is not existed.");
		} else if (findUser.getStatus() == 0) {
			resultMap.put("result", "0");
			resultMap.put("message", "User is locked.");
		} else if (eMartUtils.verifyPassword(user.getPassword(), findUser.getPassword())) {
			resultMap.put("result", "1");
			resultMap.put("user", findUser);
			resultMap.put("message", "Login success.");
		} else {
			resultMap.put("result", "0");
			resultMap.put("message", "Password wrong.");
		}
		return resultMap;
	}

}
