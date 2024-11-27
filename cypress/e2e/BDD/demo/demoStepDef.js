import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

import Signup from "../../../PageObjects/Regpage";


Given("I am on the Magento home page", function () {
    cy.visit("https://magento.softwaretestingboard.com/customer/account/create/");
  });
  
  When("I click on {string}", function (linkText) {
    const signupPage = new Signup();
    signupPage.clickCreateAccountLink(linkText); // For "Create an Account" link
  });
  
  When("I enter {string} as the first name", function (firstName) {
    const signupPage = new Signup();
    signupPage.enterFirstName(firstName);
  });
  
  When("I enter {string} as the last name", function (lastName) {
    const signupPage = new Signup();
    signupPage.enterLastName(lastName);
  });
  
  When("I enter {string} as the email address", function (email) {
    const signupPage = new Signup();
    signupPage.enterEmail(email);
  });
  
  When("I enter {string} as the password", function (password) {
    const signupPage = new Signup();
    signupPage.enterPassword(password);
  });
  
  When("I confirm the password with {string}", function (confirmPassword) {
    const signupPage = new Signup();
    signupPage.enterConfirmPassword(confirmPassword);
  });
  
  
  When("I submit the account creation form", function () {
    const signupPage = new Signup();
    signupPage.submitAccountCreationForm(); // Uses the updated method with static locator
  });
  
  Then("I should see the message {string}", function (message) {
    const signupPage = new Signup();
    signupPage.verifySignupMessage(message);
  });