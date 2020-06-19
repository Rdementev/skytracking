import styled from "styled-components/macro";

const Input = styled.input`
  width: 100%;
  margin: 0;
  padding: ${({padding}) => padding ? padding : '10px'};
  height: ${({height}) => height ? height : '40px'} ;
  font-weight: 500;
  border-radius: 0;
  border: 1px solid #e8ecef;
  color: #000000;

    &:hover {
    border-color: #294493;
    color: #000000;
  }
  &:focus {
    border-color: #294493;
    color: #000000;
    outline: none;
  }
  

`;
export default Input;
