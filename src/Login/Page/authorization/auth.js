import React from 'react'
import styled from 'styled-components/macro'
import HeaderLogin from "../../Feature/header";
import FooterLogin from "../../Feature/footer";
import BodyLogin from "../../Feature/bodyLogin";


const Auth = (props) => {
    const { email, password, setEmail, setPassword, onClick} = props
    return (
        <Container>
        <Block>
            <HeaderLogin title={'AR document manager'}/>
            <BodyLogin email={email}
                       setEmail={setEmail}
                       setPassword={setPassword}
                       password={password}/>
            <FooterLogin onClick={onClick}
                         email={email}
                         password={password}/>
        </Block>
        </Container>
    )
}

export default Auth
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
    height: 400px;
    border: 1px solid #E9E9EA;
    border-radius: 10px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0 14px 34px rgba(0, 0, 0, 0.2);
    background-color: #fff;
`;



