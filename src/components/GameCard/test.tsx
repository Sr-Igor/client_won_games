import 'session.mock'
import { render, screen } from 'utils/test-utils'

import GameCard from '.'

const props = {
  id: '1',
  title: 'Population Zero',
  developer: 'Rockstar Games',
  img: 'https://source.unsplash.com/user/willianjusten/300x140',
  price: 235.0,
  slug: 'population-zero'
}

describe('<GameCard />', () => {
  it('should render the correctly', () => {
    render(<GameCard {...props} />)

    expect(screen.getByText(props.title)).toBeInTheDocument()
    expect(screen.getByText(props.developer)).toBeInTheDocument()
    //TODO: Fix Image
    expect(screen.getByRole('img', { name: props.title })).toHaveAttribute(
      'src',
      props.img
    )

    expect(screen.getByRole('link', { name: props.title })).toHaveAttribute(
      'href',
      `/game/${props.slug}`
    )
  })

  it('should render without promotional price', () => {
    render(<GameCard {...props} />)

    expect(screen.queryByText('$999.00')).not.toBeInTheDocument()
    expect(screen.getByText('$235.00')).not.toHaveStyle({
      textDecoration: 'line-through'
    })
    expect(screen.getByText('$235.00')).toHaveStyle({
      backgroundColor: '#3CD3C1'
    })
  })

  it('should render promotional price', () => {
    render(<GameCard {...props} promotionalPrice={999} />)

    expect(screen.getByText('$999.00')).toBeInTheDocument()
    expect(screen.getByText('$235.00')).toHaveStyle({
      textDecoration: 'line-through'
    })
    expect(screen.getByText('$999.00')).toHaveStyle({
      backgroundColor: '#3CD3C1'
    })
  })

  it('should render gameCard with ribbon', () => {
    render(
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
