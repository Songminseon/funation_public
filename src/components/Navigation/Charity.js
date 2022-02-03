import React, {useState} from "react";
import styled from "styled-components";
import Modal from "react-modal";
import "../../modal.css";
import xVector from "../img/icon/xVector.svg";
import charity1 from "../img/logo/charity1.svg";
import charity2 from "../img/logo/charity2.svg";
import charity3 from "../img/logo/charity3.svg";

const CharityWrapper = styled.button`
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

const ModalWhole = styled.div`
    width:100%;
    height:100%;
    position:relative;
`;

const TitleWrapper = styled.div`
    width:168px;
    height:56px;
    position:absolute;
    display:flex;
    align-items:center;
    text-align:left;
    color:#101010;
    margin-left:16px;
    top:16px;

    h1{
        font-size: 1.125rem;
        font-weight: 700;
        line-height: 1.75rem;
        letter-spacing: -0.015rem;
    }
`;

const XWrapper = styled.button`
    all:unset;
    cursor: pointer;
    width:24px;
    height:24px;
    position:absolute;
    top:16px;
    right:16px;

    img{
        position:absolute;
        width:16px;
        height:16px;
        left:4px;
        top:4px;
    }
`;

const DescriptionWrapper = styled.div`
    width:calc(100% - 32px);
    height:48px;
    position:absolute;
    top:100px;
    margin-left:16px;
    display:flex;
    align-items:center;

    p{
        color:#333333;
        font-size: 1rem;
        line-height: 1.5rem;
        letter-spacing: -0.015rem;
        text-align: left;

    }
`;

const ListWrapper = styled.div`
    position:absolute;
    width:calc(100% - 32px);
    height:275px;
    margin-left:16px;
    top:176px;
`;

const LogoWrapper = styled.div`
    width:100%;
    height:83px;

    img{
        width:100%;
        height:100%;
    }
`;

const customStyles = {
    overlay: {
      backgroundColor: 'rgba(52,45,37,0.64)',
      zIndex:10,
    }
}

const Charity = () => {

    const [isOpen, setIsOpen] = useState(false);
    
    const openModal = () => {
        setIsOpen(true);
    }

    const closeModal = () => {
        setIsOpen(false)
    }

    return(
        <>
            <CharityWrapper onClick={openModal}>
                <QuestionMarkWrapper>
                    <div>
                        <h5>
                            ?
                        </h5>
                    </div>
                </QuestionMarkWrapper>
                <WordingWrapper>
                    <h2>
                        기부를 하면 제 돈은 어디로 가나요?
                    </h2>
                </WordingWrapper>
            </CharityWrapper>
            <Modal
                isOpen={isOpen}
                onRequestClose={closeModal}
                contentLabel="charity modal"
                className="result-modal"
                style={customStyles}
                ariaHideApp={false}>
                    <ModalWhole>
                        <TitleWrapper>
                            <h1>
                                기부를 하면<br/>
                                제 돈은 어디로 가나요?
                            </h1>
                        </TitleWrapper>
                        <XWrapper onClick={closeModal}>
                            <img src={xVector} alt="나가기" />
                        </XWrapper>
                        <DescriptionWrapper>
                            <p>
                                총 모금액 3,600,000원 중 운영비 20%를 제외한 2,880,000원을 아래 세 단체에 나눠서 기부 할 예정입니다!
                            </p>
                        </DescriptionWrapper>
                        <ListWrapper>
                            <LogoWrapper>
                                <a href="https://beautifulfund.org/">
                                    <img src={charity1} alt="기부재단"/>
                                </a>
                            </LogoWrapper>
                            <LogoWrapper style={{marginTop:"13px"}}>
                                <a href="http://hotpinkdolphins.org/">
                                    <img src={charity2} alt="기부재단"/>
                                </a>
                            </LogoWrapper>
                            <LogoWrapper style={{marginTop:"13px"}}>
                                <a href="https://www.relief.or.kr/">
                                    <img src={charity3} alt="기부재단"/>
                                </a>
                            </LogoWrapper>
                        </ListWrapper>
                    </ModalWhole>
            </Modal>
        </>
    );
};

export default Charity;