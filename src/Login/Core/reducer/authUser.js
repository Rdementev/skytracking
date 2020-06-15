import {createSelector} from "reselect";

const CHANGE_PRIVATE = 'CHANGE_PRIVATE'

let initialState = {
    id: 5,
    email: '12345@gmail.com',
    password: 12345,
    phone: null,
    position: null,
    theme_id: 5,
    is_new: null,
    isAuth: false,
    isAdmin: false,
};



const authUser = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_PRIVATE: {
            return {
                ...state,
                isAuth: action.isAuth
            }
        }
    }
    return state
};

const changePrivate = (isAuth) => ({type:CHANGE_PRIVATE, isAuth})

export const sendDataThunk = () => {
    return (dispatch) => {
        return dispatch(changePrivate())
    }
}

// reselect
const getEmail = (state) => {
    return state.authUser.email
};
export const getEmailSelector = createSelector(getEmail, (email) => {
    return email
})
const getPassword = (state) => {
    return state.authUser.password
};
export const getPasswordSelector = createSelector(getPassword, (password) => {
    return password
})

export default authUser;
