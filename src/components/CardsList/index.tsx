import Heading from 'components/Heading'
import { PaymentCard } from 'components/PaymentOptions'
import * as S from './styles'

export type CardListProps = {
  cards: PaymentCard[]
}

const CardsList = ({ cards }: CardListProps) => (
  <>
    <Heading lineBottom lineColor="secondary" size="small">
      My Cards
    </Heading>

    {cards?.map((card) => (
      <S.Card key={card.number}>
        <img src={card.img} alt={card.flag} />
        <span>{card.number}</span>
      </S.Card>
    ))}
  </>
)

export default CardsList
