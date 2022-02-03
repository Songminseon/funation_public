import React from "react";
import styled from "styled-components";
import OnBoardingSlider from "./OnBoarding/OnBoardingSlider";
import Footer from "./MyStatus/HomeInformation/Footer";
import KakaoLogin from "./Kakao/KakaoLogin";

const WholeWrapper = styled.div`
  width:100%;
  height:100vh;
`

const SliderWrapper = styled.div`
  width:100%;
  height:488px;
  background:white;
    @media screen and (max-width:400px){
      height:calc(100vw + 88px);
    }
`;

const KakaoWrapper = styled.div`
  width:400px;
  height:42px;
  position:fixed;
  bottom:16px;

  @media screen and (max-width:400px){
    width:100vw;
  }
`

const NoLoginButton = styled.button`
  all:unset;
  cursor: pointer;
  width:calc(100% - 32px);
  height:42px;
  margin-left:16px;
  background:white;
  border: 1px solid #D9D9D9;
  border-radius:4px;
  display:flex;
  align-items:center;
  text-align:center;

  h3{
    margin:0 auto;
    color:#101010;
    font-size: 1rem;
    font-weight: 700;
    line-height: 1.3125rem;
    letter-spacing: -0.015rem;
  }
`;

const FooterWrapper = styled.div`
  width:100%;
  height:450px;
`;

const OnBoarding = ({loginByGuest}) => {
  return (
    <>
      <WholeWrapper>
          <SliderWrapper>
            <OnBoardingSlider />
          </SliderWrapper>
          <KakaoWrapper style={{bottom:"70px"}}>
            <NoLoginButton onClick={loginByGuest}>
                  <h3>
                    로그인 없이 둘러보기
                  </h3>
            </NoLoginButton>
          </KakaoWrapper>
          <KakaoWrapper>
            <KakaoLogin />
          </KakaoWrapper>
      </WholeWrapper>
      <FooterWrapper>
        <Footer />
      </FooterWrapper>
    </>
  );
}


export default OnBoarding;