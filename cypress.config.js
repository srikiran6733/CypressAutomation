const { defineConfig } = require("cypress");

module.exports = defineConfig({
  // in cypress config outside of env and inside of e2e
reporter: "mocha-junit-reporter",
reporterOptions: {
  mochaFile: "results/test-results-[hash].xml",
  includePending: true,
  testCaseSwitchClassnameAndName: true,
},

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "cypress/tests/**/*.cy.js"
  },
});
