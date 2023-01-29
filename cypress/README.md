# Cypress (12) Template

This repo contains a template for e2e tests writeen in Cypress, following the 12 changes and folders structure.

The tests need to be located at folder _cypress/e2e/app_spec.js_.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for testing purposes.

### Prerequisites

What things you need to install the software and how to install them:

1. [Install node](https://nodejs.org/es/download/)
1. Open a terminal and execute _npm i cypress_

#### VSCode

I recommend VSCode to work with the project, with next configuration:

1. Go to _Preferences -> Extensions_ and install next plugins:
    - _ESLint_ (https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
    - _Prettier – Code formatter_ (https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
1. Go to _Preferences -> Settings_, search _format_ and check _Format on Save_.
1. Go to _Preferences -> Settings_, search _default_formatter_ and choose ‘Prettier formatter’

### Installing

Execute:

```
npm install
```

## Running the tests

### Running the tests with Cypress App

```
npx cypress open
```

1. Select _E2E Testing_
2. Select browser _Chrome_ and push _Start E2E Testing in Chrome_
3. Click on file ‘spec.cy.js’

### Running the tests in console

From a terminal execute:

```
npm run test
```

## Built With

-   [Cypress](https://www.cypress.io/) - E2E UI testing framework
-   [NodeJS](https://nodejs.org/en//) - The javascript runtime
-   [ESLint](https://eslint.org/) - Javascript static analyzer
-   [Prettier](https://prettier.io/) - Code formatter

## Authors

-   **Xavier Escudero** - _Initial work_ - [xescuder](https://github.com/xescuder)

## License

This project is licensed under the MIT License.

## Acknowledgments

-   Pending
