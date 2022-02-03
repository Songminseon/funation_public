import React from "react";
import styled from "styled-components";
import givLogo from "../img/icon/givLogo.svg";


const ReceiptWrapper = styled.div`
    width:100%;
    height:277px;
    background:white;
`;

const BottomBar = styled.div`
    width:100%;
    height:3px;
    background:#F2F2F2;
`
const TitleWrapper = styled.div`
    width:66px;
    height:65px;
    margin-left:16px;
    display:flex;
    align-items:center;
        h1{
            color:#101010;
            font-size: 1.125rem;
            font-weight: 700;
            line-height: 1rem;
            letter-spacing: -0.015rem;
        }
`;

const ContentsWrapper = styled.div`
    width:calc(100% - 32px);
    height:18px;
    margin-left:16px;
    margin-top:16px;
    display:flex;
    align-items:center;
`;

const Category = styled.div`
    width:68px;
    height:18px;
    display:flex;
    align-items:center;

    h2{
        color:#979797;
        font-size: 0.75rem;
        line-height: 1.125rem;
        letter-spacing: -0.015rem;
    }
`;

const DonationInfo = styled.div`
    width:calc(100% - 104px);
    height:18px;
    display:flex;
    align-items:center;
    margin-left:36px;
    justify-content:space-between;
    

    h2{
        color:#979797;
        font-size: 0.75rem;
        line-height: 1.125rem;
        letter-spacing: -0.015rem;
    }
    h3{
        display:inline-block;
        color:#101010;
        font-size: 0.875rem;
        line-height: 1.125rem;
        letter-spacing: -0.015rem;
    }

    h4{
        display:inline-block;
  
        color:#101010;
        font-size:0.75rem;
        line-height:1.125rem;
        letter-spacing:-0.015rem;
    }
`;

const ImgWrapper = styled.div`
    width:16px;
    height:16px;
    display:flex;
    align-items:center;

    img{
        width:100%;
        height:100%;
    }
`;


const ReceiptForm = ({info}) => {
    return(
        <> 
            <ReceiptWrapper>
                <TitleWrapper>
                    <h1>
                        기부내역
                    </h1>
                </TitleWrapper>
                <ContentsWrapper style={{marginTop:"0px"}}>
                    <Category>
                        <h2>
                            기부 번호
                        </h2>
                    </Category>
                    <DonationInfo>
                        <h3>
                            No.{info.transaction_index}
                        </h3>
                    </DonationInfo>
                </ContentsWrapper>
                <ContentsWrapper>
                    <Category>
                        <h2>
                            기부니
                        </h2>
                    </Category>
                    <DonationInfo>
                        <h3>
                            기부니
                        </h3>
                    </DonationInfo>
                </ContentsWrapper>
                <ContentsWrapper>
                    <Category>
                        <h2>
                            기부하니
                        </h2>
                    </Category>
                    <DonationInfo>
                        <h3>
                            동구밭
                        </h3>
                    </DonationInfo>
                </ContentsWrapper>
                <ContentsWrapper>
                    <Category>
                        <h2>
                            참여제품
                        </h2>
                    </Category>
                    <DonationInfo>
                        <h3>
                            {info.thing_name}
                        </h3>
                    </DonationInfo>
                </ContentsWrapper>
                <ContentsWrapper>
                    <Category>
                        <h2>
                            일시
                        </h2>
                    </Category>
                    <DonationInfo>
                        <h3>
                            {info.date_format}
                        </h3>
                    </DonationInfo>
                </ContentsWrapper>
                <ContentsWrapper>
                    <Category>
                        <h2>
                            기부금
                        </h2>
                    </Category>
                    <DonationInfo>
                        <div style={{display:"flex", height:"18px", alignItems:"center"}}>
                        <ImgWrapper>
                            <img src={givLogo} alt="기브로고" />
                        </ImgWrapper>
                        <h3 style={{marginLeft:"6px"}}>
                            {info.transaction_money/100||0}
                        </h3>
                      
                        </div>
                        <h2 style={{marginLeft:"25%"}}>
                            {info.transaction_money||0}원
                        </h2>
                    </DonationInfo>
                </ContentsWrapper>


            </ReceiptWrapper>          
            <BottomBar>
            </BottomBar> 
        </>
    );
};

export default ReceiptForm;