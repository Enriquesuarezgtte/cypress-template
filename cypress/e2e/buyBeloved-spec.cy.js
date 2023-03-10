import { catalogPage } from '../pages/CatalogPage';
import { checkoutPage } from '../pages/CheckoutPage';
import { loginPage } from '../pages/LoginPage';
import { shoppingCartPage } from '../pages/ShoppingCartPage';

describe('Buy a Beloved', () => {
    it('Cart quantity is updated correctly', () => {
        cy.visit('http://sqademosatp.net/catalog/');
        catalogPage.addProductToCart('Beloved');
        shoppingCartPage.updateQuanity(3);
        shoppingCartPage.assertShoppingCartQuantity(3);
        shoppingCartPage.goToCheckout();
        loginPage.login('enrique@test.com', '123456789');
        checkoutPage.payOrder();
        checkoutPage.assertOrderProcessed('Your Order Has Been Processed!');
    });
});
