import Link from 'next/link'
import * as S from './styles'
import { links } from './constants'
import { ExitToApp } from 'styled-icons/material-outlined'
import { signOut } from 'next-auth/client'
import { useRouter } from 'next/router'

export type ProfileMenuProps = {
  activeLink?: string
}

const ProfileMenu = ({ activeLink }: ProfileMenuProps) => {
  const push = useRouter()

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
      <S.Link
        title={'Sign out'}
        role="button"
        onClick={async () => {
          const data = await signOut({ redirect: false, callbackUrl: '/' })
          push.push(data.url)
        }}
      >
        <ExitToApp size={24} />
        <span>{'Sign out'}</span>
      </S.Link>
    </S.Nav>
  )
}

export default ProfileMenu
