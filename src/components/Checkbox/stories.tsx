import { Story, Meta } from '@storybook/react/types-6-0'
import Checkbox, { CheckboxProps } from '.'

export default {
  title: 'Form/Checkbox',
  component: Checkbox,
  argTypes: {
    onCheck: { action: 'checked' }
  }
} as Meta

export const Default: Story<CheckboxProps> = (args) => (
  <div style={{ display: 'flex', flexDirection: 'column' }}>
    <div style={{ padding: 10 }}>
      <Checkbox {...args} label="Action" labelFor="action" isChecked />
    </div>
    <div style={{ padding: 10 }}>
      <Checkbox {...args} label="Adventure" labelFor="adventure" />
    </div>
    <div style={{ padding: 10 }}>
      <Checkbox {...args} label="Comedy" labelFor="comedy" isChecked />
    </div>
    <div style={{ padding: 10 }}>
      <Checkbox {...args} label="Drama" labelFor="drama" />
    </div>
  </div>
)

Default.args = {
  label: 'Checkbox',
  labelFor: 'Checkbox',
  labelColor: 'white'
}
