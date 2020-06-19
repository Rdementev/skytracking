import React from 'react'

import { BaseFormLogin } from 'libar'
import 'libar/dist/index.css'

const App = () => {

  const handleCLickLogin = (email, password) => {
    console.log(email + ' ' + password)
  }
  const handleClickCreate = (email, password,  phone) => {
    console.log(email + ' ' + password +  ' ' + phone )

  }
  const handleClickForget = (email) => {
    console.log(email)
  }

  return <BaseFormLogin onClickLogin={handleCLickLogin}
                        onClickForget={handleClickForget}
                        onClickCreate={handleClickCreate} />
}

export default App
