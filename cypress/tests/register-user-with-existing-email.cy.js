/// <reference types="cypress" />
import {
    HomePage,
    SignupLoginPage

} from "../pages/index.page";
import constants from '../fixtures/constants.data.json';
import dataLoader from '../../utils/data-loader.utils';
import SignUpData from '../fixtures/pages/signup-login-page.data.json';

const DataLoader = new dataLoader();

describe('User Registration Functionality', () => {

    it('"Verify error is shown when registering with an existing email', () => {
        cy.visit(constants.baseUrl)
        cy.url().should('include', 'automationexercise.com')
        cy.get(HomePage.automationExerciseLogoElement).should('be.visible');
        cy.xpath(HomePage.signupLoginLink).should('be.visible').click()
        cy.get(SignupLoginPage.newUserSignupHeaderTextElement).should('be.visible')
        DataLoader.fillForm(SignupLoginPage, SignUpData.existingUser);
        cy.xpath(SignupLoginPage.signupErrorMessageElement).should('be.visible').and('have.text', 'Email Address already exist!');

    })

})
