/// <reference types="cypress" />
import {
    HomePage,
    ContactUsPage,

} from "../pages/index.page";
import constants from '../fixtures/constants.data.json';
import dataLoader from '../../utils/data-loader.utils';
import ContactUsPageData from '../fixtures/pages/contact-us-page.data.json';

const DataLoader = new dataLoader();

describe('Contact Us Form Functionality', () => {

    it('Verify user can submit Contact Us form successfully', () => {
        cy.visit(constants.baseUrl)
        cy.url().should('include', 'automationexercise.com');
        cy.get(HomePage.automationExerciseLogoElement).should('be.visible');
        cy.xpath(ContactUsPage.contactUsLink).should('be.visible').click()
        cy.xpath(ContactUsPage.getInTouchHeaderTextElement).should('be.visible');
        DataLoader.fillForm(ContactUsPage, ContactUsPageData.contactUsForm);
        cy.get(ContactUsPage.successMessageElement).should('be.visible').and('contain.text', 'submitted successfully');
        cy.xpath(ContactUsPage.homeButtonLink).should('be.visible').click()
        cy.get(HomePage.automationExerciseLogoElement).should('be.visible');
    })
})
