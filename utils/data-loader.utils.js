import { faker } from "@faker-js/faker";
class dataLoader {

    selectValueFromDropdown(ddnName, ddnValue) {
        let currentDdnLocator = this.getDropdownLocator(ddnName);
        cy.log("dropdown locator is: " + currentDdnLocator);
        let currentOptionLocator = this.getDropdownValueLocator(ddnName, ddnValue);
        cy.log("Option locator: " + currentOptionLocator);
        cy.get(currentDdnLocator).scrollIntoView().should("be.visible").select(ddnValue); // ✅ select directly on <select>;
       /* cy.get(currentDdnLocator).click();
        // eslint-disable-next-line cypress/no-unnecessary-waiting 
        cy.wait(1000);
        cy.get(currentOptionLocator).scrollIntoView().should("be.visible");
        cy.get(currentOptionLocator).click();*/
    }

    getDropdownLocator(dropDownName) {
        return `select[data-qa='${dropDownName}']`;
    }

    getDropdownValueLocator(dropDownName, ddnOptionSelected) {
        return `select[data-qa='${dropDownName}'] option[value='${ddnOptionSelected}']`;
    }

    fillForm(formObj, currentIterationFormData) {
        currentIterationFormData.forEach((currentStep, index) => {
            cy.log("objectKey is: " + currentStep.objectKey);
            cy.log("action is: " + currentStep.action);
            this.executeCurrentStep(formObj, currentStep);
        });
    }

    executeCurrentStep(formObj, step) {
        let { objectKey, action, value, eq } = step;
        eq = eq ?? 0;
        value = value ?? "";
        objectKey = objectKey ?? "";
        let locator = null;

        if (objectKey.startsWith("get")) {
            cy.log("inside function to capture locator");
            locator = formObj[objectKey](value);
        } else {
            locator = formObj.getField(objectKey);
        }

        cy.log("locator is: " + locator);

        // decide selector function once
        const currentElement = this.isXPath(locator) ? cy.xpath : cy.get;
        // Map actions to functions
        const actionMap = {
            type: () => {
                if (value === "lastGeneratedValue") {
                    cy.get("@lastGeneratedValue").then((val) => {
                        if (!val) throw new Error("No lastGeneratedValue found!");
                        cy.log("Using lastGeneratedValue: " + val);
                        currentElement(locator).eq(eq).scrollIntoView().clear().type(val);
                    });
                } else {
                    if (!value) throw new Error("Value for type is undefined!");
                    currentElement(locator).eq(eq).scrollIntoView().clear().type(value);
                }
            },
            typeFakeData: () => {
                const fakerMap = {
                    text: () => faker.string.alpha(8),
                    email: () => faker.internet.email(),
                    phone: () => faker.helpers.replaceSymbols("##########"),
                    firstName: () => faker.person.firstName(),
                    lastName: () => faker.person.lastName(),
                };

                if (!fakerMap[value]) {
                    throw new Error("Unsupported faker value: " + `${value}`);
                }

                const generated = fakerMap[value]();
                cy.wrap(generated).as("lastGeneratedValue");
                cy.log("Generated and stored value: " + generated);

                currentElement(locator).eq(eq).scrollIntoView().clear().type(generated);
            },
            click: () => currentElement(locator).eq(eq).scrollIntoView().click(),

            forceClick: () => currentElement(locator).eq(eq).scrollIntoView().click({ force: true }),

            select: () => this.selectValueFromDropdown(locator, value),

            dropdownOptionSelect: () => currentElement(locator).contains(value).click({ force: true }),

            selectRadioButton: () => currentElement(locator).eq(eq).scrollIntoView().check(),

            wait: () => cy.wait(value * 1000),

            waitForTextVisibility: () => cy.contains(locator, value, { timeout: 20000 }).scrollIntoView().should("be.visible"),

            waitForTextInvisibility: () => cy.contains(locator, value, { timeout: 20000 }).scrollIntoView().should("not.exist"),

            uploadFile: () => currentElement(locator).eq(eq).scrollIntoView().selectFile(value, { force: true }),

            waitForElementToEnable: () => currentElement(locator).eq(eq).should("not.be.disabled", { timeout: 10000 }),

            clearField: () => currentElement(locator).eq(eq).scrollIntoView().clear(),

            verifyText: () => currentElement(locator).eq(eq).scrollIntoView()
                .should(($el) => {
                    if ($el.is("input, textarea")) {
                        expect($el).to.have.value(value); // check input value 
                    } else {
                        expect($el).to.have.text(value); // check normal text element 
                    }
                }),

            verifyTextContains: () => currentElement(locator).eq(eq).scrollIntoView().should("contain.text", value),

            verifyTextNotContains: () => currentElement(locator).eq(eq).scrollIntoView().should("not.contain.text", value),

            check: () => currentElement(locator).eq(eq).scrollIntoView().check().should("be.checked"),

            forceCheck: () => currentElement(locator).eq(eq).scrollIntoView().check({ force: true }).should("be.checked"),

            uncheck: () => currentElement(locator).eq(eq).scrollIntoView().uncheck().should("not.be.checked"),

            pause: () => cy.pause(),

            verifyMandatoryFieldErrorMessage: () => currentElement(locator).scrollIntoView().should("contain.text", "Complete this field."),
        };

        if (actionMap[action]) {
            actionMap[action]();
        } else {
            throw new Error(`Unsupported action: ${action}`);
        }
    }
    

    isXPath(selector) {
        // Common XPath patterns
        const xpathPatterns = [
            /^\/\//, // starts with //
            // /^\/$/, // starts with single / (commented out, usually not used)
            /@[\w-]+/, // has @attribute
            /contains\s*\(/, // contains()
            /text\s*\(/, // text()
            /::/, // axis like following-sibling::
            /^\(/, // starts with (
        ];
        return xpathPatterns.some((regex) => regex.test(selector));
    }

    verifydropDownOptionPresent(dropdownElement, optionToBeVerified) {
        cy.xpath(`//button[@aria-label='${dropdownElement}']`)
            .scrollIntoView()
            .click();
        cy.xpath(
            `//div[@aria-label='${dropdownElement}']//lightning-base-combobox-item[@role='option']`
        ).then(($options) => {
            const optionValues = Array.from($options, (el) =>
                el.getAttribute("data-value"),
            );
            optionToBeVerified.forEach((value) => {
                expect(optionValues).to.include(value);
            });
        });
    }
//***********************To upload the file************************/
    actionMap = {
  type: () => currentElement(locator).eq(eq).type(value),
  click: () => currentElement(locator).eq(eq).click(),
  uploadFile: () => currentElement(locator).eq(eq).scrollIntoView().selectFile(value, { force: true })
}

}
export default dataLoader;
