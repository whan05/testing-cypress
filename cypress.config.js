const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    testIsolation: false,
    videoCompression: 0,
    viewportHeight:1500,
    viewportWidth:1200,
  },
});


