/// <reference path="../support/index.d.ts" />

import {priceFields, platformFields, sortFields, genresFields} from '../../src/utils/filter/fields'

describe('Explore page', () => {
    before(() => {
      cy.visit('/games')
    })

    it('should render filter columsn', () => {

      cy.findByRole('heading', { name: /sort by price/i }).should('exist')
      cy.findByRole('heading', { name: /^price/i }).should('exist')
      cy.findByRole('heading', { name: /platforms/i }).should('exist')
      cy.findByRole('heading', { name: /genres/i }).should('exist')

      cy.getFields(priceFields)
      cy.getFields(platformFields)
      cy.getFields(sortFields)
      cy.getFields(genresFields)
    })

    it('should show games and show more games when click e button', () => {
      cy.getByDataCy(`"game-card"`).should('have.length.gt', 0)
      cy.findByRole('button', { name: /show more/i }).should('exist').click()
      cy.getByDataCy(`"game-card"`).should('have.length.gt', 10)
    })

    it('should order by price', () => {
      cy.findByText(/lowest to highest/i).click()

      cy.location('href').should('contain', 'sort=price%3Aasc')

      cy.getByDataCy(`"game-card"`).first().within(() => {
        cy.findByText('$0.00').should('exist')
      })

      cy.findByText(/highest to lowest/i).click()

      cy.location('href').should('contain', 'sort=price%3Adesc')

      cy.getByDataCy(`"game-card"`).first().within(() => {
        cy.shouldBeGreaterThan(0)
      })

      cy.findByText(/Free/i).click()
      cy.location('href').should('contain', 'price_lte=0')
      cy.getByDataCy(`"game-card"`).first().within(() => {
        cy.findByText('$0.00').should('exist')
      })

      cy.findByText('Under $50').click()
      cy.location('href').should('contain', 'price_lte=50')
      cy.getByDataCy(`"game-card"`).first().within(() => {
        cy.shouldBeLessThan(50)
      })

      cy.findByText(/Under \$100/i).click()
      cy.location('href').should('contain', 'price_lte=100')
      cy.getByDataCy(`"game-card"`).first().within(() => {
        cy.shouldBeLessThan(100)
      })

      cy.findByText(/Under \$150/i).click()
      cy.location('href').should('contain', 'price_lte=150')
      cy.getByDataCy(`"game-card"`).first().within(() => {
        cy.shouldBeLessThan(150)
      })

      cy.findByText(/Under \$250/i).click()
      cy.location('href').should('contain', 'price_lte=250')
      cy.getByDataCy(`"game-card"`).first().within(() => {
        cy.shouldBeLessThan(250)
      })

      cy.findByText(/Under \$500/i).click()
      cy.location('href').should('contain', 'price_lte=500')
      cy.getByDataCy(`"game-card"`).first().within(() => {
        cy.shouldBeLessThan(500)
      })
    })

    it('should filter by platform and genre', () => {
      cy.findByText(/windows/i).click()
      cy.location('href').should('contain', 'platforms=windows')

      cy.findByText(/linux/i).click()
      cy.location('href').should('contain', 'platforms=linux')

      cy.findByText(/mac/i).click()
      cy.location('href').should('contain', 'platforms=mac')

      cy.findByText(/action/i).click()
      cy.location('href').should('contain', 'categories=action')

    })

    it('should return empty when no games match', () => {
      cy.visit('/games')


      cy.findByText(/linux/i).click()
      cy.findByText(/puzzle/i).click()


      cy.getByDataCy(`"game-card"`).should('not.exist')
      cy.findByText(/We didn't find any games with this filter/i).should('exist')
    })
})
