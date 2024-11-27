import 'cypress-file-upload';
describe("File upload operation",function(){

    it("upload single file",function(){

        cy.visit("https://the-internet.herokuapp.com/upload")
        cy.get('#file-upload').attachFile('Sumanth_CV.pdf');
        cy.get("#file-submit").click()
        cy.wait(5000)
        cy.get("div[class='example'] h3").should('have.text','File Uploaded!');
       
    })

    it.only("file Re-name",function(){

        cy.visit("https://the-internet.herokuapp.com/upload")
        cy.get('#file-upload').attachFile({filePath:'Sumanth_CV.pdf', fileName:'Sumith_CV'});
        cy.get("#file-submit").click()
        cy.wait(5000)
        cy.get("div[class='example'] h3").should('have.text','File Uploaded!');
       
    })
})