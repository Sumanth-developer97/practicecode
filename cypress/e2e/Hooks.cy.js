//Hooks

//before
//after
//beforeEach
//afterEach

//Tags

//Skip
//Only

describe("Hooks operation",function(){

    before(function(){
        cy.log("***** Launch app*****")
    })

    after(function(){
        cy.log("**** Close the app ****")

    })
      beforeEach(function(){
        cy.log("**** Login ****")
      })

      afterEach(function(){

      })
       

      it("Serach",function(){

      })



      it("Advance search",function(){

      })


      it("listing producst",function(){

      })

})