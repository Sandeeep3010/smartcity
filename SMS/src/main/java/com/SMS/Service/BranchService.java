
package com.SMS.Service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.SMS.Model.BranchModel;
import com.SMS.DAO.BranchDAO;

@Service
public class BranchService {


	@Autowired
	BranchDAO ld;
	public BranchService() {
		
	}
	
	public List<BranchModel> getAllLogin(){
		
		return ld.findAll();
	}
	
	public void saveStudent(BranchModel ll) {
		ld.save(ll);
	}

	public void updateStudent(BranchModel ll1) {
		ld.save(ll1);
		
	}

	public void deleteStudent(BranchModel id) {
		ld.delete(id);
		
	}
	
}
