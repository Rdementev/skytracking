import React from 'react'
import {connect} from "react-redux";
import Auth from "../authorization/auth";

const Autohorization = (props) => {
    debugger
    return <Auth  password={props.password}
                  setEmail={props.setEmail}
                  setSend={props.setSend}
                  setPassword={props.setPassword}
                  email={props.email}/>
}

export default Autohorization
