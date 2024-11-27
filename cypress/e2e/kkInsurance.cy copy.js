//import Testdata from "../PageObjects/KK_Insurance.js"

describe("Insurance E2E testing",function(){

    it("E2E action",function(){
        cy.visit("https://insure.kandkinsurance.com/sites/ASClubs/Pages/Activity-Program.aspx")// Entering URL
        
         //cy.fixture("Insurance").then(function(data){
            //const ln = new Login();
            //ln.clickSubmit();
            
            cy.get('#ctl00_LoginLeftPanelUserControl_drpPrograms') //Selecting dropdown
            .select('Activity & Social Clubs')

            cy.get("#ctl00_LoginLeftPanelUserControl_btnGo").click() // Button clicking

            cy.get('#ctl00_WebPartManager_g_0f97ba2b_248c_46ef_81fe_a322e5a8e31f_ctl00_eligibilityControl1_287').should('be.visible')
            cy.get('#ctl00_WebPartManager_g_0f97ba2b_248c_46ef_81fe_a322e5a8e31f_ctl00_eligibilityControl1_287').check().should('be.checked')
            cy.get('#ctl00_WebPartManager_g_0f97ba2b_248c_46ef_81fe_a322e5a8e31f_ctl00_btnContinue').click()

            //Eligibility page
            
             cy.get("img[name='imgCalendar']").click(); 
             cy.get(".cal[onblur='g_Calendar.IsLastDay(24,31);']").click()
             
             cy.get('#ctl00_WebPartManager_g_b816503e_1a4a_4f48_a174_a9dcffb7899d_ctl00_ddlState')
            .select('Alabama')
            cy.get('#ctl00_WebPartManager_g_b816503e_1a4a_4f48_a174_a9dcffb7899d_ctl00_ddlPrimaryStateFacility')
            .select('Alaska')
            cy.get('#ctl00_WebPartManager_g_b816503e_1a4a_4f48_a174_a9dcffb7899d_ctl00_rbIndividual').check().should('be.checked')
            cy.get('#ctl00_WebPartManager_g_b816503e_1a4a_4f48_a174_a9dcffb7899d_ctl00_rbCoverageYes').check().should('be.checked')
            cy.get('#ctl00_WebPartManager_g_b816503e_1a4a_4f48_a174_a9dcffb7899d_ctl00_rbResponsibleNo').check().should('be.checked')
            cy.get('#ctl00_WebPartManager_g_b816503e_1a4a_4f48_a174_a9dcffb7899d_ctl00_rbOpenToPublicNo').check().should('be.checked')
            cy.get('#ctl00_WebPartManager_g_b816503e_1a4a_4f48_a174_a9dcffb7899d_ctl00_btnContinue').click()
            cy.get('#ctl00_WebPartManager_g_42e5bfdd_b748_4d66_b61f_0312b4fb9d1f_ctl00_rbIneligibleNo').check().should('be.checked')
            cy.get('#ctl00_WebPartManager_g_42e5bfdd_b748_4d66_b61f_0312b4fb9d1f_ctl00_btnContinue').click()

            //Rating page

            cy.get('#ctl00_WebPartManager_g_6bdc3a10_a8b7_493c_9e16_5e1cbfbd88eb_ctl00_rpRating_ctl00_txtParticipants').type("123")
            cy.get('#ctl00_WebPartManager_g_6bdc3a10_a8b7_493c_9e16_5e1cbfbd88eb_ctl00_btnCalculate').click()
            cy.wait(3000)
            cy.get('#ctl00_WebPartManager_g_6bdc3a10_a8b7_493c_9e16_5e1cbfbd88eb_ctl00_rbOpt2').check().should('be.checked')
            cy.wait(3000)
            cy.get('#ctl00_WebPartManager_g_6bdc3a10_a8b7_493c_9e16_5e1cbfbd88eb_ctl00_btnContinue').click()
            cy.wait(3000)

            //Optional coverage

            cy.get('#ctl00_WebPartManager_g_0af014fa_2e4a_4fe1_ae7f_c6684d18138d_ctl00_SAMGenericContent_RbnLstQn1_0').check().should('be.checked')
            cy.wait(3000)
            cy.get('#ctl00_WebPartManager_g_0af014fa_2e4a_4fe1_ae7f_c6684d18138d_ctl00_btnNoThankYou').click()
            cy.wait(3000)

            //Optinal coverge page 2

            cy.get('#ctl00_WebPartManager_g_83b66957_066f_4392_9b2c_7aa91749e6b4_ctl00_ASClubOCEquipmentAndContent_rbtListIsIncluded_1').check().should('be.checked')
            cy.wait(3000)
            
            //Quote page

            cy.get('#ctl00_WebPartManager_g_216bb4ec_56ed_4f7a_87ed_877eabb238c9_ctl00_QuoteSummaryButtons_btnApplyOnline').click()
            cy.wait(4000)

            //Insured information page


            // cy.fixture("Insurance").then(function(data){
           
            //     const td = new Testdata();
            //     td.SetCheckBox()
            //     td.SetInsuredName(data.insuredname);
            //     td.SetContactFirstName(data.contactfirst);
            //     td.SetConatctLastName(data.contactlast);
            //     td.SetMailingaddress(data.mailaddress);
            //     td.SetZipCode(data.zip);
            //     td.SetPhone(data.phone);
            //     td.SetCell(data.cell);
            //     td.SetFax(data.Fax);
            //     td.SetCEmail(data.CEmail);
            //     td.SetCheckBox1();
            //     td.BtnSubmit();
            // })

            cy.get('#ctl00_WebPartManager_g_8a8ff898_a524_456c_841f_38f38fdf7219_ctl00_rblAgent_1').check().should('be.checked')
            cy.get('#ctl00_WebPartManager_g_40072759_08cf_436e_9399_96dd1790123d_ctl00_txtNamedInsured').type('test')
            cy.get('#ctl00_WebPartManager_g_40072759_08cf_436e_9399_96dd1790123d_ctl00_txtDBA').type('west')
            cy.get('#ctl00_WebPartManager_g_40072759_08cf_436e_9399_96dd1790123d_ctl00_txtFirstName').type('east')
            cy.get('#ctl00_WebPartManager_g_40072759_08cf_436e_9399_96dd1790123d_ctl00_txtLastName').type('westeast')
            cy.get('#ctl00_WebPartManager_g_40072759_08cf_436e_9399_96dd1790123d_ctl00_txtMailingAddress1').type('test@gmail.com')
            cy.get('#ctl00_WebPartManager_g_40072759_08cf_436e_9399_96dd1790123d_ctl00_txtCity').type('Birmingham')
            //cy.get('#ctl00_WebPartManager_g_40072759_08cf_436e_9399_96dd1790123d_ctl00_drpState')
            //.select('Alabama')
            cy.get('#ctl00_WebPartManager_g_40072759_08cf_436e_9399_96dd1790123d_ctl00_txtZip').type('35211')
            cy.get('#ctl00_WebPartManager_g_40072759_08cf_436e_9399_96dd1790123d_ctl00_txtPhone').type('123-213-3332')
            cy.get('#ctl00_WebPartManager_g_40072759_08cf_436e_9399_96dd1790123d_ctl00_txtCell').type('123-213-3332')
            cy.get('#ctl00_WebPartManager_g_40072759_08cf_436e_9399_96dd1790123d_ctl00_txtFax').type('123-213-3332')
            cy.get('#ctl00_WebPartManager_g_40072759_08cf_436e_9399_96dd1790123d_ctl00_txtEmail').type('test@gmail.com')
            cy.get('#ctl00_WebPartManager_g_40072759_08cf_436e_9399_96dd1790123d_ctl00_txtConfirmEmail').type('test@gmail.com')
            cy.get('#ctl00_WebPartManager_g_40072759_08cf_436e_9399_96dd1790123d_ctl00_rblIsNew_0').check().should('be.checked')
            cy.get('#ctl00_WebPartManager_g_40072759_08cf_436e_9399_96dd1790123d_ctl00_btnContinue').click()

            //Certificate request page

            cy.get('#ctl00_WebPartManager_g_95de283d_9fd8_4ef2_ad88_424bab7dc82e_ctl00_ctlAddtionalInsured_txtEntityName').type('testwest')
            cy.get('#ctl00_WebPartManager_g_95de283d_9fd8_4ef2_ad88_424bab7dc82e_ctl00_ctlAddtionalInsured_txtAddress').type('test@gmail.com')
            cy.get('#ctl00_WebPartManager_g_95de283d_9fd8_4ef2_ad88_424bab7dc82e_ctl00_ctlAddtionalInsured_txtCity').type('Birmingham')
            cy.get('#ctl00_WebPartManager_g_95de283d_9fd8_4ef2_ad88_424bab7dc82e_ctl00_ctlAddtionalInsured_cboStateList')
            .select('Alabama')
            cy.get('#ctl00_WebPartManager_g_95de283d_9fd8_4ef2_ad88_424bab7dc82e_ctl00_ctlAddtionalInsured_txtZip').type('35211')
            cy.get('#ctl00_WebPartManager_g_95de283d_9fd8_4ef2_ad88_424bab7dc82e_ctl00_ctlAddtionalInsured_62').check().should('be.checked')
            cy.get('#ctl00_WebPartManager_g_95de283d_9fd8_4ef2_ad88_424bab7dc82e_ctl00_ctlAddtionalInsured_btn_Add')
            .should('be.visible')
            .click({ force: true });
            cy.wait(4000)
            cy.get('#ctl00_WebPartManager_g_95de283d_9fd8_4ef2_ad88_424bab7dc82e_ctl00_ctlAddtionalInsured_btn_Continue')
            .should('be.visible')
            .click({ force: true });

            //Warranty page

            cy.get('#ctl00_WebPartManager_g_8b1010ba_faa2_431b_8768_e814142d16b5_ctl00_chkSelected').check().should('be.checked')
            cy.get('#ctl00_WebPartManager_g_8b1010ba_faa2_431b_8768_e814142d16b5_ctl00_tb_FName').type('test')
            cy.get('#ctl00_WebPartManager_g_8b1010ba_faa2_431b_8768_e814142d16b5_ctl00_tb_LName').type('east')
            cy.get('#ctl00_WebPartManager_g_8b1010ba_faa2_431b_8768_e814142d16b5_ctl00_DropDownList_Relation')
            .select('Owner')
            cy.get('#ctl00_WebPartManager_g_8b1010ba_faa2_431b_8768_e814142d16b5_ctl00_btn_Continue').click()
         }) 

    })

