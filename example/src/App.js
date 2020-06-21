import React from 'react'

import {BaseFormLogin, BreadCrumb, SelectSearch} from 'LFA'
import 'libar/dist/index.css'
import {compose} from "redux";
import {withRouter} from "react-router-dom";

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
      title: 'сервис',
      link: '/serves',
    },
    {
      title: 'регистрационные документы',
      // link: '/serves/create-document',
    },
    // {
    //   title: `${a}`,
    //   link: '',
    // },

  ]

  return (
    <>
      <div>
        <BreadCrumb seporator={'/'}
                    bredcrumb={bredcrumb}
                    onClick={handleClickLink}
        />
      </div>

      <div>
        <BaseFormLogin onClickLogin={handleCLickLogin}
                       onClickForget={handleClickForget}
                       onClickCreate={handleClickCreate}/>
      </div>

      <div>
        <SelectSearch/>
      </div>

    </>
  )
}

export default compose(withRouter)(App)
