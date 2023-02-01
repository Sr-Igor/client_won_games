/// <reference path="../support/index.d.ts" />

describe('Reset Password', () => {
  it('should show error if password is not the same', () => {
    cy.visit('/reset-password?code=token')

    cy.findByPlaceholderText(/^password/i).type('123')
    cy.findByPlaceholderText(/confirm password/i).type('321')
    cy.findByRole('button', { name: /reset password/i }).click()

    cy.findByText(/confirm password does not match with password/i).should('exist')
  })

  it('shold show error if code is invalid', () => {
    cy.intercept('POST', '**/auth/reset-password', res => {
      res.reply({
        status: 400,
        body: {
          error: 'Bad Request',
          message: [
            {
              messages: [
                {
                  message: 'Incorrect code provided'
                }
              ]
            }
          ]
        }
      })
    })

    cy.visit('/reset-password?code=invalid')

    cy.findByPlaceholderText(/^password/i).type('123')
    cy.findByPlaceholderText(/confirm password/i).type('123')
    cy.findByRole('button', { name: /reset password/i }).click()

    cy.findByText(/Incorrect code provided/i).should('exist')
  })

  it('should reset password', () => {
    cy.intercept('POST', '**/auth/reset-password', res => {
      res.reply({
        status: 200,
        body: { user: { email: 'e2e@wongames.com'}}
      })
    })

    cy.intercept('POST', '**/auth/callback/credentials*', {
      statusCode: 200,
      body: {
        user: { email: 'e2e@wongames.com'},
      }
    })

    cy.intercept('GET', '**/auth/session', {
      statusCode: 200,
      body: {
        user: {name: 'e2eTester', email: 'e2e@wongames.com'}
      }
    })

    cy.visit('/reset-password?code=token')

    cy.findByPlaceholderText(/^password/i).type('123')
    cy.findByPlaceholderText(/confirm password/i).type('123')
    cy.findByRole('button', { name: /reset password/i }).click()

    cy.url().should('eq', `${Cypress.config().baseUrl}/`)
    cy.findByText(/e2eTester/i).should('exist')
  })
})
