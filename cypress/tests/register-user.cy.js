/// <reference types="cypress" />
import {
    HomePage,
    SignupLoginPage

} from "../pages/index.page";
import constants from '../fixtures/constants.data.json';
import dataLoader from '../../utils/data-loader.utils';
import SignUpData from '../fixtures/pages/signup-login-page.data.json';

const DataLoader = new dataLoader();

describe('User Registration Flow', () => {

    it('Test Case 1: Register User', () => {
        cy.visit(constants.baseUrl)
        //cy.title().should('include', 'Automation Exercise')
        cy.url().should('include', 'automationexercise.com')
        cy.get(HomePage.automationExerciseLogoElement).should('be.visible');
        cy.xpath(HomePage.signupLoginLink).should('be.visible').click()
        cy.get(SignupLoginPage.newUserSignupHeaderTextElement).should('be.visible')
        DataLoader.fillForm(SignupLoginPage, SignUpData.newUser);
        cy.xpath(SignupLoginPage.enterAccInfoHeaderTextElement).should('be.visible')
        cy.xpath(SignupLoginPage.mrRadioButton).should('be.visible').click({ force: true });
        cy.get(SignupLoginPage.accountInfoNameFieldElement).should('be.visible').and('have.value', SignUpData.prePopulatedData.signupName)
        cy.get(SignupLoginPage.accountInfoEmailFieldElement).should('be.visible').and('have.value', SignUpData.prePopulatedData.signupEmailAddress)
        DataLoader.fillForm(SignupLoginPage, SignUpData.enterAccountInfo);
        DataLoader.fillForm(SignupLoginPage, SignUpData.addressInfo);
        cy.get(SignupLoginPage.accountCreatedHeaderTextElement).should('be.visible').and('contain.text', 'Account Created!');
        cy.get(SignupLoginPage.accountCreatedContinueButton).should('be.visible').click();
        cy.xpath(HomePage.loggedInAsUsernameElement).should('be.visible').and('contain.text', SignUpData.prePopulatedData.signupName);
        cy.xpath(HomePage.deleteAccountLink).should('be.visible').click();
        cy.get(HomePage.accountDeletedHeaderTextElement).should('be.visible').and('contain.text', 'Account Deleted!');
        cy.xpath(HomePage.continueButtonAfterAccountDeleted).should('be.visible').click();

    })

})
