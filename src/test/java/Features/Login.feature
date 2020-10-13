Feature: free CRM application test

Background: 
Given user open browser

@positive
Scenario Outline: Login validation test with valid credentials

Then user is on login page
#Then user enter email and password
#Then user enter "qstestone@gmail.com" and "pakistan1"
Then user enter correct "<email>" and  correct "<password>"
Then user click on submit button
Then user lands on home page


Examples:
|email|password|
|qstestone@gmail.com|pakistan1|

@negative
Scenario Outline: Login validation test with wrong credentials

Then user is on the login page
Then user enter wrong "<email>" and  correct "<password>"
Then user clicks on the login button
Then user should not lands on the home page


Examples:
|email|password|
|testone@gmail.com|pakistan1|