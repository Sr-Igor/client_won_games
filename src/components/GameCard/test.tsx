import { fireEvent, screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import GameCard from '.'

const props = {
  title: 'Population Zero',
  developer: 'Rockstar Games',
  img: 'https://source.unsplash.com/user/willianjusten/300x140',
  price: 'R$ 235,00'
}

describe('<GameCard />', () => {
  it('should render the correctly', () => {
    renderWithTheme(<GameCard {...props} />)

    expect(screen.getByText(props.title)).toBeInTheDocument()
    expect(screen.getByText(props.developer)).toBeInTheDocument()
    expect(screen.getByText(props.price)).toBeInTheDocument()
    expect(screen.getByRole('img', { name: props.title })).toHaveAttribute(
      'src',
      props.img
    )

    // expect(container.firstChild).toMatchSnapshot()
  })

  it('should render without promotional price', () => {
    renderWithTheme(<GameCard {...props} />)

    expect(screen.queryByText('999')).not.toBeInTheDocument()
    expect(screen.getByText('R$ 235,00')).not.toHaveStyle({
      textDecoration: 'line-through'
    })
    expect(screen.getByText('R$ 235,00')).toHaveStyle({
      backgroundColor: '#3CD3C1'
    })
  })

  it('should render promotional price', () => {
    renderWithTheme(<GameCard {...props} promotionalPrice="999" />)

    expect(screen.getByText('999')).toBeInTheDocument()
    expect(screen.getByText('R$ 235,00')).toHaveStyle({
      textDecoration: 'line-through'
    })
    expect(screen.getByText('999')).toHaveStyle({
      backgroundColor: '#3CD3C1'
    })
  })

  it('should render filled icon when favorite is true', () => {
    renderWithTheme(<GameCard {...props} favorite />)

    expect(screen.getByLabelText(/Remove to Wishlist/i)).toBeInTheDocument()
  })

  it('should call onFav method when favorite is clicked', () => {
    const onFav = jest.fn()
    renderWithTheme(<GameCard {...props} favorite onFav={onFav} />)

    fireEvent.click(screen.getByLabelText(/Remove to Wishlist/i))

    expect(onFav).toBeCalled()
  })

  it('should render gameCard with ribbon', () => {
    renderWithTheme(
      <GameCard
        {...props}
        ribbon="20% sale"
        ribbonColor="primary"
        ribbonSize="small"
      />
    )

    expect(screen.getByText(/20% sale/i)).toBeInTheDocument()
  })
})
