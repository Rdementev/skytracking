import React, {useEffect, useState} from 'react'
import Authorization from './Page/authorization'
import './Core/style/app.css'

const PageLogin = (props) => {
  const [registration , setRegistration] =  useState(true)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')



  return (
    <div>
      {registration ? <Authorization email={email}
                                      setEmail={setEmail}
                                     onClick={props.onClick}
                                      setPassword={setPassword}
                                      password={password}/>: ''}
    </div>
  )
}

export default PageLogin
