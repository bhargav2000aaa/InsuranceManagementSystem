package com.insurance.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.webmvc.RepositoryRestController;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.insurance.entity.Homeinsurance;
import com.insurance.entity.Users;

@RepositoryRestController(path ="/homeinsurance")
@CrossOrigin("http://localhost:4200/")
public interface HomeinsuranceRepository extends JpaRepository<Homeinsurance,Integer> {
	public List<Homeinsurance> findByPolicynameIgnoreCase(String userName);
}
