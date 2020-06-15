import React from 'react'
import styled from 'styled-components/macro'


const Header = (props) => {
    return (
        <StyledHeaderLogin>
            <LoginTitle>
                {props.title}
            </LoginTitle>
        </StyledHeaderLogin>
    )
}

export default Header
//

const StyledHeaderLogin = styled.div`
    width: 100%;
    padding-bottom: 12px;
    border-bottom: 1px solid #E9E9EA;
    text-align: center;
`;
const LoginTitle = styled.h3`
    margin: 0;
    text-transform: uppercase;
    font-weight: 400;
    letter-spacing: 1em;
`;


