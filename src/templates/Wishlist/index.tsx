import Heading from 'components/Heading'
import { Container } from 'components/Container'
import Base from 'templates/Base'
import GameCard, { GameCardProps } from 'components/GameCard'
import { HighlightProps } from 'components/Highlight'
import Showcase from 'components/Showcase'
import { Grid } from 'components/Grid'
import { Divider } from 'components/Divider'

export type WishlistTemplateProps = {
  games?: GameCardProps[]
  recommendedGames?: GameCardProps[]
  recommendedHighlight?: HighlightProps
}

const Wishlist = ({
  games = [],
  recommendedGames = [],
  recommendedHighlight
}: WishlistTemplateProps) => (
  <Base>
    <Container>
      <Heading lineLeft lineColor="secondary" color="white">
        Wishlist
      </Heading>

      <Grid>
        {games.map((game, index) => (
          <GameCard key={`wishlist-${index}`} {...game} />
        ))}
      </Grid>

      <Divider />
    </Container>
    <Showcase
      title="You may like this games"
      games={recommendedGames}
      highlight={recommendedHighlight}
    />
  </Base>
)

export default Wishlist
