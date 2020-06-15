import React from 'react'

import { BaseFormLogin } from 'libar'
import 'libar/dist/index.css'

const App = () => {

  const handleCLickSend = (email, login) => {
    debugger
  }
  return <BaseFormLogin onClick={handleCLickSend} />
}

export default App
