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
  Text
} from "../../Core/style/styled";

const Registration = (props) => {
  const {onClick , email, setEmail, password, setPassword, phone, setPhone, isCheckPhone, isCheckEmail} = props


  return (
    <Container>
      <Row>
        <StyledHeader>
          <LoginTitle>
            AR document manager
          </LoginTitle>
        </StyledHeader>
        <StyledSection>
          <SectionBlock>
            <Text>E-mail</Text>
            <Input value={email} onChange={(e) => {setEmail(e.target.value)}} type={'text'}/>
          </SectionBlock>
          <SectionBlock>
            <Text >Пароль</Text>
            <Input value={password} onChange={(e) => {setPassword(e.target.value)}} type={'text'}/>
          </SectionBlock>
          <SectionBlock>
            <Text>Телефон</Text>
            <Input value={phone} onChange={(e) => {setPhone(e.target.value)}} type={'text'}/>
          </SectionBlock>
        </StyledSection>
        <StyledFooterLogin>
          <Button onClick={(e) => {onClick(email, password, phone)}}>
            Войти
          </Button>
        </StyledFooterLogin>
      </Row>
    </Container>
  )
}

export default Registration
