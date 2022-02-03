import React, { useState, useEffect } from "react";
import styled from "styled-components";
import DonationUserInformation from "./HomeInformation/DonationUserInformation";
import { Link } from "react-router-dom";
import defaultProfile from "../img/photo/profileimg.svg";
import axios from "axios";
import vectorRight from "../img/icon/vectorRight.svg";
import givLogo from "../img/icon/givLogo.svg";
import KakaoLogin from "../Kakao/KakaoLogin";
import ChangeNickButton from "./ChangeNickButton";

const UnableWrapper = styled.div`
    width:calc(100% + 34px);
    height:276px;
    background-color:rgba(52, 45, 37, 0.69);
    position:absolute;
    left:-17px;
    top:-17px;
    z-index:3;
`;

const GoToLogin = styled.div`
    width:calc(100% - 32px);
    height:42px;
    left:16px;
    position:absolute;
    background:#FFC02B;
    opacity:1;
    z-index:5;
    bottom:16px;
`;

const NeedLogin = styled.div`
    width:100%;
    height:24px;
    display:flex;
    align-items:center;
    position:absolute;
    top:118px;

    h2{
        color:white;
        margin:0 auto;
        font-family: "GmarketSansBold";
        font-size: 1rem;
        line-height: 1.5rem;
        letter-spacing: -0.015rem;
    }
`;

const StatusWholeWrapper = styled.div`
    width:calc(100% - 32px);
    height:242px;
    margin: 16px 16px 0 16px;
    border: 1px solid #E5E5E5;
    box-sizing: border-box;
    border-radius: 4px;
    background:white;
    position:relative;
`
const UserInfoWrapper = styled.div`
    height:112px;
    width:calc(100% - 24px);
    margin:12px 12px 0 12px;
    display:flex;
    
`;

const ProfileWrapper1 = styled.div`
    width:104px;
    height:104px;
    margin:4px 0 4px 4px;
    border-radius:50px;
    overflow:hidden;
    
    img{
        width:100%;
        height:100%;
    }
`;
const ProfileWrapper2 = styled.div`
    display:flex;
    flex-wrap:wrap;
    width:calc(100% - 124px);
    height:112px;
    margin-left:16px;
    
`;

const ProfileTopWrapper = styled.div`
    width:100%;
    height:58px;
    display:flex;
    flex-wrap:wrap;
 
`
const ProfileLevelWrapper = styled.div`
    width:57px;
    height:20px;
    margin-top:14px;
    display:flex;
    align-items:center;
        h2{
            color:#979797;
            font-size: 0.75rem;
            font-weight: 500;
            line-height: 1.25rem;
            letter-spacing: -0.015rem;
            text-align: left;
        }
`;

const ProfileNickWrapper = styled.div`
    width:88px;
    height:16px;
    margin-top:8px;

    display:flex;
    align-items:center;

        h2{
            color:black;
            font-size: 1rem;
            font-weight: 700;
            line-height: 1rem;
            letter-spacing: -0.015rem;
            text-align: left;
        }
`;

const ProfileOptionWrapper = styled.div`
    width:32px;
    height:32px;
    margin-left:calc(100% - 89px);
    
    img{
        width:100%;
        height:100%;
    }
`
const ProfileWalletWrapper = styled(Link)`
    all:unset;
    cursor: pointer;
    width:100%;
    height:18px;
    display:flex;
    align-items:center;
`;

const WalletImgWrapper = styled.div`
    width:18px;
    height:18px;

    img{
        width:100%;
        height:100%;
    }
`

const WalletMoneyWrapper = styled.div`
    width:60px;
    height:16px;
    
    display:flex;
    align-items:center;
    margin-left:5px;
    text-align:left;
    
    
    h2{
        color:#101010;
        font-size:0.875rem;
        line-height:1rem;
        letter-spacing:-0.015rem;
    }

    h3{
        color:#404040;
        font-size:1rem;
        letter-spacing:-0.015rem;
    }
`;

const WalletVectorWrapper = styled.div`
    width:6px;
    height:12px;
    display:flex;
    align-items:center;
    margin-left:calc(100% - 95px);
    img{
        width:100%;
        height:100%;
    }
`;

const ProfileWrapper3 = styled.div`
    width:100%;
    height: 28px;
    display:flex;
    justify-content: space-around;
    margin-top:8px;

`

