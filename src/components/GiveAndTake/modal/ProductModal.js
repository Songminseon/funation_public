import React from "react";
import styled from "styled-components";
import Modal from "react-modal";
import xVector from "../../img/icon/xVector.svg";
import "../../../modal.css";
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

const Contents = styled.div`
    position:absolute;
    width:calc(100% - 32px);
    height:298px;
    margin-left:16px;
`;

const HeadWrapper = styled.div`
    width:100%;
    height:84px;
    display:flex;
    align-items:center;
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




const ProductModal = ({modalIsOpen, closeModal, product, option}) => {
    return(
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="product Modal"
            className="result-modal"
            style={customStyles}
            ariaHideApp={false}
        >
            <Wrapper>
                <XWrapper>
                    <button onClick={closeModal}>
                        <img src={xVector} alt="나가기"/>
                    </button>
                </XWrapper>
                <Contents>
                    <HeadWrapper>
                        <h1>
                            축하합니다! 기부니님은 제품에 당첨되셨습니다!<br/>
                            카카오톡 채널을 꼭 확인해주세요.
                        </h1>
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

export default ProductModal;