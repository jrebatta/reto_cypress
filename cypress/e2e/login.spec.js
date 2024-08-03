describe('Login Functionality', () => {

    beforeEach(() => {
        cy.visit('https://www.automationexercise.com/login');
    });

    it('should login successfully with valid credentials', function() {
        cy.fixture('loginData').then((data) => {
            const { email, password, successMessage } = data.validCredentials;

            cy.get('input[data-qa="login-email"]').type(email);
            cy.get('input[data-qa="login-password"]').type(password);
            cy.get('button[data-qa="login-button"]').click();

            cy.get('ul.nav.navbar-nav > li:last-child').should('contain.text', successMessage);
        });
    });

    it('should show an error message with invalid credentials', function() {
        cy.fixture('loginData').then((data) => {
            const { email, password, errorMessage } = data.invalidCredentials;

            cy.get('input[data-qa="login-email"]').type(email);
            cy.get('input[data-qa="login-password"]').type(password);
            cy.get('button[data-qa="login-button"]').click();

            cy.get('p[style="color: red;"]').should('contain.text', errorMessage);
        });
    });

});
