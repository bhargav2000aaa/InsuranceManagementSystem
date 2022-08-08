package com.insurance.entity;

import javax.persistence.*;

@Entity
@Table(name="users")
public class Users {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="id")
	private Integer id;
	@Column(name="name")
	private String name;
	@Column(name="email")
	private String email;
	@Column(name="mobilenumber")
	private Integer mobilenumber;
	@Column(name="password")
	private String password;
	@Column(name="address")
	private String address;
	@Column(name="healthid")
	private Integer healthid;
	@Column(name="homeid")
	private Integer homeid;
	@Column(name="healthpremiumleft")
	private Double healthpremiumleft;
	@Column(name="homepremiumleft")
	private Double homepremiumleft;
	@Column(name ="healthstatus")
	private Boolean healthstatus;
	@Column(name ="homestatus")
	private Boolean homestatus;
	
	public Users() {}

	public Users(String name, String email, Integer mobilenumber, String password, String address,
			Integer healthid, Integer homeid, Double healthpremiumleft, Double homepremiumleft,Boolean healthstatus,Boolean homestatus) {
		super();
//		this.id = id;
		this.name = name;
		this.email = email;
		this.mobilenumber = mobilenumber;
		this.password = password;
		this.address = address;
		this.healthid = healthid;
		this.homeid = homeid;
		this.healthpremiumleft = healthpremiumleft;
		this.homepremiumleft = homepremiumleft;
		this.healthstatus = healthstatus;
		this.homestatus = homestatus;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public Integer getMobilenumber() {
		return mobilenumber;
	}

	public void setMobilenumber(Integer mobilenumber) {
		this.mobilenumber = mobilenumber;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public Integer getHealthid() {
		return healthid;
	}

	public void setHealthid(Integer healthid) {
		this.healthid = healthid;
	}

	public Integer getHomeid() {
		return homeid;
	}

	public void setHomeid(Integer homeid) {
		this.homeid = homeid;
	}

	public Double getHealthpremiumleft() {
		return healthpremiumleft;
	}

	public void setHealthpremiumleft(Double healthpremiumleft) {
		this.healthpremiumleft = healthpremiumleft;
	}

	public Double getHomepremiumleft() {
		return homepremiumleft;
	}

	public void setHomepremiumleft(Double homepremiumleft) {
		this.homepremiumleft = homepremiumleft;
	}

	public Boolean getHealthstatus() {
		return healthstatus;
	}

	public void setHealthstatus(Boolean healthstatus) {
		this.healthstatus = healthstatus;
	}

	public Boolean getHomestatus() {
		return homestatus;
	}

	public void setHomestatus(Boolean homestatus) {
		this.homestatus = homestatus;
	}

	
	
	
	

}
