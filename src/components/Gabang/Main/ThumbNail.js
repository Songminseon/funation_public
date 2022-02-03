import React from "react";
import styled from "styled-components";
import rubyInterview from "../../img/photo/rubyInterview.png";
import play from "../../img/icon/play.svg";

const ButtonWrapper = styled.a`
    all:unset;
    cursor: pointer;
    width:calc(100% - 32px);
    height:162px;
    background:#514D48;
    border-radius:4px;
    display:flex;
    align-items:center;
    margin-left:16px;
    position:relative;
    color:white;
    img{
        position:absolute;
        top:4px;
        right:12px;
        width:162px;
        height:162px;
    }

    h2{
        color:white;
        margin-left:16px;
        font-family: "GmarketSansBold";
        font-size: 1rem;
        line-height: 1.5rem;
        letter-spacing: -0.015rem;
    }

`;

const PlayButton = styled.div`
    width:32px;
    height:32px;
    position:absolute;
    top:103px;
    left:16px;

    img{
        position:absolute;
        left:0px;
        top:0px;
        width:100%;
        height:100%;
        margin:0 auto;
    }
`;

const TitleWrapper = styled.div`
    width:126px;
    height:56px;
    display:flex;
    align-items:center;
    position:absolute;
    top:14px;
    left:20px;

    h1{
        font-family:"GmarketSansBold";
        font-size: 1.3125rem;
        line-height: 1.75rem;
        letter-spacing: -0.015rem;
        text-align: left;
        z-index:2;
    }

    div{
        width:100px;
        height:24px;
        position:absolute;
        left:0px;
        top:0px;
        background:#FFD335;
    }

    span{
        color:black;
        font-family:"GmarketSansBold";
        font-size: 1.3125rem;
        line-height: 1.75rem;
        letter-spacing: -0.015rem;
        text-align: left;
    }
`;

const ThumbNail = () => {
    return(
        <ButtonWrapper href="https://www.youtube.com/watch?v=2td-cjmH5Yg" target="_blank">
            <img src={rubyInterview} alt="루비인터뷰" />
                <TitleWrapper>
                <h1>
                    <span>새내기부니</span>의<br/>
                    새로운 삶
                </h1>
                <div>

                </div>
                </TitleWrapper>
            <PlayButton>
                <img src={play} alt="플레이버튼" />
            </PlayButton>
        </ButtonWrapper>
    );
};

export default ThumbNail;