import { render, screen } from 'utils/test-utils'

import Footer from '.'

describe('<Footer />', () => {
  it('should render four columns topics', () => {
    render(<Footer data-testid="footer" />)

    expect(screen.getByText(/Contacts/i)).toBeInTheDocument()
    expect(screen.getByText(/Follow us/i)).toBeInTheDocument()
    expect(screen.getByText(/Links/i)).toBeInTheDocument()
    expect(screen.getByText(/Location/i)).toBeInTheDocument()
  })
})
