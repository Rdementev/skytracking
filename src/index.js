// @ts-ignore
import React  from 'react'
import ModuleBreadCrumb from "./BreadCrumb";
import ModuleSelectSearch from "./SelectSearch";
import {ModuleInput} from "./Input";
import ModuleSearchBlock from "./searchBlock";
import ModuleActionButton from "./actionButton";
import ModuleHorizontMenu from "./horizontMenu";
import ModuleMenu from "./menu";
import ModuleMainNavigationBar from "./mainNavigationBar";

export const BreadCrumb = (props) => {
  const {list = [{title: 'Main', link:'/'}], seporator = '/', onClick, styled} = props
  return <ModuleBreadCrumb list={list}
                           styled={styled}
                           seporator={seporator}
                           onClick={onClick}/>
}
export const SelectSearch = (props) => {
    const { list = [], suggestionButton = false, other = null, search = false, multi = false, placeholder = 'Поиск...', onClick, fill = 'rgba(0,0,0,0.7)', styled , displayValue = 'test', onClickClear } = props
  return <ModuleSelectSearch list={list}
                             styled={styled}
                             onClickClear={onClickClear ? onClickClear : null}
                             multi={multi}
                             suggestionButton={suggestionButton}
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
  const { value = '', onChange, placeholder = 'Поиск...', onFocus, onClick, closeIcon = false,
    fill = '#000', icon = '', styled, onKeyPress, clear = true, enter = true } = props
  return <ModuleSearchBlock value={value}
                            onChange={onChange ? onChange : null}
                            closeIcon={closeIcon}
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

export const HorizontMenu = (props) => {
  const {onClick, styled = {}, list = [], other = '', activeId} = props
  return <ModuleHorizontMenu  onClick={onClick}
                              activeId={activeId}
                              styled={styled}
                              list={list}
                              other={other}/>
}
export const Menu = (props) => {
  const {onClick, styled = {}, list = [], other = '', activeId} = props
  return <ModuleMenu  onClick={onClick}
                      activeId={activeId}
                      styled={styled}
                      list={list}
                      other={other}/>
}
export const MainNavigationBar = (props) => {
  const {children} = props
  return <ModuleMainNavigationBar children={children} />
}
