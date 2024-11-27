describe("tables",function(){

    it("handling tables",function(){
       cy.visit("https://demo.opencart.com/admin/")
       cy.get('#input-username').type("demo")
       cy.get("#input-password").type("demo")
       cy.get("[type='submit']").click();

       cy.get(".btn-close").click();

       cy.get("#menu-customer>a").click();
       cy.get("#menu-customer>ul>li:first-child").click()
    })
})
     it("check numbes rows and coloumns",function(){

         cy.get("table[class='table table-bordered table-hover']>tbody>tr").should('have.length','10')  
         cy.get("table[class='table table-bordered table-hover']>thead>td").should('have.length','7')
     })
      
    /*it("check cell data from specific row and coloumn",function(){

    })
       
     it("Read all the rows and coloumns data in first page",function(){

     })
      
     it("Read all the rows and coloumns data in first page",function(){
        
     })*/