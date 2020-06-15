import React from 'react'
import PageLogin from './Login'


export const BaseFormLogin = (props) => {
  return (
      <PageLogin onClickLogin={props.onClickLogin} onClickCreate={props.onClickCreate}/>
  )
}
