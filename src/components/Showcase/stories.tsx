import { Story, Meta } from '@storybook/react/types-6-0'
import Showcase, { ShowCaseProps } from '.'
import { item as highlightMock } from 'components/Highlight/mock'
import { items as gameCardMock } from 'components/GameCardSlider/mock'

export default {
  title: 'Showcase',
  component: Showcase,
  decorators: [
    (Story) => (
      <div style={{ margin: '0 auto', maxWidth: '130rem' }}>
        <Story />
      </div>
    )
  ],
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: Story<ShowCaseProps> = (args) => <Showcase {...args} />

Default.args = {
  title: 'Most Popular',
  highlight: highlightMock,
  games: gameCardMock
}

export const WithoutHighlight: Story<ShowCaseProps> = (args) => (
  <Showcase {...args} />
)

WithoutHighlight.args = {
  title: 'Most Popular',
  games: gameCardMock
}

export const WithoutGames: Story<ShowCaseProps> = (args) => (
  <Showcase {...args} />
)

WithoutGames.args = {
  title: 'Most Popular',
  highlight: highlightMock
}
