package Runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = { "src\\test\\java\\Features\\Login.feature" }, 
		glue = { "Steps" }, 
		tags = {"@positive,@negative"}, 
		monochrome = false, // Given output would be readable format in console.
		dryRun = false, 
		plugin = { "pretty", "html:target/cucumber", "json:target/cucumber.json",
				"com.cucumber.listener.ExtentCucumberFormatter:target/report.html" }

)

public class TestRunner {

}
