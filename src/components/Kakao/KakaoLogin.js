import React from "react";
import styled from "styled-components";
import loginbutton from "../img/icon/LoginButton.svg";

const KakaoButton = styled.div`
    width:calc(100% - 32px);
    height:42px;
    margin-left:16px;
    background:#FFC02B;
    display:flex;
    align-items:center;
    text-align:center;
    border-radius:4px;
`;

const KakaoImg = styled.div`
  width:143px;
  height:28px;
  margin: 0 auto;
  
  img{
    width:100%;
    height:100%;
  }
`;

const KakaoLogin = () => {
    return(
        <>
            <a href="/auth/kakao">
              <KakaoButton>
                
                  <KakaoImg>
                    <img src={loginbutton} alt="카카오로그인버튼" />
                  </KakaoImg>
              </KakaoButton>
              </a>
        </>

    );
};

export default KakaoLogin;