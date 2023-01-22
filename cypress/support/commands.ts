// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import '@testing-library/cypress/add-commands'

Cypress.Commands.add('google', () => {
  cy.visit('https://www.google.com')
})

Cypress.Commands.add('shouldRenderBanner', () => {
  cy.get('.slick-slider').within(() => {
    cy.findByRole('heading', { name: /Banner with bf image in a bridge/i })
    cy.findByRole('link', { name: /Buy now/i })
    cy.get('.slick-dots > :nth-child(2) > button').click()

    cy.wait(500)

    cy.findAllByRole('heading', { name: /Lorem Ipsum is simply dummy/i })
    cy.findByRole('link', { name: /Buy now/i })

    cy.get('.slick-dots > :nth-child(3) > button').click()
    cy.wait(500)

    cy.findByRole('heading', { name: /Loren text/i })
  })
})

Cypress.Commands.add('shouldRenderShowcase', ({name, haveCards = true, highlight = false,}) => {
    cy.get(`[data-cy="${name}"]`).within(() => {
      cy.findByRole('heading', { name }).should('exist')

      cy.get(`[data-cy="highlight"]`).should(highlight ? 'exist' : 'not.exist')

      if(highlight) {
        cy.findAllByRole('link').should('have.attr', 'href')
      }

      if(haveCards){
        cy.get(`[data-cy="game-card"]`).should('have.length.gt', 0)
      }
    })
})