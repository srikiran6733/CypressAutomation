/// <reference types="cypress" />
import {
    HomePage,
    TestCasesPage,

} from "../pages/index.page";
import constants from '../fixtures/constants.data.json';
import dataLoader from '../../utils/data-loader.utils';


const DataLoader = new dataLoader();

describe('Test Cases Page Functionality', () => {

    it('Verify Test Cases page is accessible from Home page', () => {
        cy.visit(constants.baseUrl)
        cy.url().should('include', 'automationexercise.com');
        cy.get(HomePage.automationExerciseLogoElement).should('be.visible');
        cy.xpath(TestCasesPage.testCasesLink).should('be.visible').click()
        cy.xpath(TestCasesPage.testCasesHeaderTextElement).should('be.visible');
       
    })

})
