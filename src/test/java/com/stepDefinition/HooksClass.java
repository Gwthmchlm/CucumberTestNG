package com.stepDefinition;

import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;

import cucumber.api.Scenario;
import cucumber.api.java.After;

public class HooksClass {

	public static WebDriver driver;
	
	/*@After
	public static void snapShots(Scenario scenario) {
		
		TakesScreenshot ts = (TakesScreenshot) driver;
		byte[] snaps = ts.getScreenshotAs(OutputType.BYTES);
		scenario.embed(snaps, "snaps/png");
	}
	*/

	
}
