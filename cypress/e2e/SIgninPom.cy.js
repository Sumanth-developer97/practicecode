import Signin from "../PageObjects/Acclnpage";

describe("Sign In Operation", function () {
  it("User should be able to sign in", function () {
    // Navigate to the home page
    cy.visit("https://magento.softwaretestingboard.com/");

    // Load test data from the fixture file
    cy.fixture("Accountsignin").then(function (data) {
      const signInPage = new Signin();

      // Perform sign-in actions using the POM methods
      signInPage.clickSignInLink();
      signInPage.enterEmail(data.email);
      signInPage.enterPassword(data.password);
      signInPage.clickLoginButton();
      signInPage.verifySignInMessage()


    });
  });       
});
