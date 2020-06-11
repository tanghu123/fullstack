package com.vip.emart.user.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.vip.emart.jwt.utils.JwtUtil;
import com.vip.emart.user.entity.User;

@RestController
public class LoginController {

	private static final Logger logger = LoggerFactory.getLogger(JwtUtil.class);

    /**
     * 模拟用户 登录
     */
    @RequestMapping("/login")
    public String login(User user) {
//        for (User dbUser : userMap.values()) {
//            if (dbUser.getUserName().equals(user.getUserName()) && dbUser.getPassword().equals(user.getPassword())) {
//            	logger.info("登录成功！生成token！");
//                String token = JwtUtil.createToken(dbUser);
//                return token;
//            }
//        }
        return "";
    }
}