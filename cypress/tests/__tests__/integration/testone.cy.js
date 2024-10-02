/* eslint-disable no-undef */

describe('My First Test', () => {
  it('Does not do much!', () => {
    expect(true).to.equal(true)
  })

  it('Visit practice page', () => {
    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#')
  })})