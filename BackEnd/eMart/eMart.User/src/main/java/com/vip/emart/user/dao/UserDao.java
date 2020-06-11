package com.vip.emart.user.dao;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.vip.emart.user.entity.User;

@Repository
public interface UserDao extends JpaRepository<User, Integer>{
	public User findByUserName(String userName);
	public User findById(int id);
}
