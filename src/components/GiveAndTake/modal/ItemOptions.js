import React from "react";
import styled from "styled-components";

const WholeWrapper = styled.div`
    width:calc(100% - 60px);
    height:108px;
    margin-left:30px;
    display:flex;
    flex-wrap:wrap;
    justify-content:space-between;
    margin-top:44px;
    margin-bottom:46px;

`;

const ItemWrapper = styled.div`
    width:108px;
    height:48px;
    display:flex;
    align-items:center;
    border: 1px solid #F1AC43;
    background: #FFC02B;

    h2{
        margin:0 auto;
        color:#101010;
        font-size: 1rem;
        font-weight: 700;
        line-height: 1rem;
        letter-spacing: -0.015rem;
    }
`;



const ItemOptions = ({option}) => {
    return(
        <WholeWrapper>
            {option === "product" ?
                <ItemWrapper style={{marginLeft:"calc(50% - 114px)"}}>
                    <h2>
                        동구밭 제품
                    </h2>
                </ItemWrapper>
            :
            <ItemWrapper style={{background:"#F2F2F2", borderColor:"#E4E4E4", marginLeft:"calc(50% - 114px)"}}>
            <h2 style={{color:"#AAAAAA"}}>
                동구밭 제품
            </h2>
            </ItemWrapper>
            }
            
            {option === "goods" ? 
                <ItemWrapper style={{marginRight:"calc(50% - 114px)"}}>
                    <h2>
                        굿즈 응모권
                    </h2>
                </ItemWrapper>
            :
                <ItemWrapper style={{background:"#F2F2F2", borderColor:"#E4E4E4", marginRight:"calc(50% - 114px)"}}>
                    <h2 style={{color:"#AAAAAA"}}>
                        굿즈 응모권
                    </h2>
                </ItemWrapper>
            }
            <ItemWrapper style={{width:"96px", marginTop:"12px", marginLeft:"calc(50% - 48px)"}}>
                <h2>
                    기부 증서
                </h2>
            </ItemWrapper>
        </WholeWrapper>
    );
};

export default ItemOptions;