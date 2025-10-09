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

describe('Shopping Cart Functionality', () => {

    it('Verify products can be added to cart and cart details are correct', () => {
        cy.visit(constants.baseUrl)
        //cy.title().should('include', 'Automation Exercise')
        cy.url().should('include', 'automationexercise.com')
        cy.get(HomePage.automationExerciseLogoElement).should('be.visible');
        cy.xpath(HomePage.viewProductButton).should('be.visible').click()
        cy.xpath(ProductsPage.productDetailsSection).should('be.visible');
        cy.xpath(ProductsPage.productQuantityElement).should('be.visible');
        cy.get(ProductsPage.quantityIncreaseButton).clear().type(4);
        cy.xpath(ProductsPage.addToCartButtonAfterIncreasingQuantity).should('be.visible').click()
        cy.xpath(ProductsPage.viewCartButton).should('be.visible').click()
        cy.xpath(CartPage.productQuantityInCartPageElement).should('have.text', ProductsPageData.cartPage.firstProductQuantityElement);
       })
    })