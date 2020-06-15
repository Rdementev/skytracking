import React, {useEffect} from 'react'
import styled from 'styled-components/macro'
import Input from "../../Components/input/inputComponent";


const BodyLogin = (props) => {
    const {email, password , setEmail, setPassword} = props
    debugger
    return (
        <SectionLogin>
            <Block>
                <Text>E-mail</Text>
                <Input value={email} onChange={(e)=>{setEmail(e.target.value)}} type={'text'}/>
            </Block>
            <Block>
                <Text>Пароль</Text>
                <Input password={password} onChange={(e)=>{setPassword(e.target.value)}} type={'password'}/>
            </Block>
        </SectionLogin>
    )
}

export default BodyLogin
//

const SectionLogin = styled.div`

`;
const Block = styled.div`
    padding: 20px 0;
`;
const  Text = styled.h5`
    margin-bottom: 15px;
`;


