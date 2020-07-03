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
  const {list = [{title: 'Main', link:'/'}], seporator = '/', onClick, styled} = props
  return <ModuleBreadCrumb list={list}
                           styled={styled}
                           seporator={seporator}
                           onClick={onClick}/>
}
export const SelectSearch = (props) => {
    const { list = [], other = null, search = false, multi = false, placeholder = 'Поиск', onClick, fill = 'rgba(0,0,0,0.7)', styled , displayValue = 'test', onClickClear } = props
  return <ModuleSelectSearch list={list}
                             styled={styled}
                             onClickClear={onClickClear ? onClickClear : null}
                             multi={multi}
                             search={search}
                             other={other}
                             displayValue={displayValue}
                             fill={fill}
                             onClick={onClick}
                             placeholder={placeholder}/>
}

export const Input = (props) => {
  const { styled } = props
  return <ModuleInput styled={styled}/>
}
export const SearchBlock = (props) => {
  const { value = '', onChange, placeholder = 'Поиск', onFocus, onClick,
    fill = '#000', icon = '', styled, onKeyPress, clear = true, enter = true } = props
  return <ModuleSearchBlock value={value}
                            onChange={onChange ? onChange : null}
                            onKeyPress={onKeyPress ? onKeyPress : null}
                            styled={styled}
                            clear={clear}
                            enter={enter}
                            onClick={onClick ? onClick : null}
                            placeholder={placeholder}
                            onFocus={onFocus ? onFocus : null}
                            fill={fill}
                            icon={icon} />
}

export const ActionButton = (props) => {
  const { onClick, title = 'Action', icon = false, styled = false, action = '' } = props
  return <ModuleActionButton  onClick={onClick ? onClick : false}
                              icon={icon ? icon : false}
                              action={action}
                              styled={styled ? styled : false }
                              title={title}/>
}
