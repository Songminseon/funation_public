import React from "react";
import styled from "styled-components";
import Modal from "react-modal";
import "../../../modal.css";
import xVector from "../../img/icon/xVector.svg";
import ItemOptions from "./ItemOptions";

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


const Contents = styled.div`
    position:absolute;
    width:calc(100% - 32px);
    height:298px;
    margin-left:16px;
`;

const HeadWrapper = styled.div`
    width:100%;
    height:84px;
    text-align:center;
    position:relative;
    

    h1{
        color:#101010;
        margin:0 auto;
        font-size: 1.125rem;
        font-weight: 700;
        line-height: 1.75rem;
        letter-spacing: -0.015rem;
    }

    p{
        font-size: 0.875rem;
        line-height: 1.375rem;
        letter-spacing: -0.015rem;
        margin: 0 auto;
    }
`;

const MainHead = styled.div`
    width:100%;
    height:28px;
    display:flex;
    align-items:center;
    text-align:center;
`;

const SubHead = styled.div`
    width:calc(100% - 36px);
    height:44px;
    margin-left:18px;
    margin-top:12px;
`;


const Participate = styled.div`
    width:calc(100% - 32px);
    height:16px;
    margin-top:46px;
    margin-left:16px;
    display:flex;

    h3{
        color:#101010;
        font-size: 0.875rem;
        font-weight: 300;
        line-height: 1rem;
        letter-spacing: -0.015rem;
        margin:0 auto; 
    }
`;



const customStyles = {
    overlay: {
        backgroundColor: 'rgba(52,45,37,0.64)'
    }
}

const GoodsModal = ({ modalIsOpen, closeModal, product, option}) => {
    return (
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="product Modal"
            className="result-modal"
            style={customStyles}
        >
            <Wrapper>
                <XWrapper>
                    <button onClick={closeModal}>
                        <img src={xVector} alt="나가기"/>
                    </button>
                </XWrapper>
                <Contents>
                    <HeadWrapper>
                        <MainHead>
                            <h1>
                                굿즈 응모 결과를 기다려주세요!
                            </h1>
                        </MainHead>
                        <SubHead>
                            <p>
                                동구밭에서 기부니가좋다!<br/>
                                프로젝트 목표 달성 후 일괄 지급합니다.
                            </p>
                        </SubHead>
                    </HeadWrapper>
                    <ItemOptions
                        option={option}
                    />
                    <Participate>
                            <h3>
                                [동구밭] {product}
                            </h3>
                    </Participate>
                </Contents>
            </Wrapper>
           
        </Modal>
    );
};

export default GoodsModal;