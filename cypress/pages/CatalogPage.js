class CatalogPage {
    constructor() {
        this.elements = {
            bestSellers: () => cy.get('#columnRight .infoBoxContents li'),
            addToCart: () => cy.get('.buttonSet .buttonAction .ui-button')
        };
    }

    addProductToCart(productName) {
        this.elements.bestSellers().contains(productName).click();
        this.elements.addToCart().click();
    }
}

export const catalogPage = new CatalogPage();
