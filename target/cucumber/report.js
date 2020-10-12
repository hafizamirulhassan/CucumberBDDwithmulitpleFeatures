$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/Features/Login.feature");
formatter.feature({
  "line": 1,
  "name": "free CRM application test",
  "description": "",
  "id": "free-crm-application-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 10765843500,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "user open browser",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinition.user_open_browser()"
});
formatter.result({
  "duration": 8738047400,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "Login validation test with valid credentials",
  "description": "",
  "id": "free-crm-application-test;login-validation-test-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 7,
      "name": "@positive"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "user is on login page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user enter email and password",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user click on submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "user lands on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "Close the Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_login_page()"
});
formatter.result({
  "duration": 35140400,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_enter_email_and_password()"
});
formatter.result({
  "duration": 203522600,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_click_on_submit_button()"
});
formatter.result({
  "duration": 87428900,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_lands_on_home_page()"
});
formatter.result({
  "duration": 6939100,
  "error_message": "java.lang.AssertionError: your title does not match expected [Cogmento] but found [Cogmento CRM]\r\n\tat org.testng.Assert.fail(Assert.java:96)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:776)\r\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:137)\r\n\tat org.testng.Assert.assertEquals(Assert.java:118)\r\n\tat org.testng.Assert.assertEquals(Assert.java:453)\r\n\tat Steps.LoginStepDefinition.user_lands_on_home_page(LoginStepDefinition.java:69)\r\n\tat ✽.Then user lands on home page(src/test/java/Features/Login.feature:13)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginStepDefinition.close_the_Browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1170545200,
  "status": "passed"
});
formatter.before({
  "duration": 9809645900,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "user open browser",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinition.user_open_browser()"
});
formatter.result({
  "duration": 7864523300,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Login validation test with wrong credentials",
  "description": "",
  "id": "free-crm-application-test;login-validation-test-with-wrong-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 16,
      "name": "@negative"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "user is on the login page",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "user enters the email and password",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "user clicks on the login button",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "user lands on the home page",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "Close the Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_the_login_page()"
});
formatter.result({
  "duration": 27490300,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_enters_the_email_and_password()"
});
formatter.result({
  "duration": 206670800,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_the_login_button()"
});
formatter.result({
  "duration": 78204400,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_lands_on_the_home_page()"
});
formatter.result({
  "duration": 16423300,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[@id\u003d\"top-header-menu\"]/div[3]/span[1]\"}\n  (Session info: chrome\u003d86.0.4240.75)\n  (Driver info: chromedriver\u003d2.43.600210 (68dcf5eebde37173d4027fa8635e332711d2874a),platform\u003dWindows NT 10.0.18363 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 14 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.43.1\u0027, revision: \u00275163bceef1bc36d43f3dc0b83c88998168a363a0\u0027, time: \u00272014-09-10 09:43:55\u0027\nSystem info: host: \u0027AmirPC\u0027, ip: \u0027192.168.8.78\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_191\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, hasTouchScreen\u003dfalse, platform\u003dXP, acceptSslCerts\u003dfalse, goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:56528}, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.43.600210 (68dcf5eebde37173d4027fa8635e332711d2874a), userDataDir\u003dC:\\Users\\Admin\\AppData\\Local\\Temp\\scoped_dir17036_23868}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d86.0.4240.75, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: 56a9c2b1245c02f40663b8fdf49167e9\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:204)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:156)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:599)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:352)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:449)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:357)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:344)\r\n\tat Steps.LoginStepDefinition.user_lands_on_the_home_page(LoginStepDefinition.java:96)\r\n\tat ✽.Then user lands on the home page(src/test/java/Features/Login.feature:22)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginStepDefinition.close_the_Browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1174550200,
  "status": "passed"
});
});