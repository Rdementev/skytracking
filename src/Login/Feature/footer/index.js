import React, {useEffect} from 'react'
import {connect} from "react-redux";
import styled from 'styled-components/macro'
import Button from "../../Components/buttons";


const FooterLogin = (props) => {
    const {setSend} = props
    const handleClick = () => {
        setSend(true)
    }

    return (
        <StyledFooterLogin>
            <Button onCLick={handleClick}>
                Войти
            </Button>
        </StyledFooterLogin>
    )
}

export default connect()(FooterLogin)
//

const StyledFooterLogin = styled.div`
    padding-top: 20px;
    border-top: 1px solid #eeeeef;
`;

