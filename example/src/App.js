import React from 'react'

import { BaseFormLogin } from 'libar'
import 'libar/dist/index.css'

const App = () => {

  const handleCLickLogin = (email, password) => {
    console.log(email + ' ' + password)
  }
  const handleClickCreate = (email, password, login, phone) => {
    console.log(email + ' ' + password + ' ' + login + ' ' + phone )
  }
  return <BaseFormLogin onClickLogin={handleCLickLogin} onClickCreate={handleClickCreate} />
}

export default App
