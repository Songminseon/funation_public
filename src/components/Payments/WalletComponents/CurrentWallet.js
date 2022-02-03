import React, {useState, useEffect} from "react";
import styled from "styled-components";
import vectorRight from "../../img/icon/vectorRight.svg";
import axios from "axios"
import {Link} from "react-router-dom";
import givLogo from "../../img/icon/givLogo.svg";

const WholeWrapper = styled.div`
    width:100%;
    height:60px;
    
`

const CurrentWalletWrapper = styled.div`
    width:calc(100% - 32px);
    margin-left:16px;
    margin-right:16px;
    margin-top:16px;
    height:44px;
    background:white;
    display:flex;
    text-align:center;
    align-items:center;
    border-radius:4px;
    border: 1px solid #E5E5E5; 
    color:#101010;   
`;

const WordWrapper = styled.div`
    width:70px;
    height:16px;
    margin-left:12px;
    display:flex;
    align-items:center;
    justify-content:flex-start;
    h2{
        font-size: 0.875rem;
        font-weight: 500;
        line-height: 0.875rem;
        letter-spacing: -0.015rem;

    }
`;

const GivWrapper = styled.div`
    width:18px;
    height:18px;
    display:center;
    align-items:center;
    text-align:center;
    margin-left:9px;

    img{
        width:100%;
        height:100%;
        margin: 0 auto;
    }
`

const MoneyWrapper = styled.div`
    width:88px;
    height:16px;
    margin-left:7px;
    display:flex;
    align-items:center;
    color:#F3A100;
 
    span{
        display:inline-block;
        font-size: 0.875rem;
        font-weight: 700;
        line-height: 0.875rem;
        letter-spacing: -0.015rem;
        text-align: left;
    }
    h4{
        display:inline-block;
        font-size: 0.875rem;
        font-weight: 500;
        line-height: 0.875rem;
        letter-spacing: -0.015rem;
        text-align: left;

    }

`;

const ChargeWrapper = styled.div`
    width:40px;
    height:20px;
    display:flex;
    align-items:center;
    margin-left:calc(100% - 272px);
    

    h2{
        font-size: 0.6875rem;
        font-weight: 500;
        line-height: 1.125rem;
        letter-spacing: -0.015rem;
    }
`;

const VectorWrapper = styled.div`
    width:5px;
    height:10px;
    display:flex;
    align-items:center;
    margin-left:8px;
    img{
        width:100%;
        height:100%;
    }
`;

const NoStyleLink = styled(Link)`
    all:unset;
    width:100%;
    height:100%;
    cursor:pointer;
`;
const CurrentWallet = () => {
    
    useEffect(()=>{
        const fetchData = async() => {
            const result = await axios("/api/searchCurrentWallet");
            setCurrentWallet(result.data.wallet)
        };
        fetchData();
    })  

    const [currentWallet, setCurrentWallet] = useState(0);

    return(
        <NoStyleLink to="/walletCharge">
            <WholeWrapper>
                <CurrentWalletWrapper>
                    <WordWrapper>
                        <h2>
                            Give 가능한
                        </h2>
                    </WordWrapper>
                    <GivWrapper>
                        <img src={givLogo} alt="기부코인" />
                    </GivWrapper>
                    <MoneyWrapper>
                  
                        <span>
                            {currentWallet}
                        </span>
                        <h4>
                            기브
                        </h4>
                    </MoneyWrapper>
                    <ChargeWrapper>
                        <h2>
                            충전하기
                        </h2>
                    </ChargeWrapper>
                    <VectorWrapper>
                        <img src={vectorRight} alt="충전하러가기" />
                    </VectorWrapper>
                </CurrentWalletWrapper>
            </WholeWrapper>
        </NoStyleLink>
    );
};

export default CurrentWallet;