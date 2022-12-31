import { render, screen } from 'utils/test-utils'

import Auth from '.'

const props = {
  title: 'Title',
  children: <h1>Children</h1>
}

describe('<Auth />', () => {
  it('should render logos, title, children', () => {
    render(<Auth {...props} />)

    expect(screen.getAllByRole('img', { name: /won games/i })).toHaveLength(2)

    expect(screen.getByRole('heading', { name: /Title/i })).toBeInTheDocument()

    expect(
      screen.getByRole('heading', {
        name: /All your favorite games in one place/i
      })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', {
        name: /WON is the best and most complete gaming platform/i
      })
    ).toBeInTheDocument()

    expect(
      screen.getByText(/Won Games 2022 © Todos os direitos reservados/i)
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /Children/i })
    ).toBeInTheDocument()
  })
})
