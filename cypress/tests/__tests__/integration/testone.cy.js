/* The code snippet provided is a JavaScript test script using Cypress for automated testing. Here is a
breakdown of what the code is doing: */
/* eslint-disable no-undef */
/// <reference types="cypress" />;

describe("My First Test", () => {
  it("Does not do much!", () => {
    expect(true).to.equal(true);
  });

  it("Visit practice page", () => {
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#", {
      failOnStatusCode: false,
      timeout: 10000,
    });

    cy.get(".search-keyword").type("ca");
    cy.wait(2000);
    cy.get(".product:visible").should("have.length", 4);

    /* The code snippet you provided is using Cypress commands to interact with elements on a webpage
    during automated testing. Here's a breakdown of what the specific lines you mentioned are doing: */
    cy.get(".products").as("productlocator");

    cy.get(".products").find(".product").as("productlist");

    cy.get("@productlocator").find('.product').should('have.length', 4);

    cy.get("@productlist").eq(2).contains("ADD TO CART").click().then(() => {
      console.log("clicked on add to cart");
    })

    // eslint-disable-next-line no-unused-vars
    cy.get(".products").find(".product").each(($el, index, $list) => {
      const text = $el.find("h4.product-name").text();
      if (text.includes("Cashews")) {
        cy.wrap($el).find("button").click();
      }
    });

    cy.get('.brand').should("have.text", "GREENKART")

    cy.get('.brand').then(function(logoelement){
      cy.log(logoelement.text())
    })
  });
});
