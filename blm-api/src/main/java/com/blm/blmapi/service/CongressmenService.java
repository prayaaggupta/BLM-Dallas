package com.blm.blmapi.service;

import java.io.File;
import java.util.ArrayList;
import java.util.List;

import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.ss.usermodel.WorkbookFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.blm.blmapi.entity.CongressmenInfo;
import com.blm.blmapi.repository.CongressmenRepository;

//creates various congressmen services
@Service
public class CongressmenService {
	
	@Autowired
	private CongressmenRepository repository;

	//saves one entry of congressmenInfo into the database
	public void save (CongressmenInfo info) {
		repository.save(info);
	}
	//saves a list of congressmenInfo entries into the databse
	public void saveAll(List<CongressmenInfo> info) {
		repository.saveAll(info);
	}
	//reads a excel files and stores info into the database
	public String readExcelFile () {
		try {
			String filePath = "congressmeninfo.xlsx"; //file needs to be in src/main/resources
			
			//codebase needed in order to access the specific sheet
			ClassLoader classLoader = ClassLoader.getSystemClassLoader();
			File file = new File(classLoader.getResource(filePath).getFile());
			Workbook workbook = WorkbookFactory.create(file);
			Sheet sheet = workbook.getSheetAt(0);
			
			//instantiates all the variables that are needed
			Row row;
			long id;
			long zipCode;
			String zipCodeName;
			String congressman;
			String email;
			List<CongressmenInfo> infoList = new ArrayList<CongressmenInfo>();
			
			//iterates through each row of the spreadsheet and stores congressmen entries into a list of CongressmenInfo
			for (int i = 1; i < 75; i++) {
				CongressmenInfo info = new CongressmenInfo();
				row = sheet.getRow(i);
				id = (long) row.getCell(0).getNumericCellValue();
				info.setRecordID(id);
				zipCode = (long) row.getCell(1).getNumericCellValue();
				info.setZipCode(zipCode);
				zipCodeName = row.getCell(2).getStringCellValue();
				info.setZipCodeName(zipCodeName);
				congressman = row.getCell(3).getStringCellValue();
				info.setCongressman(congressman);
				email = row.getCell(4).getStringCellValue();
				info.setEmail(email);
				infoList.add(info);
			}
			saveAll(infoList); //saves list of congressmen entries into the database
		} catch (Exception e){
			// TODO Auto-generated catch block
			e.printStackTrace();
			return "Error occured";
		}
		return "Records Updated Sucesfully";
	}
	
	public CongressmenInfo findCongressmenInfo(long zipcode) {
		return repository.findByZipCode(zipcode);
	}
	
}
