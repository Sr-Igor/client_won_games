import { ReactNode } from 'react'
import * as S from './styles'

export type HeadingProps = {
  children: ReactNode
  color?: 'white' | 'black'
  lineLeft?: boolean
  lineBottom?: boolean
}

const Heading = ({
  children,
  color = 'black',
  lineLeft,
  lineBottom
}: HeadingProps) => (
  <S.Wrapper color={color} lineLeft={lineLeft} lineBottom={lineBottom}>
    {children}
  </S.Wrapper>
)

export default Heading