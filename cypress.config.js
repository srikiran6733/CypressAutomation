const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: "mocha-junit-reporter",
  reporterOptions: {
    mochaFile: "results/test-results-[hash].xml",
    includePending: true,
    testCaseSwitchClassnameAndName: true
  },

  e2e: {
    specPattern: "cypress/tests/**/*.cy.js",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    }
  }
});
