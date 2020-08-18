import React from "react";
import styled from 'styled-components/macro'
import Icon from './icon'
const HorizontMenu = (props) => {
  const {onClick, styled, list, other, activeId = 2} = props

  const StyleBlockItem = styled && styled.BlockItem
  const StyleBlockIcon = styled && styled.BlockIcon
  const StyleBlockTitle = styled && styled.Title
  const StyleContainer = styled && styled.Container

  const getContent = (list) => {
    return list.map(item => {
      const active = item.id === activeId
      if(item.order === 1){
        return (
          <BlockItemMain active={active} onClick={()=>{onClick &&  onClick(item,other)}} styled={StyleBlockItem}>
            {item.icon
              ? <BlockIconMain styled={StyleBlockIcon}>{item.icon}</BlockIconMain>
              : <BlockIconDefaultMain active={active}><Icon /></BlockIconDefaultMain>
            }
            <BlockTitleMain styled={StyleBlockTitle}>
              {item.title}
            </BlockTitleMain>
          </BlockItemMain>
        )
      }
      return (
        <BlockItem active={active} onClick={()=>{onClick &&  onClick(item,other)}} styled={StyleBlockItem}>
          {item.icon
            ? <BlockIcon styled={StyleBlockIcon}>{item.icon}</BlockIcon>
            : <BlockIconDefault active={active}><Icon /></BlockIconDefault>
          }
          <BlockTitle styled={StyleBlockTitle}>
            {item.title}
          </BlockTitle>
        </BlockItem>
      )
    })
  }


  return (
    <Container styled={StyleContainer}>
      {getContent(list)}
    </Container>
  )
}

export default HorizontMenu
//
const Container = styled.div`
  display: flex;
  padding: 10px;
  ${({styled}) => styled}
`;

const BlockIconDefault = styled.div`
    transition: ease 0.3s;
    margin-right: 10px;
    & > svg > path {
      transition: ease 0.3s;
      fill: ${({active}) => active ? '#fff' : ''};
    }

`;
const BlockTitle = styled.div`

  ${({styled}) => styled}
`;
const BlockIcon = styled.div`
  transition: ease 0.3s;
  display: flex;
  margin-right: 10px;
  width: 10px;
  height: 10px;
  & > svg {
    transition: ease 0.3s;
    width: 100%;
    height: 100%;
    margin: auto;
  }
  ${({styled}) => styled}
`;
const BlockItem = styled.div`
  display: flex;
  padding: 10px;
  font-size: 14px;
  max-height: 32px;
  line-height: 9px;
  border: 1px solid transparent;
  transition: ease 0.3s;
  cursor: ${({active}) => active ? 'default' : ' pointer'};
  background: ${({active}) => active ? '#2E828B' : '#F4F4F4'};
  box-shadow: ${({active}) => active ? '0 6px 19px  rgba(46,130,139, 0.24)' : ''};
  color: ${({active}) => active ? '#fff' : '#676F83'};
  border-radius: 4px;
  &:not(:last-child){
    margin-right: 5px;
  }
  &:hover {
    color:  ${({active}) => active ? '' : '#2E828B'};
    border-color: ${({active}) => active ? '' :' #2E828B'};
  }
  &:hover > ${BlockIconDefault} > svg > path {
   fill: ${({active}) => active ? '#fff' : '#2E828B'};
  }
  ${({styled}) => styled}
`;
