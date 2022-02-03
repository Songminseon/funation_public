import React from "react";
import styled from "styled-components";

const ButtonWrapper = styled.div`
    position:relative;
    width:calc(100% - 32px);
    height:42px;
    margin-left:16px;
    text-align:center;
    display:flex;
    align-items:center;
    margin-top:12px;
    background:#FFC02B;

    button{
        all:unset;
        width:100%;
        height:100%;
        cursor: pointer;
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


const PlusFriends = () => {

  
    const goToChannel = () => {
        if(window.Kakao){
            const kakao = window.Kakao
            if(!kakao.isInitialized()){
                kakao.init(`${process.env.REACT_APP_KAKAO_KEY}`)
            }
            kakao.Channel.addChannel({
                channelPublicId:'_NaXEK',
            
                
            })
        }
    }

    return(
        <ButtonWrapper>
                <button onClick={goToChannel}>
                    <h2>
                        기부 과정 알림 받기
                    </h2>
                </button>
        
        </ButtonWrapper>
    );
};

export default PlusFriends;