import styled from "styled-components/macro";

const Button = styled.button`
 
  padding: 10px 15px;
    cursor: pointer;
    margin: auto;
    background-color: #294493;
    border: none;
    border-radius: 4px;
   
    min-width: 150px;
  display: flex;
  justify-content: center;
  align-items: center;

  text-align: center;
  font-family: "ProximaNova-Regular", sans-serif;
 
  transition: 0.4s all;

 
  color: #ffffff;
 
  &:hover {
    background-color: #294493;
    color: #fff;
    box-shadow: 0 4px 14px rgba(41,68,147,0.3);
    transform: scale(1.05);
  }
  &:focus {
    outline: none;
  }

  &:active {
    background-color: #182B65;
    color: #ffffff;
    transform: scale(1);
   
  }

  &:disabled {
    color: white;
    background-color: #e0e4f1 !important;
    cursor: unset;
  }
`;

const WhiteButton = styled(Button)`
  background-color: #ffffff;
  border: 1px solid #e0e4f1;
  color: #000000;
`;

export default Button;

export { WhiteButton };
