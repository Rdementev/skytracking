import React from 'react'
import styled from 'styled-components/macro'
import {ModuleInput} from "../Input";
import Icon from './icon'

/**
 * value - string
 * onChange - func
 * bold - boolean (для определния стиля)
 * placeholder - string
 * onFocus - func
 * fill - string
 * icon - icon
 * **/


const ModuleSearchBlock = (props) => {
    const { value, onChange, bold, placeholder, onFocus, fill, icon, styled} = props
   const CustomIcon = icon ? icon : ''


    const handleChange = (e) => {
        if(onChange) return onChange(e.target.value)
    }

    return (
        <InputBlock>
          <ModuleInput
            onChange={handleChange}
            styled={styled.input}
            onFocus={onFocus ? onFocus(true) : null}
            placeholder={placeholder}
            value={value}/>
            {!value &&  <ButtonClose fill={fill}>
              {CustomIcon ? <CustomIcon/> : <Icon /> }
            </ButtonClose>
            }
        </InputBlock>
    )
}
export default ModuleSearchBlock
//

const InputBlock = styled.div`
  position: relative
`;



const ButtonClose = styled.div`
  cursor: pointer;
  color: rgba(255,255,255,0.7);
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translate(0, -50%);
  & > svg > path {
    fill: ${({fill}) => fill ? fill : 'rgba(0,0,0,0.5)'};
  }
`;
