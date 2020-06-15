import React from 'react'
import Auth from "../authorization/auth";

const Autohorization = (props) => {
    return <Auth  password={props.password}
                  setEmail={props.setEmail}
                  onClickLogin={props.onClickLogin}
                  onClickCreate={props.onClickCreate}
                  setPassword={props.setPassword}
                  registration={props.registration}
                  setRegistration={props.setRegistration}
                  email={props.email}/>
}

export default Autohorization
