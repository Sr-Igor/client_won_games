import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Heading from '.'

describe('<Heading />', () => {
  it('should render the heading with color white', () => {
    renderWithTheme(<Heading color="white">Won Games</Heading>)

    expect(screen.getByRole('heading', { name: /Won Games/i })).toHaveStyle({
      color: '#FAFAFA'
    })
  })

  it('should render the heading with color black for default', () => {
    renderWithTheme(<Heading>Won Games</Heading>)

    expect(screen.getByRole('heading', { name: /Won Games/i })).toHaveStyle({
      color: '#030517'
    })
  })

  it('should render the heading with left border', () => {
    renderWithTheme(<Heading lineLeft>Won Games</Heading>)

    expect(screen.getByRole('heading', { name: /Won Games/i })).toHaveStyle({
      'border-left': '0.7rem solid #F231A5'
    })
  })

  it('should render the heading with bottom border', () => {
    renderWithTheme(<Heading lineBottom>Won Games</Heading>)

    expect(screen.getByRole('heading', { name: /Won Games/i })).toHaveStyleRule(
      'border-bottom',
      '0.5rem solid #F231A5',
      {
        modifier: '::after'
      }
    )
  })

  it('should render the heading with a small size', () => {
    renderWithTheme(<Heading size="small">Won Games</Heading>)

    expect(screen.getByRole('heading', { name: /Won Games/i })).toHaveStyleRule(
      'font-size',
      '1.6rem'
    )
  })

  it('should render the heading with a huge size', () => {
    renderWithTheme(<Heading size="huge">Won Games</Heading>)

    expect(screen.getByRole('heading', { name: /Won Games/i })).toHaveStyleRule(
      'font-size',
      '5.2rem'
    )
  })

  it('should render the heading with a small line', () => {
    renderWithTheme(<Heading size="small">Won Games</Heading>)

    expect(screen.getByRole('heading', { name: /Won Games/i })).toHaveStyleRule(
      'width',
      '3rem',
      {
        modifier: '::after'
      }
    )
  })

  it('should render aHeading with a primary line color', () => {
    renderWithTheme(
      <Heading lineColor="primary" lineLeft lineBottom>
        Loren ipsun
      </Heading>
    )

    const heading = screen.getByRole('heading', { name: /loren ipsun/i })

    expect(heading).toHaveStyle({ 'border-left': '0.7rem solid #F231A5' })
    expect(heading).toHaveStyleRule('border-bottom', '0.5rem solid #F231A5', {
      modifier: '::after'
    })
  })

  it('should render aHeading with a secondary line color', () => {
    renderWithTheme(
      <Heading lineColor="secondary" lineLeft lineBottom>
        Loren ipsun
      </Heading>
    )

    const heading = screen.getByRole('heading', { name: /loren ipsun/i })

    expect(heading).toHaveStyle({ 'border-left': '0.7rem solid #3CD3C1' })
    expect(heading).toHaveStyleRule('border-bottom', '0.5rem solid #3CD3C1', {
      modifier: '::after'
    })
  })
})
