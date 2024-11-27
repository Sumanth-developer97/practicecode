
describe('Csslocator', function()
{
  it("csslctr", function()
  {
     cy.visit("https://www.flipkart.com/")
     cy.get("[type='text']").type("laptop")
     cy.get("[type='submit']").click()

  })
})