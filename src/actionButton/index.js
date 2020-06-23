import React, {useEffect, useRef, useState} from 'react'
import styled from 'styled-components/macro'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons/faPlus";
import {transparentize} from "polished";
import {connect} from "react-redux";
import {toggleIsShowOverlay} from "Core/reducer/siteMap";
import NewModal from "ARDM/feature/modal/newmodal";
import ModalCreateDocument from "ARDM/components/modalCreateDocument";

const modalRoot = document.getElementById('modal');

const CreateButton = (props) => {
    const {toggleIsShowOverlay} = props
    const [showModal, setShowModal] = useState(false)
    const handleClick = (e) => {
        setShowModal(!showModal)
    }

    return (
        <>
            <StyledButton onClick={()=>{handleClick()}} >
                Создать запрос
                <BlockIcon>
                    <FontAwesomeIcon className="fa-facebook" icon={faPlus}/>
                </BlockIcon>
            </StyledButton>
            <NewModal showModal={showModal} >
                <ModalCreateDocument setShowModal={setShowModal}/>
            </NewModal>
        </>
    )
}

export default connect(null, {
    toggleIsShowOverlay
})(CreateButton)
//
const StyledButton = styled.button`
    padding: 2px 2px 2px 12px;
    margin-right: 10px;
    background: ${props => transparentize( 0, props.theme.semiHeavy)};
    border-radius: 4px;
    color:   ${props => transparentize(0.3, props.theme.root)};
    white-space: nowrap;
    border: 1px solid ${props => transparentize(1, props.theme.root)};
    display: flex;
    align-items: center;
    min-width: 180px;
    justify-content: space-between;
    transition: 0.4s ease;
    &:hover {
      box-shadow: 0 4px 5px ${props => transparentize(0.9, props.theme.color)};;
    }
`;
const BlockIcon = styled.div`
    width: 28px;
    height: 28px;
    border-radius: 4px;
    color:   ${props => transparentize(0, props.theme.root)};
    display: flex;
    margin-left: 10px;
    background: ${props => transparentize( 0, props.theme.medium)};
    & > svg {
      margin: auto;
    }
`;
