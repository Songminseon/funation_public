import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import VectorRight from "../../img/icon/vectorRight2.svg";

const FormWrapper = styled(Link)`
    all:unset;
    cursor:pointer;
    width:100%;
    height:51px;
    border-bottom:1px solid #E5E5E5;
    display:flex;
    align-items:center;
    color:#101010;

`;

const Rank = styled.div`
    width:16px;
    height:24px;
    display:flex;
    align-items:center;
    text-align:center;
    margin-left:12px;

    h5{
        color:#9D9D9D;
        font-family: "GmarketSansMedium";
        font-size: 0.6875rem;
        line-height: 1.5rem;
        letter-spacing: -0.015rem;
        margin:0 auto;
    }
`;

const University = styled.div`
    width:114px;
    height:24px;
    display:flex;
    align-items:center;
    margin-left:11px;

    h3{
        font-size: 0.875rem;
        font-weight: 500;
        line-height: 1.5rem;
        letter-spacing: -0.015rem;
        text-align: left;
    }
`;

const CurrentGivWrapper = styled.div`
    width:calc(100% - 197px);
    height:16px;
    margin-left:28px;
    display:flex;
    align-items:center;
    display:flex;
    justify-content:flex-end;

    img{
        width:6px;
        height:12px;
        margin-left:12px;
    }
`;

const ShowGiv = styled.div`
    width:73px;
    height:16px;
    display:flex;
    align-items:center;
    justify-content:flex-end;

    h5{
        font-size: 0.875rem;
        line-height: 1rem;
        letter-spacing: -0.015rem;
        text-align: right;
    }

    span{         
        font-size: 0.875rem;
        font-weight: 700;
        line-height: 1rem;
        letter-spacing: -0.015rem;
    }
`;

const RankingForm = ({univInfo}) => {
    return(
        <>
            {univInfo.map((item, index)=>(
                <FormWrapper
                key={index}
                to={{
                    pathname: `/gabangUniv/${item.thing_oneDescription}`,
                    state:{
                        item:item
                    }
                }}>
           
                        <Rank>
                            <h5>
                                {item.ranking}
                            </h5>
                        </Rank>
                        <University>
                            <h3>
                                {item.thing_description}
                            </h3>
                        </University>
                        <CurrentGivWrapper>
                            <ShowGiv>
                                <span>
                                    {(item.thing_crowd_money/100).toLocaleString()}
                                    
                                </span> &nbsp;
                                <h5>
                                    기브
                                </h5>
                            </ShowGiv>
                            <img src={VectorRight} alt="자세히가기" />
                        </CurrentGivWrapper>
           
                </FormWrapper>
            ))}
        </>
    );
};

export default RankingForm;