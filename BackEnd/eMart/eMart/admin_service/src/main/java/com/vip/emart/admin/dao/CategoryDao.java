package com.vip.emart.admin.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.vip.emart.admin.entity.Category;

@Repository
public interface CategoryDao extends JpaRepository<Category, Integer> {
	Category findById(int id);
}
