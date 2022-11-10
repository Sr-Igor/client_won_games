import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Banner from '.'

const props = {
  img: 'https://source.unsplash.com/user/willianjusten/1042x580',
  title: 'Defy death 1',
  subtitle: '<p>Play the new <strong>CrashLands</strong> season',
  buttonLabel: 'Buy now',
  buttonLink: '/games/defy-death'
}

describe('<Banner />', () => {
  it('should render the correctly', () => {
    renderWithTheme(<Banner {...props} />)

    expect(
      screen.getByRole('heading', { name: /defy death 1/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /play the new crashlands season/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('img', { name: /Defy death 1/i })).toHaveAttribute(
      'src',
      'https://source.unsplash.com/user/willianjusten/1042x580'
    )

    expect(screen.getByRole('link', { name: /buy now/i })).toHaveAttribute(
      'href',
      '/games/defy-death'
    )
  })
})
