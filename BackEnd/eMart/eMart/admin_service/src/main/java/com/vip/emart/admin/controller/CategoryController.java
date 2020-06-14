package com.vip.emart.admin.controller;

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

import com.vip.emart.admin.entity.Category;
import com.vip.emart.admin.entity.SubCategory;
import com.vip.emart.admin.service.CategoryService;

@RestController
@RequestMapping("category")
public class CategoryController {
	
	private static final Logger logger = LoggerFactory.getLogger(CategoryController.class);
	
	@Autowired
	private CategoryService service;
	
	@RequestMapping(method = RequestMethod.GET)
	public ResponseEntity<List<Category>> getAllCategories(){	
		return ResponseEntity.status(HttpStatus.OK).body(service.getAllCategories());
	}
	
	@RequestMapping(method = RequestMethod.POST)
	public ResponseEntity<Void> addCategory(@RequestBody Category category){
		service.saveCategory(category);
		return ResponseEntity.status(HttpStatus.CREATED).build();
	}
	
	@RequestMapping(value="sub", method = RequestMethod.POST)
	public ResponseEntity<Void> addSubCategory(@RequestBody SubCategory subCategory){
		service.saveSubCategory(subCategory);
		return ResponseEntity.status(HttpStatus.CREATED).build();
	}
	
	@RequestMapping(method = RequestMethod.PUT)
	public ResponseEntity<Void> updateCategory(@RequestBody Category category){
		service.saveCategory(category);
		return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
	}
	
	@RequestMapping(value="sub", method = RequestMethod.PUT)
	public ResponseEntity<Void> updateSubCategory(@RequestBody SubCategory subCategory){
		service.saveSubCategory(subCategory);
		return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
	}
	
	@RequestMapping(value="{id}",method = RequestMethod.DELETE)
	public ResponseEntity<Void> delCategory(@PathVariable int id){
		service.delCategory(id);
		return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
	}
	
	@RequestMapping(value="sub/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<Void> delSubCategory(@PathVariable int id){
		service.delSubCategory(id);
		return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
	}
	
}
