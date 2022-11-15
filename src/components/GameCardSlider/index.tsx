import { ArrowBackIos as ArrowLeft } from '@styled-icons/material-outlined/ArrowBackIos'
import { ArrowForwardIos as ArrowRight } from '@styled-icons/material-outlined/ArrowForwardIos'

import * as S from './styles'
import Slider, { SliderSettings } from 'components/Slider'
import GameCard, { GameCardProps } from 'components/GameCard'

const settings: SliderSettings = {
  dots: false,
  infinite: false,
  // speed: 500,
  slidesToShow: 4,
  lazyLoad: 'ondemand',
  // slidesToScroll: 4,
  // initialSlide: 0,
  nextArrow: <ArrowRight aria-label="next games" />,
  prevArrow: <ArrowLeft aria-label="previous games" />,
  responsive: [
    {
      breakpoint: 1375,
      settings: {
        arrows: false,
        slidesToShow: 3.2
      }
    },
    {
      breakpoint: 1024,
      settings: {
        arrows: false,
        slidesToShow: 2.2
      }
    },
    {
      breakpoint: 570,
      settings: {
        arrows: false,
        slidesToShow: 1.2
      }
    },
    {
      breakpoint: 375,
      settings: {
        arrows: false,
        slidesToShow: 1.1
      }
    }
  ]
}

export type GameCardSliderProps = {
  items: GameCardProps[]
  color?: 'white' | 'black'
}

const GameCardSlider = ({ items, color = 'black' }: GameCardSliderProps) => (
  <S.Wrapper color={color}>
    <Slider settings={settings}>
      {items.map((item, index) => (
        <GameCard key={index} {...item} />
      ))}
    </Slider>
  </S.Wrapper>
)

export default GameCardSlider
