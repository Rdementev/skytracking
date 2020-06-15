import React from 'react'
import styled from 'styled-components/macro'
import Button from "../../Components/buttons";


const Footer = (props) => {
  const {onClickLogin, email, password, registration, onClickCreate, login, phone} = props
  if (registration) {
    return (
      <StyledFooterLogin>
        <Button onClick={(e) => {
          onClickCreate(email, password, login, phone)
        }}>
          Зарегистрироваться
        </Button>
      </StyledFooterLogin>
    )
  }
  return (
    <StyledFooterLogin>
      <Button onClick={(e) => {
        onClickLogin(email, password)
      }}>
        Войти
      </Button>
    </StyledFooterLogin>
  )
}

export default Footer
//

const StyledFooterLogin = styled.div`
    padding-top: 20px;
    border-top: 1px solid #eeeeef;
`;

