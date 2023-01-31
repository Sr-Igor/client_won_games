/// <reference path="../support/index.d.ts" />

import { userBuilder } from '../support/generate'

describe('User', () => {
  it.skip('should sign up', () => {

    const user = userBuilder()

    cy.visit('/sign-up')

    cy.signUp(user)

    cy.url().should('eq', `${Cypress.config().baseUrl}/`)
    cy.findByText(user.username).should('exist')
  })

  it('should sign in and sign out', () => {
    cy.visit('/sign-in')

    cy.signIn()

    cy.url().should('eq', `${Cypress.config().baseUrl}/`)

    cy.findByText('e2eTester').should('exist').click()

    cy.findByRole('button', { name: /sign out/i }).click()

    cy.findByRole('link', { name: /sign in/i }).should('exist')
    cy.findByText('e2eTester').should('not.exist')
  })
})
