import cardsMock from 'components/PaymentOptions/mock'
import { render, screen } from 'utils/test-utils'

import CardsList from '.'

const props = {
  cards: cardsMock
}

describe('<CardsList />', () => {
  it('should render cards list', () => {
    render(<CardsList {...props} />)

    expect(
      screen.getByRole('heading', { name: /my cards/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('img', { name: /visa/i })).toHaveAttribute(
      'src',
      '/img/visa.png'
    )

    expect(screen.getByText(/4325/)).toBeInTheDocument()
  })
})
