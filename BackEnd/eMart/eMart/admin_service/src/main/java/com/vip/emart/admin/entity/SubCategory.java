package com.vip.emart.admin.entity;

import java.io.Serializable;
import java.math.BigDecimal;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "subcategory")
public class SubCategory implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = -3553196348377789579L;

	public SubCategory(String name, Category category, String brief, BigDecimal gst) {
		super();
		this.name = name;
		this.category = category;
		this.brief = brief;
		this.gst = gst;
	}

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	@Column(nullable = false)
	private String name;
	@ManyToOne(cascade = { CascadeType.MERGE, CascadeType.REFRESH }, optional = false)
	@JoinColumn(name = "category_id")
	private Category category;
	@Column
	private String brief;
	@Column(nullable = false)
	private BigDecimal gst;

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Category getCategory() {
		return category;
	}

	public void setCategory(Category category) {
		this.category = category;
	}

	public String getBrief() {
		return brief;
	}

	public void setBrief(String brief) {
		this.brief = brief;
	}

	public BigDecimal getGst() {
		return gst;
	}

	public void setGst(BigDecimal gst) {
		this.gst = gst;
	}

	@Override
	public String toString() {
		return "SubCategory [id=" + id + ", name=" + name + ", category=" + category.toString() + ", brief=" + brief + ", gst="
				+ gst + "]";
	}

}
