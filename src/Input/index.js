import styled from "styled-components";
import {transparentize} from '../utils/transparentize';

export const ModuleInput = styled.input`

      border-radius: 4px;
      background-color: #388D96;

      border: 1px solid transparent;

      border-color: #5DB3BC;
      color: #fff;
      ::placeholder  {
        color: rgba(255,255,255,0.7)
      }
      &:hover {
        border-color: #5DB3BC;
        color: #fff;

      }
      &:focus {
        border-color: #5DB3BC;
        color: #fff;

        outline: none;
      }

      width: 100%;
      height: 100%;
      padding: 10px;
      margin: 0;
      font-size: 12px;
      font-weight: 500;

      text-overflow: ellipsis;

  &:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 30px white inset;
  }

  ${props => (props.error ? "border: 1px solid #DE4D4D" : null)};


  ::-webkit-input-placeholder {
    /* Chrome/Opera/Safari */
    color:   ${transparentize( 0.7, '#fff')};
  }
  ::-moz-placeholder {
    /* Firefox 19+ */
   color:   ${transparentize( 0.7, '#fff')};
  }
  :-ms-input-placeholder {
    /* IE 10+ */
     color:   ${transparentize( 0.7, '#fff')};
  }
  :-moz-placeholder {
    /* Firefox 18- */
    color:   ${transparentize( 0.7, '#fff')};
  }

  ${({ styled }) => styled};
`;


