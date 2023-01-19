import * as S from './styles'
import Logo from 'components/Logo'
import Heading from 'components/Heading'
import Link from 'next/link'

const Footer = () => (
  <S.Wrapper>
    <Logo color="black" />
    <S.Content>
      <S.Column>
        <Heading color="black" size="small" lineBottom lineColor="secondary">
          Contacts
        </Heading>
        <a href="mailto:sr.igor.dev@gmail.com">sr.igor.dev@gmail.com</a>
        <a href="#">+55 37 99986-2366</a>
      </S.Column>

      <S.Column aria-labelledby="social media">
        <Heading color="black" size="small" lineBottom lineColor="secondary">
          Follow us
        </Heading>
        <nav id="social-media">
          <a href="#" target="_blank" rel="noopenner noreferrer">
            Instagram
          </a>
          <a href="#" target="_blank" rel="noopenner noreferrer">
            Instagram
          </a>
          <a href="#" target="_blank" rel="noopenner noreferrer">
            Instagram
          </a>
          <a href="#" target="_blank" rel="noopenner noreferrer">
            Instagram
          </a>
        </nav>
      </S.Column>

      <S.Column aria-labelledby="resources">
        <Heading color="black" size="small" lineBottom lineColor="secondary">
          Links
        </Heading>
        <nav id="resources">
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/games">
            <a>Store</a>
          </Link>
          <Link href="/seLinkrch">
            <a>Buscar</a>
          </Link>
        </nav>
      </S.Column>

      <S.Column aria-label="contact">
        <Heading color="black" size="small" lineBottom lineColor="secondary">
          Location
        </Heading>
        <span>Loren Ipsun</span>
        <span>Loren Ipsun</span>
        <span>Loren Ipsun</span>
      </S.Column>
    </S.Content>
    <S.Copyright>Won Games © All rights reserved</S.Copyright>
  </S.Wrapper>
)

export default Footer
