import { Story, Meta } from '@storybook/react/types-6-0'
import GameInfo, { GameInfoProps } from '.'
import MockGameInfo from './mock'

export default {
  title: 'GameInfo',
  component: GameInfo,
  args: MockGameInfo,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: Story<GameInfoProps> = (args) => (
  <div style={{ maxWidth: '104rem', margin: '0 auto' }}>
    <GameInfo {...args} />
  </div>
)
