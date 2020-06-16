package com.vip.emart.admin.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.vip.emart.admin.dao.CategoryDao;
import com.vip.emart.admin.dao.SubCategoryDao;
import com.vip.emart.admin.entity.Category;
import com.vip.emart.admin.entity.SubCategory;

@Service
public class CategoryServiceImpl implements CategoryService {

	@Autowired
	private CategoryDao cateDao;
	
	@Autowired
	private SubCategoryDao subCateDao;
	
	@Override
	public List<Category> getAllCategories() {
		// TODO Auto-generated method stub
		return cateDao.findAll();
	}

	@Override
	public Category getCategoryById(int id) {
		return cateDao.findById(id);
	}

	@Override
	public SubCategory getSubCategoryById(int id) {
		return subCateDao.findById(id);
	}

	@Override
	public void saveCategory(Category category) {
		cateDao.save(category);
	}

	@Override
	public void saveSubCategory(SubCategory subCategory) {
		subCateDao.save(subCategory);
	}

	@Override
	public void delCategory(int id) {
		cateDao.deleteById(id);
	}

	@Override
	public void delSubCategory(int id) {
		subCateDao.deleteById(id);
	}

}
