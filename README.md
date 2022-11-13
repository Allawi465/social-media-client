# social-media-client

fork of the Noroff social media client

[![Deploy static content to Pages](https://github.com/Allawi465/social-media-client/actions/workflows/pages.yml/badge.svg)](https://github.com/Allawi465/social-media-client/actions/workflows/pages.yml) [![Automated Unit Testing](https://github.com/Allawi465/social-media-client/actions/workflows/unit-test.yml/badge.svg)](https://github.com/Allawi465/social-media-client/actions/workflows/unit-test.yml) [![Automated E2E Testing](https://github.com/Allawi465/social-media-client/actions/workflows/e2e_testing.yml/badge.svg)](https://github.com/Allawi465/social-media-client/actions/workflows/e2e_testing.yml)

# Workflow Course Assignment

[![Deploy static content to Pages](https://github.com/Allawi465/social-media-client/actions/workflows/pages.yml/badge.svg)](https://github.com/Allawi465/social-media-client/actions/workflows/pages.yml) [![Automated Unit Testing](https://github.com/Allawi465/social-media-client/actions/workflows/unit-test.yml/badge.svg)](https://github.com/Allawi465/social-media-client/actions/workflows/unit-test.yml) [![Automated E2E Testing](https://github.com/Allawi465/social-media-client/actions/workflows/e2e_testing.yml/badge.svg)](https://github.com/Allawi465/social-media-client/actions/workflows/e2e_testing.yml)

## Installation

Clone the repo and open in your IDE.
Initialize git
```
git init
```
Install dependencies
```
npm i
```
Build SASS
```
npm run build
```

## installed a dependency
  - @babel/core: "^7.19.3",
  - @babel/preset-env: "^7.19.4",
  - cypress: "^10.7.0",
  - cypress-dotenv: "^2.0.0",
  - dotenv: "^16.0.3",
  - eslint: "^8.27.0",
  - eslint-plugin-cypress: "^2.12.1",
  - eslint-plugin-jest: "^27.1.5",
  - husky: "^8.0.2",
  - jest: "^29.2.0",
  - lint-staged: "^13.0.3",
  - live-server: "^1.1.0",
  - prettier: "^2.7.1",
  - sass: "^1.54.8",
  - vite: "^3.2.3"

## Tests

### Unit testing, Jest

Added the following test files;

- login.test.js
  - Successful login
  - Unsuccessful login
- logout.test.js
  - localStorage delete token.
- create.test.js
  - Successful create a post to the Api
  - Unsuccessful to create a post

### End To End testing, Cypress

Added the following end to end test files for Cypress

- login.cy.js
  - Login with valid credentials
  - Login error handling with invalid email and password
- logout.cy.js
  - LocalStorage delete token
- createPost.cy.js
  - Tests user can create a post
  - Tests form validates inputs to create a post

## Contributing

I am very grateful for the feedbacks and the support. 

Please contact me if you have any questions!
