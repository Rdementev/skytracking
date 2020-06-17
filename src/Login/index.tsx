// @ts-ignore
import React, {useEffect, useState} from 'react'
import Authorization from './Page/authorization'
import './Core/style/app.css'
import Registration from "./Page/registration";
import Forget from "./Page/forget";
import {PropsType} from "../index";


const PageLogin = (props:PropsType) => {
  const [registration, setRegistration] = useState(false)
  const [forget, setForget] = useState(false)

  const [emailReg, setEmailReg] = useState('')
  const [passwordReg, setPasswordReg] = useState('')
  const [phoneReg, setPhoneReg] = useState('')

  const [emailFg, setEmailFg] = useState('')

  const [emailAuth, setEmailAuth] = useState('')
  const [passwordAuth, setPasswordAuth] = useState('')


  const getContent = () => {
    if(registration){
      return <Registration onClick={props.onClickCreate}
                           email={emailReg}
                           setEmail={setEmailReg}
                           password={passwordReg}
                           setPassword={setPasswordReg}
                           phone={phoneReg}
                           setPhone={setPhoneReg}/>
    } else if(forget){
      return <Forget email={emailFg}
                     onClick={props.onClickForget}
                     setEmail={setEmailFg}/>
    }
    return <Authorization
      setForget={setForget}
      email={emailAuth}
      setEmail={setEmailAuth}
      password={passwordAuth}
      setPassword={setPasswordAuth}
      onClick={props.onClickLogin}
      setRegistration={setRegistration}/>
  }

  return (
    <div>
      {getContent()}
    </div>
  )
}

export default PageLogin
