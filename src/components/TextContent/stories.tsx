import { Story, Meta } from '@storybook/react/types-6-0'
import TextContent from '.'
import { TextContentProps } from '.'
import mock from './mock'

export default {
  title: 'TextContent',
  component: TextContent,
  args: mock,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: Story<TextContentProps> = (args) => (
  <TextContent {...args} />
)
