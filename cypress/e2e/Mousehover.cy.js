describe("handling mouse hover actions",function(){

    it("Opencart mouse hover handling options",function(){
        cy.visit("https://demo.opencart.com/")

        cy.get(".nav-link[href='https://demo.opencart.com/index.php?route=product/category&language=en-gb&path=20_26']")
        .should('not.be.visible');

        cy.get(".nav-link.dropdown-toggle[href='https://demo.opencart.com/index.php?route=product/category&language=en-gb&path=20']").trigger("mouseover").click();

        cy.get(".nav-link[href='https://demo.opencart.com/index.php?route=product/category&language=en-gb&path=20_26']")
        .should('be.visible');

    })

      it("Only right click",function(){
        cy.visit('https://swisnl.github.io/jQuery-contextMenu/3.x/demo.html');
        
       /* cy.get('.context-menu-one.btn.btn-neutral').trigger('context menu')
        cy.get(".context-menu-item.context-menu-icon.context-menu-icon-copy.context-menu-hover.context-menu-visible").should('be.visible')
           */

        cy.get('.context-menu-one.btn.btn-neutral').rightclick();
        cy.get(".context-menu-item.context-menu-icon.context-menu-icon-copy.context-menu-hover.context-menu-visible").should('be.visible')



      })



})