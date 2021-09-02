$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/Features/01Feature.feature");
formatter.feature({
  "name": "To validate the login functionality",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "To valoidate the valid credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User is in the adactin homepage \"\u003curl\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "name": "User enters the loginId \"\u003cloginId\u003e\" and password \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User clicks on the login button \u0026 navigate to the homepage",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "url",
        "loginId",
        "password"
      ]
    },
    {
      "cells": [
        "http://adactinhotelapp.com",
        "GOWTHAMK",
        "Myvizhi"
      ]
    }
  ]
});
formatter.scenario({
  "name": "To valoidate the valid credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User is in the adactin homepage \"http://adactinhotelapp.com\"",
  "keyword": "Given "
});
formatter.match({
  "location": "Stepdefinition.user_is_in_the_adactin_homepage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters the loginId \"GOWTHAMK\" and password \"Myvizhi\"",
  "keyword": "When "
});
formatter.match({
  "location": "Stepdefinition.user_enters_the_loginId_and_password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on the login button \u0026 navigate to the homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefinition.user_clicks_on_the_login_button_navigate_to_the_homepage()"
});
formatter.result({
  "status": "passed"
});
});