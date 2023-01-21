// Load type defiiitions that come with Cypress module

/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    /**
     * Custom command to visti google.
     * @example cy.google()
     */
    google(): Chainable<Window>
  }
}
