/// <reference path="../support/index.d.ts" />

describe('Cart', () => {
  it('should add and remove items from cart', () => {
    cy.visit('/')

    cy.getByDataCy('game-card').eq(0).within(() => {
      cy.findByRole('button', { name: /add to cart/i }).click()
    })

    cy.getByDataCy('game-card').eq(1).within(() => {
      cy.findByRole('button', { name: /add to cart/i }).click()
    })

    cy.getByDataCy('game-card').eq(2).within(() => {
      cy.findByRole('button', { name: /add to cart/i }).click()
    })

    cy.findAllByLabelText(/cart items/i).first().should('have.text', '3').click()

    cy.getByDataCy('cart-list').within(() => {
      cy.findAllByRole('heading').should('have.length', 3)
    })

    cy.findAllByLabelText(/cart items/i).first().click()

    cy.getByDataCy('game-card').eq(0).within(() => {
      cy.findByRole('button', { name: /remove from cart/i }).click()
    })

    cy.getByDataCy('game-card').eq(1).within(() => {
      cy.findByRole('button', { name: /remove from cart/i }).click()
    })

    cy.getByDataCy('game-card').eq(2).within(() => {
      cy.findByRole('button', { name: /remove from cart/i }).click()
    })

    cy.findAllByLabelText(/cart items/i).should('not.exist')

    // cy.findByText(/add to cart/i).click()
    // cy.findByText(/add to cart/i).click()
    // cy.findByText(/add to cart/i).click()

    // cy.findByText(/cart/i).click()

    // cy.findByText(/remove/i).click()
    // cy.findByText(/remove/i).click()
    // cy.findByText(/remove/i).click()

    cy.findAllByLabelText(/shopping cart/i).first().click()
    cy.findByText(/cart is empty/i).should('exist')
  })
})
