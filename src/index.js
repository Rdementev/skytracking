// @ts-ignore
import React  from 'react'
import PageLogin from './Login'
import ModuleBreadCrumb from "./BreadCrumb";
import ModuleSelectSearch from "./SelectSearch";
import {ModuleInput} from "./Input";
import ModuleSearchBlock from "./searchBlock";
import ModuleActionButton from "./actionButton";



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
    const { list = [{title: 'Main'}], multi = false, placeholder = 'Поиск', onClick, fill = 'rgba(0,0,0,0.7)', styled , displayValue = 'test', onClickClear } = props
  return <ModuleSelectSearch list={list}
                             styled={styled}
                             onClickClear={onClickClear ? onClickClear : null}
                             multi={multi}
                             displayValue={displayValue}
                             fill={fill}
                             onClick={onClick}
                             placeholder={placeholder}/>
}

export const Input = (props) => {
  return <ModuleInput/>
}
export const SearchBlock = (props) => {
  const { value = '', onChange, bold = false, placeholder = 'Поиск', onFocus, fill = '#000', icon = '', styled } = props
  return <ModuleSearchBlock value={value}
                            onChange={onChange ? onChange : null}
                            bold={bold}
                            styled={styled}
                            placeholder={placeholder}
                            onFocus={onFocus ? onFocus : null}
                            fill={fill}
                            icon={icon} />
}

export const ActionButton = (props) => {
  const { onClick, title = 'Action', icon, styled } = props
  return <ModuleActionButton  onClick={onClick ? onClick : false}
                              icon={icon}
                              styled={styled}
                              title={title}/>
}
