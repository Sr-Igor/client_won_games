import {
  ReactNode,
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ElementType
} from 'react'
import * as S from './styles'

type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonProps = {
  size?: 'small' | 'medium' | 'large'
  children?: ReactNode
  fullWidth?: boolean
  icon?: JSX.Element
  as?: ElementType
} & ButtonTypes

const Button = ({
  size = 'medium',
  children,
  fullWidth = false,
  icon,
  ...props
}: ButtonProps) => {
  return (
    <S.Wrapper size={size} fullWidth={fullWidth} hasIcon={!!icon} {...props}>
      {!!icon && icon}
      {!!children && <span>{children}</span>}
    </S.Wrapper>
  )
}

export default Button
