/// <reference types="cypress" />
import {
    HomePage,
    SignupLoginPage

} from "../pages/index.page";
import constants from '../fixtures/constants.data.json';
import dataLoader from '../../utils/data-loader.utils';
import SignUpData from '../fixtures/pages/signup-login-page.data.json';


const DataLoader = new dataLoader();

describe('User Logout Functionality', () => {

    it('Verify user can log in and log out successfully', () => {
        cy.visit(constants.baseUrl)
        cy.url().should('include', 'automationexercise.com')
        cy.get(HomePage.automationExerciseLogoElement).should('be.visible');
        cy.xpath(HomePage.signupLoginLink).should('be.visible').click()
        cy.get(SignupLoginPage.newUserSignupHeaderTextElement).should('be.visible')
        DataLoader.fillForm(SignupLoginPage, SignUpData.logoutUser);
        cy.xpath(HomePage.loggedInAsUsernameElement).should('be.visible').and('contain.text', SignUpData.logoutUserPrePopulatedData.signupName);
        cy.xpath(HomePage.logoutLink).should('be.visible').click();
        cy.url().should('include', constants.loginPageFractionUrl);

    })


})
