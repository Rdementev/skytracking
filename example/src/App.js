import React, {useState} from 'react'

import {BreadCrumb, SelectSearch, SearchBlock, ActionButton, HorizontMenu, Menu, MainNavigationBar} from '@rdementev/skytracking'
import {compose} from "redux";
import {withRouter} from "react-router-dom";
import styled from 'styled-components/macro'
import Cloud from './upload_1'
import Start from './upload_2'
import Settings from './upload_3'

const App = (props) => {
  const {history} = props
  const [searchBlockValue, setSearchBlockValue] = useState('')
  const [displayValue, setDisplayValue] = useState('Панели')
  const [inputValue, setInputValue] = useState('Панели')
  const [onFocusInput, setOnFocus] = useState(false)

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
    {name: 'test 1', value: 'sv', id:1, link:'123', description: '1'},
    {name: 'test 2', value: 'en', id:2, icon: ''},
    {name: 'test 3', value: 'en', id:3, icon: ''},
    {name: 'test 1', value: 'sv', id:5, link:'123', description: '1'},
    {name: 'test 2', value: 'en', id:6, icon: ''},
    {name: 'test 3', value: 'en', id:7, icon: ''},
    {name: 'test 4test 4test 4test 4test 4test 4test 4test 4test 4test 4test 4test 4test 4test ' +
        '4test 4test 4test 4test 4test 4test 4test 4test 4test 4test 4test 4test 4test 4test 4test 4test 4test 4test 4test ' +
        '4test 4test 4test 4test 4test 4test 4test 4test 4', value: 'en', id:4, icon: <Settings/>},
  ];
  const styleList = {
    // input: {
    //   borderRadius: '4px 4px 0 0',
    //   backgroundColor: '#388D96',
    //   borderColor: '#5DB3BC',
    //   borderBottomColor: 'transparent',
    //   color: '#fff',
    //   "::placeholder" : {
    //     color: 'rgba(255,255,255,0.7)'
    //   },
    //   '&:hover': {
    //     borderColor: '#5DB3BC',
    //     color: '#fff',
    //     borderBottomColor: 'transparent',
    //   },
    //   '&:focus': {
    //     borderColor: '#5DB3BC',
    //     color: '#fff',
    //     borderBottomColor: 'transparent',
    //   }
    // },
  }

  const styleSearchBlock = {
    input: {
      backgroundColor: '#388D96',
      borderRadius: '4px',
      borderColor: 'transparent',
      transition: 'ease 0.4s',
      paddingLeft: '25px',
      paddingRight: '75px',
      color: '#fff',
      '&:hover' : {
        borderColor: '#5DB3BC',
        color: '#fff',
      },
      '&:focus' : {
        borderColor: '#5DB3BC',
        color: '#fff',
      },
      '&::placeholder' : {
        color: '#ffffffb3',
      }
    }
  }

  const handleClickItem = (selected, multi) => {
    if(!multi){
      setDisplayValue(
        <DisplayValue>
          <div style={{margin: '2px 10px 0 0 '}}>{selected[0].icon}</div>
          <div style={{color:'#fff'}}>{selected[0].name}</div>

        </DisplayValue>
      )
      setInputValue(selected[0].name)
    }
  }


  const handleClickClear = () => {
      setDisplayValue('Панели')
      setInputValue('Панели')
  }
  const handleClickCreate = () => {
      alert('открыть модалку')
  }
  const handleClickDone = () => {
        alert('другое действие')
  }
  const handleClickDelete = () => {
        alert('и еще другое  действие')
  }

  const handleFocus = (value) => {
    setOnFocus(value)
  }


  return (
    <Con>
      <MainNavigationBar>
        <BlockActionButton>
          <ActionButton icon={<Cloud/>}
                        title={'Сохранить'}
                        onClick={handleClickCreate}/>
        </BlockActionButton>
        <BlockActionButton>
          <ActionButton
                        title={'Выполнить'}
                        icon={<Start/>}
                        onClick={handleClickDone}/>
        </BlockActionButton>
        <BlockActionButton>
          <ActionButton
                        title={'Настройка'}
                        icon={<Settings/>}
                        onClick={handleClickDelete}/>
        </BlockActionButton>
        <BlockSelectSearch>
          <SelectSearch displayValue={displayValue}
                        value={inputValue}
                        list={options}
                        search={true}
                        onClickClear={handleClickClear}
                        onClick={handleClickItem}
                        styled={styleList}
                        fill={'#fff'}/>
        </BlockSelectSearch>

        <BlockSearchBlock>
          <SearchBlock clear={true}
                       enter={true}
                       search={true}
                       styled={styleSearchBlock}
                       value={searchBlockValue}
                       onFocus={handleFocus}

                       onChange={setSearchBlockValue}
                       fill={'rgba(255,255,255,0.7)'}/>
        </BlockSearchBlock>
      </MainNavigationBar>

      <Body>
        <BreadCrumb seporator={'/'}
                    list={bredcrumb}
                    onClick={handleClickLink}
        />

        <div>
          <HorizontMenu list={[{id:1, title: 'Common', icon:<Cloud/>  },{id:2, title: 'Super', con:<div>Icon1</div>}]}/>
        </div>
        <div style={{width: '300px'}}>
          <Menu list={[{id:1, title: 'Common', icon:<Cloud/> , order:'1',},{id:2, order:'0', title: 'Super', con:<div>Icon1</div>}]}/>
        </div>
      </Body>


    </Con>
  )
}

export default compose(withRouter)(App)
//
const BlockSelectSearch = styled.div`
    width: 185px;
    height: 28px;
    margin-right: 10px;
    margin-left: auto;
`;
const Body = styled.div`
    flex-grow: 1;
    height: 100%;
`;
const Con = styled.div`
  padding: 100px 0;
`;
const BlockSearchBlock = styled.div`
  width: 405px;
  height: 28px;
`;

const BlockActionButton = styled.div`
  height: 28px;

`;
const DisplayValue = styled.div`
    align-items: center;
    display: flex;
`;
