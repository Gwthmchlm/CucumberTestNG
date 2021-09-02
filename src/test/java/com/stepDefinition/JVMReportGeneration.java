package com.stepDefinition;

import java.io.File;
import java.util.ArrayList;
import java.util.List;

import net.masterthought.cucumber.Configuration;
import net.masterthought.cucumber.ReportBuilder;

public class JVMReportGeneration {

	public static void jvmReports(String jsonFile) {

		File location = new File(
				"E:\\Apptium - Projects\\Axiata\\Automation Testing\\Selenium\\SeleniumConcepts\\JVMReports");
		Configuration config = new Configuration(location, "Adactin Project");
		config.addClassifications("Use case", "Login");
		config.addClassifications("Environment", "UAT");
		List<String> details = new ArrayList<String>();
		details.add(jsonFile);
		ReportBuilder report = new ReportBuilder(details, config);
		report.generateReports();

	}

}
