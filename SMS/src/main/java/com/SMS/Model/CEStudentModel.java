
package com.SMS.Model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class CEStudentModel {
	@Id 
	//@GeneratedValue(strategy=GenerationType.AUTO)
	int id;
	//int rollno;
	String firstname;
	String lastname;
	String gender;
	String mobileno;
	String email;
	String password;
	
	public CEStudentModel() {
		
	}
	public CEStudentModel(int id,String firstname,String lastname,String gender,String mobileno,String email,String password) {
		super();
		this.id=id;
		this.firstname=firstname;
		this.lastname=lastname;
		this.gender=gender;
		
		this.mobileno=mobileno;
		this.email=email;
		this.password=password;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	
	public String getMobileno() {
		return mobileno;
	}
	public void setMobileno(String mobileno) {
		this.mobileno = mobileno;
	}
	public String getFirstname() {
		return firstname;
	}
	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}
	public String getLastname() {
		return lastname;
	}
	public void setLastname(String lastname) {
		this.lastname = lastname;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	
}
