import { Story, Meta } from '@storybook/react/types-6-0'
import FormProfile from '.'

export default {
  title: 'Form/FormProfile',
  component: FormProfile,
  parameters: {
    backgrounds: {
      default: 'won-light'
    }
  }
} as Meta

export const Default: Story = () => (
  <div style={{ maxWidth: 860, margin: 'auto' }}>
    <FormProfile />
  </div>
)
