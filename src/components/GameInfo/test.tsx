import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import GameInfo from '.'

const props = {
  title: 'Population Zero',
  description:
    'The new Crackdown 3 trailer has been released and we have the details here!',
  price: 235
}

describe('<GameInfo />', () => {
  it('should render game informations', () => {
    renderWithTheme(<GameInfo {...props} />)

    expect(
      screen.getByRole('heading', { name: /population zero/i })
    ).toBeInTheDocument()

    expect(screen.getByText(/\$235.00/)).toBeInTheDocument()

    expect(
      screen.getByText(
        /The new Crackdown 3 trailer has been released and we have the details here!/i
      )
    ).toBeInTheDocument()
  })

  it('should render buttons', () => {
    renderWithTheme(<GameInfo {...props} />)

    expect(
      screen.getByRole('button', { name: /wishlist/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('button', { name: /add to cart/i })
    ).toBeInTheDocument()
  })
})
