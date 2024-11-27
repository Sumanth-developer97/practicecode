describe("Navigation test",function(){

    it("Navigation",function(){
      cy.visit("https://demo.opencart.com/index.php?route=product/category&language=en-gb&path=33")
      cy.go("back");
      cy.go("forward");
      
     
      cy.reload();
    })
})