class Signup {
  // Locators for form fields
  txFirstName = '#firstname';
  txtLastName = '#lastname';
  txtEmail = '#email_address';
  txtPassword = '#password';
  txtConfirmPassword = '#password-confirmation';
  btnCreateAccount = "button[title='Create an Account'] span";
  //lblmsg = '.message-success > div';

  // Method to click "Create an Account" link
  clickCreateAccountLink() {
    cy.contains('a', 'Create an Account').click(); // For link
  }

  // Methods for interacting with form fields
  enterFirstName(firstName) {
    cy.get(this.txFirstName).type(firstName);
  }

  enterLastName(lastName) {
    cy.get(this.txtLastName).type(lastName);
  }

  enterEmail(email) {
    cy.get(this.txtEmail).type(email);
  }

  enterPassword(password) {
    cy.get(this.txtPassword).type(password);
  }

  enterConfirmPassword(confirmPassword) {
    cy.get(this.txtConfirmPassword).type(confirmPassword);
  }

  // Method to click "Create an Account" button
  submitAccountCreationForm() {
    cy.get(this.btnCreateAccount).first().click(); // For button
  }

  //Method to verify signup success message
  verifySignupMessage() {
    cy.get(this.lblmsg).should('be.visible').and('contain.text', 'Thank you for registering with Main Website Store.');
  }
}

export default Signup;
