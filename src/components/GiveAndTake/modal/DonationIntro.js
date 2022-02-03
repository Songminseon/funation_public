import React, { useState } from "react";
import styled from "styled-components";
import Modal from "react-modal"
import "../../../modal.css";
import xVector from "../../img/icon/xVector.svg";
import introStory from "../../img/photo/introStory.svg";


const Whole = styled.div`
    width:100%;
    height:100%;
    position:relative;
    overflow:auto;
    background:#E5E5E5;
`;

const XWrapper = styled.button`
    all:unset;
    cursor:pointer;
    position:fixed;
    width:36px;
    height:36px;
    top:13px;
    right:16px;
    background:white;
    border-radius:24px;
    border: 1px solid #D9D9D9;
    display:flex;
    align-items:center;
    text-align:center;
    z-index:2;
    

    @media screen and (min-width:401px){
        margin-right:calc(50vw - 200px);
    }

    img{
        margin:0 auto;
        width:14px;
        height:14px;
        z-index:1;
    }
`;

const Intro = styled.div`
    width:100%;
    height:100%;
    background:#E5E5E5;
`;

const CookieWrapper = styled.div`
    width:100%;
    height:52px;
    display:flex;
    align-items:center;
 

    button{
        all:unset;
        cursor:pointer;
        width:111px;
        height:16px;
        display:flex;
        align-items:center;
        margin-left:6px;
    }

    h3{
        color:#333333;
        font-size: 0.875rem;
        font-weight: 400;
        line-height: 1rem;
        letter-spacing: -0.015rem;
        text-align: left;
    }

    input{
        width:16px;
        height:16px;
        margin-left:16px;
    }
`


const GoToGiveAndTake = styled.div`
    position:absolute;
    top:4901px;
    width:calc(100% - 32px);
    height:42px;
    margin-left:16px;
    background:#FFC02B;
    border-radius:4px;

    button{
        all:unset;
        cursor: pointer;
        width:100%;
        height:100%;
        display:flex;
        align-items:center;
        text-align:center;
    }

    h1{
        margin:0 auto;
        font-size: 1rem;
        font-weight: 700;
        line-height: 1.3125rem;
        letter-spacing: -0.015rem;
    }
`;


const DonationIntro = ({ settingCookies }) => {

    const closeModal = () => {
        setIsOpen(false)
    }


    const [modalIsOpen, setIsOpen] = useState(true);
    const [checkCookie, setCheckCookie] = useState(false);

    const onHandleChange = e => {
        if (e.target.checked) {
            setCheckCookie(true)
        }
        else {
            setCheckCookie(false)
        }
    }

    return (
        <>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="givAndTake Intro"
                className="donation-intro"
                ariaHideApp={false}
            >
                <Whole>
                    <CookieWrapper>
                        <input type="checkbox" name="noShowToday" checked={checkCookie} onChange={onHandleChange} />
                        {checkCookie ?
                            <button onClick={settingCookies}>
                                <h3>
                                    오늘 하루 그만 보기
                                    </h3>
                            </button>
                            :
                            <button style={{ cursor: "default" }}>
                                <h3>
                                    오늘 하루 그만 보기
                                    </h3>
                            </button>
                        }

                    </CookieWrapper>
                    <Intro>
                        <img src={introStory} alt="기브앤테이크 인트로" />
                    </Intro>
                    {checkCookie ?
                        <XWrapper onClick={settingCookies}>
                            <img src={xVector} alt="나가기" />
                        </XWrapper>
                        :

                        <XWrapper onClick={closeModal}>
                            <img src={xVector} alt="나가기" />
                        </XWrapper>
                    }

                    <GoToGiveAndTake>
                        <button onClick={closeModal}>
                            <h1>
                                이제 하러갈까요!?
                        </h1>
                        </button>
                    </GoToGiveAndTake>

                </Whole>
            </Modal>
        </>
    );
};

export default DonationIntro;