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
      'border-left': '0.7rem solid #3CD3C1'
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
})
