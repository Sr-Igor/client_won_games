import * as S from './styles'
import Empty from 'components/Empty'
import GameCard from 'components/GameCard'
import Base from 'templates/Base'
import ExploreSidebar, { ItemProps } from 'components/ExploreSidebar'
import { Grid } from 'components/Grid'
import { KeyboardArrowDown } from 'styled-icons/material-outlined'
import { useQueryGames } from 'graphql/queries/games'
import { useRouter } from 'next/router'
import { parseQueryStringToFilter, parseQueryStringToWhere } from 'utils/filter'
import { ParsedUrlQueryInput } from 'querystring'
import { getImageUrl } from 'utils/getImageUrl'

export type GameTemplateProps = {
  filterItems: ItemProps[]
}

const GamesTemplate = ({ filterItems }: GameTemplateProps) => {
  const { push, query } = useRouter()

  const { data, loading, fetchMore } = useQueryGames({
    notifyOnNetworkStatusChange: true,
    variables: {
      limit: 15,
      sort: (query.sort as string) || 'id:desc',
      where: parseQueryStringToWhere({ queryString: query, filterItems })
    }
  })

  const hasMoreGames =
    (data?.games.length as number) <
    (data?.gamesConnection?.values?.length || 0)

  const handleFilter = (items: ParsedUrlQueryInput) => {
    push({
      pathname: '/games',
      query: items
    })
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
        <ExploreSidebar
          initialValues={parseQueryStringToFilter({
            queryString: query,
            filterItems
          })}
          items={filterItems}
          onFilter={handleFilter}
        />
        <section>
          {data?.games.length ? (
            <>
              <Grid>
                {data?.games.map((game, idx) => (
                  <GameCard
                    id={game.id}
                    key={idx}
                    title={game.name}
                    developer={
                      game.developers[0]?.name ? game.developers[0].name : ''
                    }
                    img={
                      game.cover?.url ? `${getImageUrl(game.cover.url)}` : ''
                    }
                    price={game.price}
                    slug={game.slug}
                  />
                ))}
              </Grid>
              {hasMoreGames && (
                <S.ShowMore>
                  {loading ? (
                    <S.ShowMoreLoading
                      src="/img/dots.svg"
                      alt="Loading more games..."
                    />
                  ) : (
                    <S.ShowMoreButton role="button" onClick={handleShowMore}>
                      <p>Show More</p>
                      <KeyboardArrowDown size={35} />
                    </S.ShowMoreButton>
                  )}
                </S.ShowMore>
              )}
            </>
          ) : (
            <Empty
              title=":("
              description="We didn't find any games with this filter"
              hasLink
            />
          )}
        </section>
      </S.Main>
    </Base>
  )
}

export default GamesTemplate
