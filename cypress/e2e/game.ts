/// <reference path="../support/index.d.ts" />

import { should } from "chai"

describe('Game page', () => {

  before(() => {
    cy.visit('/game/faith-the-unholy-trinity')
    cy.wait(12000)
  })

  it('should be able to visit the game page', () => {
    cy.getByDataCy("game-info").within(() => {
      cy.findByRole('heading', { name: /FAITH: The Unholy Trinity/i }).should('exist')
      cy.findByText(/^On September 21, 1986, two priests arrived at the Martin/i).should('exist')
      cy.findByText("$0.00").should('exist')
      cy.findByText("Add to cart").should('exist')
    })

    //gallery
    cy.findByRole('button', { name: /thumb\-/i }).should('have.length.gte', 0)

    //content
    cy.getByDataCy("content").within(() => {
      cy.findByRole('heading', { name: /Description/i }).should('exist')
      cy.findByText(/^On September 21, 1986, two priests arrived at the Martin/i).should('exist')
    })

    cy.getByDataCy("content").children().should('have.length.at.least', 2)


    //details
    cy.getByDataCy("game-details").within(() => {
      cy.findByRole('heading', { name: /Developer/i }).should('exist')
      cy.findByText(/Airdorf Games/i).should('exist')
      cy.findByRole('heading', { name: /Release Date/i }).should('exist')
      cy.findByText(/Oct 19, 2022/i).should('exist')
      cy.findByRole('heading', { name: /Platforms/i }).should('exist')
      cy.findByRole('heading', { name: /Publisher/i }).should('exist')
      cy.findByText(/New Blood Interactive/i).should('exist')
      cy.findByRole('heading', { name: /Rating/i }).should('exist')
      cy.findByText(/FREE/i).should('exist')
      cy.findByRole('heading', { name: /Genres/i }).should('exist')
      cy.findByText(/Adventure/i).should('exist')
    })

    //showcase
    cy.shouldRenderShowcase({ name: "Upcoming Games", highlight: true, haveCards: false })
    cy.shouldRenderShowcase({ name: "You may like these games", highlight: false, haveCards: false })


  })

  it('should be able to add to cart', () => {
    cy.getByDataCy("game-info").within(() => {
      cy.findByRole('button', { name: /add to cart/i }).click()
      cy.findByRole('button', { name: /remove from cart/i }).should('exist')
    })

    cy.findAllByLabelText(/cart items/i).first().should('have.text', 1).click()

    cy.getByDataCy("cart-list").within(() => {
      cy.findByRole('heading', { name: /FAITH: The Unholy Trinity/i }).should('exist')
    })

    cy.findAllByLabelText(/cart items/i).first().click()

    cy.getByDataCy("game-info").within(() => {
      cy.findByRole('button', { name: /remove from cart/i }).click()
      cy.findByRole('button', { name: /add to cart/i }).should('exist')
    })

    cy.findAllByLabelText(/cart items/i).should('not.exist')

  })
})
