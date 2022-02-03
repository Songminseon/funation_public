import React from "react";
import styled from "styled-components";
import xVector from "../../img/icon/xVector.svg";
import ReactPlayer from "react-player/youtube";

const WholeWrapper = styled.div`
    width:100%;
    height:100%;
    position:relative;
`;

const XWrapper = styled.button`
    all:unset;
    cursor: pointer;
    width:24px;
    height:24px;
    position:absolute;
    top:16px;
    right:16px;

    img{
        position:absolute;
        width:16px;
        height:16px;
        left:4px;
        top:4px;
    }
`;

const TitleWrapper = styled.div`
    width:168px;
    height:56px;
    position:absolute;
    display:flex;
    align-items:center;
    text-align:left;
    color:#101010;
    margin-left:16px;
    top:16px;

    h1{
        font-size: 1.125rem;
        font-weight: 700;
        line-height: 1.75rem;
        letter-spacing: -0.015rem;
    }
`;

const ContentsWrapper = styled.div`
    width:100%;
    height:calc(100% - 100px);
    position:absolute;
    top:100px;
`;

const PlayerWrapper = styled.div`
    width:336px;
    height:189px;
    margin-left:16px;

    @media screen and (max-width:400px){
        width:calc(100% - 32px);
        height:calc(calc(100vw - 32px) * 0.5625)
    }
`;

const Info = styled.div`
    width:calc(100% - 32px);
    height:22px;
    margin-left:16px;
    margin-top:18px;
    display:flex;
    align-items:center;

    h2{
        color:#333333;
        font-size: 1rem;
        font-weight: 700;
        line-height: 1.375rem;
        letter-spacing: -0.015rem;
        text-align: left;
    }
`;

const Major = styled.div`
    width:calc(100% - 32px);
    height:16px;
    margin-left:16px;
    margin-top:10px;
    display:flex;
    align-items:center;

    h3{
        color:#333333;
        font-size:0.875rem;
        line-height:1.375rem;
        letter-spacing:-0.015rem;
        text-align:left;
    }
`;

const DetailInfo = styled.div`
    width:calc(100% - 32px);
    margin-left:16px;
    margin-top:30px;

    h1{
        font-weight:700;
        font-size:1rem;
    }

    h3{
        color:#333333;
        font-size: 1rem;
        line-height: 1.5rem;
        letter-spacing: -0.015rem;
        text-align: left;

    }
`;

const InfoModal = ({univName, closeModal}) => {
    return(
        <WholeWrapper>
            <TitleWrapper>
                <h1>
                    가방을 받을 <br/>
                    새내기가 궁금해요!
                </h1>
            </TitleWrapper>
            <XWrapper onClick={closeModal}>
                <img src={xVector} alt="나가기"/>
            </XWrapper>
            <ContentsWrapper>
                {univName === "서울과학기술대학교" &&
                <>
                    <PlayerWrapper>
                        <ReactPlayer
                            url="https://www.youtube.com/watch?v=dPvB_hIAIgU"
                            width="100%"
                            height="100%"
                            playing={true}
                            controls={true}
                        />
                    </PlayerWrapper>
                    <Info>
                        <h2>
                            서울과기대 새내기부니
                        </h2>
                    </Info>
                    <Major>
                        <h3>
                            시각디자인학과 20학번
                        </h3>
                    </Major>
                    <DetailInfo>
                        <h3>
                            <h1>당찬 포부 한마디?!!</h1>
                            코로나때문에 다빈치관에 입시때 실기 시험 말고는 한 번도 가본 적이 없어요…미대생이라 노트북때문에 백팩이 필수입니다! 평생 들고 다니겠습니다
                        </h3>
                    </DetailInfo>
                </>
                }
                {univName === "서울시립대학교" &&
                <>
                    <PlayerWrapper>
                        <ReactPlayer
                            url="https://youtu.be/2td-cjmH5Yg"
                            width="100%"
                            height="100%"
                            playing={true}
                            controls={true}
                        />
                    </PlayerWrapper>
                    <Info>
                        <h2>
                            서울시립대 새내기부니
                        </h2>
                    </Info>
                    <Major>
                        <h3>
                            경영학과 21학번
                        </h3>
                    </Major>
                    <DetailInfo>
                        <h3>
                            <h1>
                                당찬 포부 한마디?!!
                            </h1>
                            당*마켓에 절대 안팔고 4년 내내 잘 들고다니겠습니다. 학점 4점대 아직 감도 안오지만 도전하면서 감사한 마음을 가지고 앞으로 힘차게 대학생활 시작해보겠습니다!
                        </h3>
                    </DetailInfo>
                </>

                }
            </ContentsWrapper>
        </WholeWrapper>
    );
};

export default InfoModal;