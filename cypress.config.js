const { defineConfig } = require('cypress');
require('dotenv').config();

module.exports = defineConfig({
  chromeWebSecurity: false,
  e2e: {
    video: false,
    setupNodeEvents(on, config) {
      config.env = {
        URL: 'http://127.0.0.1:5500/',
        ...process.env,
        ...config.env,
      };
      return config;
    },
  },
});
