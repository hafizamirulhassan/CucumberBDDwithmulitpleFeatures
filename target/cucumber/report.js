$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/Features/Login.feature");
formatter.feature({
  "line": 1,
  "name": "free CRM application test",
  "description": "",
  "id": "free-crm-application-test",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 7,
  "name": "Login validation test with valid credentials",
  "description": "",
  "id": "free-crm-application-test;login-validation-test-with-valid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@positive"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "user is on login page",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 10,
      "value": "#Then user enter email and password"
    },
    {
      "line": 11,
      "value": "#Then user enter \"qstestone@gmail.com\" and \"pakistan1\""
    }
  ],
  "line": 12,
  "name": "user enter correct \"\u003cemail\u003e\" and  correct \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "user click on submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "user lands on home page",
  "keyword": "Then "
});
formatter.examples({
  "line": 17,
  "name": "",
  "description": "",
  "id": "free-crm-application-test;login-validation-test-with-valid-credentials;",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ],
      "line": 18,
      "id": "free-crm-application-test;login-validation-test-with-valid-credentials;;1"
    },
    {
      "cells": [
        "qstestone@gmail.com",
        "pakistan1"
      ],
      "line": 19,
      "id": "free-crm-application-test;login-validation-test-with-valid-credentials;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 10652003600,
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
  "duration": 16595272200,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Login validation test with valid credentials",
  "description": "",
  "id": "free-crm-application-test;login-validation-test-with-valid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@positive"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "user is on login page",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 10,
      "value": "#Then user enter email and password"
    },
    {
      "line": 11,
      "value": "#Then user enter \"qstestone@gmail.com\" and \"pakistan1\""
    }
  ],
  "line": 12,
  "name": "user enter correct \"qstestone@gmail.com\" and  correct \"pakistan1\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "user click on submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "user lands on home page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_login_page()"
});
formatter.result({
  "duration": 36174800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "qstestone@gmail.com",
      "offset": 20
    },
    {
      "val": "pakistan1",
      "offset": 55
    }
  ],
  "location": "LoginStepDefinition.user_enter_and(String,String)"
});
formatter.result({
  "duration": 218460400,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_click_on_submit_button()"
});
formatter.result({
  "duration": 93982200,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_lands_on_home_page()"
});
formatter.result({
  "duration": 5737200,
  "status": "passed"
});
formatter.after({
  "duration": 1161966300,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 22,
  "name": "Login validation test with wrong credentials",
  "description": "",
  "id": "free-crm-application-test;login-validation-test-with-wrong-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 21,
      "name": "@negative"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "user is on the login page",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "user enter wrong \"\u003cemail\u003e\" and  correct \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "user clicks on the login button",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "user should not lands on the home page",
  "keyword": "Then "
});
formatter.examples({
  "line": 30,
  "name": "",
  "description": "",
  "id": "free-crm-application-test;login-validation-test-with-wrong-credentials;",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ],
      "line": 31,
      "id": "free-crm-application-test;login-validation-test-with-wrong-credentials;;1"
    },
    {
      "cells": [
        "testone@gmail.com",
        "pakistan1"
      ],
      "line": 32,
      "id": "free-crm-application-test;login-validation-test-with-wrong-credentials;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 9818059300,
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
  "duration": 13681821400,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "Login validation test with wrong credentials",
  "description": "",
  "id": "free-crm-application-test;login-validation-test-with-wrong-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 21,
      "name": "@negative"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "user is on the login page",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "user enter wrong \"testone@gmail.com\" and  correct \"pakistan1\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "user clicks on the login button",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "user should not lands on the home page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_the_login_page()"
});
formatter.result({
  "duration": 30698000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testone@gmail.com",
      "offset": 18
    },
    {
      "val": "pakistan1",
      "offset": 51
    }
  ],
  "location": "LoginStepDefinition.user_enters_the_email_and_password(String,String)"
});
formatter.result({
  "duration": 204451700,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_the_login_button()"
});
formatter.result({
  "duration": 78343700,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_lands_on_the_home_page()"
});
formatter.result({
  "duration": 14801800,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[@id\u003d\"top-header-menu\"]/div[3]/span[1]\"}\n  (Session info: chrome\u003d86.0.4240.75)\n  (Driver info: chromedriver\u003d2.43.600210 (68dcf5eebde37173d4027fa8635e332711d2874a),platform\u003dWindows NT 10.0.18363 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 12 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.43.1\u0027, revision: \u00275163bceef1bc36d43f3dc0b83c88998168a363a0\u0027, time: \u00272014-09-10 09:43:55\u0027\nSystem info: host: \u0027AmirPC\u0027, ip: \u0027192.168.8.78\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_191\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, hasTouchScreen\u003dfalse, platform\u003dXP, acceptSslCerts\u003dfalse, goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:64745}, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.43.600210 (68dcf5eebde37173d4027fa8635e332711d2874a), userDataDir\u003dC:\\Users\\Admin\\AppData\\Local\\Temp\\scoped_dir36716_10819}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d86.0.4240.75, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: 196d83753d8aaa2523b2a3a6b3ad14f0\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:204)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:156)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:599)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:352)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:449)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:357)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:344)\r\n\tat Steps.LoginStepDefinition.user_lands_on_the_home_page(LoginStepDefinition.java:109)\r\n\tat ✽.Then user should not lands on the home page(src/test/java/Features/Login.feature:27)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 1143142300,
  "status": "passed"
});
});