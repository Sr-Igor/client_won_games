import styled, { css, DefaultTheme } from 'styled-components'
import { ButtonProps } from '.'
import { darken } from 'polished'

export type WrapperProps = {
  hasIcon: boolean
} & Pick<ButtonProps, 'size' | 'fullWidth' | 'minimal'>

const buttonModifiers = {
  small: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xsmall};
    height: 3rem;
  `,

  medium: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.small};
    height: 4rem;
    padding: ${theme.spacings.xxsmall} ${theme.spacings.medium};
  `,

  large: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.medium};
    height: 5rem;
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xlarge};
  `,

  fullWidth: () => css`
    width: 100%;
  `,

  withIcon: (theme: DefaultTheme) => css`
    svg {
      width: 1.5rem;
      margin-right: ${theme.spacings.xxsmall};
    }
  `,

  minimal: (theme: DefaultTheme) => css`
    background: none;
    color: ${theme.colors.primary};

    &:hover {
      background: none;
      color: ${darken(0.1, theme.colors.primary)};
    }
  `,

  disabled: () => css`
    &:disabled {
      cursor: not-allowed;
      filter: saturate(30%);
    }
  `
}

export const Wrapper = styled.button<WrapperProps>`
  ${({ theme, size, fullWidth, hasIcon, minimal, disabled }) => css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(180deg, #ff5f5f 0%, #f062c0 50%);
    color: ${theme.colors.white};
    border: 0;
    border-radius: ${theme.border.radius};
    padding: ${theme.spacings.xxsmall};
    text-decoration: none;
    cursor: pointer;

    &:hover {
      background: linear-gradient(180deg, #e35565 0%, #d958a6 50%);
    }

    ${!!size && buttonModifiers[size](theme)}
    ${!!fullWidth && buttonModifiers.fullWidth()}
    ${!!hasIcon && buttonModifiers.withIcon(theme)}
    ${!!minimal && buttonModifiers.minimal(theme)}
    ${disabled && buttonModifiers.disabled()};
  `}
`
