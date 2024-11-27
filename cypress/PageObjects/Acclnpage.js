class Signin {
    // Locators for form fields
    txtEmail ='#email';
    txtPassword ='#pass';
    btnLogin = "fieldset[class='fieldset login'] div[class='primary'] span";
    lblmsg = '.logged-in';
    // Method to click "Sign In" link
    clickSignInLink() {
      cy.contains('a', 'Sign In').click(); // Click the "Sign In" link
    }
  
    // Methods for interacting with form fields
    enterEmail(email) {
      cy.get(this.txtEmail).type(email); // Type the provided email
    }
  
    
    enterPassword(password) {
      cy.get(this.txtPassword).type(password); // Type the provided password
    }
  
    // Method to submit the login form
    clickLoginButton() {
      cy.get(this.btnLogin).click(); // Click the "Sign In" button
    }

    verifySignInMessage() {
        cy.get(this.lblmsg).should('be.visible').and('contain.text', 'Welcome, Sumanth Ganji!');
    }

  }

  export default Signin;
  