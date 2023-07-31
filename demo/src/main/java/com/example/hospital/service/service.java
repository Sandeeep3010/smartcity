package com.example.hospital.service;

import org.springframework.beans.factory.annotation.Autowired;

import com.example.hospital.Repository.PatientRepository;
import com.example.hospital.model.patient;

public class service {
	@Autowired
	private PatientRepository patientRepository;
	
	public patient updatePatient(patient patient) {
		
		Long id=patient.getId();
		patient pat=patientRepository.findById(id).get();
		pat.setAge(patient.getAge());
		pat.setName(patient.getName());
		pat.setBlood(patient.getBlood());
		pat.setDose(patient.getDose());
		pat.setFees(patient.getFees());
		pat.setPrescription(patient.getPrescription());
		pat.setUrgency(patient.getUrgency());
		pat.setId(patient.getId());
		
		return patientRepository.save(pat);
		
	}

}
