import React, {useState} from 'react'
import Regist from "./regist";

const Registration = (props) => {

  const [email, setEmail] = useState('')
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const [phone, setPhone] = useState('')

  return <Regist email={email}
                 registration={props.registration}
                 onClickCreate={props.onClickCreate}
                 login={login}
                 password={password}
                 phone={phone}
                 setEmail={setEmail}
                 setLogin={setLogin}
                 setPassword={setPassword}
                 setPhone={setPhone} />
}

export default Registration
