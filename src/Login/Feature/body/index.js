import React, {useEffect} from 'react'
import styled from 'styled-components/macro'
import Input from "../../Components/input/inputComponent";


const Body = (props) => {
  const {email, password, setEmail, setPassword, registration, login, phone, setLogin, setPhone} = props
  if (registration) {
    return (
      <SectionLogin>
        <Block>
          <Text>E-mail</Text>
          <Input value={email} onChange={(e) => {setEmail(e.target.value)}} type={'text'}/>
        </Block>
        <Block>
          <Text>Логин</Text>
          <Input value={login} onChange={(e) => {setLogin(e.target.value)}} type={'text'}/>
        </Block>
        <Block>
          <Text>Пароль</Text>
          <Input value={password} onChange={(e) => {setPassword(e.target.value)}} type={'password'}/>
        </Block>
        <Block>
          <Text>Номер телефона</Text>
          <Input value={phone} onChange={(e) => {setPhone(e.target.value)}} type={'text'}/>
        </Block>
      </SectionLogin>
    )
  }
  return (
    <SectionLogin>
      <Block>
        <Text>E-mail</Text>
        <Input value={email} onChange={(e) => {setEmail(e.target.value)}} type={'text'}/>
      </Block>
      <Block>
        <Text>Пароль</Text>
        <Input password={password} onChange={(e) => {setPassword(e.target.value)}} type={'password'}/>
      </Block>
    </SectionLogin>
  )
}

export default Body
//

const SectionLogin = styled.div`

`;
const Block = styled.div`
    padding: 20px 0;
`;
const Text = styled.h5`
    margin-bottom: 15px;
`;


