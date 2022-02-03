import React, {useState} from "react";
import styled from "styled-components";

const ResultWrapper = styled.div`
    width:100%;
    margin-top:7.571vh;
    
    /* width:68.25%;
    height:31.584vh; */
`
const Details = styled.div`
    display: flex;
    margin-left:19.75%;
    margin-bottom:0.428vh;
    width:13.75%;
    height:2.428vh;
    font-size: 0.625rem;
    line-height: 1.5rem;
    align-items: center;
    letter-spacing: -0.24px;
`
const Line = styled.div`
    margin-left:17.75%;
    display: flex;
    width: 64.5%;
    height: 0.285vh;
    background: #D9D9D9;
    border-radius: 2px;
`
const DetailsWrapper = styled.div`
    width:100%;
    display: flex;
    h2{
        all: unset;
        width:13.75%;
        height:2.428vh;
        font-size: 0.625rem;
        line-height: 1.5rem;
        align-items: center;
        letter-spacing: -0.24px;
        color: #979797;
        margin-top:1.9vh;
    }
`
const Details1 = styled.div`
    display: flex;
    margin-left:19.75%;
    margin-top:2.428vh;
    width:13.75%;
    height:2.428vh;
    font-size: 0.625rem;
    line-height: 1.5rem;
    align-items: center;
    letter-spacing: -0.24px;
    color: #979797;
`
const Details2 = styled.div`
    display: flex;
    margin-left:17.5%;
    margin-top:0.857vh;
    width:29.5%;
    height:5.285vh;
    font-size: 0.875rem;
    line-height: 1.5rem;
    align-items: center;
    letter-spacing: -0.24px;
`
const Details3 = styled.div`
    display: flex;
    margin-left:17.5%;
    margin-top:0.857vh;
    width:14.25%;
    height:5.285vh;
    font-size: 0.875rem;
    line-height: 1.5rem;
    align-items: center;
    letter-spacing: -0.24px;
    h1{
        all:unset;
        display: flex;
        font-size: 0.625rem;
        line-height: 1.5rem;
        letter-spacing: -0.24px;
        margin-top:0.4vh;
    }
`
const PaymentsResult = () => {

    const[name, setName] = useState("닉네임")
    

    return(
        <ResultWrapper>
            <Details>기부내역</Details>
            <Line></Line>
            <DetailsWrapper><Details1>기부니</Details1><Details2>{name}</Details2></DetailsWrapper>
            <DetailsWrapper><Details1>기부하니</Details1><Details2>동구밭</Details2></DetailsWrapper>
            <DetailsWrapper><Details1>참여제품</Details1><Details2>제품 이름</Details2></DetailsWrapper>
            <DetailsWrapper><Details1>기부금</Details1><Details3>40 <h1>기부니</h1></Details3><h2>4,000원</h2></DetailsWrapper>
            <Line></Line>
        </ResultWrapper>
    );
}

export default PaymentsResult;