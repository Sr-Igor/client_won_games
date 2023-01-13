import {
  AccountCircle,
  FormatListBulleted
} from 'styled-icons/material-outlined'

export const links = [
  {
    label: 'My profile',
    href: '/profile/me',
    icon: <AccountCircle size={24} />
  },
  {
    label: 'My Orders',
    href: '/profile/orders',
    icon: <FormatListBulleted size={24} />
  }
]
