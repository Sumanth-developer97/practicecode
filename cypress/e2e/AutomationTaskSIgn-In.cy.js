describe('Sign-In',()=>{

it('Signing in to an application',()=>{

    cy.visit('https://magento.softwaretestingboard.com/')
    cy.contains('a','Sign In').click()
    cy.get('#email').type('sumanthganji1100@gmail.com')
    cy.get('#pass').type('Step@1234')
    cy.contains('button','Sign In').click()


    })
})