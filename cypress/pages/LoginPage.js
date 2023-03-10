class LoginPage {
    constructor() {
        this.elements = {
            email: () => cy.get(':nth-child(1) > .fieldValue > input'),
            password: () => cy.get(':nth-child(2) > .fieldValue > input'),
            loginButton: () => cy.get('[name=login] .ui-button-text')
        };
    }

    login(email, password) {
        this.elements.email().type(email);
        this.elements.password().type(`${password}`);
        this.elements.loginButton().click();
    }
}

export const loginPage = new LoginPage();
