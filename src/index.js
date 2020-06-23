// @ts-ignore
import React  from 'react'
import PageLogin from './Login'
import ModuleBreadCrumb from "./BreadCrumb";
import ModuleSelectSearch from "./SelectSearch";
import {ModuleInput} from "./Input";
import ModuleSearchBlock from "./searchBlock";



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
    const { list = [{title: 'Main'}], multi = false, placeholder = 'Поиск', onClick, fill = 'rgba(0,0,0,0.7)', styleList , displayValue = 'test' } = props
  return <ModuleSelectSearch list={list}
                             styleList={styleList}
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
  const { value = '', onChange, bold = false, placeholder = 'Поиск', onFocus, fill = '#000', icon = '' } = props
  return <ModuleSearchBlock value={value}
                            onChange={onChange ? onChange : null}
                            bold={bold}
                            placeholder={placeholder}
                            onFocus={onFocus ? onFocus : null}
                            fill={fill}
                            icon={icon} />
}
