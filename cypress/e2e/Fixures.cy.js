describe("hanadling fixure files",function(){

    /*it("fixtures demo test",function(){
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        cy.fixture("Orangehrm.json").then(function(data){
           
        cy.get("input[placeholder='Username']").type(data.username)
        cy.get("input[placeholder='Password']").type(data.password)
        cy.get("button[type='submit']").click()
        cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module")
        .should("have.text",data.expected)
        })
        
    })*/

    //Access through hook - for multiple blocks

    describe("hanadling fixure files",function(){
       let userdata;

       before(function(){

        cy.fixture("Orangehrm").then(function(data){
        userdata=data;
    })
})
       
        it("fixtures demo test",function(){
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get("input[placeholder='Username']").type(userdata.username)
        cy.get("input[placeholder='Password']").type(userdata.password)
        cy.get("button[type='submit']").click()
        cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module")
        .should("have.text",userdata.expected)
        })
       })

})