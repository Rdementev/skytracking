import styled from "styled-components";
import {transparentize} from '../utils/transparentize';

export const ModuleInput = styled.input`
  width: 100%;
  height: ${props => props.theme && props.theme.input && props.theme.input.height ? props.theme.input.height : '38px'} ;
  padding: ${props => props.theme && props.theme.input && props.theme.input.padding ? props.theme.input.padding : "10px"};
  margin: 0;
  border-radius: ${props => props.theme && props.theme.input && props.theme.input.borderRadius ? props.theme.input.borderRadius : 0}px;
  background: ${props => props.theme && props.theme.input && props.theme.input.background ?  transparentize( 1, '#fff') : '#fff'};
  border: 1px solid  ${props => props.theme && props.theme.input ? transparentize(0.5, props.theme.input.borderColor) : transparentize( 0.5, '#000')};
  font-family: ProximaNova-Regular, sans-serif;
  font-size: 100%;
  line-height: 1.15;
  color: ${props => props.theme && props.theme.input ? transparentize(props.theme.input.color) : transparentize( 1, '#000')};
  text-overflow: ellipsis;
  &:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 30px white inset;
  }

  ${props => (props.error ? "border: 1px solid #DE4D4D" : null)};

  &:hover {
    border-color: ${props => props.theme && props.theme.input ? transparentize( props.theme.input.borderColor) : transparentize( 1, '#000')};
    color: ${props => props.theme && props.theme.input ? transparentize( props.theme.input.color) : transparentize( 1, '#000')};
  }

  &:focus {
    border-color: ${props => props.theme && props.theme.input ? transparentize( props.theme.input.borderColor) : transparentize( 1, '#000')};
    color: ${props => props.theme && props.theme.input ? transparentize( props.theme.input.color) : transparentize( 1, '#000')};
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

// export const BoldInput = styled(Input)`
//   background: ${props => transparentize( 0, props.theme.semiHeavy)};
//   color: ${props => transparentize(0, props.theme.root)};
//   border: 1px solid ${props => transparentize( 1 , props.theme.semiHeavy)};
//   height: ${props => props.height ? props.height : '38px'} ;
//
//   &:hover {
//     border-color: ${props => transparentize( 0, props.theme.medium)};
//     color: ${props => props.theme.root};
//   }
//
//   &:focus {
//     border-color: ${props => transparentize( 0, props.theme.medium)};
//     color: ${props => props.theme.root};
//   }
//
//   ::-webkit-input-placeholder {
//     /* Chrome/Opera/Safari */
//     color:   ${props => transparentize(0.3, props.theme.root)};
//   }
//   ::-moz-placeholder {
//     /* Firefox 19+ */
//     color:   ${props => transparentize(0.3, props.theme.root)};
//   }
//   :-ms-input-placeholder {
//     /* IE 10+ */
//     color:   ${props => transparentize(0.3, props.theme.root)};
//   }
//   :-moz-placeholder {
//     /* Firefox 18- */
//     color:  ${props => transparentize(0.3, props.theme.root)};
//   }
//
// `;


