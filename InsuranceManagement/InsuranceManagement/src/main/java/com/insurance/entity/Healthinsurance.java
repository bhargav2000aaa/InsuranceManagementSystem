package com.insurance.entity;

import javax.persistence.*;

@Entity
@Table (name ="healthinsurance")
public class Healthinsurance {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="id")
	private Integer id;
	@Column(name="policyname")
	private String policyname;
	@Column(name="sumassurance")
	private Double sumassurance;
	@Column(name="monthleypay")
	private Double monthleypay;
	@Column(name="noofmonths")
	private Integer noofmonths;
	@Column(name="diseasescovered")
	private String diseasescovered;
	@Column(name="hospitals")
	private String hospitals;
	@Column(name="categoryid")
	private Integer categoryid;
	
	public Healthinsurance() {}

	public Healthinsurance(String policyname, Double sumassurance, Double monthleypay,Integer noofmoths, String diseasescovered,
			String hospitals, Integer categoryid) {
		super();
		this.policyname = policyname;
		this.sumassurance = sumassurance;
		this.monthleypay = monthleypay;
		this.noofmonths = noofmonths;
		this.diseasescovered = diseasescovered;
		this.hospitals = hospitals;
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

	public Double getSumassurance() {
		return sumassurance;
	}

	public void setSumassurance(Double sumassurance) {
		this.sumassurance = sumassurance;
	}

	public Double getMonthleypay() {
		return monthleypay;
	}

	public void setMonthleypay(Double monthleypay) {
		this.monthleypay = monthleypay;
	}

	public Integer getNoofmonths() {
		return noofmonths;
	}

	public void setNoofmonths(Integer noofmonths) {
		this.noofmonths = noofmonths;
	}

	public String getDiseasescovered() {
		return diseasescovered;
	}

	public void setDiseasescovered(String diseasescovered) {
		this.diseasescovered = diseasescovered;
	}

	public String getHospitals() {
		return hospitals;
	}

	public void setHospitals(String hospitals) {
		this.hospitals = hospitals;
	}

	public Integer getCategoryid() {
		return categoryid;
	}

	public void setCategoryid(Integer categoryid) {
		this.categoryid = categoryid;
	}

}
