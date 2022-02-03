import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Header from "../Navigation/Header";
import PaymentsResult from "./PaymentsResult";
import SuccessLogo from "../img/logo/SuccessLogo.svg";
import arrow from "../img/icon/arrow.svg";

const PaymentsDoneWrapper = styled.div`
    background: #FFFFFF;
`
const SuccessMessageWrapper = styled.div`
    
`

const LogoImgWrapper = styled.div`
    margin-top:2.857%;
    margin-bottom:2.857%;
    margin-left:36%;
    width:27.75%;
    height:15.571%;
    display:flex;
    img{
        width:100%;
    }
`

const MessageWrapper = styled.div`
    width:86%;
    height:9%;
    margin-left:6.5%;
    align-items: center;
    text-align: center;
    p{
        font-size: 1.4375rem;
        line-height: 2.0625rem;
        margin:0;
    }
`

const StageWrapper = styled.div`
    width:64.5%;
    height:3.571%;
    margin-left:17.75%;
    margin-top:3.142%;
    display:flex;
`
const Stage1 = styled.div`
    width:11.717%;
    height:3.428%;
    font-size: 0.625rem;
    line-height: 1.5rem;
    letter-spacing: -0.24px;
    color: #979797;
    display:flex;
`
const Stage2 = styled.div`
    width:15.232%;
    height:3.428%;
    font-size: 0.625rem;
    line-height: 1.5rem;
    letter-spacing: -0.24px;
    color: #979797;
    display:flex;
`

const Stage3 = styled.div`
    width:7.422%;
    height:3.428%;
    font-size: 0.625rem;
    line-height: 1.5rem;
    letter-spacing: -0.24px;
    color: #979797;
    display:flex;
`

const Stage4 = styled.div`
    width:30.468%;
    height:3.428%;
    font-size: 0.625rem;
    line-height: 1.5rem;
    letter-spacing: -0.24px;
    color: #979797;
    display:flex;
`
const Arrowimg = styled.div`
    display:flex;
    width:1.546%;
    height:1.037%;
    margin-top:1.298%;
    margin-left:5.085%;
    margin-right:5.085%;
    img{
        width:100%;
    }
`
const Message = styled.div`
    width:70.5%;
    height:5.428%;
    margin-left:14.75%;
    margin-top:2.701%;
    font-size: 0.75rem;
    line-height: 1.125rem;
    align-items: center;
    text-align: center;
    letter-spacing: -0.015rem;
    span{
        font-size: 0.75rem;
        font-weight:700;
    }
`
const LinkWrapper = styled.div`
    display:flex;
    width:100%;
    margin-top:3%;
`
const GoToHome = styled(Link)`
    width:31.505%;
    height:4.154%;
    border-radius:30px;
    margin-right:2%;
    margin-left:17.75%;
    background-color:black;
    display:flex;
    align-items:center;
    text-align:center;
    h1{
        all:unset;
        margin:0 auto;
        color:white;
        size:0.875rem;
        letter-spacing:-0.015rem;
        line-height:1rem;
    }
`
const GoToLink = styled(Link)`
    width:31.505%;
    height:4.154%;
    border-radius:30px;
    background-color:black;
    display:flex;
    align-items:center;
    text-align:center;
    h1{
        all:unset;
        margin:0 auto;
        color:white;
        size:0.875rem;
        letter-spacing:-0.015rem;
        line-height:1rem;
    }
`


const PaymentsDone = () => {
   
    return(
        <PaymentsDoneWrapper>
            <Header />
                <SuccessMessageWrapper>
                    <LogoImgWrapper><img src={SuccessLogo} alt="로고"/></LogoImgWrapper>
                    <MessageWrapper><p>소중한 기부금이<br/>안전하게 전달되었습니다.</p></MessageWrapper>
                </SuccessMessageWrapper>
            <PaymentsResult/>
            <StageWrapper>
                <Stage1>모금중</Stage1>
                <Arrowimg><img src={arrow} alt="1"/></Arrowimg>
                <Stage2>모금완료</Stage2>
                <Arrowimg><img src={arrow} alt="2"/></Arrowimg>
                <Stage3>추첨</Stage3>
                <Arrowimg><img src={arrow} alt="3"/></Arrowimg>
                <Stage4>기부금 및 제품 전달</Stage4>
            </StageWrapper>
            
            <Message>
            이 모든 과정은 투명하게 공개되며,<br/>
            <span>카카오톡 플러스친구</span>로 알림을 받아보실 수 있습니다.
            </Message>
            <LinkWrapper>
            <GoToHome to="/"><h1>홈으로</h1></GoToHome>
            <GoToLink to="/"><h1>참여 내역</h1></GoToLink>
            </LinkWrapper>
        </PaymentsDoneWrapper>
    );
};

export default PaymentsDone;