// Load type defiiitions that come with Cypress module

/// <reference types="cypress" />

// import { User } from "./generate"

type ShowcaseAttribrutes = {
  name: string
  highlight?: boolean
  haveCards?: boolean
}

type FieldAttributes = {
  label: string
  name: string | number
}

type User = {
  username: string
  email: string
  password: string
}

declare namespace Cypress {
  interface Chainable {
    /**
     * Custom command to visti google.
     * @example cy.google()
     */
    google(): Chainable<Window>

    /**
   * Custom command to get element by data-cy.
   * @example cy.getByDataCt('selector)
   */
    getByDataCy(selector: String): Chainable<Element>

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

    /**
     * Custom command to get fields by label.
     * @example cy.getFields([{label: 'Price', name: 'price'}])
     */
    getFields(attrs: FieldAttributes[]): Chainable<Element>


    /**
     * Custom command to check if value is less than price.
     * @example cy.shouldBeLessThan(100)
     */
    shouldBeLessThan(value: number): Chainable<Element>

    /**
    * Custom command to check if value is less than price.
    * @example cy.shouldBeLessThan(100)
    */
    shouldBeGreaterThan(value: number): Chainable<Element>

    /**
    * Custom command to check if value is less than price.
    * @example cy.signUp(user)
    */
    signUp(user: User): Chainable<Element>

    /**
    * Custom command to check if value is less than price.
    * @example cy.signIn(user)
    */
    signIn(email?: String, password?: String): Chainable<Element>

  }
}
