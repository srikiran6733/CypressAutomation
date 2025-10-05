/// <reference types="cypress" />
import {
    HomePage,
    ProductsPage,

} from "../pages/index.page";
import constants from '../fixtures/constants.data.json';
import dataLoader from '../../utils/data-loader.utils';


const DataLoader = new dataLoader();

describe('Test Case 8: Verify All Products and Product Detail Page', () => {

    it('Verify All Products page and Product Detail page functionality', () => {
        cy.visit(constants.baseUrl)
        //cy.title().should('include', 'Automation Exercise')
        cy.url().should('include', 'automationexercise.com')
        cy.get(HomePage.automationExerciseLogoElement).should('be.visible');
        cy.xpath(HomePage.productsLink).should('be.visible').click()
        cy.xpath(ProductsPage.allProductsHeaderTextElement).should('be.visible');
        cy.xpath(ProductsPage.allProductsListElement).should('have.length.greaterThan', 0);
        cy.xpath(ProductsPage.viewProductButton).first().click();
       cy.url().should('include', '/product_details/1');
        cy.xpath(ProductsPage.productDetailsSection).should('be.visible');
        cy.xpath(ProductsPage.productCategoryElement).should('be.visible');
        cy.xpath(ProductsPage.productPriceElement).should('be.visible');
        cy.xpath(ProductsPage.productAvailabilityElement).should('be.visible');
        cy.xpath(ProductsPage.productConditionElement).should('be.visible');
        cy.xpath(ProductsPage.productBrandElement).should('be.visible');
        cy.xpath(ProductsPage.productQuantityElement).should('be.visible');
    })


})
