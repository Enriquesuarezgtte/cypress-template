class ShoppingCartPage {
    constructor() {
        this.elements = {
            productQuantity: () => cy.get('[valign="top"] > [type="text"]'),
            updateButton: () => cy.get('#tdb4 > .ui-button-text'),
            productQuantityCart: () =>
                cy.get('.ui-widget-content > tbody > :nth-child(1) > [align="right"]'),
            checkoutButton: () => cy.get('[name=cart_quantity] .buttonSet .ui-button-text')
        };
    }

    updateQuanity(quantity) {
        this.elements.productQuantity().clear().type(quantity);
        this.elements.updateButton().click();
    }

    goToCheckout() {
        this.elements.checkoutButton().click();
    }

    assertShoppingCartQuantity(expectedValue) {
        this.elements.productQuantityCart().should('include.text', expectedValue).screenshot();
    }
}

export const shoppingCartPage = new ShoppingCartPage();
