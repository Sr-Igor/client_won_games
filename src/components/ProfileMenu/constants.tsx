import {
  AccountCircle,
  CreditCard,
  FormatListBulleted,
  ExitToApp
} from 'styled-icons/material-outlined'

export const links = [
  {
    label: 'My profile',
    href: '/profile/me',
    icon: <AccountCircle size={24} />
  },
  {
    label: 'My Cards',
    href: '/profile/cards',
    icon: <CreditCard size={24} />
  },
  {
    label: 'My Orders',
    href: '/profile/orders',
    icon: <FormatListBulleted size={24} />
  },
  {
    label: 'Sign out',
    href: '/logout',
    icon: <ExitToApp size={24} />
  }
]
