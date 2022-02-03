import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import givLogo from "../img/icon/givLogo.svg";
import TotalAmount from "./TotalAmount";

const WholeWrapper = styled.div`
    width:100%;
    height:auto;
    background:white;   
`


const ItemCover = styled.div`
    width:calc(100% - 32px);
    margin-left:16px;
    border:1px solid #E5E5E5;
    border-radius:4px;
    background:white;
`;

const NoStyleLink = styled(Link)`
    all:unset;
    width:100%;
    height:100%;
    cursor: pointer;
`;

const ImgCover = styled.div`
    width:368px;
    height:368px;

    @media screen and (max-width:400px){
        width:calc(100vw - 32px);
        height:calc(100vw - 32px);
    }

    img{
        width:100%;
        height:100%;
        border-radius:4px;
    }
`;

const Unable = styled.div`
    width:100%;
    height:100%;
    background: #342D25;
    border-radius:3px;
    position:relative;

    div{
        position:absolute;
        width:100%;
        height:100%;
        top:0;
        bottom:0;
        display:flex;
        align-items:center;
        text-align:center;
    }

    h2{
        color:white;
        display:inline-block;
        margin:0 auto;
        font-size: 1rem;
        font-weight: 700;
        line-height: 1rem;
        letter-spacing: -0.015rem;
        
    }    
`

const TitleWrapper = styled.div`
    width:calc(100% - 28px);
    height:14px;
    margin-left:14px;
    margin-top:18px;
    display:flex;           
    align-items:center;

    h1{
        color:#101010;
        font-size: 1rem;
        font-weight: 700;
        line-height: 1rem;
        letter-spacing: -0.015rem;
        text-align: left;
    }
`;

const DescriptionWrapper = styled.div`
    width:calc(100% - 28px);
    height:40px;
    margin-left:14px;
    margin-top:12px;
    display:flex;
    align-items:center;

    p{
        color:#101010;
        font-size: 0.875rem;
        font-weight: 300;
        line-height: 1.375rem;
        letter-spacing: -0.015rem;
        text-align: left;
    }

`;

const CurrentWrapper = styled.div`
    width:calc(100% - 28px);
    margin-left:14px;
    margin-top:18px;
    height:16px;
    display:flex;
`;

const CurrentGoal = styled.div`
    width:124px;
    height:16px;
    display:flex;
    align-items:center;


    h3{
        color:#F3A100;
        font-size: 1rem;
        font-weight: 700;
        line-height: 1rem;
        letter-spacing: -0.015rem;
        text-align: left;
    }
`;

const CurrentTotal = styled.div`
    width:calc(100% - 124px);
    height:14px;
    display:flex;
    align-items:center;
    justify-content:flex-end;
 
    h2{
        display:inline-block;
        font-size: 0.875rem;
        font-weight: 500;
        line-height: 1rem;
        letter-spacing: -0.015rem;
        text-align: right;
        color:#595959;
    }

    h3{
        font-size: 0.75rem;
        font-weight: 500;
        line-height: 1rem;
        letter-spacing: -0.015rem;
        color:#ABABAB;
    }  
`;

const GivCoin = styled.div`
    width:16px;
    height:16px;
    display:flex;
    margin-left:6px;
    margin-right:3px;
    margin-top:1px;

    img{
        width:100%;
        height:100%;
    }
`;

const PercentageWrapepr = styled.div`
    width:calc(100% - 28px);
    height:2px;
    margin-left:14px;
    margin-top:13px;
    margin-bottom:20px;
    background: #D9D9D9;

    div{
        width:80%;
        height:100%;
        background: #F8B517;
    }
`;

const MarginBar = styled.div`
    width:100%;
    height:16px;
    background:white;
`



const ItemForm = ({ id, item }) => {

    var imgResource = "/myAssets" + item.thing_img_name

    return (
        <>
            <WholeWrapper>
                <ItemCover>
                    <NoStyleLink to={{
                        pathname: `/giveAndTake/${id}`,
                        state: {
                            item: item
                        }
                    }}>

                        <ImgCover>

                            {item.thing_status===1 ?
                                <img src={imgResource} alt="제품사진" />
                                :
                                <Unable>
                                    <img src={imgResource} alt="제품사진"
                                        style={{ opacity: "0.64" }} />
                                    <div>
                                        <h2>
                                           모금 완료
                                  </h2>
                                    </div>
                                </Unable>
                            }

                        </ImgCover>
                        <TitleWrapper>
                            <h1>
                                {item.thing_name.length>=14 ? item.thing_name.substring(0,14)+"...": item.thing_name} ({item.thing_amount}/<TotalAmount set_index={item.set_index}/>회차)
                            </h1>
                        </TitleWrapper>
                        <DescriptionWrapper>
                            <p>
                                {item.thing_oneDescription.length >= 30 ? item.thing_oneDescription.substring(0,30)+"..." : item.thing_oneDescription}<br />
                                {item.thing_description}
                            </p>
                        </DescriptionWrapper>
                        <CurrentWrapper>

                            {item.thing_crowd_money !== item.thing_target_money ?
                                <>
                                    <CurrentGoal>
                                        <h3>
                                            목표까지
                                         </h3>
                                        <GivCoin>
                                            <img src={givLogo} alt="기브코인" />
                                        </GivCoin>
                                        <h3>
                                            {(item.thing_target_money - item.thing_crowd_money) / 100}
                                        </h3>

                                    </CurrentGoal>
                                    <CurrentTotal>

                                        <h2>
                                            {item.thing_crowd_money / 100}&nbsp;
                                        </h2>
                                        <h2 style={{color:"#ABABAB"}}>
                                             / {item.thing_target_money / 100} 기브
                                         </h2>

                                    </CurrentTotal>
                                </>
                                :
                                <>
                                    <CurrentGoal>
                                        <h3>
                                            목표달성!
                                        </h3>
                                        

                                    </CurrentGoal>
                                    <CurrentTotal>

                                       
                                        <h3>
                                            {item.thing_target_money / 100} 기브
                                        </h3>

                                    </CurrentTotal>
                                </>
                            }

                        </CurrentWrapper>
                        <PercentageWrapepr>
                            <div style={{ width: (item.thing_crowd_money / item.thing_target_money * 100) + "%" }}>

                            </div>
                        </PercentageWrapepr>
                    </NoStyleLink>
                </ItemCover>
            </WholeWrapper>
            <MarginBar>

            </MarginBar>
        </>
    );
};

export default ItemForm;