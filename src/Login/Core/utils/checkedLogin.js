import React from 'react'
import {connect} from "react-redux";
import {getEmailSelector, getPasswordSelector} from "../reducer/authUser";

const CheckedLogin = (email, password) => {
    return false
}
const mapStateToProps = (state) => {
    return {
        email: getEmailSelector(state),
        password: getPasswordSelector(state)
    }
}

export default connect(mapStateToProps)(CheckedLogin)
