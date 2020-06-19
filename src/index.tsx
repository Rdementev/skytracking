// @ts-ignore
import React  from 'react'
import PageLogin from './Login'

export type PropsType = {
  isAuth: boolean
  isCheckPhone: boolean
  isCheckEmail: boolean

  onClickLogin: () => void
  onClickForget: () => void
  onClickCreate: () => void
}

export const BaseFormLogin = (props:PropsType ) => {

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
