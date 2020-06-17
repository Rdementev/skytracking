import styled from "styled-components/macro";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: #E8ECEF;
`;
export const Row = styled.div`
    display: flex;
    padding: 20px;
    flex-direction: column;
    justify-content: space-between;
    width: 600px;
    min-height: 400px;
    border: 1px solid #E9E9EA;
    border-radius: 10px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0 14px 34px rgba(0, 0, 0, 0.2);
    background-color: #fff;
`;
export const StyledHeader = styled.div`
    width: 100%;
    padding-bottom: 12px;
    border-bottom: 1px solid #E9E9EA;
    text-align: center;
    margin-bottom: 20px;
`;
export const LoginTitle = styled.h3`
    margin: 0;
    text-transform: uppercase;
    font-weight: 400;
    letter-spacing: 1em;
`;
export const Text = styled.h5`
    margin-bottom: 15px;
`;
export const StyledSection = styled.div`

`;
export const SectionBlock = styled.div`
   margin-bottom: 20px;
`;
export const StyledFooterLogin = styled.div`
    padding-top: 20px;
    border-top: 1px solid #eeeeef;
`;
export const SubFooterBlock = styled.div`
    margin: 0 auto;
    padding: 5px 0;
    white-space: nowrap;
    border-bottom: 1px solid transparent;
    cursor: pointer;
    transition: ease 0.4s;

    &:hover {
      border-color: #294493;
    }
`;
export const StyledSubFooter = styled.div`
    display: flex;
`;
