import React from 'react'
import styled from "styled-components/macro";


const MainNavigationBar = (props) => {
  const { styled, children } = props
  return (
    <Container styled={styled}>
      {children}
    </Container>
  )
}
export default MainNavigationBar
//
const Container = styled.div`
  display: flex;
  align-items: center;
  height: 43px;
  background: #2E828B;
  width: 100%;
  padding: 3px 17px 12px;
  ${({styled}) => styled}
`;
