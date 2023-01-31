/// <reference path="../support/index.d.ts" />

import { userBuilder } from '../support/generate'

describe('User', () => {
  it('should sign up', () => {

    const user = userBuilder()

    cy.visit('/sign-up')

    cy.signUp(user)

    cy.url().should('eq', `${Cypress.config().baseUrl}/`)
    cy.findByText(user.username).should('exist')
  })
})
