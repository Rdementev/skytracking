import React, {useState} from 'react'

import {BaseFormLogin, BreadCrumb, SelectSearch, SearchBlock} from 'libar'
import 'libar/dist/index.css'
import {compose} from "redux";
import {withRouter} from "react-router-dom";
import styled from 'styled-components/macro'
const App = (props) => {
  const {history} = props
  const [searchBlockValue, setSearchBlockValue] = useState('')
  const [displayValue, setDisplayValue] = useState('Панели')

  const handleClickLink = (link) => {
    history.push(link)
  }
  const a = 'test'
  const bredcrumb = [
    {
      title: 'запросы',
      link: '/serves',
    },
    {
      title: 'запрос запросов',
      link: '/serves/create-document',
    },
    {
      title: `${a}`,
      link: '/123213213',
    },

  ]

  const options = [
    {name: 'test 1', value: 'sv', id:1, icon: 'default'},
    {name: 'test 2', value: 'en', id:2, icon: 'default'},
    {name: 'test 3', value: 'en', id:3, icon: 'default'},
    {name: 'test 4', value: 'en', id:4, icon: 'default'},
  ];

  const styleList = {
    list: {
      backgroundColor : '#4361B8',
    },
    suggestion : {
      background : '#4361B8',
      borderRadius: '0',
      border: '1px solid #6786DA',
      margin: '0',
      top: '92%',
      borderBottomRightRadius: '4px',
      borderBottomLeftRadius: '4px',
      color: '#FFFFFF',
      maxHeight: '120px',
      overflow: 'scroll',
    },
    group : {

    },
    itemGroup : {

    },
    itemName : {
      fontSize: '10px',
      padding: '6px 12px'
    },
  }
  const templates = {
    'default': 'icon'
  }

  const handleClickItem = (selected, multi) => {
    if(!multi){
      setDisplayValue(
        <DisplayValue>
          <div>{selected[0].icon}</div>
          <div>{selected[0].name}</div>
          <div>{selected[0].value}</div>
        </DisplayValue>
      )
    }
  }

  return (
    <>
      <HeaderClient>
        <BlockSelectSearch>


          <SelectSearch list={options}
                        displayValue={displayValue}
                        onClick={handleClickItem}
                        styleList={styleList}
                        placeholder={'Панели'}
                        fill={'#fff'}/>
        </BlockSelectSearch>

        <BlockSearchBlock>
          <SearchBlock bold={true}
                       value={searchBlockValue}
                       onChange={setSearchBlockValue}
                       fill={'rgba(255,255,255,0.7)'}/>
        </BlockSearchBlock>


      </HeaderClient>
      <div>
        <BreadCrumb seporator={'/'}
                    list={bredcrumb}
                    onClick={handleClickLink}
        />
      </div>





    </>
  )
}

export default compose(withRouter)(App)
//
const BlockSelectSearch = styled.div`
  width: 185px;
  margin-right: 50px;
  & > div > div > div > input {
    border-radius: 4px;
    height: 32px;
    padding: 12px;
    background-color: #4361B8;
    border-color: #6786DA;
    color: #fff;
    ::placeholder {
      color: rgba(255,255,255,0.7);
    }

    &:hover {
      border-color: #6786DA;
      color: #fff;
    }
    &:focus {
      border-color: #6786DA;
      color: #fff;
    }
`;
const BlockSearchBlock = styled.div`
  width: 185px;
  & > div > input {
    height: 32px;
    border-radius: 4px;
    background-color: #2E4C9F;
    border-color: #3857AD;
    color: #fff;

    ::placeholder {
      color: rgba(255,255,255,0.7);
    }

    &:hover {
      border-color: #3857AD;
      color: #fff;
    }
    &:focus {
      border-color: #3857AD;
      color: #fff;
    }
  }

`;
const HeaderClient = styled.div`
    padding: 10px 20px;
    background: #284493;
    display: flex;
    justify-content: center;
`;
const DisplayValue = styled.div`
    align-items: center;
    display: flex;
`;
