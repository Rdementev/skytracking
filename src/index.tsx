// @ts-ignore
import React  from 'react'
import PageLogin from './Login'

export type PropsType = {
  onClickLogin: () => void
  onClickForget: () => void
  onClickCreate: () => void
}

export const BaseFormLogin = (props:PropsType ) => {
  return (
      <PageLogin onClickLogin={props.onClickLogin}
                 onClickForget={props.onClickForget}
                 onClickCreate={props.onClickCreate}/>
  )
}
