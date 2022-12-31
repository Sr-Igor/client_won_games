import { render, screen } from 'utils/test-utils'

import ProfileMenu from '.'

describe('<ProfileMenu />', () => {
  it('should render the heading', () => {
    render(<ProfileMenu />)

    expect(screen.getByText(/my profile/i)).toBeInTheDocument()

    expect(screen.getByText(/my cards/i)).toBeInTheDocument()
    expect(screen.getByText(/my orders/i)).toBeInTheDocument()
    expect(screen.getByText(/sign out/i)).toBeInTheDocument()
  })

  it('should render menu with active link', () => {
    render(<ProfileMenu activeLink="/profile/cards" />)

    expect(screen.getByTitle(/my cards/i)).toHaveStyle({
      background: '#F231A5',
      color: '#FAFAFA'
    })
  })
})
