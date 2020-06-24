import React, {useEffect, useRef, useState} from 'react'
import styled from 'styled-components/macro'
import {ModuleInput} from "../Input";
import Icon from './SearchIcon.jsx'
import {transparentize} from "../utils/transparentize";

const SelectSearch = (props) => {
  const {list, multi, placeholder, onClick, fill, styleList, displayValue} = props
  const [showList, setShowList] = useState(false)
  const [result, setResult] = useState([])
  const [value, setValue] = useState('')
  const [selected, setSelected] = useState([])

  const ListRef = useRef(null)

  useEffect(() => {
    document.addEventListener('click', handleClickOutSide, false)
    return function () {
      document.removeEventListener('click', handleClickOutSide, false)
    }
  })

  useEffect(()=>{
    setValue('')
  },[showList])


  useEffect(() => {
    if (list && list.length > 0) {
      const actual = list.filter(item => {
        if (item.type === 'group') {
          return item.items.filter(elem => elem.name.toLowerCase().includes(value.toLowerCase()))
        }
        return item.name.toLowerCase().includes(value.toLowerCase())
      })
      setResult(actual)
    }
  }, [value, list])

  useEffect(() => {
    setResult(list)
  }, [showList])

  const handleClickOutSide = (e) => {
    const item = ListRef.current
    if (e.path) {
      if (!e.path.includes(item)) {
        setShowList(false)
      }
    }
  }

  const handleClickItem = (item) => {
    setValue(item.name)
    setShowList(false)
    const select = [item]
    if (onClick) onClick(select, multi)

    if(multi){
      const newSelected = [...selected, item]
      setSelected(newSelected)
    } else {
      setSelected(item)
    }
  }

  const handleClickOpen = () => {
    setShowList(!showList)
  }

  const getSuggestionsList = () => {
    if (result.length < 1) return <ItemName styleList={styleList} style={{textAlign: 'center'}}>Данных нет</ItemName>
    return result.map(item => {
      if (item.type === 'group') {
        return (
          <Group styleList={styleList}>
              <ItemGroup styleList={styleList}>
                {item.name}
              </ItemGroup>
            {item.items.map(elem => {
              return (
                <ItemName styleList={styleList}
                          isActive={selected.id === elem.id ? true : false}
                          onClick={() => {handleClickItem(elem)}}>
                  {elem.name}
                </ItemName>
              )
            })}
          </Group>
        )
      }
      return (
        <ItemName styleList={styleList}
                  isActive={selected.id === item.id ? true : false}
                  onClick={() => {handleClickItem(item)}}>
          {item.name}
        </ItemName>
      )
    })
  }

  return (
    <StyledContainer ref={ListRef}>
        <ButtonSelect >
          {displayValue}
          <BlockIcon onClick={(e) => {handleClickOpen()}} showList={showList} fill={fill}>
            <Icon/>
          </BlockIcon>
        </ButtonSelect>
      {showList &&
      <List>
        <BlockInput>
          <ModuleInput placeholder={placeholder}
                       value={value}
                       onChange={(e) => {setValue(e.target.value)}}/>
          <BlockIcon onClick={(e) => {handleClickOpen()}} showList={showList} fill={fill}>
            <Icon/>
          </BlockIcon>
        </BlockInput>
        <Suggestion styleList={styleList}>
          {getSuggestionsList()}
        </Suggestion>
      </List>
      }

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
const ButtonSelect = styled.div`
    height: 32px;
    border-radius: 4px;
    background: #2e4c9f;
    border: 1px solid #3857ae;
    align-items: center;
    display: flex;
    padding: 12px;
    color: #fff;
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
      transform: ${({showList}) => showList ? 'rotate(180deg)' : 'none'} ;
      width: 15px;
      height: 15px;
      fill: ${({fill}) => fill ? transparentize(0.7, fill) : transparentize(0.7, '#000')};
      stroke: ${({fill}) => fill ? fill : transparentize(0.7, '#000')};

    }
    & > svg > path {
      fill: ${({fill}) => fill ? transparentize(0.7, fill) : transparentize(0.7, '#000')};
      z-index: 1;
      stroke: ${({fill}) => fill ? transparentize(0.7, fill) : transparentize(0.7, '#000')};

    }

    & > svg:hover > path {
      fill: ${({fill}) => fill ? fill : transparentize(0.7, '#000')};
      stroke: ${({fill}) => fill ? fill : transparentize(0.7, '#000')};
    }
`;
const List = styled.div`
    position: absolute;
    top: 0;
    width: 100%;
`;
const Suggestion = styled.div`
    width: 100%;
    margin-top: 10px;
    box-shadow: 0 4px 14px rgba(0, 0, 0, 0.16);
    border-radius: 5px;
    position: absolute;
    z-index: 1;
    background: ${props => props.theme && props.theme.list ? props.theme.list : '#fff'};
    line-height: 13px;
    ${({styleList}) => styleList && styleList.suggestion ? styleList.suggestion : ''}
`;
const Group = styled.div`
    ${({styleList}) => styleList && styleList.group ? styleList.group : ''}
`;
const ItemGroup = styled.div`
    padding: 10px;
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 0.3em;
    ${({styleList}) => styleList && styleList.itemGroup ? styleList.itemGroup : ''}

`;
const ItemName = styled.li`
    font-size: 12px;
    cursor: pointer;
    text-overflow: ellipsis;
    padding: 10px 20px 10px 10px;
    line-height: 13px;
    background-color: ${({isActive}) => isActive ? '#284493' : '#4361B8'};
    &:hover{
      background-color: #4361B8;
    }
    ${({styleList}) => styleList && styleList.itemName ? styleList.itemName : ''}

`;
