import { catalogPage } from '../pages/CatalogPage';
import { checkoutPage } from '../pages/CheckoutPage';
import { loginPage } from '../pages/LoginPage';
import { shoppingCartPage } from '../pages/ShoppingCartPage';

describe('Buy a Samsung Galaxy Tab', () => {
    describe('Add Samsung Galaxy Tab to cart and update quanity', () => {
        before(function () {
            cy.visit('http://sqademosatp.net/catalog/');
            catalogPage.addProductToCart('Samsung Galaxy Tab');
            shoppingCartPage.updateQuanity(2);
        });

        it('Cart quantity is updated correctly', () => {
            shoppingCartPage.assertShoppingCartQuantity(2);
            shoppingCartPage.goToCheckout();
            loginPage.login('enrique@test.com', '123456789');
            checkoutPage.payOrder();
            checkoutPage.assertOrderProcessed('Your Order Has Been Processed!');
        });
    });
});
