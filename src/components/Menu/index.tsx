import * as S from './styles'
import { useState } from 'react'

import { Menu as MenuIcon } from '@styled-icons/material-outlined/Menu'
import { ShoppingCart as CartIcon } from '@styled-icons/material-outlined/ShoppingCart'
import { Search as SearchIcon } from '@styled-icons/material-outlined/Search'
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close'

import MediaMatch from 'components/MediaMatch'

import { Link } from './constants'

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
        <Logo hiddenText />
      </S.LogoWrapper>

      <MediaMatch greaterThan="medium">
        <S.MenuNav>
          {Link.map((link, index) => {
            if (link.needAuth && !userName) return null
            return (
              <S.MenuLink key={index} href={link.url}>
                {link.label}
              </S.MenuLink>
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
          {!userName && <Button>Sign in</Button>}
        </MediaMatch>
      </div>

      <S.MenuFull aria-hidden={!isOpen} isOpen={isOpen}>
        <CloseIcon aria-label="close menu" onClick={() => setIsOpen(false)} />
        <S.MenuNav>
          {Link.map((link, index) => {
            if (link.needAuth && !userName) return null
            return (
              <S.MenuLink key={index} href={link.url}>
                {link.label}
              </S.MenuLink>
            )
          })}
        </S.MenuNav>

        {!userName && (
          <S.RegisterBox>
            <Button fullWidth size="large">
              Login now
            </Button>
            <span>or</span>
            <S.CreateAccount href="#" title="Sign Up">
              Sign up
            </S.CreateAccount>
          </S.RegisterBox>
        )}
      </S.MenuFull>
    </S.Wrapper>
  )
}

export default Menu