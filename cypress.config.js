/*const { defineConfig } = require("cypress");
const failedLog = require("cypress-failed-log/on");

module.exports = defineConfig({
  reporter: "mocha-junit-reporter",
  reporterOptions: {
    mochaFile: "results/test-results-[hash].xml",
    includePending: true,
    testCaseSwitchClassnameAndName: true
  },

  e2e: {
    specPattern: "cypress/tests/**",

    retries: 2,   // ✅ Should be inside the e2e block

    setupNodeEvents(on, config) {
      failedLog(on);   // Plugin to track failed tests
      return config;
    }
  }
});*/
const { defineConfig } = require("cypress");
const failedLog = require("cypress-failed-log/on");

module.exports = defineConfig({
  reporter: "mocha-junit-reporter",
  reporterOptions: {
    mochaFile: "results/test-results-[hash].xml",
    includePending: true,
    testCaseSwitchClassnameAndName: true
  },

  e2e: {
    specPattern: "cypress/tests/**/*.cy.js", // update if your path differs

    //retries: 2,   // retries in CI (will retry failing tests automatically in same run)

    setupNodeEvents(on, config) {
      failedLog(on);   // creates cypress/failures.txt with failed specs
      return config;
    }
  }
});
