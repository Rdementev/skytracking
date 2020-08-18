import React from 'react'
import styled from 'styled-components/macro'


const ModuleActionButton = (props) => {
    const {onClick, title, icon:Icon, styled, action} = props

    return (
          <StyledButton styled={styled && styled.button} onClick={()=>{onClick(action)}} >
            {title}
              <BlockIcon styled={styled && styled.blockIcon}>
                {Icon ? Icon : ''}
              </BlockIcon>
          </StyledButton>
    )
}

export default ModuleActionButton
//

const BlockIcon = styled.div`
    width: 22px;
    background: #3C939C;
    box-shadow: 0 4px 10px rgba(0,0,0, 0.1);
    height: 22px;
    border-radius: 4px;
    display: flex;
    margin-left: 10px;
    transition: ease 0.4s;
    & > svg {
      margin: auto;
      transition: ease 0.4s;
    }
    & > svg > g{
      transition: ease 0.4s;
      fill: #C3DDDF;
    }
    & > svg > path{
      transition: ease 0.4s;
      fill: #C3DDDF;
    }

    & > div {
      margin: auto;
    }
     ${({styled}) => styled}
`;

const StyledButton = styled.div`
    padding: 2px 2px 2px 10px;
    margin-right: 5px;
    border-radius: 4px;
    height: 100%;
    font-weight: 500;
    font-size: 12px;
    letter-spacing: 0;
    color: #ffffffb3;
    background: #388D96;
    border: 1px solid transparent;
    white-space: nowrap;
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: 0.4s ease;
    cursor: pointer;
    &:hover {
      border-color: #5DB3BC;
       color: #fff;
       & > ${BlockIcon} {
       & >svg > g{
        fill: #fff;
       }
       & >svg > path{
        fill: #fff;
       }
       }
    }
    &:active {
      background: #226D75;
      border-color: transparent;
      & > ${BlockIcon} {
      background: #114B51;
      }

    }
    ${({styled}) => styled}
`;
