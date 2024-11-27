import Signup from "../../PageObjects/Regpage";

describe("POM Operation", function () {
  it("POM Action", function () {
    // Navigate to the signup page
    cy.visit("https://magento.softwaretestingboard.com/customer/account/create/");

    cy.fixture("Createaccount").then(function (data) {
      const signupPage = new Signup();

      // Perform actions using the SignupPage methods
      signupPage.clickCreateAccountLink();
      signupPage.enterFirstName(data.firstName);
      signupPage.enterLastName(data.lastName);
      signupPage.enterEmail(data.email);
      signupPage.enterPassword(data.password);
      signupPage.enterConfirmPassword(data.confirmPassword);
      signupPage.clickCreateAccountButton();
      signupPage.verifySignupMessage()

      
    });
  });
});
