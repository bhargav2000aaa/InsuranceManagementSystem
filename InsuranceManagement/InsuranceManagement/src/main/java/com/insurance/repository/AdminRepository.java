package com.insurance.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.webmvc.RepositoryRestController;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.insurance.entity.Admin;
@RepositoryRestController(path ="/admin")
@CrossOrigin("http://localhost:4200/")
public interface AdminRepository extends JpaRepository<Admin,Integer>{

}
