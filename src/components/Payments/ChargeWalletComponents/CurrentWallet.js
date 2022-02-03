import React, {useState, useEffect} from "react";
import styled from "styled-components";
import axios from "axios";
import giveLogo from "../../img/icon/givLogo.svg";

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
    border: 1px solid #E5E5E5;
    border-radius:4px;
    color:#101010;   
    
`;

const WordWrapper = styled.div`
    width:70px;
    height:16px;
    margin-top:14px;
    margin-left:12px;
    display:flex;
    align-items:center;
    color:#101010;
    
    
    h3{
        font-size: 0.875rem;
        font-weight: 500;
        line-height: 1rem;
        letter-spacing: -0.015rem;
        text-align: left;
    }
`;

const MoneyWrapper = styled.div`
    width:calc(100% - 94px);
    height:16px;
    display:flex;
    margin-top:14px;
    align-items:center;
    justify-content:flex-end;
    color:#101010;

    img{
        width:18px;
        height:18px;
        margin-right:8px;
    }
    span{
        display:inline-block;
        font-size: 0.875rem;
        line-height: 1rem;
        letter-spacing: -0.015rem;

    }

    h3{
        display:inline-block;
        font-size: 0.9375rem;
        font-weight: 500;
        line-height: 1rem;
        letter-spacing: -0.015rem;
    }
`; 

const CurrentWallet = () => {

    useEffect(()=>{
        const fetchData = async() => {
            const result = await axios("/api/searchCurrentWallet");
            setCurrentWallet(result.data.wallet)
        };
        fetchData();
    })

    const [currenWallet, setCurrentWallet] = useState(0);

    return(
        <WholeWrapper>
            <CurrentWalletWrapper>
                <WordWrapper>
                    <h3>
                        Give 가능한
                    </h3>
                </WordWrapper>
                <MoneyWrapper>
                   <>
                        <img src={giveLogo} alt="기브코인" />
                        </>
                        <>
                        <span>
                            {currenWallet}
                        </span>
                        </>
                        <>
                        <h3>
                            기브
                        </h3>
                        </>
                </MoneyWrapper>
            </CurrentWalletWrapper>
        </WholeWrapper>
    );
};

export default CurrentWallet;