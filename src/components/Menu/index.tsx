import * as S from './styles'
import { useState } from 'react'
import Link from 'next/link'

import { Menu as MenuIcon } from '@styled-icons/material-outlined/Menu'
import { ShoppingCart as CartIcon } from '@styled-icons/material-outlined/ShoppingCart'
import { Search as SearchIcon } from '@styled-icons/material-outlined/Search'
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close'

import MediaMatch from 'components/MediaMatch'

import { link } from './constants'

import Logo from 'components/Logo'
import Button from 'components/Button'

export type MenuProps = {
  userName?: string
}

const Menu = ({ userName }: MenuProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <S.Wrapper>
      <MediaMatch lessThan="medium">
        <S.IconWrapper>
          <MenuIcon aria-label="Open Menu" onClick={() => setIsOpen(!isOpen)} />
        </S.IconWrapper>
      </MediaMatch>

      <S.LogoWrapper>
        <Link href="/" passHref>
          <a>
            <Logo hiddenText />
          </a>
        </Link>
      </S.LogoWrapper>

      <MediaMatch greaterThan="medium">
        <S.MenuNav>
          {link.map((link, index) => {
            if (link.needAuth && !userName) return null
            return (
              <Link key={index} href={link.url} passHref>
                <S.MenuLink>{link.label}</S.MenuLink>
              </Link>
            )
          })}
        </S.MenuNav>
      </MediaMatch>

      <div className="rigthContent">
        <S.IconWrapper>
          <SearchIcon aria-label="search" />
        </S.IconWrapper>

        <S.IconWrapper>
          <CartIcon aria-label="open shopping cart" />
        </S.IconWrapper>

        <MediaMatch greaterThan="medium">
          {!userName && (
            <Link href="sign-in" passHref>
              <Button as="a">Sign in</Button>
            </Link>
          )}
        </MediaMatch>
      </div>

      <S.MenuFull aria-hidden={!isOpen} isOpen={isOpen}>
        <CloseIcon aria-label="close menu" onClick={() => setIsOpen(false)} />
        <S.MenuNav>
          {link.map((link, index) => {
            if (link.needAuth && !userName) return null
            return (
              <Link key={index} href={link.url} passHref>
                <S.MenuLink>{link.label}</S.MenuLink>
              </Link>
            )
          })}
        </S.MenuNav>

        {!userName && (
          <S.RegisterBox>
            <Link href="sign-in" passHref>
              <Button fullWidth size="large">
                Login now
              </Button>
            </Link>
            <span>or</span>
            <Link href="sign-up" passHref>
              <S.CreateAccount href="#" title="Sign Up">
                Sign up
              </S.CreateAccount>
            </Link>
          </S.RegisterBox>
        )}
      </S.MenuFull>
    </S.Wrapper>
  )
}

export default Menu