const ZzimWrapper = styled(Link)`
    width:43.75%;
    height:28px;
    border: 1px solid #E5E5E5;
    box-sizing: border-box;
    border-radius: 3px;
    display: flex;
    align-items: center;
    justify-content:center;
    text-decoration:none;

    p{
        all:unset;
        width:91.24px;
        height:22.4px;
        font-size:0.6875rem;
        line-height:1.25px;
        font-weight:500;
        display: flex;
        align-items: center;
        text-align: center;
        justify-content:center;
        color: #323232;
    }
`
const DonationWrapper = styled(Link)`
    width:43.75%;
    height:28px;
    border: 1px solid #E5E5E5;
    box-sizing: border-box;
    border-radius: 3px;
    display: flex;
    align-items: center;
    justify-content:center;
    text-decoration:none;
    p{
        all:unset;
        width:91.24px;
        height:22.4px;
        font-size:0.6875rem;
        line-height:1.25px;
        font-weight:500;
        display: flex;
        align-items: center;
        text-align: center;
        justify-content:center;
        color: #323232;
    }
`


const StatusBar = () => {

    const [username, setUsername] = useState("");
    const [signDate, setSignDate] = useState("");
    const [myDonationMoney, setMyDonationMoney] = useState(0);
    const [myDonationCount, setMyDonationCount] = useState(0);
    const [profile, setProfile] = useState("")
    const [wallet, setWallet] = useState(0);
    const [guest, setGuest] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios("/api/checkUser");
            setUsername(result.data.nick)
            setSignDate(result.data.signDate);
            setMyDonationMoney(result.data.myDonationMoney);
            setMyDonationCount(result.data.myDonationCount);
            setProfile(result.data.profile_img);
            setWallet(result.data.wallet)
            setGuest(result.data.guest);
        };
        fetchData();

        return () => {
            setUsername("")
            setSignDate("")
            setMyDonationMoney(0)
            setMyDonationCount(0)
            setProfile("")
            setWallet(0)
        }
    }, [])

    return (
        <StatusWholeWrapper>
            <UserInfoWrapper>
                <ProfileWrapper1>
                    {!profile?
                        <img src={defaultProfile} alt="기본프로필사진"/>:
                        <img src={profile} alt="프로필사진"/>}
                </ProfileWrapper1>
                <ProfileWrapper2>
                   <ProfileTopWrapper>
                       <ProfileLevelWrapper>
                            <h2>
                                뉴비 기부니
                            </h2>
                       </ProfileLevelWrapper>
                       <ProfileOptionWrapper>
                          
                       </ProfileOptionWrapper>
                       <ProfileNickWrapper>
                            <h2>
                                {username}
                            </h2>
                       </ProfileNickWrapper>
                   </ProfileTopWrapper>
                   <ProfileWalletWrapper to="/wallet">
                        <WalletImgWrapper>
                            <img src={givLogo} alt="기부니코인"/>
                        </WalletImgWrapper>
                        <WalletMoneyWrapper>
                            <h2>
                                {wallet}
                            </h2>
                            <h3>
                                기브
                            </h3>
                        </WalletMoneyWrapper>
                        <WalletVectorWrapper>
                            <img src={vectorRight} alt="충전하러가기" />
                        </WalletVectorWrapper>
                   </ProfileWalletWrapper>
                </ProfileWrapper2>
            </UserInfoWrapper>
                <ProfileWrapper3>
                        <ZzimWrapper to='/mypage/myDonationZzim'>
                            <p>찜한 목록</p>
                        </ZzimWrapper>
                        <DonationWrapper to='/mypage/myDonationDid'>
                            <p>기부 목록</p>
                        </DonationWrapper>
                </ProfileWrapper3>
            <DonationUserInformation
                signDate={signDate}
                myDonationMoney={myDonationMoney}
                myDonationCount={myDonationCount}
             />
        {guest &&
            <UnableWrapper>
                <GoToLogin>
                    <KakaoLogin />
                </GoToLogin>
                <NeedLogin>
                    <h2>
                        로그인이 필요합니다
                    </h2>
                </NeedLogin>
            </UnableWrapper>
        }
        <ChangeNickButton />
        </StatusWholeWrapper>
        
    )
}

export default StatusBar;