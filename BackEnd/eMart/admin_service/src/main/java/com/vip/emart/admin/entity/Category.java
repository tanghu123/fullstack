package com.vip.emart.admin.entity;

import java.io.Serializable;
import java.util.List;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name="category")
public class Category implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = -4351814543453790193L;
    
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	@Column
	private String name;
	@Column
	private String brief;
	
	@OneToMany(mappedBy = "category",cascade=CascadeType.ALL,fetch=FetchType.LAZY)
	private List<SubCategory> subCategorys;

	public List<SubCategory> getSubCategorys() {
		return subCategorys;
	}

	public void setSubCategorys(List<SubCategory> subCategorys) {
		this.subCategorys = subCategorys;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getBrief() {
		return brief;
	}

	public void setBrief(String brief) {
		this.brief = brief;
	}

	@Override
	public String toString() {
		return "Category [id=" + id + ", name=" + name + ", brief=" + brief + ", subCategorys size=" + subCategorys.size() + "]";
	}

}
