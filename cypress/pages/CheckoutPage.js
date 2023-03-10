class CheckoutPage {
    constructor() {
        this.elements = {
            continueDeliveryInformation: () => cy.get('#tdb6 > .ui-button-text'),
            continuePayment: () => cy.get('#tdb6 > .ui-button-text'),
            cashOnDeliveryPayment: () => cy.get("[name='payment'][value='cod']"),
            confirmOrder: () => cy.get("[type='submit'] .ui-button-text"),
            orderResult: () => cy.get('#bodyContent h1')
        };
    }

    payOrder() {
        this.elements.continueDeliveryInformation().click();
        this.elements.cashOnDeliveryPayment().click();
        this.elements.continuePayment().click();
        this.elements.confirmOrder().click();
    }

    assertOrderProcessed(expectedText) {
        this.elements.productQuantityCart().should('include.text', expectedText).screenshot();
    }
}

export const checkoutPage = new CheckoutPage();
