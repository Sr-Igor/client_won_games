// Load type defiiitions that come with Cypress module

/// <reference types="cypress" />

type ShowcaseAttribrutes = {
  name: string
  highlight?: boolean
  haveCards?: boolean
}

declare namespace Cypress {
  interface Chainable {
    /**
     * Custom command to visti google.
     * @example cy.google()
     */
    google(): Chainable<Window>

    /**
     * Custom command to render banner.
     * @example cy.shouldRenderBanner()
     */
    shouldRenderBanner(): Chainable<Element>

    /**
     * Render showcase.
     * @example cy.shouldRenderShowcase()
     */
    shouldRenderShowcase(attrs: ShowcaseAttribrutes): Chainable<Element>
  }
}
