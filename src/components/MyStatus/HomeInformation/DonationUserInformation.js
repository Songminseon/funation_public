import React from "react";
import styled from "styled-components";
import CountUp from "react-countup";
import {Link} from "react-router-dom";

const StopBar = styled.div`
    width:0.25%;
    height:43px;
    background: #E5E5E5;
    margin-left:0.5%;
`

const UserInfoWholeWrapper = styled.div`
    width:100%;
    height:6.714vh;
    margin-top:17px;
    display:flex;
    flex-wrap:wrap;
`;

const UserInfoWrapper1 = styled.div`
    width:32.065%;
    height:6.714vh;
`;

const UserInfoWrapper2 = styled.div`
    width:32.065%;
    height:6.714vh;
    margin-left:1%;
`;

const UserInfoWrapper3 = styled(Link)`
    all:unset;
    cursor: pointer;
    width:32.065%;
    height:6.714vh;
    margin-left:0.75%;

`;

const UserInfoTitle = styled.div`
    width:100%;
    height:16px;
    display:flex;
    align-items:center;
    text-align:center;

    h2{
        margin:0 auto;
        font-size: 0.6875rem;
        font-weight: normal;
        line-height: 1rem;
        letter-spacing: -0.015rem;
        color:#979797;
    }
`

const UserInfoBody = styled.div`
    width:100%;
    height:16px;
    margin-top:6px;
    display:flex;
    align-items:center;
    justify-content:center;        
    color:#101010;

        span{
            display:inline-block;
            font-size: 1.125rem;
            line-height: 1rem;
            font-weight: 500;
            letter-spacing: -0.015rem;
        }

        h3{
            font-size: 1rem;
            font-weight: 400;
            line-height: 1rem;
            letter-spacing: -0.015rem;
            text-align: center;
        }
        
`;


const DonationInformation = ({ signDate, myDonationMoney, myDonationCount }) => {
    return (
        <>
            <UserInfoWholeWrapper>
                <UserInfoWrapper1>
                    <UserInfoTitle>
                        <h2>
                            기부니가 된지
                      </h2>
                    </UserInfoTitle>
                    <UserInfoBody>
                     
                        <span>{signDate}</span>
                        <h3>
                            일
                        </h3>
                    
                    </UserInfoBody>
                </UserInfoWrapper1>
                <StopBar>
                </StopBar>
                <UserInfoWrapper2>
                    <UserInfoTitle>
                        <h2>
                            내가 낸 티끌
                         </h2>
                    </UserInfoTitle>
                    <UserInfoBody>
             
                            <span>
                                <CountUp
                                    start={0}
                                    end={myDonationMoney||0}
                                    separator=",">
                                </CountUp>
                            </span>
                            <h3>
                                원
                            </h3>
                    
                    </UserInfoBody>
                </UserInfoWrapper2>
                <StopBar style={{ marginLeft: "1%" }}>
                </StopBar>
                <UserInfoWrapper3 to="/mypage/myDonationDid">
                    <UserInfoTitle>
                        <h2>
                            기부 참여 횟수
                          </h2>
                    </UserInfoTitle>
                    <UserInfoBody>
                        <span>
                            {myDonationCount}
                        </span>
                        <h3>
                            번  
                        </h3>

                    </UserInfoBody>
                </UserInfoWrapper3>
            </UserInfoWholeWrapper>
        </>
    );
};

export default DonationInformation;