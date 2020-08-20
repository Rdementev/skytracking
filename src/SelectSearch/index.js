import React, {useEffect, useRef, useState} from 'react'
import styled from 'styled-components/macro'
import {ModuleInput} from "../Input";
import CloseIcon from './closeIcon.js'
import {transparentize} from "../utils/transparentize";
import Done from "./SearchIcon";

const SelectSearch = (props) => {
  const {list, multi, placeholder, onClick, fill, styled, displayValue, onClickClear, other, search, suggestionButton} = props
  const [showList, setShowList] = useState(false)
  const [itemIndex, setItemIndex] = useState(0)
  const [result, setResult] = useState(list)
  const [value, setValue] = useState('')
  const [selected, setSelected] = useState({})
  const ListRef = useRef(null)
  const SearchRef = useRef(null)



  const styleInput = {

      borderRadius: '4px 4px 0 0',
      backgroundColor: '#388D96',
      borderColor: '#5DB3BC',
      borderBottomColor: 'transparent',
      color: '#fff',
      "::placeholder" : {
        color: 'rgba(255,255,255,0.7)'
      },
      '&:hover': {
        borderColor: '#5DB3BC',
        color: '#fff',
        borderBottomColor: 'transparent',
      },
      '&:focus': {
        borderColor: '#5DB3BC',
        color: '#fff',
        borderBottomColor: 'transparent',
      }

  }
  const getStyleInput = (styled) => {
    if(styled && styled.input){
      Object.keys(styleInput).map(item => {
        Object.keys(styled.input).map(elem => {
          if(item === elem){
            styleInput[item]= styled.input[elem]
          }
        })
      })
    }
    return styleInput
  }

  useEffect(() => {
    document.addEventListener('click', handleClickOutSide, false)
    return function () {
      document.removeEventListener('click', handleClickOutSide, false)
    }
  },[])

  useEffect(()=>{
    setResult(list)
  },[list])

  useEffect(() => {
    if (list && list.length > 0 && search) {
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
    if (onClick) onClick(select, multi, other)

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
  const getSuggestionsSoloList = () => {
   if (result.length < 1) return <ItemName styled={styled} style={{textAlign: 'center', fontSize: '12px'}}>Данных нет</ItemName>
    return result.map((item, i) => {
      const sel = itemIndex === i
      if (item.type === 'group') {
        return (
          <Group styled={styled}>
              <ItemGroup styled={styled}>
                {item.name}
              </ItemGroup>
            {item.items.map(elem => {
              return (
                <ItemBlock styled={styled}
                           onClick={() => {handleClickItem(elem)}}
                           isActive={selected.id === elem.id }>
                  {item.icon && <BlockIconItem styled={styled}>
                    {item.icon}
                  </BlockIconItem>}
                <ItemName styled={styled}>
                  {elem.name}
                </ItemName>
                </ItemBlock>
              )
            })}
          </Group>
        )
      }
      return (
        <ItemBlock styled={styled}
                   sel={sel}
                   onMouseEnter={(e)=>{setItemIndex(i)}}
                   isActive={selected.id === item.id}
                   onClick={() => {handleClickItem(item)}}>
          {item.icon && <BlockIconItem styled={styled}>
            {item.icon}
          </BlockIconItem>}
          <ItemName styled={styled}>
            {item.name}
          </ItemName>
        </ItemBlock>
      )
    })
  }
  const getSuggestionsMultiList = () => {
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
                <ItemBlock styled={styled}
                           onClick={() => {handleClickItem(elem)}}
                           isActive={selected.id === elem.id}>
                  {item.icon && <BlockIconItem styled={styled}>
                    {item.icon}
                  </BlockIconItem>}
                  <ItemName styled={styled}>
                    {elem.name}
                  </ItemName>
                </ItemBlock>
              )
            })}
          </Group>
        )
      }
      return (
        <ItemBlock styled={styled}
                   isActive={selected.id === item.id}
                   onClick={() => {handleClickItem(item)}}>
          {item.icon && <BlockIconItem styled={styled}>
            {item.icon}
          </BlockIconItem>}
          <ItemName styled={styled}>
            {item.name}
          </ItemName>
        </ItemBlock>
      )
    })
  }

  return (
    <StyledContainer styled={styled} ref={SearchRef}>
        <ButtonSelect styled={styled} onClick={(e) => {handleClickOpen()}} >
          <ButtonSpan styled={styled}>
            {displayValue}
          </ButtonSpan>
          <BlockIcon  styled={styled}  >
            <IconArrow  />
          </BlockIcon>
        </ButtonSelect>
      {showList &&
      <List styled={styled}>
        <BlockInput styled={styled}>
          <ModuleInput placeholder={placeholder}
                       styled={getStyleInput(styled)}
                       value={value}
                       autoFocus={true}
                       onChange={(e) => {setValue(e.target.value)}}/>

          { value && onClickClear &&
          <BlockClear onClick={() => {handleClickClear()}} styled={styled ? styled.blockClear : ''}>
            <BlockIconClear styled={styled ? styled.blockIconClear : ''}>
              <CloseIcon/>
            </BlockIconClear>
          </BlockClear>}
          <BlockIconInput styled={styled}
                          value={value ? true : false}
                          first={true}
                          fill={fill}
                          onClick={(e) => {handleClickOpen()}}
                          showList={showList}>
            <IconArrow  showList={showList} />
          </BlockIconInput>
        </BlockInput>
        <SuggestionContainer styled={styled}>
          <Suggestion ref={ListRef} styled={styled}>
            {multi ? getSuggestionsMultiList : getSuggestionsSoloList()}
            {multi && <SuggestionButtonContainer>
              {suggestionButton}
            </SuggestionButtonContainer>}
          </Suggestion>
        </SuggestionContainer>

      </List>
      }

    </StyledContainer>
  )
}
export default SelectSearch
//
const IconArrow = styled(Done)`
    width: 10px;
    height: 10px;


`;
const BlockInput = styled.div`
    position: relative;
    height: 28px;
   ${({styled}) => styled && styled.blockInput ? styled.blockInput  : ''}
`;
const BlockIcon = styled.div`
    display: flex;
    transform: rotate(-90deg);
    margin-left: auto;
    cursor: pointer;
    & > ${IconArrow} {
      width: 6px;
      height: 3px;

    }

    & > svg {
      width: 7px;
      height: 7px;
      margin: auto;
      transform: ${({showList}) => showList ? 'rotate(180deg)' : 'none'} ;
    }

    & > svg > path {
    transition: ease 0.4s;
    fill: ${({showList}) => showList ? '#fff' : '#ffffffb3'};
    z-index: 1;
    }
    ${({styled}) => styled && styled.blockIcon ? styled.blockIcon : ''}

`;
const ButtonSelect = styled.div`
    height: 100%;
    font-weight: 500;
    font-size: 12px;
    letter-spacing: 0;
    color: #ffffffb3;
    border-radius: 4px;
    padding: 5px 8px 5px 10px;
    background: #388D96;
    border: 1px solid transparent;
    align-items: center;
    display: flex;
    cursor: pointer;
    transition: ease 0.4s;
    &:hover {
      color: #fff;
      border-color: #5DB3BC;
    }
    &:hover > ${BlockIcon} > svg > path {

      fill: #fff;
    }

    ${({styled}) => styled && styled.buttonSelect ? styled.buttonSelect  : ''}
`;
const ButtonSpan = styled.span`
    width: 100%;
    white-space: nowrap;
    overflow:hidden;
    text-overflow: ellipsis;

    ${({styled}) => styled && styled.buttonSpan ? styled.buttonSpan  : ''}
`;
const StyledContainer = styled.div`
    position: relative;
    height: 100%;
    width: 100%;
    ${({styled}) => styled && styled.styledContainer ? styled.styledContainer  : ''}
`;

