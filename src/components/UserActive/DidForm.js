import React from "react";
import styled from "styled-components";
import Dongu from "../img/logo/donglogo.svg";
import {Link} from "react-router-dom";
import School from "../img/icon/school.svg";

const BackGround = styled.div`
    width:100%;
    height:auto;
    background:white;
`;

const ProductWrapper = styled.div`
    width:calc(100% - 32px);
    height:120px;
    margin-left:16px;
    display:flex;
    border-radius:4px;
    border: 1px solid #F2F2F2;
`;

const ProductImgWrpaper = styled.div`
    position:relative;
    width:120px;
    height:120px;
    border-radius:4px;
    overflow:hidden;

    img{
        width:100%;
        height:100%;
    }
`

const ProductDescriptionWrapper = styled.div`
    width:calc(100% - 150px);
    height:150px;
`;

const TitleWrapper = styled.div`
    width:calc(100%-12px);
    height:16px;
    margin-left:12px;
    margin-top:16px;
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

const BrandWrapper = styled.div`
    width:calc(100%-12px);
    height:16px;
    margin-left:12px;
    margin-top:11px;
    display:flex;
    align-items:center;

    img{
        width:20px;
        height:20px;
    }

    h4{
        color:#333333;
        margin-left:6px;
        font-size: 0.8125rem;
        line-height: 1rem;
        letter-spacing: -0.015rem;
        text-align: left;

    }
`;

const DateWrapper = styled.div`
    width:calc(100%-12px);
    height:20px;
    margin-left:12px;
    margin-top:5px;
    display:flex;
    align-items:center;

    h2{
        color:#979797;
        font-size: 0.75rem;
        line-height: 1.25rem;
        letter-spacing: -0.015rem;
        text-align: left;

    }
`;

const PercentWrapper = styled.div`
    width:calc(100%-12px);
    height:16px;
    margin-left:12px;
    margin-top:6px;
    display:flex;
    align-items:center;

    h3{
        
        color:#F3A100;
        font-size: 0.875rem;
        font-weight: 700;
        line-height: 1rem;
        letter-spacing: -0.015rem;
    }
`

const NoStyleLink = styled(Link)`
    all:unset;
    cursor: pointer;
    width:100%;
    height:100%;
    
`;

const MarginBar = styled.div`
    width:100%;
    height:16px;
    background:white;
`;

const Done = styled.div`
    position:absolute;
    width:120px;
    height:120px;
    background:rgba(52, 45, 37, 0.64);
    border-radius:3px;
    top:0;
    left:0;
    display:flex;
    align-items:center;
    text-align:center;

    h2{
        margin:0 auto;
        color:#FFFFFF;
        font-size: 0.875rem;
        font-weight: 700;
        line-height: 1rem;
        letter-spacing: -0.015rem;    
    }
`;
const DidForm = ({item}) => {
    return(
        <>
        <NoStyleLink to={{
                    pathname: `/transactionReceipt/${item.order_id}`,
                    state: {
                        item: item
                    }
                    }}>
        <BackGround>
            <ProductWrapper>
                <ProductImgWrpaper>
                    <img src={"/myAssets" + item.thing_img_name} alt="제품이미지" />
                    
                    {item.thing_status === 2
                    
                    &&
                    <Done>
                        <h2>
                            모금완료
                        </h2>
                    </Done>
                    }

                </ProductImgWrpaper>
                <ProductDescriptionWrapper>
                    <TitleWrapper>
                        <h1>
                            {item.thing_name}
                        </h1>
                    </TitleWrapper>

                    {item.brand === "동구밭" &&
                    <BrandWrapper>
                        <img src={Dongu} alt="동구밭"/>
                        <h4>
                            동구밭
                        </h4>
                    </BrandWrapper>
                    }
                    {item.thing_index === 126 && <BrandWrapper><img src={School} alt=""/><h4>새내기부니</h4></BrandWrapper>}
                    {item.thing_index === 127 && <BrandWrapper><img src={School} alt=""/><h4>새내기부니</h4></BrandWrapper>}
                    {item.thing_index === 128 && <BrandWrapper><img src={School} alt=""/><h4>새내기부니</h4></BrandWrapper>}
           
                    <DateWrapper>
                        <h2>
                           {item.date_format.substring(0,11)+". "}{item.transaction_money/100} 기브 참여
                        </h2>
                    </DateWrapper>
                    <PercentWrapper>
                        <h3>
                            목표 {(item.thing_crowd_money*100/item.thing_target_money).toFixed()}% 달성
                        </h3>
                    </PercentWrapper>

                </ProductDescriptionWrapper>
                
            </ProductWrapper>
            </BackGround>
        </NoStyleLink>
            <MarginBar>

            </MarginBar>
            
        </>
    );
};

export default DidForm;