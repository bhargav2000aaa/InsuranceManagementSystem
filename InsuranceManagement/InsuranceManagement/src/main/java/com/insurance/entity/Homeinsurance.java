package com.insurance.entity;

import javax.persistence.*;

@Entity
@Table (name="homeinsurance")
public class Homeinsurance {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="id")
	private Integer id;
	@Column(name="policyname")
	private String policyname;
	@Column(name="city")
	private String city;
	@Column(name="areaname")
	private String areaname;
	@Column(name="monthleypremium")
	private Double monthleypremium;
	@Column(name="sumassurance")
	private Double sumassurance;
	@Column(name="time")
	private Integer time;
	@Column(name="categoryid")
	private Integer categoryid;
	
	public Homeinsurance() {}

	public Homeinsurance(String policyname, String city, String areaname, Double monthleypremium, Double sumassurance,
			Integer time, Integer categoryid) {
		super();
		this.policyname = policyname;
		this.city = city;
		this.areaname = areaname;
		this.monthleypremium = monthleypremium;
		this.sumassurance = sumassurance;
		this.time = time;
		this.categoryid = categoryid;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getPolicyname() {
		return policyname;
	}

	public void setPolicyname(String policyname) {
		this.policyname = policyname;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getAreaname() {
		return areaname;
	}

	public void setAreaname(String areaname) {
		this.areaname = areaname;
	}

	public Double getMonthleypremium() {
		return monthleypremium;
	}

	public void setMonthleypremium(Double monthleypremium) {
		this.monthleypremium = monthleypremium;
	}

	public Double getSumassurance() {
		return sumassurance;
	}

	public void setSumassurance(Double sumassurance) {
		this.sumassurance = sumassurance;
	}

	public Integer getTime() {
		return time;
	}

	public void setTime(Integer time) {
		this.time = time;
	}

	public Integer getCategoryid() {
		return categoryid;
	}

	public void setCategoryid(Integer categoryid) {
		this.categoryid = categoryid;
	}
	
	
}
