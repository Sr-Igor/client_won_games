import * as S from './styles'
import Base from 'templates/Base'
import GameInfo, { GameInfoProps } from 'components/GameInfo'
import Gallery, { GalleryImageProps } from 'components/Gallery'
import TextContent from 'components/TextContent'
import GameDetails, { GameDetailsProps } from 'components/GameDetails'
import { GameCardProps } from 'components/GameCard'
import { HighlightProps } from 'components/Highlight'
import Showcase from 'components/Showcase'
import { Divider } from 'components/Divider'

export type GameTemplateProps = {
  cover: string
  gameInfo: GameInfoProps
  gallery?: GalleryImageProps[]
  description?: string
  details: GameDetailsProps
  upcomingGames?: GameCardProps[]
  upcomingHighlight?: HighlightProps
  recommendedGames?: GameCardProps[]
  recommendedTitle: string
  upcomingTitle: string
}

const Game = ({
  cover,
  gameInfo,
  gallery,
  description,
  details,
  upcomingGames,
  upcomingHighlight,
  upcomingTitle,
  recommendedGames,
  recommendedTitle
}: GameTemplateProps) => (
  <Base>
    <S.Cover src={cover} role="image" aria-label="cover" />

    <S.Main>
      <S.SectionGameInfo>
        <GameInfo {...gameInfo} />
      </S.SectionGameInfo>

      <S.SectionGallery>
        {!!gallery && <Gallery items={gallery} />}
      </S.SectionGallery>

      <S.SectionDescription>
        {!!description && (
          <TextContent title="Description" content={description} />
        )}
      </S.SectionDescription>

      <S.SectionGameDetails>
        <GameDetails {...details} />
        <Divider />
      </S.SectionGameDetails>

      <Showcase
        title={upcomingTitle}
        games={upcomingGames}
        highlight={upcomingHighlight}
      />

      <Showcase title={recommendedTitle} games={recommendedGames} />
    </S.Main>
  </Base>
)

export default Game
