/// <reference types="cypress" />
import {
    HomePage,
    ProductsPage,
    CartPage

} from "../pages/index.page";
import constants from '../fixtures/constants.data.json';
import dataLoader from '../../utils/data-loader.utils';
import ProductsPageData from "../fixtures/pages/products-page.data.json";


const DataLoader = new dataLoader();

describe('Verify All Products and Product Detail Page', () => {
    //Test Case 8: Verify All Products and Product Detail Page
    it('Verify All Products page and Product Detail page functionality', () => {
        cy.visit(constants.baseUrl)
        //cy.title().should('include', 'Automation Exercise')
        cy.url().should('include', 'automationexercise.com')
        cy.get(HomePage.automationExerciseLogoElement).should('be.visible');
        cy.xpath(HomePage.viewProductButton).first().should('be.visible').click()
        cy.url().should('include', '/product_details/1');
        cy.get(HomePage.productDetailsSection).should('be.visible');
        DataLoader.fillForm(ProductsPage, ProductsPageData.productDetails);
        cy.xpath(CartPage.productQuantityInCartPageElement).should('have.text', ProductsPageData.cartPage.firstProductQuantityElement);
        cy.xpath(CartPage.totalPrice).should('contain', ProductsPageData.cartPage.totalPrice);

    })
})
