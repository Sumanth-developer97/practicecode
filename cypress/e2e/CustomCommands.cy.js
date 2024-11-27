describe("Commands operation",function(){

    it("Commands for login",function(){
        
       cy.visit("https://demo.nopcommerce.com/login?returnUrl=%2F")
       cy.loginapp("testing@gmail.com","test@123")
    })
})