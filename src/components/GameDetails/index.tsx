import * as S from './styles'
import Heading from 'components/Heading'
import MediaMatch from 'components/MediaMatch'
import { Apple, Windows, Linux } from '@styled-icons/fa-brands'

export type GameDetailsProps = {
  developer: string
  releaseDate: string
  platforms: Platform[]
  publisher: string
  rating: Rating
  genres: string[]
}

type Platform = 'windows' | 'linux' | 'mac'

type Rating = 'BR0' | 'BR10' | 'BR12' | 'BR14' | 'BR16' | 'BR18'

const GameDetails = ({
  developer,
  releaseDate,
  platforms,
  publisher,
  rating,
  genres
}: GameDetailsProps) => {
  const platformIcons = {
    windows: <Windows title="windows" size={18} />,
    linux: <Linux title="linux" size={18} />,
    mac: <Apple title="mac" size={18} />
  }

  const formatRating = (rating: Rating) => {
    switch (rating) {
      case 'BR0':
        return 'FREE'
      case 'BR10':
        return '10+'
      case 'BR12':
        return '12+'
      case 'BR14':
        return '14+'
      case 'BR16':
        return '16+'
      case 'BR18':
        return '18+'
      default:
        return 'FREE'
    }
  }

  return (
    <S.Wrapper>
      <MediaMatch greaterThan="small">
        <Heading lineLeft lineColor="secondary" color="white">
          Game Details
        </Heading>
      </MediaMatch>

      <S.Content>
        <S.Block>
          <S.Label>Developer</S.Label>
          <S.Description>{developer}</S.Description>
        </S.Block>

        <S.Block>
          <S.Label>Release Date</S.Label>
          <S.Description>
            {new Intl.DateTimeFormat('en-US', {
              day: 'numeric',
              month: 'short',
              year: 'numeric'
            }).format(new Date(releaseDate))}
          </S.Description>
        </S.Block>

        <S.Block>
          <S.Label>Platforms</S.Label>
          <S.Icons>
            {platforms.map((icon: Platform) => (
              <S.Icon key={icon}>{platformIcons[icon]}</S.Icon>
            ))}
          </S.Icons>
        </S.Block>

        <S.Block>
          <S.Label>Publisher</S.Label>
          <S.Description>{publisher}</S.Description>
        </S.Block>

        <S.Block>
          <S.Label>Rating</S.Label>
          <S.Description>{formatRating(rating as Rating)}</S.Description>
        </S.Block>

        <S.Block>
          <S.Label>Genres</S.Label>
          <S.Description>{genres.join(' / ')}</S.Description>
        </S.Block>
      </S.Content>
    </S.Wrapper>
  )
}

export default GameDetails
