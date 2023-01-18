import * as S from './styles'
import Ribbon, { RibbonsColors, RibbonsSizes } from 'components/Ribbon'
import Link from 'next/link'
import formatPrice from 'utils/formatPrice'
import CartButton from 'components/CartButton'
import WishlistButton from 'components/WishlistButton'
// import Image from 'next/image'

export type GameCardProps = {
  id: string
  title: string
  developer: string
  img: string
  price: number
  slug: string
  promotionalPrice?: number
  ribbon?: React.ReactNode
  ribbonColor?: RibbonsColors
  ribbonSize?: RibbonsSizes
}

const GameCard = ({
  id,
  title,
  developer,
  img,
  price,
  promotionalPrice,
  slug,
  ribbon,
  ribbonColor = 'primary',
  ribbonSize = 'small'
}: GameCardProps) => (
  <S.Wrapper>
    {!!ribbon && (
      <Ribbon color={ribbonColor} size={ribbonSize}>
        {ribbon}
      </Ribbon>
    )}
    <Link href={`/game/${slug}`} passHref>
      <S.ImageBox>
        {/* TODO: Fix Image */}
        {/* <Image src={img} alt={title} layout="fill" objectFit="cover" /> */}
        <img src={img} alt={title} />
      </S.ImageBox>
    </Link>
    <S.Content>
      <Link href={`/game/${slug}`} passHref>
        <S.Info>
          <S.Title>{title}</S.Title>
          <S.Developer>{developer}</S.Developer>
        </S.Info>
      </Link>
      <S.FavButton>
        <WishlistButton id={id} />
      </S.FavButton>
      <S.BuyBox>
        {!!promotionalPrice && (
          <S.Price isPromotional>{formatPrice(price)}</S.Price>
        )}
        <S.Price>{formatPrice(promotionalPrice || price)}</S.Price>
        <CartButton id={id} />
      </S.BuyBox>
    </S.Content>
  </S.Wrapper>
)

export default GameCard
