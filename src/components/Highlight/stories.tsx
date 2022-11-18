import { Story, Meta } from '@storybook/react/types-6-0'
import Highlight, { HighlightProps } from '.'
import { item } from './mock'

export default {
  title: 'Highlight',
  component: Highlight,
  args: item,
  argTypes: {
    backgroundImage: { control: 'text' }
  }
} as Meta

export const Default: Story<HighlightProps> = (args) => (
  <div style={{ maxWidth: '104rem', margin: '0 auto' }}>
    <Highlight {...args} />
  </div>
)

export const WithFloatImageOnTheLeft: Story<HighlightProps> = (args) => (
  <div style={{ maxWidth: '104rem', margin: '0 auto' }}>
    <Highlight {...args} />
  </div>
)

WithFloatImageOnTheLeft.args = {
  floatImage: '/img/red-dead-float.png'
}
