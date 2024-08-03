import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Given('the login page is open', () => {
    cy.visit('https://www.automationexercise.com/login');
});

When('the user enters {string} and {string} and clicks the login button', (username, password) => {
    cy.get('input[data-qa="login-email"]').type(username);
    cy.get('input[data-qa="login-password"]').type(password);
    cy.get('button[data-qa="login-button"]').click();
});

Then('the user should see the success message {string}', (success_message) => {
    cy.get('ul.nav.navbar-nav li:last-child').should('include.text', success_message);
});

Then('the user should see the error message {string}', (error_message) => {
    cy.get('p[style="color: red;"]').should('have.text', error_message);
});