const BlockIconInput = styled(BlockIcon)`
    position: absolute;
    top: 50%;
    right: 10px;
    transform: rotate(180deg) translate(0, 50%);
    border-left: ${({value}) => value ? '1px solid transparent' : ''}  ;
    border: #5DB3BC;
    transition: ease 0.3s;

    ${({styled}) => styled && styled.blockIconInput ? styled.blockIconInput  : ''}
`;
const BlockIconItem = styled.div`
    width: 15px ;
    height: 15px;
    display: flex;
    padding: 0;
    overflow: hidden;
    margin-right: 10px;
    & > * {
      width: 100%;
      height: 100%;
      margin: auto;
    }
    ${({styled}) => styled && styled.blockIconItem ? styled.blockIconItem  : ''}
`;
const BlockClear = styled.div`
    position: absolute;
    top: 50%;
    right: 22px;
    transform: translate(0, -50%);
    bottom: 1px;
    width: 14px;
    height: 14px;
    display: flex;

      ${({styled}) => styled}
`;
const BlockIconClear = styled.div`
    display: flex;
    margin: auto;
    width: 100%;
    height: 100%;
    background: #226D75;
    border-radius: 50%;
    cursor: pointer;
    border: 1px solid transparent;
    transition: ease 0.3s;
    &:hover {
      box-shadow: 0 0 0 1px #5DB3BC;

    }
    &:active {
      box-shadow: 0 0 0 1px #5DB3BC;
      background: #114B51;
    }
    & > svg {
        margin: auto;
    }
  ${({styled}) => styled}

`;
const List = styled.div`
    position: absolute;
    top: 0;
    width: 100%;
    ${({styled}) => styled && styled.list ? styled.list  : ''}
`;
const SuggestionContainer = styled.div`
    width: 100%;
    top: 97%;

    box-shadow: 0 4px 14px rgba(0,0,0,0.16);
    background: #388D96;
    z-index: 1;
    border-radius: 0 0 4px 4px;
    padding: 2px;
    border: 1px solid;
    border-color: #5DB3BC;
    margin: 0;
    color: rgba(255,255,255,0.7);

    ${({styled}) => styled && styled.suggestionContainer ? styled.suggestionContainer  : ''}
`;
const Suggestion = styled.div`
    width: 100%;
    top: 97%;
    overflow: auto;
    padding: 3px;
    background: #388D96;
    z-index: 1;
    margin: 0;
    color: rgba(255,255,255,0.7);
    max-height: 120px;

    ::-webkit-scrollbar {
     width: 4px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
      border-radius: 3px;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      border-radius: 3px;
      background: #f3f5fc80
    }

    ::-webkit-scrollbar-thumb:hover{
      background: #F2F5FC;
    }


    ${({styled}) => styled && styled.suggestion ? styled.suggestion : ''}
`;
const SuggestionButtonContainer = styled.div`
    ${({styled}) => styled && styled.SuggestionButtonContainer ? styled.SuggestionButtonContainer : ''}
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
    cursor: pointer;
    text-overflow: ellipsis;
    overflow: hidden;
    font-size: 12px;
    width: 100%;
    ${({styled}) => styled && styled.itemName ? styled.itemName : ''};
`;
const ItemBlock = styled.div`
    border-radius: 2px;
    cursor: pointer;
    text-overflow: ellipsis;
    display: flex;
    align-items: center;
    padding: 5px;
    font-size: 10px;
    &:hover{
      background-color: #ffffff1a;
    }
    ${({styled}) => styled && styled.itemBlock ? styled.itemBlock : ''};
    background-color: ${({isActive, sel}) => isActive || sel ? 'rgba(255,255,255,0.1)' : ''};

`;


