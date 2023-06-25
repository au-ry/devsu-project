describe('Verify products purchase', () => {
  it('should purchase 2 products on sauce demo site', () => {
    //Go to page
    cy.visit('https://www.saucedemo.com/');

    //Login to page  
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click();

    //Add 2 products to cart
    cy.get('#add-to-cart-sauce-labs-backpack').click();
    cy.get('#add-to-cart-sauce-labs-bolt-t-shirt').click();

    //Go to cart
    cy.get('#shopping_cart_container').click();
    cy.get('#checkout').click();

    //Fill form
    cy.get('#first-name').type('Aury');
    cy.get('#last-name').type('Lopez');
    cy.get('#postal-code').type('33198');
    cy.get('#continue').click();
    cy.get('#finish').click();

    //Get confirmation message
    cy.get('.complete-header').invoke('text').then((ordertext) => {
      expect(ordertext).to.equal('Thank you for your order!');
    })
  })
})