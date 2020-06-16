package com.vip.emart.admin.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.vip.emart.admin.entity.SubCategory;

@Repository
public interface SubCategoryDao extends JpaRepository<SubCategory, Integer> {
	SubCategory findById(int id);
}
