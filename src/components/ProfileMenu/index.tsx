import Link from 'next/link'
import * as S from './styles'
import { links } from './constants'

export type ProfileMenuProps = {
  activeLink?: string
}

const ProfileMenu = ({ activeLink }: ProfileMenuProps) => {
  return (
    <S.Nav>
      {links?.map((link, index) => (
        <Link key={index} href={link.href}>
          <S.Link activeLink={activeLink === link.href} title={link.label}>
            {link.icon}
            <span>{link.label}</span>
          </S.Link>
        </Link>
      ))}
    </S.Nav>
  )
}

export default ProfileMenu
