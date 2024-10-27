/* eslint-disable no-undef */
/// <reference types="cypress" />;


describe("My First Test", () => {
  it("Does not do much!", () => {
    expect(true).to.equal(true);
  });

  it("Visit practice page", () => {
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#");

    cy.get(".search-keyword").type("ca");
    cy.wait(2000);
    cy.get(".product:visible").should("have.length", 4);
  });
});
