import * as S from './styles'

const Main = () => (
  <S.Wrapper>
    <S.Logo
      src="/img/logo.svg"
      alt="Imagem de um átomo e React Avançado ao lado"
    />
    <S.Title>React Avançados</S.Title>
    <S.Description>
      Typesscript, ReactJS, NextJS e Styled Components.
    </S.Description>
    <S.Illustration
      src="/img/hero-illustration.svg"
      alt="Um desenvolvedor de frente para uma tela com o código."
    />
  </S.Wrapper>
)

export default Main
