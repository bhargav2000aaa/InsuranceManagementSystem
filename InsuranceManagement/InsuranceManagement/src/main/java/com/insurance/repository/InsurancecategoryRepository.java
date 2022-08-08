package com.insurance.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.webmvc.RepositoryRestController;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.insurance.entity.Insurancecategory;
import com.insurance.entity.Users;

@RepositoryRestController(path ="/insurancecategory")
@CrossOrigin("http://localhost:4200/")
public interface InsurancecategoryRepository extends JpaRepository<Insurancecategory,Integer>{
	
}
