import { render, screen } from 'utils/test-utils'
import Ribbon from '.'

describe('<Ribbon />', () => {
  it('should render the text correctly', () => {
    render(<Ribbon>Best Seller</Ribbon>)

    expect(screen.getByText(/best seller/i)).toBeInTheDocument()
  })

  it('should render with primary color', () => {
    render(<Ribbon>Best Seller</Ribbon>)

    expect(screen.getByText(/best seller/i)).toHaveStyle({
      backgroundColor: '#F231A5'
    })
  })

  it('should render with secondary color', () => {
    render(<Ribbon color="secondary">Best Seller</Ribbon>)

    expect(screen.getByText(/best seller/i)).toHaveStyle({
      backgroundColor: '#3CD3C1'
    })
  })

  it('should render large size', () => {
    render(<Ribbon>Best Seller</Ribbon>)

    expect(screen.getByText(/best seller/i)).toHaveStyle({
      height: '3.6rem',
      fontSize: '1.4rem'
    })
  })

  it('should render small size', () => {
    render(<Ribbon size="small">Best Seller</Ribbon>)

    expect(screen.getByText(/best seller/i)).toHaveStyle({
      height: '2.6rem',
      fontSize: '1.2rem'
    })
  })
})
