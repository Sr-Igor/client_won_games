/// <reference path="../support/index.d.ts" />

describe('Forgot Password', () => {
  it('should fill the input and recive a success message', () => {
    cy.intercept('POST', '**/auth/forgot-password', res => {
      res.reply({
        status: 200,
        body: { ok: true }
      })

      expect(res.body).to.have.property('email')
      expect(res.body.email).to.eq('e2e@wongames.com')
    })

    cy.visit('/forgot-password')

    cy.findByPlaceholderText(/email/i).type('e2e@wongames.com')
    cy.findByRole('button', { name: /send email/i }).click()
  })

  it('should fill the input and recive a error message', () => {
    cy.intercept('POST', '**/auth/forgot-password', res => {
      res.reply({
        status: 400,
        body: {
          error: 'Bad Request',
          message: [
            {
              messages: [
                {
                  message: 'This email does not exist'
                }
              ]
            }
          ]
        }
      })

      cy.visit('/forgot-password')


      cy.findByText(/this email does not exist/i).should('exist')

      cy.findByPlaceholderText(/email/i).type('e2e@wongames.com')
      expect(res.body).to.have.property('email')
      expect(res.body.email).to.eq('e2e@wongames.com')
    })
  })
})
