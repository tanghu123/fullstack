package com.vip.emart.user.controller;

import java.util.Date;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.vip.emart.user.entity.User;
import com.vip.emart.user.service.UserService;
import com.vip.emart.user.utils.eMartUtils;

@RestController
@RequestMapping("user")
public class UserController {
	
	private static final Logger logger = LoggerFactory.getLogger(UserController.class);
	
	@Autowired
	private UserService service;
	
	@RequestMapping(method=RequestMethod.GET)
	public ResponseEntity<List<User>> getAllUser(){
		return ResponseEntity.status(HttpStatus.OK).body(service.getAllUsers());
	}
	
	@RequestMapping(method=RequestMethod.POST)
	public ResponseEntity<Void> saveUser(@RequestBody User user){
		user.setStatus(1);
		user.setCreate_date(new Date());
		user.setPassword(eMartUtils.encodePassword(user.getPassword()));
		service.addUser(user);
		logger.info("Add new User " + user.toString());
		return ResponseEntity.status(HttpStatus.CREATED).build();
	}
	
	@RequestMapping(method=RequestMethod.PUT)
	public ResponseEntity<Void> updateUser(User user){
		service.updateUser(user);
		return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
	}
	
	@RequestMapping(value="{id}",method=RequestMethod.DELETE)
	public ResponseEntity<Void> delUser(@PathVariable int id){
		service.delUser(id);
		return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
	}
	
	@RequestMapping(value="{id}",method=RequestMethod.GET)
	public ResponseEntity<User> getUserByID(@PathVariable int id){
		return ResponseEntity.status(HttpStatus.OK).body(service.getUserByID(id));
	}
}
