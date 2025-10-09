/// <reference types="cypress" />

import {
  HomePage,
  ProductsPage,
  CartPage,
  SignupLoginPage
} from "../pages/index.page";

import constants from "../fixtures/constants.data.json";
import dataLoader from "../../utils/data-loader.utils";
import CartPageData from "../fixtures/pages/cart-page.data.json";
import SignUpData from "../fixtures/pages/signup-login-page.data.json";

const DataLoader = new dataLoader();

describe("Shopping Cart Functionality-TC014", () => {

  it("Verify products can be added to cart and cart details are correct", () => {

    // ✅ Step 1: Visit base URL
    cy.visit(constants.baseUrl);
    cy.url().should("include", "automationexercise.com");
    cy.get(HomePage.automationExerciseLogoElement).should("be.visible");

    // ✅ Step 2: Add first product to cart
    cy.xpath(ProductsPage.firstProductAddToCartButton)
      .scrollIntoView()
      .click();

    // ✅ Step 3: View Cart
    cy.xpath(ProductsPage.viewCartButton)
      .scrollIntoView()
      .click();

    // ✅ Step 4: Verify Cart page and proceed to checkout
    cy.xpath(CartPage.shoppingCartBreadCrumbLink).should("be.visible");
    cy.xpath(CartPage.proceedToCheckoutButton)
      .should("be.visible")
      .click();

    // ✅ Step 5: Click “Register / Login” link
    cy.xpath(CartPage.registerLoginLink)
      .should("be.visible")
      .click();

    // ✅ Step 6: Navigate to signup page
    cy.url().should("include", "automationexercise.com");
    cy.get(HomePage.automationExerciseLogoElement).should("be.visible");
    cy.xpath(HomePage.signupLoginLink)
      .should("be.visible")
      .click();

    // ✅ Step 7: Fill New User Signup form
    cy.get(SignupLoginPage.newUserSignupHeaderTextElement).should("be.visible");
    DataLoader.fillForm(SignupLoginPage, SignUpData.newUser);

    // ✅ Step 8: Enter Account Info
    cy.xpath(SignupLoginPage.enterAccInfoHeaderTextElement).should("be.visible");
    cy.xpath(SignupLoginPage.mrRadioButton)
      .should("be.visible")
      .click({ force: true });

    cy.get(SignupLoginPage.accountInfoNameFieldElement)
      .should("be.visible")
      .and("have.value", SignUpData.prePopulatedData.signupName);

    cy.get(SignupLoginPage.accountInfoEmailFieldElement)
      .should("be.visible")
      .and("have.value", SignUpData.prePopulatedData.signupEmailAddress);

    DataLoader.fillForm(SignupLoginPage, SignUpData.enterAccountInfo);
    DataLoader.fillForm(SignupLoginPage, SignUpData.addressInfo);

    // ✅ Step 9: Verify account creation
    cy.get(SignupLoginPage.accountCreatedHeaderTextElement)
      .should("be.visible")
      .and("contain.text", "Account Created!");
    cy.get(SignupLoginPage.accountCreatedContinueButton)
      .should("be.visible")
      .click();

    // ✅ Step 10: Verify logged in and proceed to cart again
    cy.xpath(HomePage.loggedInAsUsernameElement)
      .should("be.visible")
      .and("contain.text", SignUpData.prePopulatedData.signupName);

    cy.xpath(HomePage.cartLink)
      .should("be.visible")
      .click();

    cy.xpath(CartPage.proceedToCheckoutButton)
      .should("be.visible")
      .click();

    // ✅ Step 11: Verify checkout details
    cy.xpath(CartPage.checkoutBreadCrumbLink).should("be.visible");
    cy.xpath(CartPage.addressDetailsTextElement).should("be.visible");
    cy.xpath(CartPage.yourDeliveryDetailsSectionElement).should("be.visible");
    cy.xpath(CartPage.yourBillingDetailsSectionElement).should("be.visible");
    cy.xpath(CartPage.reviewYourOrderSectionElement).should("be.visible");

    // ✅ Step 12: Enter comment and payment details
    DataLoader.fillForm(CartPage, CartPageData.commentText);
    DataLoader.fillForm(CartPage, CartPageData.paymentDetails);

    // ✅ Step 13: Verify order placed successfully
    cy.xpath(CartPage.orderPlacedSuccessMessageElement)
      .should("be.visible")
      .and("contain.text", CartPageData.orderPlacedSuccessMessageData.successMessage);

    cy.xpath(CartPage.continueButton)
      .should("be.visible")
      .click();

    // ✅ Step 14: Verify account logged in again
    cy.xpath(HomePage.loggedInAsUsernameElement)
      .should("be.visible")
      .and("contain.text", SignUpData.prePopulatedData.signupName);

    // ✅ Step 15: Delete account
    cy.xpath(HomePage.deleteAccountLink)
      .should("be.visible")
      .click();

    cy.xpath(HomePage.accountDeletedHeaderTextElement)
      .should("be.visible")
      .and("contain.text", "Account Deleted!");

    cy.xpath(HomePage.continueButtonAfterAccountDeleted)
      .should("be.visible")
      .click();

    cy.url().should("include", "automationexercise.com");
    cy.get(HomePage.automationExerciseLogoElement).should("be.visible");
  });
});
