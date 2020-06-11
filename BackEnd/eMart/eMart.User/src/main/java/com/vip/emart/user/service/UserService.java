package com.vip.emart.user.service;

import java.util.List;

import org.springframework.stereotype.Component;

import com.vip.emart.user.entity.User;

@Component
public interface UserService {
	
	public User getUserByName(String name);
	
	public User getUserByID(int id);
	
	public List<User> getAllUsers();
	
	public void delUser(int id);
	
	public void addUser(User user);
	
	public void updateUser(User user);
	
	public void lockUser(int id);
	
	public void unlockUser(int id);
}
