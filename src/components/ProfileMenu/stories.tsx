import { Story, Meta } from '@storybook/react/types-6-0'
import ProfileMenu, { ProfileMenuProps } from '.'

export default {
  title: 'Profile/ProfileMenu',
  component: ProfileMenu,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  },
  args: {
    activeLink: '/profile/me'
  },
  argTypes: {
    activeLink: {
      control: {
        type: 'select',
        options: ['/profile/me', '/profile/cards', '/profile/orders']
      }
    }
  }
} as Meta

export const Default: Story<ProfileMenuProps> = (args) => (
  <ProfileMenu {...args} />
)
