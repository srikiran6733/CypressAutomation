/// <reference types="cypress" />
import {
    HomePage

} from "../pages/index.page";
import constants from '../fixtures/constants.data.json';
import dataLoader from '../../utils/data-loader.utils';
import HomePageData from "../fixtures/pages/home-page.data.json";


const DataLoader = new dataLoader();

describe('Test Case 10: Verify Subscription in Cart Page', () => {

    it('Should verify subscription functionality in cart page', () => {
        cy.visit(constants.baseUrl)
        //cy.title().should('include', 'Automation Exercise')
        cy.url().should('include', 'automationexercise.com')
        cy.get(HomePage.automationExerciseLogoElement).should('be.visible');
        cy.xpath(HomePage.cartLink).should('be.visible').click();
        cy.xpath(HomePage.subscriptionTextElement).scrollIntoView();
        cy.xpath(HomePage.subscriptionTextElement).should('be.visible');
        cy.xpath(HomePage.subscriptionEmailAddressField).should('be.visible');
        DataLoader.fillForm(HomePage, HomePageData.subscriptionData);
        cy.xpath(HomePage.subscriptionSuccMsgElement).should('be.visible').and('contain.text', HomePageData.successMessageData.subscriptionSuccessMessageData);

        })
    })


