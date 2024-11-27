/// <reference types="Cypress"/>

describe('Radiobuttons',function(){

    it("Rdbtnschk",function(){

        cy.visit("https://testautomationpractice.blogspot.com/")
        cy.get("#male").should("be.visible")
        cy.get("#female").should("be.visible")

        //Selecting radio buttons
        cy.get("#male").check().should("be.checked")
        cy.get("#female").should("not.be.checked")


        cy.get("#female").check().should("be.checked")
        cy.get("#male").should("not.be.checked")
    })
})