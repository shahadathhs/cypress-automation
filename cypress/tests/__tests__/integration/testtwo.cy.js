/* eslint-disable no-undef */
/// <reference types="cypress" />;

describe("My Second Test", () => {
  it("should go the checkout page", () => {
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#");

    cy.get(".search-keyword").type("ca");

    cy.wait(2000);

    cy.get(".products").as("productlocator");

    // eslint-disable-next-line no-unused-vars
    cy.get(".products").find(".product").each(($el, index, $list) => {
      const text = $el.find("h4.product-name").text();
      if (text.includes("Cashews")) {
        cy.wrap($el).find("button").click();
      }
    });

    cy.get('.cart-icon > img').click();

    cy.contains('PROCEED TO CHECKOUT').click();

    cy.contains('Place Order').click();

    cy.get('select').select('India');

    cy.get('.chkAgree').check();

    cy.contains('Proceed').click();
  })
})