import React, { ReactNode } from 'react'
import * as S from './styles'

export type RibbonsColors = 'primary' | 'secondary'
export type RibbonsSizes = 'normal' | 'small'

export type RibbonProps = {
  children: ReactNode
  color?: RibbonsColors
  size?: RibbonsSizes
}

const Ribbon = ({
  children,
  color = 'primary',
  size = 'normal'
}: RibbonProps) => (
  <S.Wrapper color={color} size={size}>
    {children}
  </S.Wrapper>
)

export default Ribbon
