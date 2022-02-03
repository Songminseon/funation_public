import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import Kakao from "../Kakao/PlusFriends";

const Wrapper = styled.div`
    position:fixed;
    width:400px;
    height:136px;
    bottom:0;
    background:white;

    @media screen and (max-width:400px){
        width:100vw;
    }
`;

const ButtonWrapper = styled.div`
    width:calc(100% - 32px);
    height:42px;
    margin-left:16px;
    text-align:center;
    display:flex;
    align-items:center;

    a{
        text-decoration:none;
        color:#101010;
        margin:0 auto;
        font-size: 1rem;
        font-weight: 700;
        line-height: 1.3125rem;
        letter-spacing: -0.015rem;
    }

    h2{
        color:#101010;
        margin:0 auto;
        font-size: 1rem;
        font-weight: 700;
        line-height: 1.3125rem;
        letter-spacing: -0.015rem;
    }
`;

const NoStyleLink = styled(Link)`
    all:unset;
    cursor:pointer;
    width:100%;
    height:100%;
`;

const Option = () => {
    return(
        <Wrapper>
            <NoStyleLink to="/giveAndTake">
                <ButtonWrapper style={{background:"white", marginTop:"23px", border:"1px solid #D9D9D9"}}>
                    
                    <h2>
                        더 참여하러가기?
                    </h2>
                    
                </ButtonWrapper>
            </NoStyleLink>
            <>
            <Kakao />
            </>
        </Wrapper>
    );
};

export default Option;