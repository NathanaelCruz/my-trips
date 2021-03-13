import LinkWrapper from 'components/LinkWrapper'
import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline'
import * as S from './styles'

const AboutTemplate = () => (
  <S.Content>
    <LinkWrapper href="/">
      <CloseOutline size={32} />
    </LinkWrapper>

    <S.Heading>About</S.Heading>

    <S.Body>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione nam
        dolorem consequuntur eius consequatur aliquam quas id repellendus cum?
        Sint quo perferendis, voluptatum nobis quibusdam ad fugit assumenda
        porro aliquam.
      </p>
    </S.Body>
  </S.Content>
)

export default AboutTemplate
