import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import story1 from "../img/photo/story1.svg";
import story2 from "../img/photo/story2.svg";
import story3 from "../img/photo/story3.svg";
import "../../slick.css";




const WholeWrapper = styled.div`
    width:100%;
    height:488px;
    position:relative;
    @media screen and (max-width:400px){
        height:calc(100vw + 88px);
    }
`

const ImgWrapper = styled.div`
    width:calc(100% - 56px);
    height:auto;
    margin-left:28px;
    margin-right:28px;
    margin-top:16px;

    img{
        width:100%;
        height:100%;
    }
    
`
const StoryTitleWrapper = styled.div`
    width:calc(100% - 32px);
    height:19px;
    text-align: center;
    display:flex;
    justify-content:center;
    align-items:center;
    margin-left:16px;
    margin-top:16px;

        h1{
            font-family: 'GmarketSansBold';
            font-size: 1.25rem;
            line-height: 1rem;
            letter-spacing: -0.015rem;
        }

        h2{
            font-family: 'GmarketSansMedium';
            font-size: 1.25rem;
            line-height: 1rem;
            letter-spacing: -0.015rem;
            text-align: center;
        }
`

const StoryBodyWrapper = styled.div`
    width:calc(100%-32px);
    height:48px;
    text-align:center;
    display:flex;
    align-items:center;
    margin-left:16px;
    margin-top:16px;

        h2{
            margin:0 auto;
            font-size: 0.875rem;
            line-height: 1.5rem;
            letter-spacing: -0.015rem;   
        }
`

const OnBoardingSlider = () => {

    const settings = {
        className: "boarding-wrapper",
        slideToShow: 1,
        infinite: false,
        arrows: true,
        dots: true
    };

    return (
        <>
            <Slider {...settings} >

                <WholeWrapper>
                    <ImgWrapper>
                        <img src={story1} alt="스토리1" />
                    </ImgWrapper>
                    <StoryTitleWrapper>
                        <h2>기부를 더 </h2>&nbsp;
                        <h1>쉽고, 재미있게</h1>
                    </StoryTitleWrapper>
                    <StoryBodyWrapper>
                        <h2>
                            기부니가좋다에서는 누구나<br />
                            부담 없고 재미있게 기부할 수 있어요!
                        </h2>
                    </StoryBodyWrapper>
                </WholeWrapper>
                <WholeWrapper>

                    <ImgWrapper>
                        <img src={story2} alt="스토리2" />
                    </ImgWrapper>
                    <StoryTitleWrapper>
                        <h1>기부니가좋다</h1><h2>는 투명해요</h2>
                    </StoryTitleWrapper>
                    <StoryBodyWrapper>
                        <h2>
                            기부니가좋다는 투명한 기부를 위해<br />
                            기부 내역과 전달 과정을 모두 공개합니다!
                        </h2>
                    </StoryBodyWrapper>
                </WholeWrapper>
                <WholeWrapper>
                    <ImgWrapper>
                        <img src={story3} alt="스토리3" />
                    </ImgWrapper>
                    <StoryTitleWrapper>
                        <h2>이제 당신도</h2>&nbsp;&nbsp;
                        <h1>기부니, 기부하니</h1>
                    </StoryTitleWrapper>
                    <StoryBodyWrapper>
                        <h2>
                            기부니가좋다에서는 기부하는 모든 사람을 기부니,<br />
                            기부에 참여한 기업을 기부하니라고 해요!
                        </h2>
                    </StoryBodyWrapper>
                </WholeWrapper>
            </Slider>
        </>
    );
};

export default OnBoardingSlider;