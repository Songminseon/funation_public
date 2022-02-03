import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";




const WholeWrapper = styled.div`
    width:calc(100% - 32px);
    height:67px;
    margin-left:16px;
    display:flex;
    background:white;
    
`;

const ZzimWrapper = styled(Link)`
    all:unset;
    cursor: pointer;
    width:70px;
    height:24px;
    margin-top:19px;
    display:flex;
    align-items:center;

    h2{
        color:rgba(16, 16, 16, 0.24);
        font-size: 1.125rem;
        font-weight: 700;
        line-height: 1.5rem;
        letter-spacing: -0.015rem;
        text-align: left;
    }

`;

const DonationWrapper = styled(Link)`
    all:unset;
    cursor:pointer;
    width:70px;
    height:24px;
    margin-left:10px;
    margin-top:19px;
    display:flex;
    align-items:center;

    h2{
        color:#101010;
        font-size: 1.125rem;
        font-weight: 700;
        line-height: 1.5rem;
        letter-spacing: -0.015rem;
        text-align: left;
    }

 
`;



const ChoiceDid = () =>{
 
    return(
        
        <WholeWrapper>
            <ZzimWrapper to="/mypage/myDonationZzim">
                <h2>
                    찜한 목록
                </h2>
            </ZzimWrapper>
            <DonationWrapper to="#">
                <h2>
                    기부 목록
                </h2>
            </DonationWrapper>

        </WholeWrapper>
      
    );
};

export default ChoiceDid;