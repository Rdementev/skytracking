import React, {useEffect, useState} from 'react'
import Authorization from './Page/authorization'
import './Core/style/app.css'
import Registration from "./Page/registration";

const PageLogin = (props) => {
  const [registration, setRegistration] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  return (
    <div>
      {registration
        ? <Registration registration={registration}
                        onClickCreate={props.onClickCreate}/>
        : <Authorization email={email}
                         registration={registration}
                         setEmail={setEmail}
                         onClickLogin={props.onClickLogin}
                         setPassword={setPassword}
                         setRegistration={setRegistration}
                         password={password}/>
      }
    </div>
  )
}

export default PageLogin
