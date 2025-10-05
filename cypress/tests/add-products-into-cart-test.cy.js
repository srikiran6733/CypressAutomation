/// <reference types="cypress" />
import {
    HomePage,
    ProductsPage,

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
        cy.xpath(HomePage.productsLink).should('be.visible').click()
        cy.xpath(ProductsPage.allProductsHeaderTextElement).should('be.visible');
        DataLoader.fillForm(ProductsPage, ProductsPageData.searchProductData);
        cy.xpath(ProductsPage.productsPageSearchedItemsTextElement).should('be.visible');
        cy.xpath(ProductsPage.ProductsPageAllSearchedRelatedTextElement).each(($el) => {
            cy.wrap($el).should('contain.text', ProductsPageData.productData.productName)
        })
    })

})
