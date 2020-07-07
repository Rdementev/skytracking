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
  StyledSubFooter,
  SubFooterBlock,
} from "../../Core/style/styled";


const Autohorization = (props) => {
  const {  setForget,  onClick, setRegistration, email, setEmail, password, setPassword, title} = props


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
          <SectionBlock>
            <Text>Пароль</Text>
            <Input password={password} onChange={(e) => {setPassword(e.target.value)}} type={'password'}/>
          </SectionBlock>
        </StyledSection>
        <StyledFooterLogin>
          <Button onClick={(e) => {onClick(email, password)}}>
            Войти
          </Button>
        </StyledFooterLogin>
        <StyledSubFooter>
          <SubFooterBlock onClick={(e)=>{setRegistration(true)}}>Создать аккаунт</SubFooterBlock>
          <SubFooterBlock onClick={(e)=>{setForget(true)}}>Восстановить пароль</SubFooterBlock>
        </StyledSubFooter>
      </Row>
    </Container>
  )
}

export default Autohorization
//
