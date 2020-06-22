import React from 'react'

import {BaseFormLogin, BreadCrumb, SelectSearch} from 'libar'
import 'libar/dist/index.css'
import {compose} from "redux";
import {withRouter} from "react-router-dom";
import styled from 'styled-components/macro'
const App = (props) => {
  const {history} = props

  const handleCLickLogin = (email, password) => {
    console.log(email + ' ' + password)
  }
  const handleClickCreate = (email, password, phone) => {
    console.log(email + ' ' + password + ' ' + phone)

  }
  const handleClickForget = (email) => {
    console.log(email)
  }

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
    {name: 'Swedish', value: 'sv', id:1},
    {name: 'English', value: 'en', id:2},
    {
      type: 'group',
      id: 5,
      name: 'Group',
      items: [
        {name: 'Spanish', value: 'es', id:3, group_id: 5},
      ]
    },
    {
      type: 'group',
      name: 'Group',
      id: 6,
      items: [
        {name: 'english', value: 'es', id:4, group_id:6},
      ]
    },
  ];

  return (
    <>
      <div>
        <BreadCrumb seporator={'/'}
                    list={bredcrumb}
                    onClick={handleClickLink}
        />
      </div>

      {/*<div>*/}
      {/*  <BaseFormLogin onClickLogin={handleCLickLogin}*/}
      {/*                 onClickForget={handleClickForget}*/}
      {/*                 onClickCreate={handleClickCreate}/>*/}
      {/*</div>*/}

      <Container >
        <SelectSearch list={options} placeholder={'...'}/>
      </Container>

    </>
  )
}

export default compose(withRouter)(App)
//
const Container = styled.div`
  width: 200px;
  margin: 100px auto;
`;
