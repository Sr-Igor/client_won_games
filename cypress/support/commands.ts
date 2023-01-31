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

Cypress.Commands.add('getByDataCy', (selector, ...args) => {
  return cy.get(`[data-cy=${selector}]`, ...args)
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
    cy.getByDataCy(`"${name}"`).within(() => {
      cy.findByRole('heading', { name }).should('exist')

      cy.getByDataCy(`"highlight"`).should(highlight ? 'exist' : 'not.exist')

      if(highlight) {
        cy.findAllByRole('link').should('have.attr', 'href')
      }

      if(haveCards){
        cy.getByDataCy(`"game-card"`).should('have.length.gt', 0)
      }
    })
})

Cypress.Commands.add('getFields', (fields) => {
  fields.forEach(({label}) => {
    cy.findByText(label).should('exist')
  })
})

Cypress.Commands.add('shouldBeLessThan', (value) => {
  cy.findByText(/^\$\d+(\.\d{1,2})?$/).should('exist')
  .invoke('text')
  .then(el => parseFloat(el.replace('$', '')))
  .should('be.lt', value)
})

Cypress.Commands.add('shouldBeGreaterThan', (value) => {
  cy.findByText(/^\$\d+(\.\d{1,2})?$/).should('exist')
  .invoke('text')
  .then(el => parseFloat(el.replace('$', '')))
  .should('be.gt', value)
})

Cypress.Commands.add('signUp', (user) => {
  cy.visit('/sign-up')

  cy.findByPlaceholderText(/username/i).type(user.username)
  cy.findByPlaceholderText(/email/i).type(user.email)
  cy.findByPlaceholderText(/^password/i).type(user.password)
  cy.findByPlaceholderText(/confirm password/i).type(user.password)

  cy.findByRole('button', { name: /sign up now/i }).click()
})
