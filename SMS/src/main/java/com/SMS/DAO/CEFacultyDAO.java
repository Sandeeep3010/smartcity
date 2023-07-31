
package com.SMS.DAO;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.SMS.Model.CEFacultyModel;

public interface CEFacultyDAO extends JpaRepository<CEFacultyModel,Integer>{

//	public StudentModel findByEmail(String email);
//
//	public StudentModel findByEmailAndPassword(String email, String password);

	Optional<CEFacultyModel> findById(String email);

	CEFacultyModel findByEmail(String email);

	
}
