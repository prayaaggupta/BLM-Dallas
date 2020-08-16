package com.blm.blmapi.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.blm.blmapi.entity.CongressmenInfo;

// extends the spring framework's crude repository in order to access the given functionalities
@Repository
public interface CongressmenRepository extends CrudRepository<CongressmenInfo, Long>{
	public CongressmenInfo findByZipCode(long zipCode);
} 
