/// <reference path="../support/index.d.ts" />

describe('Wishlist', () => {
  it('should add and remove items from wishlist', () => {
    cy.visit('/wishlist')

    cy.signIn()

    cy.findAllByText('Your wishlist is empty').should('exist')

    cy.visit('/')

    cy.wait(10000)

    cy.getByDataCy('game-card').eq(0).within(() => {
      cy.findAllByLabelText(/add to wishlist/i).click()
    })

    cy.wait(5000)

    cy.visit('/wishlist')

    cy.wait(10000)

    cy.getByDataCy('wishlist').within(() => {
      cy.getByDataCy('game-card').should('have.length', 1)
    })

    cy.getByDataCy('wishlist').within(() => {
        cy.findAllByLabelText(/remove from wishlist/i).click()
    })
  })
})
