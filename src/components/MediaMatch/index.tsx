import styled, { css } from 'styled-components'
import media, { DefaultBreakpoints } from 'styled-media-query'

export type MediaMatchProps = {
  lessThan?: keyof DefaultBreakpoints
  greaterThan?: keyof DefaultBreakpoints
}

const mediaMatchModifiers = {
  lessThan: (size: keyof DefaultBreakpoints) => css`
    ${media.lessThan(size)`display: block`}
  `,

  greatherThan: (size: keyof DefaultBreakpoints) => css`
    ${media.greaterThan(size)`display: block`}
  `
}

export default styled.div<MediaMatchProps>`
  ${({ lessThan, greaterThan }) => css`
    display: none;

    ${!!lessThan && mediaMatchModifiers.lessThan(lessThan)}
    ${!!greaterThan && mediaMatchModifiers.greatherThan(greaterThan)}
  `}
`
