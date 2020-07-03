import styled from "styled-components";
import {transparentize} from '../utils/transparentize';

export const ModuleInput = styled.input`
  width: 100%;
  height:  38px;
  padding: 10px;
  margin: 0;
  background: #fff;
  border: 1px solid  #000;
  font-family: ProximaNova-Regular, sans-serif;
  font-size: 100%;
  line-height: 1.15;
  color: #000;
  text-overflow: ellipsis;
  &:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 30px white inset;
  }

  ${props => (props.error ? "border: 1px solid #DE4D4D" : null)};

  &:hover {
    border-color: #000;
    color: #000;
  }

  &:focus {
    border-color: #000;
    color: #000;
    outline: none;
    background: ${({ backgroundOnFocus }) => backgroundOnFocus};
  }

  ::-webkit-input-placeholder {
    /* Chrome/Opera/Safari */
    color:   ${transparentize( 0.5, '#000')};
  }
  ::-moz-placeholder {
    /* Firefox 19+ */
    color:  ${transparentize( 0.5, '#000')};
  }
  :-ms-input-placeholder {
    /* IE 10+ */
    color:  ${transparentize( 0.5, '#000')};
  }
  :-moz-placeholder {
    /* Firefox 18- */
    color:  ${transparentize( 0.5, '#000')};
  }

  ${({ styled }) => styled};
`;


