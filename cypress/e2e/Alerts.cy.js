describe("Alerts", function(){

    it.skip("Alerts test",function(){
      cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
      cy.get("button[onclick='jsAlert()']").click();
      cy.on('window:alert',function(t){
        expect(t).to.contains("I am a JS Alert")
      })
      cy.get("#result").should('have.text',"You successfully clicked an alert")
    })
})

it("Js confirmation Alerts test",function(){
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
   cy.get("button[onclick='jsConfirm()']").click();
   cy.on('window:confirm',function(t){
    expect(t).to.contains("I am a JS Confirm")
    cy.get("#result").should('have.text',"You clicked: Ok")
  })
  })