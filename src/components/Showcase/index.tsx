import { GameCardProps } from 'components/GameCard'
import GameCardSlider from 'components/GameCardSlider'
import Heading from 'components/Heading'
import Highlight, { HighlightProps } from 'components/Highlight'
import * as S from './styles'

export type ShowCaseProps = {
  title?: string
  highlight?: HighlightProps
  games?: GameCardProps[]
  color?: 'white' | 'black'
}

const Showcase = ({
  title,
  highlight,
  games = [],
  color = 'white'
}: ShowCaseProps) => (
  <S.Wrapper>
    {!!title && (
      <Heading color="white" lineLeft lineColor="secondary">
        {title}
      </Heading>
    )}
    {!!highlight && <Highlight {...highlight} />}
    {!!games.length && <GameCardSlider items={games} color={color} />}
  </S.Wrapper>
)

export default Showcase
