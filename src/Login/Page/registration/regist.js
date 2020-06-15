import React from 'react'
import styled from "styled-components/macro";
import Header from "../../Feature/header";
import Body from "../../Feature/body";
import Footer from "../../Feature/footer";
import SubFooter from "../../Feature/subFooter";

const Regist = (props) => {
  const {email, login, password, phone, setEmail, setLogin, setPassword, setPhone, registration, onClickCreate} = props
  return (
    <Container>
      <Block>
        <Header title={'AR document manager'}/>
        <Body email={email}
              login={login}
              password={password}
              phone={phone}
              setEmail={setEmail}
              setLogin={setLogin}
              setPassword={setPassword}
              setPhone={setPhone}
              registration={registration}/>

        <Footer email={email}
                login={login}
                phone={phone}
                registration={registration}
                onClickCreate={onClickCreate}
                password={password}/>


      </Block>
    </Container>
  )
}

export default Regist
//
const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: #E8ECEF;
`;
const Block = styled.div`
    display: flex;
    padding: 20px;
    flex-direction: column;
    justify-content: space-between;
    width: 600px;
    min-height: 400px;
    border: 1px solid #E9E9EA;
    border-radius: 10px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0 14px 34px rgba(0, 0, 0, 0.2);
    background-color: #fff;
`;
