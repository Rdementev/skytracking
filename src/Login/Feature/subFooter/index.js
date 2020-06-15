import React from 'react'
import styled from 'styled-components/macro'

const SubFooter = (props) => {
  const { onClick } =props
  return (
    <Block onClick={(e)=>{onClick(true)}}>Создать аккаунт</Block>
  )
}

export default SubFooter
//
const Block = styled.div`
    max-width: 120px;
    margin: 0 auto;
    padding: 5px 0;
    white-space: nowrap;
    border-bottom: 1px solid transparent;
    cursor: pointer;
    transition: ease 0.4s;

    &:hover {
      border-color: #294493;
    }
`;
