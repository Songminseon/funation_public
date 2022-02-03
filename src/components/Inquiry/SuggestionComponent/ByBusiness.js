import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";

const WholeWrapper = styled.div`
    width:100%;
    height:5.285vh;
`;

const CategoryWrapper = styled.div`
    width:60.5%;
    height:5.285vh;
    margin-left:20%;
    background: #FFFFFF;
    box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.1);
    border-radius: 20px;
    display:flex;
`;

const OnWrapper = styled.div`
    width:51.239%;
    height:100%;
    background:#F8B517;
    border-radius:20px;
    display:flex;
    align-items:center;
    text-align:center;

        h2{
            margin:0 auto;
            font-size: 0.75rem;
            line-height: 1rem;
            letter-spacing: -0.015rem;
            font-weight:500;
        }
`

const OffWrapper = styled.div`
    width:48.761%;
    height:100%;
    display:flex;
    align-items:center;
    text-align:center;

        h2{
            font-size: 0.75rem;
            font-style: normal;
            font-weight: 400;
            line-height: 1rem;
            letter-spacing: -0.015rem;
        }
`   

const Category = styled(Link)`
        all:unset;
        width:100%;
        height:100%;
        cursor:pointer;
        color:black;
`;

const ByBusiness = () => {
    return(
        <WholeWrapper>
            <CategoryWrapper>
                <OffWrapper>
                    <Category to="/inquiry/suggestion1">
                        <h2>
                            기부니
                        </h2>
                    </Category>
                </OffWrapper>
                <OnWrapper>
                    <h2>
                        기부하니
                    </h2>
                </OnWrapper>
            </CategoryWrapper>
        </WholeWrapper>
    );
};

export default ByBusiness;