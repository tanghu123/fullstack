package com.vip.emart.user.controller;

import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.vip.emart.jwt.utils.JwtUtil;
import com.vip.emart.user.entity.User;
import com.vip.emart.user.service.UserService;

@RestController
@RequestMapping("login")
public class LoginController {

	private static final Logger logger = LoggerFactory.getLogger(JwtUtil.class);
	
	@Autowired
	private UserService userService;

    /**
     * 模拟用户 登录
     */
    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity<Map<String, Object>> login(@RequestBody User user) {
    	Map<String,Object> result = userService.verifyUser(user);
    	if(result.get("result").equals("1")) {
    		//generate token
    		User loginUser = (User) result.get("user");
    		String token = JwtUtil.createToken(loginUser);
    		result.put("token", token);
    		result.put("role", loginUser.getRole());
    		result.remove("user");
    	}
    	return ResponseEntity.status(HttpStatus.OK).body(result);
    }
}