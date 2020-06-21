// @ts-ignore
import React  from 'react'
import PageLogin from './Login'
import ModuleBreadCrumb from "./BreadCrumb";
import ModuleSelectSearch from "./SelectSearch";



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

export const BreadCrumb = (props) => {
  const {bredcrumb, seporator, onClick} = props
  return <ModuleBreadCrumb bredcrumb={bredcrumb}
                           seporator={seporator}
                           onClick={onClick}/>
}
export const SelectSearch = (props) => {
  return <ModuleSelectSearch />
}
