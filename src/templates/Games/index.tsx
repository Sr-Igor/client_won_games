import * as S from './styles'
import GameCard, { GameCardProps } from 'components/GameCard'
import Base from 'templates/Base'
import ExploreSidebar, { ItemProps } from 'components/ExploreSidebar'
import { Grid } from 'components/Grid'
import { KeyboardArrowDown } from 'styled-icons/material-outlined'
import { useQueryGames } from 'graphql/queries/games'

export type GameTemplateProps = {
  games?: GameCardProps[]
  filterItems: ItemProps[]
}

const GamesTemplate = ({ filterItems }: GameTemplateProps) => {
  const { data, fetchMore } = useQueryGames({
    variables: { limit: 15, sort: 'id:desc' }
  })

  const handleFilter = () => {
    return
  }

  const handleShowMore = () => {
    fetchMore({
      variables: {
        limit: 15,
        start: data?.games.length
      }
    })
  }

  return (
    <Base>
      <S.Main>
        <ExploreSidebar items={filterItems} onFilter={handleFilter} />
        <section>
          <Grid>
            {data?.games.map((game, idx) => (
              <GameCard
                key={idx}
                title={game.name}
                developer={
                  game.developers[0]?.name ? game.developers[0].name : ''
                }
                img={
                  game.cover?.url
                    ? `http://localhost:1337${game.cover.url}`
                    : ''
                }
                price={game.price}
                slug={game.slug}
              />
            ))}
          </Grid>

          <S.ShowMore role="button" onClick={handleShowMore}>
            <p>Show More</p>
            <KeyboardArrowDown />
          </S.ShowMore>
        </section>
      </S.Main>
    </Base>
  )
}

export default GamesTemplate
