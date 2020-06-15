import React from 'react'
import Auth from "../authorization/auth";

const Autohorization = (props) => {
    debugger
    return <Auth  password={props.password}
                  setEmail={props.setEmail}
                  onClick={props.onClick}
                  setPassword={props.setPassword}
                  email={props.email}/>
}

export default Autohorization
