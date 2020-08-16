package com.blm.blmapi.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

//generates a entity table that corresponds to the "congressmen_info" data table in MySql
@Entity
@Table ( name = "congressmen_info")
public class CongressmenInfo {

	@Id()
	@Column ( name = "ID")
	private long recordID;
	
	@Column (name = "ZIP_CODE")
	private long zipCode;
	
	@Column (name = "ZIP_CODE_NAME")
	private String zipCodeName;
	
	@Column (name = "CONGRESSMAN")
	private String congressman;
	
	@Column (name = "EMAIL")
	private String email;

	public long getRecordID() {
		return recordID;
	}

	public void setRecordID(long recordID) {
		this.recordID = recordID;
	}

	public long getZipCode() {
		return zipCode;
	}

	public void setZipCode(long zipCode) {
		this.zipCode = zipCode;
	}

	public String getZipCodeName() {
		return zipCodeName;
	}

	public void setZipCodeName(String zipCodeName) {
		this.zipCodeName = zipCodeName;
	}

	public String getCongressman() {
		return congressman;
	}

	public void setCongressman(String congressman) {
		this.congressman = congressman;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}
}
