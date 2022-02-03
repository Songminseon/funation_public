import React from "react";
import styled from "styled-components";
import introStory from "../img/photo/introStory.svg";
import xVector from "../img/icon/xVector.svg"
const Whole = styled.div`
    width:100%;
    height:100vh;
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

const IntroWrapper = styled.div`
    width:100%;
    height:100%;
    background:#E5E5E5;
`;


const Intro = () => {
    return(
        <Whole>
            <XWrapper onClick={()=>window.history.back()}>
                <img src={xVector} alt="나가기" />
            </XWrapper>
            <IntroWrapper>
                <img src={introStory} alt="인트로" />
            </IntroWrapper>
        </Whole>
    );
};

export default Intro;