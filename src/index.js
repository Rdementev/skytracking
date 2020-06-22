// @ts-ignore
import React  from 'react'
import PageLogin from './Login'
import ModuleBreadCrumb from "./BreadCrumb";
import ModuleSelectSearch from "./SelectSearch";
import {ModuleInput} from "./Input";



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
  const {list = [{title: 'Main', link:'/'}], seporator, onClick} = props
  return <ModuleBreadCrumb list={list}
                           seporator={seporator}
                           onClick={onClick}/>
}
export const SelectSearch = (props) => {
    const { list, multi, placeholder, onClick } = props
  return <ModuleSelectSearch list={list}
                             multi={multi}
                             onClick={onClick}
                             placeholder={placeholder}/>
}

export const Input = (props) => {
  return <ModuleInput/>
}
