import React, {useEffect, useRef, useState} from 'react'
import styled from 'styled-components/macro'
import {ModuleInput} from "../Input";
import CloseIcon from './closeIcon.js'
import {transparentize} from "../utils/transparentize";
import Done from "./SearchIcon";

const SelectSearch = (props) => {
  const {list, multi, placeholder, onClick, fill, styled, displayValue, onClickClear} = props
  const [showList, setShowList] = useState(false)
  const [result, setResult] = useState([])
  const [value, setValue] = useState('')
  const [selected, setSelected] = useState({})

  const ListRef = useRef(null)
  const SearchRef = useRef(null)

  useEffect(() => {
    document.addEventListener('click', handleClickOutSide, false)
    return function () {
      document.removeEventListener('click', handleClickOutSide, false)
    }
  })
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


  const handleClickOutSide = (e) => {
    const item = SearchRef.current
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
  const handleClickClear = () => {
    setValue('')
    setSelected([])
    onClickClear()
  }

  const getSuggestionsList = () => {
   if (result.length < 1) return <ItemName styled={styled} style={{textAlign: 'center'}}>Данных нет</ItemName>
    return result.map(item => {
      if (item.type === 'group') {
        return (
          <Group styled={styled}>
              <ItemGroup styled={styled}>
                {item.name}
              </ItemGroup>
            {item.items.map(elem => {
              return (
                <ItemName styled={styled}
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
        <ItemName styled={styled}
                  isActive={selected.id === item.id ? true : false}
                  onClick={() => {handleClickItem(item)}}>
          {item.name}
        </ItemName>
      )
    })
  }

  return (
    <StyledContainer styled={styled} ref={SearchRef}>
        <ButtonSelect styled={styled} onClick={(e) => {handleClickOpen()}} >
          {displayValue}
          <BlockIcon  styled={styled} fill={fill}  >
            <IconArrow  />
          </BlockIcon>
        </ButtonSelect>
      {showList &&
      <List styled={styled}>
        <BlockInput styled={styled} >
          <ModuleInput placeholder={placeholder}
                       styled={styled.input}
                       value={value}
                       onChange={(e) => {setValue(e.target.value)}}/>
          { value && onClickClear &&  <BlockIconInput styled={styled}
                           value={value ? true : false}
                                     fill={fill}
                           onClick={(e) => {handleClickClear()}}
                           first={false}>
            <IconClose fill={fill}/>
          </BlockIconInput>}
          <BlockIconInput styled={styled}
                          value={value ? true : false}
                          first={true}
                          fill={fill}
                          onClick={(e) => {handleClickOpen()}}
                          showList={showList}>
            <IconArrow fill={fill} showList={showList} />
          </BlockIconInput>
        </BlockInput>
        <Suggestion ref={ListRef} styled={styled}>
          {getSuggestionsList()}
        </Suggestion>
      </List>
      }

    </StyledContainer>
  )
}
export default SelectSearch
//
const IconArrow = styled(Done)`


`;
const IconClose = styled(CloseIcon)`

      width: 6px;
      height: 6px;

`;

const BlockInput = styled.div`
    position: relative;
    & > input {
      border-radius: 5px;
    }
   ${({styled}) => styled && styled.blockInput ? styled.blockInput  : ''}
`;

const ButtonSelect = styled.div`
    height: 32px;
    border-radius: 4px;
    background: #2e4c9f;
    border: 1px solid #3857ae;
    align-items: center;
    display: flex;
    color: #fff;
    cursor: pointer;

    ${({styled}) => styled && styled.buttonSelect ? styled.buttonSelect  : ''}
`;
const StyledContainer = styled.div`
    position: relative;
    width: 100%;
    ${({styled}) => styled && styled.styledContainer ? styled.styledContainer  : ''}
`;
const BlockIcon = styled.div`
    display: flex;
    max-width: 30px;
    margin-left: auto;
    width: 100%;
    height: 100%;
    cursor: pointer;

    & > ${IconArrow} {
      width: 10px;
      height: 10px;
    }

    & > svg {
      margin: auto;
      transform: ${({showList}) => showList ? 'rotate(180deg)' : 'none'} ;


    }
    & > svg > path {
      fill: ${({fill}) => fill ? transparentize(1, fill) : transparentize(0.7, '#000')};
      z-index: 1;
    }
    ${({styled}) => styled && styled.blockIcon ? styled.blockIcon : ''}

`;

const BlockIconInput = styled(BlockIcon)`
    position: absolute;
    top: 50%;
    right: 0;
    width: ${({first}) => !first ? '14px' : ''} ;
    height: ${({first}) => !first ? '14px' : '30px'} ;
    margin-right: ${({first}) => !first ? '9px' : ''} ;
    border: ${({first}) => !first ? '1px solid #6685d9' : ''};
    padding: ${({first}) => !first ? '0' : ''};
    background: ${({first}) => !first ? '#294493' : ''} ;
    border-radius: ${({first}) => !first ? '50%' : ''};
    transform: ${({first}) => first ? 'translate(-2px,-50%)' : 'translate(-30px,-50%)'} ;
    border-left: ${({value, first}) => value && first ? '1px solid #6786DA' : ''}  ;
    transition: ease 0.3s;
    &:hover {
      box-shadow: ${({first}) => !first ? ' 0 4px 6px rgba(0, 0, 0, 0.2)' : ''}
    }
    ${({styled}) => styled && styled.blockIconInput ? styled.blockIconInput  : ''}
`;
const List = styled.div`
    position: absolute;
    top: 0;
    width: 100%;
    ${({styled}) => styled && styled.list ? styled.list  : ''}
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
    ${({styled}) => styled && styled.suggestion ? styled.suggestion : ''}
`;
const Group = styled.div`
    ${({styled}) => styled && styled.group ? styled.group : ''}
`;
const ItemGroup = styled.div`
    padding: 10px;
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 0.3em;
    ${({styled}) => styled && styled.itemGroup ? styled.itemGroup : ''}

`;
const ItemName = styled.li`
    font-size: 12px;
    cursor: pointer;
    text-overflow: ellipsis;
    padding: 10px 20px 10px 10px;
    line-height: 13px;
    background-color: ${({isActive}) => isActive ? 'rgba(255,255,255,0.1)' : '#4361B8'};
    &:hover{
      background-color: #4361B8;
    }
    ${({styled}) => styled && styled.itemName ? styled.itemName : ''}

`;


