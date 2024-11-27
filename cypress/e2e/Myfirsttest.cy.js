describe('My first test', function() 
{
   it('test1 verify the title - Positive ', function() 
   {
      cy.visit("https://dev.meepaisa.com/")
      cy.title().should('eq','meepaisa')
   })

   it('test2 verfiy the title -Negative', function() 
   {
      cy.visit("https://dev.meepaisa.com/")
      cy.title().should('eq','meepia')
   })


}
)