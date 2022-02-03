import React, {useEffect, useState} from "react";
import styled from "styled-components";
import coins from '../../img/icon/coins.svg';
import CountUp from "react-countup";
import axios from "axios";

const Wrapper = styled.div`
    width:100%;
    height:79px;
    background:#333333;
    margin-top:16px;
`;

const Tickle = styled.div`
    width:calc(100% - 42px);
    height:45px;
    margin:18px 21px;
    display:flex;
`;

const WordingWrapper = styled.div`
    width:180px;
    height:45px;
`;

const Wording = styled.div`
    width:180px;
    height:21px;
    display:flex;
    align-items:center;
    
    h2{
        color: #FFC02B;
        font-family:"GmarketSansBold";
        font-size: 1.125rem;
        line-height: 1.3125rem;
        letter-spacing: -0.015rem;
        text-align: left;
    }
`;

const SubWording = styled.div`
    width:103px;
    height:16px;
    display:flex;
    align-items:center;
    margin-top:8px;

    h3{
        color:#F2F2F2;
        font-size: 0.75rem;
        line-height: 1rem;
        letter-spacing: -0.015rem;
        text-align: left;

    }
`;

const MoneyWrapper = styled.div`
    width:calc(100% - 180px);
    height:45px;
`;

const Money = styled.div`
    width:100%;
    height:17px;
    margin-top:27px;
    display:flex;
    align-items:center;
    color:white;
    text-align:right;
    justify-content:flex-end;

    img{
        margin-right:4px;
        width:20px;
        height:15px;
    }

    span{
        font-size: 1rem;
        font-weight: 700;
        line-height: 1rem;
        letter-spacing: -0.015rem;
        text-align: right;
    }

    h3{
        font-size: 0.9375rem;
        line-height: 1rem;
        letter-spacing: -0.015rem;
        text-align: right;

    }


`;

const AllDonation = () => {

    const [money, setMoney] = useState(0);
    useEffect(()=>{
        const fetchData = async()=>{
            const result = await axios("/api/searchAllDonation");
            setMoney(result.data.money.money);
        };

        fetchData()
        
        return () => {
            setMoney(0)
        }
        // const timer = setInterval(()=>{
        //     fetchData()   
        // },1000)

        // return ()=>{
        //     clearInterval(timer)

        // }
    }, [])
    

    return(
        <Wrapper>
            <Tickle>
                <WordingWrapper>
                    <Wording>
                        <h2>
                            티끌 모아 태산 되는 중
                        </h2>
                    </Wording>
                    <SubWording>
                        <h3>
                            지금까지 모인 기부금
                        </h3>
                    </SubWording>
                </WordingWrapper>
                <MoneyWrapper>
                    <Money>
                        <img src={coins} alt="코인" />
                        <CountUp start={0} end={money||0} separator=","/>
                        <h3>
                            원
                        </h3>
                    </Money>
                </MoneyWrapper>
            </Tickle>
        </Wrapper>
    );
};

export default AllDonation;