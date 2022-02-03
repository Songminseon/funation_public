import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import recordLogo from "../../img/icon/givLogo.svg";
import Footer from "../../MyStatus/HomeInformation/Footer";

const WholeWrapper = styled.div`
    width:100%;
    height:calc(100vh - 135px);
    position:relative;
`;

const Backgroud = styled.div`
    width:100%;
    height:auto;
    background:#F2F2F2;
`

const BoxWrapper = styled.div`
    width:calc(100% - 32px);
    height:auto;
    background:white;
    border-radius:4px;
    margin-left:16px;
    border: 1px solid #E5E5E5;
`;

const NoResult = styled.div`
    text-align:left;
    width:calc(100% - 32px);
    height:272px;
    margin-left:16px;
    bottom:0px;
    position:absolute;
    display:flex;
    align-items:flex-end;
    text-align:left;

    p{
        color: #797979;
        font-size: 0.875rem;
        line-height: 1.125rem;
        letter-spacing: -0.015rem;
    }
`;


const RecordsWholeWrapper = styled.div`
    width:100%;
    height:64px;
    display:flex;
    align-items:center;
`

const RecordsWrapper = styled.div`
    width:calc(100% - 24px);
    height:40px;
    margin-left:12px;
    display:flex;
    align-items:center;
`
const RecordImgWrapper = styled.div`
    width:40px;
    height:40px;
    display:flex;
    align-items:center;
    text-align:center;
    border-radius:50px;
    overflow:hidden;
    
    #coin-img{
        margin:0 auto;
        width:18px;
        height:18px;
    }

    #product-img{
        margin:0 auto;
        width:100%;
        height:100%;
    }
`

const RecordDescriptionWrapper = styled.div`
    margin-left:8px;
    height:40px;
    width:calc(100% - 128px);
    
`;

const RecordTitleWrapper = styled.div`
    width:100%;
    height:16px;
    margin-top:4px;
    display:flex;
    align-items:center;

    h2{
        color:#101010;
        font-size: 0.75rem;
        font-weight: 500;
        line-height: 16px;
        letter-spacing: -0.23999999463558197px;
        text-align: left;
    }
`;

const RecordDateWrapper = styled.div`
    width:100%;
    height:20px;
    display:flex;
    align-items:center;

    h3{        
        color:#979797;
        font-size: 0.6875rem;
        line-height: 1.25rem;
        letter-spacing: -0.015rem;
        text-align: left;
    }
`;

const RecordMoneyWrapper = styled.div`
    width:80px;
    height:16px;
    display:flex;
    align-items:center;
    justify-content:flex-end;      
    margin-left:24px;
 
    h2{
          
        color:#F3A100;
        font-size: 0.8125rem;
        font-weight: 500;
        line-height: 1rem;
        letter-spacing: -0.015rem;
    }
`;

const RecordParticipateWrapper = styled.div`
    width:56px;
    height:16px;
    display:flex;
    align-items:center;
    justify-content:flex-end;
    margin-left:24px;

    h2{

        color:#323232;
        font-size: 0.8125rem;
        font-weight: 500;
        line-height: 1rem;
        letter-spacing: -0.015rem;
    }
`;

const Bar = styled.div`
    width:100%;
    height:1px;
    background: #F2F2F2;
    transform: matrix(1, 0, 0, -1, 0, 0);
`;


const PaymentsRecords = () => {

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios("/api/searchMyRecords");
            setRecords(result.data.records)
        }
        fetchData();
    }, [])

    const [records, setRecords] = useState([]);

    return (
    
        <WholeWrapper>
            {!records ?
                <NoResult>
                    <p>
                    ━━━━━┓<br/>
                    ┓┓┓┓┓┃/.＼○ノ (와장창) <br/>
                    ┓┓┓┓┓┃&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   /           기부하러 가자!!!<br/>
                    ┓┓┓┓┓┃&nbsp;ノ) .,<br/>
                    ┓┓┓┓┓┃<br/>
                    ┓┓┓┓┓┃<br/>
                    ┓┓┓┓┓┃<br/>
                    ┓┓┓┓┓┃<br/>
                    ┓┓┓┓┓┃&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;○ (사뿐)<br/>
                    ┓┓┓┓┓┃&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;人&nbsp;&nbsp;&nbsp;&nbsp;아 맞다 충전해야지<br/>
                    ┓┓┓┓┓┃&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/)<br/>
                    ┓┓┓┓┓┃ ┎━━━━━━┒<br/>
                    ┓┓┓┓┓┃ ┃┏┓┏┓┏┓┃&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;○<br/>
                    ┓┓┓┓┓┃ ┃┗┛┗┛┗┛┃&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;人<br/>
                    ┓┓┓┓┓┃ ┃┏┓┏┓┏┓┃...../)&nbsp;&nbsp;(총총총)<br/>
                </p>
                </NoResult>
                :
                <Backgroud>                <BoxWrapper>
                    {records.map((item, index) => (
                        <div key={index}>
                            {item.description === "기브 충전" ?
                                <RecordsWholeWrapper>
                                    <RecordsWrapper>
                                        <RecordImgWrapper>
                                            <img id="coin-img" src={recordLogo} alt="기부니충전" />
                                        </RecordImgWrapper>
                                        <RecordDescriptionWrapper>
                                            <RecordTitleWrapper>
                                                <h2>
                                                    {item.description.substring(0, 20)}
                                                </h2>
                                            </RecordTitleWrapper>
                                            <RecordDateWrapper>
                                                <h3>
                                                    {item.wallet_date.substring(0, 4)}. {item.wallet_date.substring(5, 7)}. {item.wallet_date.substring(8, 10)}. 기브 참여
                                                 </h3>
                                            </RecordDateWrapper>
                                        </RecordDescriptionWrapper>

                                        <RecordMoneyWrapper>
                                            <h2>
                                                + {item.wallet_money}기브
                                              </h2>
                                        </RecordMoneyWrapper>
                                    </RecordsWrapper>
                                </RecordsWholeWrapper>
                                :
                                // 거래내역
                                <RecordsWholeWrapper>
                                    <RecordsWrapper>
                                        <RecordImgWrapper>
                                            <img id="product-img"src={"/myAssets" + item.thing_img_name} alt="기부니충전" />
                                        </RecordImgWrapper>
                                        <RecordDescriptionWrapper>
                                            <RecordTitleWrapper>
                                                <h2>
                                                    {item.description.substring(0, 14)}
                                                </h2>
                                            </RecordTitleWrapper>
                                            <RecordDateWrapper>
                                                <h3>
                                                    {item.wallet_date.substring(0, 4)}. {item.wallet_date.substring(5, 7)}. {item.wallet_date.substring(8, 10)}. 기브 참여
                                                   </h3>
                                            </RecordDateWrapper>
                                        </RecordDescriptionWrapper>

                                        <RecordParticipateWrapper>
                                                <h2>
                                                - {item.wallet_money/100}기브
                                              </h2>
                                        </RecordParticipateWrapper>
                                    </RecordsWrapper>
                                </RecordsWholeWrapper>
                               

                            }

                            <Bar>

                            </Bar>
                        </div>
                    ))}
                </BoxWrapper>
	         <Footer />
                </Backgroud>
}
        </WholeWrapper>
      
    );
};

export default PaymentsRecords;
