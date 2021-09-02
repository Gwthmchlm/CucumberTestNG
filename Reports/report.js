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
        "http://adactinhotelapp.com/",
        "GOWTHAMK",
        "Myvizhi@1194"
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
  "name": "User is in the adactin homepage \"http://adactinhotelapp.com/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "Stepdefinition.user_is_in_the_adactin_homepage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters the loginId \"GOWTHAMK\" and password \"Myvizhi@1194\"",
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
formatter.after({
  "error_message": "java.lang.NullPointerException\r\n\tat com.stepDefinition.HooksClass.snapShots(HooksClass.java:18)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runner.HookDefinitionMatch.runStep(HookDefinitionMatch.java:16)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:63)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:49)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:48)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:40)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runScenario(TestNGCucumberRunner.java:68)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.runScenario(AbstractTestNGCucumberTests.java:22)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:108)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:661)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:869)\r\n\tat org.testng.internal.TestMethodWithDataProviderMethodWorker.call(TestMethodWithDataProviderMethodWorker.java:75)\r\n\tat org.testng.internal.TestMethodWithDataProviderMethodWorker.call(TestMethodWithDataProviderMethodWorker.java:14)\r\n\tat java.util.concurrent.FutureTask.run(Unknown Source)\r\n\tat java.util.concurrent.Executors$RunnableAdapter.call(Unknown Source)\r\n\tat java.util.concurrent.FutureTask.run(Unknown Source)\r\n\tat java.util.concurrent.ThreadPoolExecutor.runWorker(Unknown Source)\r\n\tat java.util.concurrent.ThreadPoolExecutor$Worker.run(Unknown Source)\r\n\tat java.lang.Thread.run(Unknown Source)\r\n",
  "status": "failed"
});
});