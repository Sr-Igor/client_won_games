import Heading from 'components/Heading'
import Logo from 'components/Logo'
import * as S from './styles'
import Link from 'next/link'

type AuthProps = {
  title: string
  children: React.ReactNode
}

const Auth = ({ title, children }: AuthProps) => (
  <S.Wrapper>
    <S.BannerBlock>
      <S.BannerContent>
        <Link href="/" passHref>
          <a>
            <Logo />
          </a>
        </Link>

        <div>
          <Heading color="white">All your favorite games in one place</Heading>
          <S.SubTitle>
            <strong>WON</strong> is the best and most complete gaming platform
          </S.SubTitle>
        </div>

        <S.Footer>Won Games 2022 © Todos os direitos reservados</S.Footer>
      </S.BannerContent>
    </S.BannerBlock>
    <S.Content>
      <S.ContentWrapper>
        <Link href="/" passHref>
          <a>
            <Logo color="black" size="large" />
          </a>
        </Link>
        <Heading color="black" lineLeft lineColor="secondary" size="huge">
          {title}
        </Heading>
        {children}
      </S.ContentWrapper>
    </S.Content>
  </S.Wrapper>
)

export default Auth
