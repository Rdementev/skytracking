import React, {useEffect, useRef, useState} from 'react'
import styled from 'styled-components/macro'
import {ModuleInput} from "../Input";
import  Icon from './SearchIcon.jsx'

const SelectSearch = (props) => {
  const { list = [], multi = false, placeholder = 'Поиск', onClick } =  props
  const [showList , setShowList] = useState(false)
  const [result, setResult] = useState([])
  const [value, setValue] = useState('')
  const [selected, setSelected] = useState('')

  const ListRef = useRef(null)

  useEffect(()=>{
    document.addEventListener('click', handleClickOutSide, false)
    return function () {
      document.removeEventListener('click', handleClickOutSide, false)
    }
  })


  useEffect(()=>{
    if(list && list.length > 0) {
      const actual = list.filter(item => {
        if(item.type === 'group'){
          return item.items.filter(elem => elem.name.toLowerCase().includes(value.toLowerCase()))
        }  return item.name.toLowerCase().includes(value.toLowerCase())
      })
      setResult(actual)
    }
  },[value, list])

  useEffect(()=>{
    setResult(list)
  },[showList])

  const handleClickOutSide = (e) => {
    const item = ListRef.current
    if(e.path){
      if(!e.path.includes(item)){
        setShowList(false)
      }
    }
  }

  const handleClickItem = (item, elem) => {
    setValue(elem ? elem.name : item.name)
    setShowList(false)
    if(onClick) onClick(item, elem)
  }

  const handleClickOpen = () => {
    setShowList(!showList)
  }

  const getSuggestionsList = () => {
    if(result.length < 1) return <ItemName style={{textAlign: 'center'}}>Данных нет</ItemName>
    return result.map(item => {
      if(item.type === 'group'){
        return (
          <Group>
            <ItemGroup>
              {item.name}
            </ItemGroup>
            {item.items.map(elem => {
              return (
                <ItemName onClick={()=>{handleClickItem(item, elem)}}>
                  {elem.name}
                </ItemName>
              )
            })}

          </Group>
        )
      }
      return (
        <ItemName onClick={()=>{handleClickItem(item)}}>
          {item.name}
        </ItemName>
      )
    })
  }

  return (
    <StyledContainer ref={ListRef}>
    <BlockInput >
      <ModuleInput placeholder={placeholder}
             value={value}
             onChange={(e)=>{setValue(e.target.value)}}/>
      <BlockIcon onClick={(e) => {handleClickOpen()}} showList={showList}>
       <Icon />
      </BlockIcon>
    </BlockInput>
      {showList && <List >
        {getSuggestionsList()}
      </List>}
    </StyledContainer>
  )
}
export default SelectSearch
//
const BlockInput = styled.div`
    position: relative;
   & > input {
    border-radius: 5px;
   }
`;
const StyledContainer = styled.div`
    position: relative;
    width: 100%;
`;
const BlockIcon = styled.div`
    display: flex;
    position: absolute;
    top: 50%;
    right: 0;
    cursor: pointer;
    transform: translate(-10px, -50%);
    & > svg {
      margin: auto;
      transform: ${({showList}) => showList ? 'rotate(180deg)' : 'none' } ;
      width: 15px;
      height: 15px;

    }
    & > svg > path {
      fill: rgba(0,0,0,0.7);
      z-index: 1;
    }

    & > svg:hover > path {
      fill: rgb(0,0,0);
      stroke: rgb(0,0,0);
    }
`;
const List = styled.div`
    width: 100%;
    margin-top: 10px;
    box-shadow: 0 4px 14px rgba(0, 0, 0, 0.16);
    border-radius: 5px;
    padding: 10px 0;
    position: absolute;
    z-index: 1;
    background: #fff;
    line-height: 13px;
`;
const Group = styled.div`

`;
const ItemGroup = styled.div`
    padding: 10px;
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 0.3em;
    background: #2b2a520f;
`;
const ItemName = styled.li`
    font-size: 12px;
    cursor: pointer;
    background: #fff;
    text-overflow: ellipsis;
    padding: 10px 20px 10px 10px;
    line-height: 13px;
    &:hover{
      background-color: #F5F5F5;
    }
`;
