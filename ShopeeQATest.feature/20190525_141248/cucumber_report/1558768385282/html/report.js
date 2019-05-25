$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("/Users/samudra/Katalon Studio/ShopeeQATest/Include/features/ShopeeQATest.feature");
formatter.feature({
  "name": "Creating Gist in Github",
  "description": "\tTest functionality of GitHub Page",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@ShoopeTestQA"
    }
  ]
});
formatter.scenario({
  "name": "As a user, I want to create a public gist",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@ShoopeTestQA"
    },
    {
      "name": "@SmokeTest1"
    }
  ]
});
formatter.step({
  "name": "I open GitHub Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "ShopeeQATestStepDef.openToLoginPageGithub()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I login with my account github",
  "keyword": "And "
});
formatter.match({
  "location": "ShopeeQATestStepDef.loginGithubAccount()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I create new gist named \"HowToImportDatasetinRStudio.R\" with \"library(ggplot2)\" value",
  "keyword": "When "
});
formatter.match({
  "location": "ShopeeQATestStepDef.createGist(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click Create Public Gist",
  "keyword": "And "
});
formatter.match({
  "location": "ShopeeQATestStepDef.clickPublicGist()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I SignOut Account",
  "keyword": "Then "
});
formatter.match({
  "location": "ShopeeQATestStepDef.signOutAccount()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "ShopeeQATestStepDef.iCloseBrowser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "As a user, I want to edit an existing gist",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@ShoopeTestQA"
    }
  ]
});
formatter.step({
  "name": "I open GitHub Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "ShopeeQATestStepDef.openToLoginPageGithub()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I login with my account github",
  "keyword": "And "
});
formatter.match({
  "location": "ShopeeQATestStepDef.loginGithubAccount()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I navigate to my gist",
  "keyword": "When "
});
formatter.match({
  "location": "ShopeeQATestStepDef.openToGistGithub()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click existing gist \"importDatasetinRStudio.R\"",
  "keyword": "And "
});
formatter.match({
  "location": "ShopeeQATestStepDef.clickExistingGist(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I add description \"Data Visualization With R\" edit with value \"nameVariable \u003c- read_xlsx(\"YourDirectoryDataSet\", 1)\"",
  "keyword": "And "
});
formatter.match({
  "location": "ShopeeQATestStepDef.editExistingGit(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I SignOut Account",
  "keyword": "Then "
});
formatter.match({
  "location": "ShopeeQATestStepDef.signOutAccount()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "ShopeeQATestStepDef.iCloseBrowser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "As a user, I want to delete an existing gist",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@ShoopeTestQA"
    }
  ]
});
formatter.step({
  "name": "I open GitHub Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "ShopeeQATestStepDef.openToLoginPageGithub()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I login with my account github",
  "keyword": "And "
});
formatter.match({
  "location": "ShopeeQATestStepDef.loginGithubAccount()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I navigate to my gist",
  "keyword": "When "
});
formatter.match({
  "location": "ShopeeQATestStepDef.openToGistGithub()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I delete existing gist \"gistTest1\"",
  "keyword": "And "
});
formatter.match({
  "location": "ShopeeQATestStepDef.deleteGist(String)"
});
formatter.result({
  "error_message": "groovy.lang.MissingPropertyException: No such property: Keys for class: ShopeeQATestStepDef\n\tat org.codehaus.groovy.runtime.ScriptBytecodeAdapter.unwrap(ScriptBytecodeAdapter.java:53)\n\tat org.codehaus.groovy.runtime.callsite.GetEffectivePogoPropertySite.getProperty(GetEffectivePogoPropertySite.java:87)\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callGroovyObjectGetProperty(AbstractCallSite.java:307)\n\tat ShopeeQATestStepDef.deleteGist(ShopeeQATestStepDef.groovy:119)\n\tat ✽.I delete existing gist \"gistTest1\"(/Users/samudra/Katalon Studio/ShopeeQATest/Include/features/ShopeeQATest.feature:33)\n",
  "status": "failed"
});
formatter.step({
  "name": "I SignOut Account",
  "keyword": "Then "
});
formatter.match({
  "location": "ShopeeQATestStepDef.signOutAccount()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "ShopeeQATestStepDef.iCloseBrowser()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "As a user, I want to see my list of gists",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@ShoopeTestQA"
    }
  ]
});
formatter.step({
  "name": "I open GitHub Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "ShopeeQATestStepDef.openToLoginPageGithub()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I login with my account github",
  "keyword": "And "
});
formatter.match({
  "location": "ShopeeQATestStepDef.loginGithubAccount()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I navigate to my gist",
  "keyword": "When "
});
formatter.match({
  "location": "ShopeeQATestStepDef.openToGistGithub()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I SignOut Account",
  "keyword": "Then "
});
formatter.match({
  "location": "ShopeeQATestStepDef.signOutAccount()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "ShopeeQATestStepDef.iCloseBrowser()"
});
formatter.result({
  "status": "passed"
});
});