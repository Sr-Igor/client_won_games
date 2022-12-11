import { Story, Meta } from '@storybook/react/types-6-0'
import GameCard, { GameCardProps } from '.'
export default {
  title: 'GameCard',
  component: GameCard,
  args: {
    title: 'Population Zero',
    developer: 'Rockstar Games',
    img: 'https://source.unsplash.com/user/willianjusten/300x140',
    price: 235.0,
    promotionalPrice: 200.0,
    favorite: false,
    ribbon: '20% OFF',
    ribbonColor: 'primary',
    ribbonSize: 'small'
  },
  argTypes: {
    onFav: { action: 'clicked' },
    ribbon: {
      type: 'string'
    }
  },
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: Story<GameCardProps> = (args) => (
  <div style={{ width: '30rem' }}>
    <GameCard {...args} />
  </div>
)
