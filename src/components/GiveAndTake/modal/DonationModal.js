import React from "react";
import styled from "styled-components";
import Modal from "react-modal";
import "../../../modal.css";
import xVector from "../../img/icon/xVector.svg";
import ItemOptions from "./ItemOptions";

const customStyles = {
    overlay: {
        backgroundColor: 'rgba(52,45,37,0.64)'
    }
}

const Wrapper = styled.div`
    width:100%;
    height:100%;
    display:flex;
    align-items:center;
`;

const XWrapper = styled.div`
    position:absolute;
    width:19px;
    height:19px;
    top:20.5px;
    right:21px;

    button{
        all:unset;
        cursor: pointer;
        width:100%;
        height:100%;
    }

    img{
        width:100%;
        height:100%;
    }
`;

const Content = styled.div`
    position: absolute;
    width:calc(100% - 32px);
    height:298px;
    margin-left:16px;
`;


const Title = styled.div`
    width:100%;
    height:84px;
    display:flex;
    align-items:center;
    text-align:center;
    position:relative;

    h1{
        color:#101010;
        font-size: 1.125rem;
        font-weight: 700;
        line-height: 1.75rem;
        letter-spacing: -0.015rem;
        margin:0 auto;
    }
`;



const Participate = styled.div`
    width:calc(100% - 32px);
    height:16px;
    margin-left:16px;
    margin-top:36px;
    display:flex;
    align-items:center;
    text-align:center;

    h3{
        color:#101010;
        font-size: 0.875rem;
        font-weight: 300;
        line-height: 1rem;
        letter-spacing: -0.015rem;
        margin:0 auto; 
    }
`;


const DonationModal = ({ modalIsOpen, closeModal, product, option}) => {
    return (
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Donation Modal"
            className="result-modal"
            style={customStyles}
            ariaHideApp={false}
        >
            <Wrapper>
                <Content>
                    <Title>
                        <h1>
                            물욕과 번뇌에서 벗어난<br/>
                            기부니의 작은 도움?행동? 덕분에<br/>
                            세상이 조금 더 따뜻해졌어요!<br/>
                        </h1>
                    </Title>
                    <ItemOptions
                        option={option}
                    />
                    <Participate>
                        <h3>
                            [동구밭] {product}
                        </h3>
                    </Participate>
                </Content>
              
                <XWrapper>
                    <button onClick={closeModal}>
                        <img src={xVector} alt="나가기" />
                    </button>
                </XWrapper>
            </Wrapper>
        </Modal>
    );
};

export default DonationModal;