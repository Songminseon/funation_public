import React from "react";
import styled from "styled-components";
import model1 from "../../img/photo/model1.svg";
import gabang1 from "../../img/photo/gabang1.svg";
import gabangfill1 from "../../img/photo/gabangfill1.svg";
import model2 from "../../img/photo/model2.svg";
import gabang2 from "../../img/photo/gabang2.svg";
import gabangfill2 from "../../img/photo/gabangfill2.svg";
import InfoModalButton from "./InfoModalButton";

const ImageWrapper = styled.div`
    width:368px;
    height:368px;
    margin-left:16px;
    position:relative;
    border-radius:5px;

    @media screen and (max-width:400px){
        width:calc(100vw - 32px);
        height:calc(100vw - 32px);
    }

    img{
        width:100%;
        height:100%;
    }
`;

const CurrentInfo = styled.div`
    width:100%;
    height:24px;
    bottom:10px;
    position:absolute;
    color:white;
    display:flex;
    align-items:center;
`;

const Ranking = styled.div`
    width:16px;
    height:24px;
    display:flex;
    align-items:center;
    text-align:center;
    margin-left:11px;

    h5{
        margin:0 auto;
        font-family: "GmarketSansMedium";
        font-size: 0.6875rem;
        line-height: 1.5rem;
        letter-spacing: -0.015rem;
    }
`;

const UnivNameWrapper = styled.div`
    width:131px;
    height:24px;
    display:flex;
    align-items:center;
    margin-left:7px;


    h3{
        font-size: 1rem;
        line-height: 1.5rem;
        letter-spacing: -0.015rem;
        text-align: left;
    }
`;

const CurrentGiv = styled.div`
    width:73px;
    height:24px;
    display:flex;
    align-items:center;
    margin-left:calc(100% - 253px);
    text-align:right;
    justify-content:flex-end;

    span{
        font-size: 0.875rem;
        font-weight: 700;
        line-height: 1rem;
        letter-spacing: -0.015rem;
    }

    h4{
    
        font-size: 0.875rem;
        line-height: 1rem;
        letter-spacing: -0.015rem;
        text-align: right;
    }
`;

const RubyModel = styled.div`
    width:100%;
    height:100%;
    position:relative;
    top:0;
    left:0;
    

    img{
        width:100%;
        height:100%;
    }

    h4{
        position:absolute;
        font-family:"GmarketSansBold";
        left:40%; 
        top:45%;
        color:#FFC02B;
        font-size: 0.625rem;
        line-height: 1rem;
        letter-spacing: -0.015rem;
        text-shadow: -1px 0 #101010, 0 1px #101010, 1px 0 #101010, 0 -1px #101010;
    }
`;

const FillGabang = styled.div`
    width:42.5%;
    height:60%;
    top:27%;
    left:38%;
    position:absolute;
    img{
        left:0;
        bottom:0;
        position:absolute;
        width:100%;
        height:100%;
    }
`;

const FillGabang2 = styled.div`
    width:32%;
    height:57%;
    top:34%;
    left:51%;
    position:absolute;

    img{
        left:0;
        bottom:0;
        position:absolute;
        width:100%;
        height:100%;
    }
`;

const FillGabang3 = styled.div`
    width:42.5%;
    height:57%;
    top:34.25%;
    left:36.8%;
    position:absolute;
    img{
        left:0;
        bottom:0;
        position:absolute;
        width:100%;
        height:100%;
    }
`;


const PercentByPicture = ({ rank, univName, totalGiv }) => {

    const percent = totalGiv/2500

    return (
        <>
            <ImageWrapper>

                {univName === "서울과학기술대학교" &&

                    <RubyModel>
                        <img src={model1} alt="가방모델" />
                        <FillGabang>

                            <img src={gabang1} alt="빈가방" />
                            <img src={gabangfill1} alt="채워죠가방"
                                style={{ clipPath: `polygon(0 ${100 - percent}%, 100% ${100 - percent}%, 100% 100%, 0% 100%)` }}
                            />

                            <h4>
                                {percent.toFixed()}%
                            </h4>
                        </FillGabang>
                    </RubyModel>

                }

                {univName === "서울시립대학교" &&

                    <RubyModel>
                        <img src={model2} alt="가방모델" />
                        <FillGabang2>

                            <img src={gabang2} alt="빈가방" />
                            <img src={gabangfill2} alt="채워죠가방"
                                style={{ clipPath: `polygon(0 ${100 - percent}%, 100% ${100 - percent}%, 100% 100%, 0% 100%)` }}
                            />

                            <h4 style={{left:"57%"}}>
                                {percent.toFixed()}%
                            </h4>
                        </FillGabang2>
                    </RubyModel>
                }

                {/* {univName === "고려대학교" &&

                    <RubyModel>
                        <img src={model3} alt="가방모델" />
                        <FillGabang3>

                            <img src={gabang3} alt="빈가방" />
                            <img src={gabangfill3} alt="채워죠가방"
                                style={{ clipPath: `polygon(0 ${100 - percent}%, 100% ${100 - percent}%, 100% 100%, 0% 100%)` }}
                            />

                            <h4 style={{width:"45%"}}>
                                {percent.toFixed()}%
                            </h4>
                        </FillGabang3>
                    </RubyModel>
                } */}


                <CurrentInfo>
                    <Ranking>
                        <h5>
                            {rank}
                        </h5>
                    </Ranking>
                    <UnivNameWrapper>
                        <h3>
                            {univName}
                        </h3>
                    </UnivNameWrapper>
                    <CurrentGiv>
                        <span>
                            {(totalGiv / 100).toLocaleString()}
                        </span>&nbsp;
                        <h4>
                            기브
                        </h4>
                    </CurrentGiv>
                </CurrentInfo>
            </ImageWrapper>
            <InfoModalButton
                univName={univName}
            />
        </>
    );
};

export default PercentByPicture;