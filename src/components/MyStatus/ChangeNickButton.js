import React, {useState} from "react";
import styled from "styled-components";
import changeNick from "../img/icon/changeNick.png";
import ChangeNickModal from "./ChangeNickModal";
import Modal from "react-modal";

const ChangeButton = styled.button`
    all:unset;
    cursor: pointer;
    position:absolute;
    width:14px;
    height:14px;
    right:16px;
    top:57px;
    display:flex;
    align-items:center;
    text-align:center;

    img{
        width:100%;
        height:100%;
        margin:0 auto;
    }
`;

const customStyles = {
    overlay: {
      backgroundColor: 'rgba(52,45,37,0.64)',
      zIndex:5,
    }
}

const ChangeNickButton = () => {

    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true)
    }

    const closeModal = () => {
        setIsOpen(false)
    }

    return (
        <>
            <ChangeButton onClick={openModal}>
                <img src={changeNick} alt="닉네임 바꾸기" />
            </ChangeButton>
            <Modal
                isOpen={isOpen}
                onRequestClose={closeModal}
                contentLabel="change nick modal"
                className="result-modal"
                style={customStyles}
                ariaHideApp={false}
            >
                <ChangeNickModal
                    closeModal={closeModal}
                />
            </Modal>
        </>
    );
};

export default ChangeNickButton;