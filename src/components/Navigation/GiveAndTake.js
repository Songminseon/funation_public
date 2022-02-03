import React, {useEffect, useState} from "react";
import styled from "styled-components";
import donglogo from "../img/logo/donguText.svg";
import {Link} from "react-router-dom"
import axios from "axios";

const ContentWrapper = styled.div`
    width:100%;
    height:194px;
`;

const ContentTitle = styled.div`
    width:calc(100% - 19px);
    height:24px;
    margin-left:19px;
    margin-top:21px;
    display:flex;
    align-items:center;
    text-align:left;

    h1{
        color:#101010;
        font-family:"GmarketSansBold";
        font-size: 1.125rem;
        line-height: 1.5rem;
        letter-spacing: -0.015rem;
    }
`;

const ContentSubTitle = styled.div`
    width:calc(100% - 19px);
    height:16px;
    margin:6px 19px;
   
    display:flex;
    align-items:center;
    text-align:left;

    h2{
        color:#979797;
        font-size: 0.875rem;
        line-height: 1rem;
        letter-spacing: -0.015rem;
    }
`;

const GiveButton = styled.div`
    width:calc(100% - 32px);
    height:124px;
    margin-left:16px;
    margin-top:24px;
    background: #FFCC16;
    border-radius:4px;
    border: 1px solid #F2DBD6;
`;

const WithDongu = styled.div`
    width:calc(100% - 30px);
    height:18px;
    margin-left:15px;
    margin-top:18px;
    display:flex;
    align-items:center;

    img{
        width:59px;
        height:18px;
    }

    h5{
        color:#333333;
        opacity:0.64;
        display:inline-block;
        padding-top:4px;
        font-size: 0.75rem;
        font-weight: 500;
        line-height: 0.875rem;
        letter-spacing: -0.015rem;
    }
`;

const WithFunation = styled.div`
    width:calc(100% - 30px);
    height:24px;
    margin-left:15px;
    margin-top:7px;
    display:flex;
    align-items:center;

    h1{
        color:#101010;
        font-family: "GmarketSansBold";
        font-size: 1.3125rem;
        font-style: normal;
        font-weight: 700;
        line-height: 1.5rem;
        letter-spacing: -0.015rem;
        text-align: left;

    }
`;

const WithDonation = styled.div`
    width:calc(100% - 34px);
    height:21px;
    margin-top:9px;
    margin-left:17px;
    display:flex;
    align-items:center;
    justify-content:flex-end;

    h2{
        color:#101010;
        font-size: 0.875rem;
        font-family:"GmarketSansBold";
        line-height: 1.3125rem;
        letter-spacing: -0.015rem;
    }

    h3{
        color:#333333;
        opacity:0.64;
        font-size: 0.75rem;
        font-family:"GmarketSansMedium";
        line-height: 1.3125rem;
        letter-spacing: -0.015rem;
    }
`;

const WithPercent = styled.div`
    width:calc(100% - 34px);
    height:2px;
    margin-left:17px;
    margin-top:7px;
    background: rgba(16, 16, 16, 0.48);

    div{
        width:100%;
        height:100%;
        background:#101010;
    }
`;

const NoStyleMove = styled(Link)`
    all:unset;
    width:100%;
    height:100%;
    cursor:pointer;
    color:#333333;
`;

const GiveAndTake = () => {

    const [money, setMoney] = useState(0);
    useEffect(()=>{
        const fetchData = async()=>{
            const result = await axios("/api/searchGiveAndTake");
            setMoney(result.data.money.money);
        };

        fetchData()
        
        return () => {
            setMoney(0)
        }
    }, [])
    const target = 3600000;

    return(
                <ContentWrapper>
                    <NoStyleMove to="/giveandtake">                    
                        <ContentTitle>
                            <h1>
                                기부앤테이크
                            </h1>
                        </ContentTitle>
                        <ContentSubTitle>
                            <h2>
                                주기만 하는 기부는 그만 ㅡ !
                            </h2>
                        </ContentSubTitle>
                        <GiveButton>
                            <WithDongu>
                                <img src={donglogo} alt="동구밭로고" />
                                <h5>
                                    에서
                                </h5>
                            </WithDongu>
                            <WithFunation>
                                <h1>
                                    기부니가좋다!
                                </h1>
                            </WithFunation>
                            <WithDonation>
                                <h2>
                                    {money.toLocaleString()}&nbsp;
                                </h2>
                                <h3>
                                    / {target.toLocaleString()} 원
                                </h3>
                            </WithDonation>
                            <WithPercent>
                            <div style={{width:(money/target)*100 + "%"}}>

                                </div>
                            </WithPercent>
                        </GiveButton>
                    </NoStyleMove>
                </ContentWrapper>
            
    );
};

export default GiveAndTake;