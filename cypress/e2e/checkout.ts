/// <reference path="../support/index.d.ts" />

import { should } from "chai"
import { userBuilder } from "../support/generate"

describe('Checkout', () => {
  let user: User

  describe('Free games', ()=> {
    before(() => {
      user = userBuilder()
    })

    it('should be able to buy a free game', () => {
      cy.signUp(user)

      cy.wait(5000)

      cy.visit('/games')

      cy.findByText('Free').click()

      cy.wait(2000)

      cy.getByDataCy('game-card').eq(0).within(() => {
        cy.findByRole('button', { name: /add to cart/i }).click()
      })

      cy.findAllByLabelText(/cart items/i).first().click()

      cy.findByRole('link', { name: /buy it now/i }).click()

      cy.wait(2000)
      cy.url().should('eq', `${Cypress.config().baseUrl}/cart`)
      cy.findByRole('button', { name: /buy now/i }).click()

      cy.wait(2000)
      cy.url().should('eq', `${Cypress.config().baseUrl}/success`)

      cy.findByRole('heading', { name: /Your purchase was successful!/i }).should('exist')

    })

    it('should show games in orders page', () => {
      cy.visit('/profile/orders')

      cy.signIn(user.email, user.password)

      cy.wait(2000)

      cy.getByDataCy('game-item').should('have.length', 1)
    })

  })

  describe('Paid games', ()=> {
    before(() => {
      user = userBuilder()
    })

    it('should buy paid games', () => {
      cy.signUp(user)

      cy.wait(5000)

      cy.visit('/games')

      cy.findByText(/highest to lowest/i).click()

      cy.wait(2000)

      cy.getByDataCy('game-card').eq(0).within(() => {
        cy.findByRole('button', { name: /add to cart/i }).click()
      })

      cy.findAllByLabelText(/cart items/i).first().click()

      cy.findByRole('link', { name: /buy it now/i }).click()

      cy.wait(2000)
      cy.url().should('eq', `${Cypress.config().baseUrl}/cart`)
      cy.findByRole('button', { name: /buy now/i }).should('have.attr', 'disabled')

      cy.fillElementsInput('cardNumber', '4242 4242 4242 4242')
      cy.fillElementsInput('cardExpiry', '1040')
      cy.fillElementsInput('cardCvc', '104')

      cy.findByRole('button', { name: /buy now/i }).click()

      cy.wait(2000)
      cy.url().should('eq', `${Cypress.config().baseUrl}/success`)

      cy.findByRole('heading', { name: /Your purchase was successful!/i }).should('exist')

    })

    it('should show games in orders page', () => {
      cy.visit('/profile/orders')

      cy.signIn(user.email, user.password)

      cy.wait(2000)

      cy.getByDataCy('game-item').should('have.length', 1)
    })
  })
})
