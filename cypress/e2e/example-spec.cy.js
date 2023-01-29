describe('My first test', () => {
    it('passes', () => {
        const expectedTitle = 'Cypress.io: Kitchen Sink';
        cy.visit('https://example.cypress.io');
        cy.title().should('eq', expectedTitle);
        cy.screenshot();
    });
});
