// @ts-ignore
import React from 'react'
import Input from "../../Components/input/inputComponent";
import Button from "../../Components/buttons";
import {
  Container,
  LoginTitle,
  Row,
  SectionBlock,
  StyledFooterLogin,
  StyledHeader,
  StyledSection,
  Text,
} from "../../Core/style/styled";



const Forget = (props) => {
  const { onClick, email, setEmail, title } = props
  return (
    <Container>
      <Row>
        <StyledHeader>
          <LoginTitle>
            {title}
          </LoginTitle>
        </StyledHeader>
        <StyledSection>
          <SectionBlock>
            <Text>E-mail</Text>
            <Input value={email} onChange={(e) => {setEmail(e.target.value)}} type={'text'}/>
          </SectionBlock>
        </StyledSection>
        <StyledFooterLogin>
          <Button onClick={(e) => {onClick(email)}}>
            Отправить
          </Button>
        </StyledFooterLogin>
      </Row>
    </Container>
  )
}

export default Forget
//
