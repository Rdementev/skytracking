// @ts-ignore
import React  from 'react'
import PageLogin from './Login'



export const BaseFormLogin = (props ) => {

  const {
      isAuth,
      isCheckPhone,
      isCheckEmail,
      onClickLogin,
      onClickForget,
      onClickCreate,
  } = props
  return (
      <PageLogin onClickLogin={onClickLogin}
                 isAuth={isAuth}
                 isCheckPhone={isCheckPhone}
                 isCheckEmail={isCheckEmail}
                 onClickForget={onClickForget}
                 onClickCreate={onClickCreate}/>
  )
}
