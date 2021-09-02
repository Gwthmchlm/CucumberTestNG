package com.testRunner;

import org.testng.annotations.AfterClass;
import org.testng.annotations.DataProvider;

import com.beust.jcommander.JCommander;
import com.stepDefinition.JVMReportGeneration;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@CucumberOptions(features = { "src/test/resources/Features" }, glue = {
		"com.stepDefinition" }, monochrome = true, plugin = { "pretty", "html:target", "json:target/jsonReports.json",
				"rerun:target/FailedScripts.txt" }

)
public class TestRunner extends AbstractTestNGCucumberTests {

	@DataProvider(parallel = true)
	public Object[][] scenarios() {

		return super.scenarios();
	}

	@AfterClass
	public static void jvmReport() {
		JVMReportGeneration.jvmReports("Reports/jsonReports.json");

	}

}
