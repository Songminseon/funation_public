import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";

const Wrapper = styled.div`
    position:absolute;
    width:400px;
    height:136px;
    bottom:0;
    

    @media screen and (max-width:400px){
        width:100vw;
    }
`;

const GoDetailWrapper = styled.div`
    position:fixed;
    all:unset;
    cursor:pointer;
    width:calc(100% - 32px);
    height:42px;
    margin:78px 16px;
    display:flex;
    align-items:center;
    text-align:center;
    background:white;
    border: 1px solid #D9D9D9;

    h2{
        color:#101010;
        margin:0 auto;
        font-size: 1rem;
        font-weight: 700;
        line-height: 1.3125rem;
        letter-spacing: -0.015rem;
    }
`;

const GoDetail = styled(Link)`
    all:unset;
    cursor:pointer;
    width:100%;
    height:100%;
`;

const OptionInDonation = ({id, item}) => {
    return(
        <Wrapper>
            <GoDetail to={{
                    pathname: `/giveAndTake/${id}`,
                    state:{
                        item:item
                    }
                }}>
                <GoDetailWrapper>
                    <h2>
                        상세페이지 보러가기
                    </h2>
                </GoDetailWrapper>
            </GoDetail>
        </Wrapper>
    );
};

export default OptionInDonation;