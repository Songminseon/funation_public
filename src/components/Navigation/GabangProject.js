import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import axios from "axios";

const NoStyleMove = styled(Link)`
    all:unset;
    width:100%;
    height:100%;
    cursor:pointer;
    color:#333333;
`;

const ContentWrapper = styled.div`
    width:100%;
    height:194px;
    margin-top:36px;
`;

const ContentTitle = styled.div`
    width:calc(100% - 19px);
    height:24px;
    margin-left:19px;
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

const GabangButton = styled.div`
    width:calc(100% - 32px);
    height:124px;
    margin-left:16px;
    margin-top:24px;
    background: radial-gradient(51.82% 45.52% at 47.14% 52.42%, #CECDD2 0%, #CBCBCF 100%);
    border-radius:4px;
    position:relative;
    color:#101010;
`;

const TitleWrapper = styled.div`
    width:140px;
    height:56px;
    position:absolute;
    margin-left:15px;
    top:18px;
    display:flex;
    align-items:center;

    h2{
        z-index:3;
        font-family: "GmarketSansBold";
        font-size: 1.3125rem;
        line-height: 1.75rem;
        letter-spacing: -0.015rem;
        text-align: left;
    }    

    div{
        position:absolute;
        top:0px;
        left:0px;
        width:102px;
        height:24px;
        background:#FFD335;    
    }
`;

const LeftDay = styled.div`
    width:40px;
    height:21px;
    right:16px;
    top:16px;
    display:flex;
    align-items:center;
    position:absolute;
    justify-content:flex-end;

    h3{
        font-family: "GmarketSansBold";
        font-size: 0.875rem;
        line-height: 1.3125rem;
        letter-spacing: -0.015rem;
        text-align:right;
    }

`;
 
const MoneyWrapper = styled.div`
    width:calc(100% - 34px);
    height:21px;
    position:absolute;
    display:flex;
    align-items:center;
    margin-left:17px;
    top:77px;
    justify-content:flex-end;

    h3{
        font-family: "GmarketSansBold";
        font-size: 0.875rem;
        line-height: 1.3125rem;
        letter-spacing: -0.015rem;    
    }
    
    h4{
        color:#797979;
        font-family: "GmarketSansMedium";
        font-size: 0.75rem;
        line-height: 1.3125rem;
        letter-spacing: -0.015rem;
    }
`;

const PercentageBar = styled.div`
    width:calc(100% - 32px);
    height:2px;
    position:absolute;
    margin-left:16px;
    top:105px;
    background:rgba(16, 16, 16, 0.48);

    div{
        position:absolute;
        height:100%;
        background:#101010;
        top:0px;
        left:0px;
    }
`;



const GabangProject = () => {

    useEffect(()=>{
        const fetchData = async () => {
            const result = await axios('/api/searchGabang')
            setDonation(result.data.money.money)
        }
        fetchData()

        return () => {
            setDonation(0)
        }
    }, [])

    const [donation, setDonation] = useState(0)
    const totalMoney = 520000;
    const today = new Date()
    const dueDate = new Date(2021, 3, 15)
    const leftDay = Math.ceil((dueDate - today)/(1000*60*60*24))

    return(
            <ContentWrapper>
                 <NoStyleMove to="/gabang">
                    <ContentTitle>
                        <h1>
                            기부니가좋은가방
                        </h1>
                    </ContentTitle>
                    <ContentSubTitle>
                        <h2>
                            내 후배는 내가 챙긴다 !
                        </h2>
                    </ContentSubTitle>
                    <GabangButton>
                        <TitleWrapper>
                            <h2>
                                새내기부니에게<br/>
                                입학 선물을
                            </h2>
                            <div>
                            </div>              
                        </TitleWrapper>
                        <LeftDay>
                            <h3>
                                D-{leftDay}
                            </h3>
                        </LeftDay>
                        <MoneyWrapper>
                            <h3>
                                {donation.toLocaleString()}&nbsp;
                            </h3>
                            <h4>
                                / {totalMoney.toLocaleString()} 원
                            </h4>
                        </MoneyWrapper>
                        <PercentageBar>
                            <div style={{width:`${donation*100/totalMoney}%`}}>

                            </div>
                        </PercentageBar>
                    </GabangButton>
                </NoStyleMove>
            </ContentWrapper>
    );
};

export default GabangProject;