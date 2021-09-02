package com.stepDefinition;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;

public class Stepdefinition {

	public static WebDriver driver;
	
	@Given("User is in the adactin homepage {string}")
	public void user_is_in_the_adactin_homepage(String url) {
	   
		WebDriverManager.chromedriver().setup();
		driver = new ChromeDriver();
		driver.get(url);
		driver.manage().window().maximize();
		driver.manage().timeouts().pageLoadTimeout(5, TimeUnit.SECONDS);
		
	}

	@When("User enters the loginId {string} and password {string}")
	public void user_enters_the_loginId_and_password(String username, String password) {
	    
		WebElement usernames = driver.findElement(By.id("username"));
		usernames.sendKeys(username);
		WebElement passwords = driver.findElement(By.id("password"));
		passwords.sendKeys(password);
		
	}

	@Then("User clicks on the login button & navigate to the homepage")
	public void user_clicks_on_the_login_button_navigate_to_the_homepage() throws InterruptedException {
	   
		WebElement loginButton = driver.findElement(By.id("login"));
		loginButton.click();
		
	}
	
}
