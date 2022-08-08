package com.insurance.repository;

import java.util.List;

import org.springframework.boot.autoconfigure.data.web.SpringDataWebProperties.Pageable;
import org.springframework.data.domain.Page;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.webmvc.RepositoryRestController;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestParam;

import com.insurance.entity.Users;
@RepositoryRestController(path ="/userses")
@CrossOrigin("http://localhost:4200/")
public interface UsersRepository extends JpaRepository<Users,Integer>{
	
	public List<Users> findByNameIgnoreCase(String userName);
//	Page<Quiz> findById(@RequestParam("id") Integer id,Pageable pageable);

}
