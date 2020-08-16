package com.blm.blmapi.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.blm.blmapi.entity.CongressmenInfo;
import com.blm.blmapi.entity.UserInputEntity;
import com.blm.blmapi.service.BlmService;
import com.blm.blmapi.service.CongressmenService;

//enables the ability to call various functionalities by assigning a pathway
@RestController
@CrossOrigin("*")
public class blmApiController {
	
	@Autowired
	private CongressmenService congressmenService;
	@Autowired
	private BlmService service;
	
	//getmapping for recording congressman info into database
	@GetMapping("/blm/recordData")
	public String recordData() {
		return congressmenService.readExcelFile();
	}
	//postmapping for finding congressman info bases off of zipcode
	@PostMapping("/blm/findInfo")
	public CongressmenInfo getInfo(@RequestBody UserInputEntity input) {
		return congressmenService.findCongressmenInfo(input.getZipCode());
	}
	//postmapping for sending a custom email to the user's respective congressman
	@PostMapping("/blm/sendEmail")
	public void sendEmail(@RequestBody UserInputEntity input) throws Exception {
		CongressmenInfo congressman = congressmenService.findCongressmenInfo(input.getZipCode());
		service.sendMail(input, congressman);
	}
}
