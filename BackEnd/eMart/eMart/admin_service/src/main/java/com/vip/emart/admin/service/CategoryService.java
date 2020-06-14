package com.vip.emart.admin.service;

import java.util.List;

import com.vip.emart.admin.entity.Category;
import com.vip.emart.admin.entity.SubCategory;

public interface CategoryService {
	List<Category>  getAllCategories();
	
	Category getCategoryById(int id);
	
	SubCategory getSubCategoryById(int id);
	
	void saveCategory(Category category);
	
	void saveSubCategory(SubCategory subCategory);
	
	void delCategory(int id);
	
	void delSubCategory(int id);
}
