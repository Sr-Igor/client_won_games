/// <reference path="../support/index.d.ts" />


describe('Home', () => {
  it('should be able to visit the home page', () => {
    cy.visit('/')

    cy.shouldRenderBanner()

    cy.shouldRenderShowcase({ name: 'New Games', highlight: false })
    cy.shouldRenderShowcase({ name: 'Most Popular', highlight: true })
    cy.shouldRenderShowcase({ name: 'Upcoming Games', highlight: true, haveCards: false })
    cy.shouldRenderShowcase({ name: 'Free Games', highlight: true })
  })
})
