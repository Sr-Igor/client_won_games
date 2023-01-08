import 'server.mock'
import { render, screen, waitFor } from 'utils/test-utils'
import userEvent from '@testing-library/user-event'
import { signIn } from 'next-auth/client'

import FormResetPassword from '.'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useRouter = jest.spyOn(require('next/router'), 'useRouter')
let query = {}

useRouter.mockImplementation(() => ({
  query
}))

jest.mock('next-auth/client', () => ({
  signIn: jest.fn()
}))

describe('<FormResetPassword />', () => {
  it('should render the form', () => {
    render(<FormResetPassword />)

    expect(screen.getByPlaceholderText(/Password/)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/Confirm password/i)).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /reset password/i })
    ).toBeInTheDocument()
  })

  it('should invalid confirm_password field', async () => {
    render(<FormResetPassword />)

    await userEvent.type(screen.getByPlaceholderText(/Password/), '123456')
    await userEvent.type(
      screen.getByPlaceholderText(/Confirm password/i),
      '12345'
    )

    userEvent.click(screen.getByRole('button', { name: /reset password/i }))
    expect(
      await screen.findByText(/confirm password must be equal to password/i)
    ).toBeInTheDocument()
  })

  it('should invalid code', async () => {
    query = { code: 'false-code' }

    render(<FormResetPassword />)

    await userEvent.type(screen.getByPlaceholderText(/Password/), '123')
    await userEvent.type(screen.getByPlaceholderText(/confirm/i), '123')

    userEvent.click(screen.getByRole('button', { name: /reset password/i }))

    expect(await screen.findByText(/Invalid code/i)).toBeInTheDocument()
  })

  it('should valid form and submit', async () => {
    query = { code: '123' }

    render(<FormResetPassword />)

    await userEvent.type(screen.getByPlaceholderText(/Password/), '123')
    await userEvent.type(
      screen.getByPlaceholderText(/Confirm password/i),
      '123'
    )

    userEvent.click(screen.getByRole('button', { name: /reset password/i }))
    expect(await screen.queryByText(/Invalid code/i)).not.toBeInTheDocument()

    await waitFor(() => {
      expect(signIn).toHaveBeenCalledWith('credentials', {
        email: 'valid@email.com',
        password: '123',
        callbackUrl: '/'
      })
    })
  })
})
