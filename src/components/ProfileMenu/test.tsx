import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import ProfileMenu from '.'

describe('<ProfileMenu />', () => {
  it('should render the heading', () => {
    renderWithTheme(<ProfileMenu />)

    expect(screen.getByText(/my profile/i)).toBeInTheDocument()

    expect(screen.getByText(/my cards/i)).toBeInTheDocument()
    expect(screen.getByText(/my orders/i)).toBeInTheDocument()
    expect(screen.getByText(/sign out/i)).toBeInTheDocument()
  })

  it('should render menu with active link', () => {
    renderWithTheme(<ProfileMenu activeLink="/profile/cards" />)

    expect(screen.getByTitle(/my cards/i)).toHaveStyle({
      background: '#F231A5',
      color: '#FAFAFA'
    })
  })
})
