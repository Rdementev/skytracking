import React from 'react'
import styled from 'styled-components/macro'


const ModuleActionButton = (props) => {
    const {onClick, title, icon:Icon, styled, action} = props

    return (
          <StyledButton styled={styled && styled.button} onClick={()=>{onClick(action)}} >
            {title}
              <BlockIcon styled={styled && styled.blockIcon}>
                {Icon ? <Icon /> : <div>+</div>}
              </BlockIcon>
          </StyledButton>
    )
}

export default ModuleActionButton
//
const StyledButton = styled.div`
    padding: 2px 2px 2px 12px;
    margin-right: 10px;
    border-radius: 4px;
    height: 100%;
    white-space: nowrap;
    display: flex;
    align-items: center;
    min-width: 180px;
    justify-content: space-between;
    transition: 0.4s ease;
    &:hover {

    }
    ${({styled}) => styled}
`;
const BlockIcon = styled.div`
    width: 28px;
    height: 28px;
    border-radius: 4px;
    display: flex;
    margin-left: 10px;
    & > svg {
      margin: auto;
    }
    & > div {
      margin: auto;
    }
     ${({styled}) => styled}
`;
