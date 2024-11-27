describe('Sign-Up',()=>{

it('Creating an account',()=>{

    cy.visit('https://magento.softwaretestingboard.com/')
    cy.contains('a','Create an Account').click()
    cy.get('#firstname').type('Sumanth')
    cy.get('#lastname').type('Ganji')
    cy.get('#email_address').type('sumanthganji1100@gmail.com')
    cy.get('#password').type('Step@1234')
    cy.get("#password-confirmation").type('Step@1234')
    cy.contains('button','Create an Account').click()


    })
})