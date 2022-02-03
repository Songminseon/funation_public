import React from "react";
import styled from "styled-components";
import vectorLeft from "../../img/icon/vectorLeft.svg";

const MenuWrapper = styled.div`
    height:14.142vh;
    width:100%;
    display:flex;   
`;

const VectorWrapper = styled.div`
    width:5.25%;
    height:3vh;
    margin-left:4%;
    margin-top:5.285vh;
    display:flex;
    align-items:center;
    text-align:center;
    cursor:pointer; 

    button{
        all:unset;
        width:100%;
        height:100%;
        cursor:pointer;
    }

    img{
        margin:0 auto;
    }
`;

const TitleWrapper = styled.div`
    width:29.25%;
    height:6.714vh;
    margin-left:26.25%;
    margin-top:3.428vh;
    display:flex;
    align-items:center;
    text-align:center;

        h1{
            margin:0 auto;
            font-size: 0.875rem;
            line-height: 1rem;
            letter-spacing: -0.015rem;
        }
`;

const handleGoBack = () => {
    window.history.back();
}

const SuggestionTitle = () => {
    return(
        <>
            <MenuWrapper>
                <VectorWrapper>
                    <button onClick={handleGoBack}>
                        <img src={vectorLeft} alt="뒤로가기"/>
                    </button>
                </VectorWrapper>
                <TitleWrapper>
                    <h1>
                        제안하기
                    </h1>
                </TitleWrapper>
            </MenuWrapper>
        </>
    );
};

export default SuggestionTitle