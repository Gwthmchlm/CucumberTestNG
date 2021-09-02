package types.of.locators;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;

import io.github.bonigarcia.wdm.WebDriverManager;

public class LocatorsTypes {

	public static WebDriver driver;

	public static void browserLaunch() {

		WebDriverManager.chromedriver().setup();
		ChromeOptions popup = new ChromeOptions();
		ChromeOptions disablePopups = popup.addArguments("-disable--notifications");
		driver = new ChromeDriver(disablePopups);
		driver.get("https://demoqa.com/");
		driver.manage().window().maximize();
		driver.manage().timeouts().pageLoadTimeout(5, TimeUnit.SECONDS);
		


	}

	public static void usingXpath() {

		WebElement elementsHeading = driver.findElement(By.xpath("//h5[text()='Elements']"));
		elementsHeading.click();
	/*	WebElement textBox = driver.findElement(By.xpath("//span[contains(text(),'Text Box')]"));
		textBox.click();*/
		
	}	

	public static void main(String[] args) {

		browserLaunch();
		usingXpath();

	}

}
