package com.insurance.entity;

import javax.persistence.*;

@Entity
@Table(name="insurancecategory")
public class Insurancecategory {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="id")
	private Integer id;
	@Column(name="category")
	private String category;
	
	public Insurancecategory() {}

	public Insurancecategory(String category) {
		super();
//		this.id = id;
		this.category = category;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}
	

}
