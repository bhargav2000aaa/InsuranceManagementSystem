package com.insurance.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.webmvc.RepositoryRestController;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.insurance.entity.Healthinsurance;


@RepositoryRestController(path ="/healthinsurance")
@CrossOrigin("http://localhost:4200/")
public interface HealthinsuranceRepository extends JpaRepository<Healthinsurance,Integer>{
	public List<Healthinsurance> findByPolicynameIgnoreCase(String userName);
}
