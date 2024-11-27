describe('Assertions',function()

/*{
  it('ImplicitAssert', function() {
    cy.visit("https://dev.meepaisa.com/")
    cy.url().should('include', 'meepaisa.com')
     .and('eq',"https://dev.meepaisa.com/")
     .and('contain','dev.meepaisa')
  })
})*/

{
  it('explicit assertion',function()
  {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get("input[placeholder='Username']").type('Admin')
    cy.get("input[placeholder='Password']").type('admin123')
    cy.get("[type='submit']").click()

    let expectedname= "suguna ShankarFanches";
    cy.get(".oxd-userdropdown-img").then( (x)=>
    {
       let Actname=x.text()
       expect(Actname).to.equal(expectedname)
       expect(Actname).to.not.equal(expectedname)
    })

  })

})