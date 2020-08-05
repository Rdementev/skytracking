# LibAR

1) breadcrumb
import {BreadCrumb} from ....

list = [{
  title: 'example',
  link: '/example'
}]

seporator = '/'

onClick - callback возвращающий link

styled = {
  container: {},
  item: {},
  seporator: {},
  lastItem:{},
}

______________________________________________________________________________________________________________________________________

2) input 
import {Input} from ....
styled={}

______________________________________________________________________________________________________________________________________

3) SelectSearch 
import {SelectSearch} from ....

компонент состоит из 2 частей 
div по клику который меняется на input + list 
displayValue отображается в dive
value input устанавливается внутри 
отображение списка устанавливается внутри 
есть возможность отрисовывать группами  - list [{id:1, type: 'group', name: 'example', items: [{id: 1, name : example, icon: <Icon/>}]}]
по id отслеживается активный элемент в выпадающем списке


other  | default null, вернется при callback onClick
search | dafault false, возможность поиска через инпут по списку
multi  | default false мульти выбор
placeholder | = 'Поиск'
onClick | callback при выборе item
displayValue |  значение которое отображается на кнопке
fill | hex
onClickClear | callback от него зависит отображение кнопки отчистить и вызывается по клику на нее
styled= {
  list: {},
  suggestion: {},
  group: {},
  itemGroup: {},
  blockInput: {},
  input: {},
  buttonSelect: {},
  styledContainer: {},
  blockIcon: {},
  blockIconInput: {},
  blockIconClear: {},
  itemBlock: {},
}

______________________________________________________________________________________________________________________________________

4) SearchBlock 

import {SearchBlock} from ....

value | default = ''
onChange | default null callback возвращает e.target.value
placeholder | default = 'Поиск'
onFocus | default null - callback возвращает true || false в зависимости где фокус
onClick | default null - callback вызывается по клику на clear или enter, возвращает 'clear' || 'enter' соответственно
fill | default = #000 цвет иконок
icon | default = null
onKeyPress | при нажатие enter ( which 13)
clear | default = true отображает кнопку отчистики внутри инпута
enter | default = true отображает кнопку enter внутри инпута
icon | default = null <Component/> икнока поиска
closeIcon | default = null <Component/> иконка очистки
suggestionButton | default = null <Component/> кнопка в списке при мультивыборе

styled = {
  container: {},
  SuggestionButtonContainer :{} 
  blockIconSearch : {},
  input: {}
  blockClear : {},
  blockIconClear : {},
  blockEnter : {},
  blockEnterText : {},
  blockEnterIcon : {},
}

______________________________________________________________________________________________________________________________________


5) ActionButton 

import {ActionButton} from ....

onClick | callback вызывается при клике на кнопку возвращает action
action | default = ''
title | default = 'Action' значение для отображения в кнопке
icon | default = false <Icon/>
styled = {
  button: {},
  blockIcon : {},
}

______________________________________________________________________________________________________________________________________

6) HorizontMenu

import {HorizontMenu} from ....

onClick callback при клике на элемент
list = [{id:1, title: 'Common', icon:<Cloud/>  }] - массив объектов 
other параметр который вернется при клике на елемент из списка

styled = {
  BlockItem: {},
  BlockIcon: {},
  Title: {},
  Container: {},
}

