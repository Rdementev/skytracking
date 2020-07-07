// @ts-ignore
import React, {useEffect, useState} from 'react'
import Authorization from './Page/authorization'
import './Core/style/app.css'
import Registration from "./Page/registration";
import Forget from "./Page/forget";



const PageLogin = (props) => {
  const {isAuth, isCheckPhone, isCheckEmail, title} = props
  const [registration, setRegistration] = useState(false)
  const [forget, setForget] = useState(false)

  const [emailReg, setEmailReg] = useState('')
  const [passwordReg, setPasswordReg] = useState('')
  const [phoneReg, setPhoneReg] = useState('')

  const [emailFg, setEmailFg] = useState('')

  const [emailAuth, setEmailAuth] = useState('')
  const [passwordAuth, setPasswordAuth] = useState('')


  const getContent = () => {
    if (registration) {
      return <Registration onClick={props.onClickCreate}
                           email={emailReg}
                           title={title}
                           isCheckPhone={isCheckPhone}
                           isCheckEmail={isCheckEmail}
                           setEmail={setEmailReg}
                           password={passwordReg}
                           setPassword={setPasswordReg}
                           phone={phoneReg}
                           setPhone={setPhoneReg}/>
    } else if (forget) {
      return <Forget email={emailFg}
                     title={title}
                     isCheckEmail={isCheckEmail}
                     onClick={props.onClickForget}
                     setEmail={setEmailFg}/>
    }
    return <Authorization
      isAuth={isAuth}
      title={title}
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
