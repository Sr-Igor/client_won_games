import { render, screen } from 'utils/test-utils'

import ProfileMenu from '.'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useRouter = jest.spyOn(require('next/router'), 'useRouter')
const query = {}

useRouter.mockImplementation(() => ({
  query
}))

describe('<ProfileMenu />', () => {
  it('should render the heading', () => {
    render(<ProfileMenu />)

    expect(screen.getByText(/my profile/i)).toBeInTheDocument()
    expect(screen.getByText(/my orders/i)).toBeInTheDocument()
    expect(screen.getByText(/sign out/i)).toBeInTheDocument()
  })

  it('should render menu with active link', () => {
    render(<ProfileMenu activeLink="/profile/orders" />)

    expect(screen.getByTitle(/my orders/i)).toHaveStyle({
      background: '#F231A5',
      color: '#FAFAFA'
    })
  })
})
