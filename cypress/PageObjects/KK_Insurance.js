class Testdata
{
 check='#ctl00_WebPartManager_g_8a8ff898_a524_456c_841f_38f38fdf7219_ctl00_rblAgent_1';
 txtInsuredName='#ctl00_WebPartManager_g_40072759_08cf_436e_9399_96dd1790123d_ctl00_txtNamedInsured';
 txtContactFirstname='#ctl00_WebPartManager_g_40072759_08cf_436e_9399_96dd1790123d_ctl00_txtFirstName';
 txtContactLastname='#ctl00_WebPartManager_g_40072759_08cf_436e_9399_96dd1790123d_ctl00_txtLastName';
 txtmalingaddress='#ctl00_WebPartManager_g_40072759_08cf_436e_9399_96dd1790123d_ctl00_txtMailingAddress1';
 txtZip='#ctl00_WebPartManager_g_40072759_08cf_436e_9399_96dd1790123d_ctl00_txtZip';
 txtPhone='#ctl00_WebPartManager_g_40072759_08cf_436e_9399_96dd1790123d_ctl00_txtPhone';
 txtcell='#ctl00_WebPartManager_g_40072759_08cf_436e_9399_96dd1790123d_ctl00_txtCell';
 txtFax='#ctl00_WebPartManager_g_40072759_08cf_436e_9399_96dd1790123d_ctl00_txtFax';
 txtEmail='#ctl00_WebPartManager_g_40072759_08cf_436e_9399_96dd1790123d_ctl00_txtEmail'
 txtCEmail='#ctl00_WebPartManager_g_40072759_08cf_436e_9399_96dd1790123d_ctl00_txtConfirmEmail'
 check1='#ctl00_WebPartManager_g_40072759_08cf_436e_9399_96dd1790123d_ctl00_rblIsNew_0';
 btnsubmit='#ctl00_WebPartManager_g_40072759_08cf_436e_9399_96dd1790123d_ctl00_btnContinue';


    SetCheckBox(checkbox)
    {
      cy.get(this.check).check().should('be.checked')
    }

    SetInsuredName(insuredname)
    {
      cy.get(this.txtInsuredName).type(insuredname)
    }

    SetContactFirstName(contactfirst)
    {
      cy.get(this.txtContactFirstname).type(contactfirst)
    }

     SetConatctLastName(contactlast)
     {
      cy.get(this.txtContactLastname).type(contactlast)
     }

     SetMailingaddress(mailaddress)
     {
      cy.get(this.txtmalingaddress).type(mailaddress)
     }

      SetZipCode(zip)
      {
        cy.get(this.txtZip).type(zip)
      }

      SetPhone(phone)
      {
        cy.get(this.txtPhone).type(phone)
      }

      SetCell(cell)
      {
        cy.get(this.txtcell).type(cell)
      }

      SetFax(Fax)
      {
        cy.get(this.txtFax).type(Fax)
      }
      
      SetEmail(Email)
      {
        cy.get(this.txtEmail).type(Email)
      }

      SetCEmail(CEmail)
      {
        cy.get(this.txtCEmail).type(CEmail)
      }


      SetCheckBox1(checkbox1)
    {
      cy.get(this.check1).check().should('be.checked')
    }

    BtnSubmit(Button)
    {
      cy.get(this.btnsubmit).click()
    }
  }

export default Testdata;