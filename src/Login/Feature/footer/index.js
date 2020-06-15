import React from 'react'
import styled from 'styled-components/macro'
import Button from "../../Components/buttons";


const FooterLogin = (props) => {
    const {onClick, email, password} = props
    const handleClick = () => {
      debugger
      onClick(email, password)
    }

    return (
        <StyledFooterLogin>
            <Button onClick={handleClick}>
                Войти
            </Button>
        </StyledFooterLogin>
    )
}

export default FooterLogin
//

const StyledFooterLogin = styled.div`
    padding-top: 20px;
    border-top: 1px solid #eeeeef;
`;

