import Login from "../PageObjects/Loginpage2 copy"

describe("pOM operation",function(){

    it("pOM action",function(){
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        
         cy.fixture("Orangehrm2").then(function(data){
           
            const ln = new Login();
            ln.setUserName(data.username);
            ln.setupPassword(data.password);
            ln.clickSubmit();
            ln.verifyLogin();

         })


       

    })
})