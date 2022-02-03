import React, {useState} from "react";
import styled from "styled-components";
import Modal from "react-modal";
import InfoModal from "./InfoModal";

const InfoWrapper = styled.button`
    all:unset;
    cursor: pointer;
    width:calc(100% - 20px);
    height:14px;
    margin-top:12px;
    margin-left:20px;
    display:flex;
    align-items:center;
`;

const QuestionMarkWrapper = styled.div`
    width:12px;
    height:12px;
    border-radius:12px;
    border: 1px solid #B4B4B4;
    display:flex;
    align-items:center;
    text-align:center;
    color:#979797;
    position:relative;

    div{
        position:absolute;
        width:12px;
        height:12px;
        top:1px;
        left:0px;
        display:flex;
        align-items:center;
    }

    h5{
        font-family: "GmarketSansMedium";
        font-size: 0.5rem;
        line-height: 13px;
        letter-spacing: -0.23999999463558197px;
        margin:0 auto;
    }
`;

const WordingWrapper = styled.div`
    width:170px;
    height:14px;
    margin-left:4px;
    display:flex;
    align-items:center;
    color:#979797;

    h2{
        font-size: 0.75rem;
        line-height: 0.875rem;
        letter-spacing: -0.015rem;
        text-align: left;
    }
`;

const customStyles = {
    overlay: {
      backgroundColor: 'rgba(52,45,37,0.64)',
    }
}


const InfoModalButton = ({univName}) => {

    const [isOpen, setIsOpen] = useState(false);
    
    const openModal = () => {
        setIsOpen(true)
    }

    const closeModal = () => {
        setIsOpen(false)
    }

    return(
        <>
        <InfoWrapper onClick={openModal}>
            <QuestionMarkWrapper>
                <div>
                    <h5>
                        ?
                    </h5>
                </div>
            </QuestionMarkWrapper>
            <WordingWrapper>
                <h2>
                    가방을 받을 새내기가 궁금해요!
                </h2>
            </WordingWrapper>
        </InfoWrapper>
        <Modal
            isOpen={isOpen}
            onRequestClose={closeModal}
            contentLabel="info modal"
            className="result-modal"
            style={customStyles}
            ariaHideApp={false}
        >   
            <InfoModal
                univName={univName}
                closeModal={closeModal}
            />
        </Modal>
        </>
    );
};

export default InfoModalButton;