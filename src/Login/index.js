import React, {useEffect, useState} from 'react'
import Authorization from './Page/authorization'
import './Core/style/app.css'

const PageLogin = () => {
  const [registration , setRegistration] =  useState(true)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [send, setSend] = useState(false)

  useEffect(()=> {

    setSend(false)
  },[send])

  return (
    <div>
      {registration ? <Authorization email={email}
                                      setEmail={setEmail}
                                      setSend={setSend}
                                      setPassword={setPassword}
                                      password={password}/>: ''}
    </div>
  )
}

export default PageLogin
