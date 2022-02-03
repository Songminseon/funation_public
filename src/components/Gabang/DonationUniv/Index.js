import React, { useEffect, useState } from "react";
import Header from "../../Navigation/Header";
import styled from "styled-components";
import axios from "axios";
import PercentByPicture from "./PercentByPicture";
import defaultImg from "../../img/photo/profileimg.svg"
import PaymentsModal from "../../GiveAndTake/modal/PaymentsModal";
import Gold from "../../img/icon/gold.svg";
import Silver from "../../img/icon/silver.svg"
import Bronze from "../../img/icon/bronze.svg";

const UnivTitle = styled.div`
    width:calc(100% - 42px);
    height:56px;
    margin-left:21px;
    margin-top:18px;
    margin-bottom:22px;
 
    h1{
        font-size: 1.125rem;
        font-weight: 700;
        line-height: 1.75rem;
        letter-spacing: -0.015rem;
        text-align: left;
    }
`;

const Background = styled.div`
    width:100%;
    height:calc(100vh - 77px);
    color:#101010;
`;

const OverBack = styled.div`
    width:100%;
    height:auto;
    position:relative;
    background:#F2F2F2;
`;

const Residual = styled.div`
    width:100%;
    height:calc(100vh - 913px);
`;

const PeopleTitle = styled.div`
    width:calc(100% - 42px);
    height:28px;
    margin-left:21px;
    margin-top:18px;
    margin-bottom:16px;

    h2{
        font-size: 1.125rem;
        font-weight: 700;
        line-height: 1.75rem;
        letter-spacing: -0.015rem;
        text-align:left;
    }
`;

const MyRankBar = styled.div`
    width:calc(100% - 32px);
    height:52px;
    margin-left:16px;
    margin-bottom:16px;
    border-radius:4px;
    border:1px solid #E5E5E5;
    background:white;
    display:flex;
    align-items:center;
`;

const RankWrapper = styled.div`
    width:24px;
    height:24px;
    display:flex;
    align-items:center;
    text-align:center;
    margin-left:14px;
    position:relative;

    img{
        width:100%;
        height:100%;
    }

    div{
        position: absolute;
        top:1px;
        width:16px;
        height:24px;
        left:4px;
        display:flex;
        align-items:center;
        text-align:center;
    }

    h5{
        margin:0 auto;
        font-family:"GmarketSansMedium";
        font-size: 0.6875rem;
        line-height: 1.5rem;
        letter-spacing: -0.015rem;
    }
`;

const UserImg = styled.div`
    width:28px;
    height:28px;
    margin-left:12px;
    border-radius:50%;
    overflow:hidden;

    img{
        width:100%;
        height:100%;
    }
`;

const UserNick = styled.div`
    width:calc(50% - 20px);
    height:16px;
    display:flex;
    align-items:center;
    margin-left:8px;

    h2{
        color:#000000;
        font-size: 1rem;
        font-weight: 700;
        line-height: 1rem;
        letter-spacing: -0.015rem;
        text-align: left;
    }

    h3{
        font-size: 0.875rem;
        line-height: 1rem;
        letter-spacing: -0.015rem;
        text-align: left;
    }
`;

const UserGiv = styled.div`
    width:calc(50% - 70px);
    height:16px;
    display:flex;
    align-items:center;
    justify-content:flex-end;

    h5{
        font-size: 0.9375rem;
        line-height: 1rem;
        letter-spacing: -0.015rem;
        margin-right:12px;
    }

    span{
        font-size: 1rem;
        font-weight: 700;
        line-height: 1rem;
        letter-spacing: -0.015rem;
        text-align: right;
    }
`;

const RankBoard = styled.div`
    width:calc(100% - 32px);
    margin-left:16px;
    height:auto;
    background:white;
    margin-bottom:120px;
    border-radius:4px;
    overflow:hidden;
    border-left:1px solid #E5E5E5;
    border-right:1px solid #E5E5E5;
    border-top:1px solid #E5E5E5;
`;



const OpenModalButton = styled.button`
    all:unset;
    cursor: pointer;
    width:calc(100% - 32px);
    height:42px;
    margin-bottom:16px;
    background:#FFC02B;
    border-radius:4px;
    text-align:center;

    h5{
        margin:0 auto;    
        font-size: 1rem;
        font-weight: 700;
        line-height: 1.3125rem;
        letter-spacing: -0.015rem;
    }
    
`;

const Index = (match) => {  //학교별 상세페이지

    const [totalInfo, setTotalInfo] = useState([]);
    const [univInfo, setUnivInfo] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [privateInfo, setPrivateInfo] = useState([]);
    const [userName, setUserName] = useState("");
    const [imgUrl, setImgUrl] = useState("");

    const openModal = () => {
        setIsOpen(true);
    }

    const closeModal = () => {
        setIsOpen(false);
    }

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(`/api/getRanking/${match.location.state.item.thing_index}`)
            const result2 = await axios('/api/getUserName')
            setTotalInfo(result.data.info)
            setPrivateInfo(result.data.private_info[0]);
            setUserName(result2.data.name);
            setImgUrl(result2.data.img);
        }
        if (match.location.state === undefined) {
            match.history.push("/");
        }
        else {
            setUnivInfo(match.location.state.item)
            fetchData();
        }

        return () => {
            setUnivInfo([])
            setTotalInfo([])
        }
    }, []);



    return (
        <>
            <Header />
            <Background>
                <OverBack>
                    <UnivTitle>
                        <h1>
                            {univInfo.thing_description}<br />
                            기부 현황
                        </h1>
                    </UnivTitle>
                    <PercentByPicture
                        rank={univInfo.ranking}
                        univName={univInfo.thing_description}
                        totalGiv={univInfo.thing_crowd_money}
                    />
                    <PeopleTitle>
                        <h2>
                            개인별 기부 현황
                        </h2>
                    </PeopleTitle>

                    <MyRankBar>
                        {!privateInfo ?
                            <>
                                <UserImg>
                                    {!imgUrl ?
                                        <img src={defaultImg} alt="기본이미지" />
                                        :
                                        <img src={imgUrl} alt="유저이미지" />
                                    }

                                </UserImg>
                                <UserNick style={{width:"90%"}}>
                                    <h2>
                                        {userName.length > 7 ? userName.substring(0,6) + "..." : userName}
                                    </h2>
                                    &nbsp;
                                    <h3>
                                        님을 기다리는 중
                                    </h3>
                                </UserNick>
                            </>

                            :
                            <>

                                <RankWrapper>
                                    {privateInfo.ranking === 1 &&
                                        <>
                                            <img src={Gold} alt="금메달" />
                                        </>
                                    }
                                    {privateInfo.ranking === 2 &&
                                        <>
                                            <img src={Silver} alt="은메달" />
                                        </>
                                    }
                                    {privateInfo.ranking === 3 &&
                                        <>
                                            <img src={Bronze} alt="동메달" />
                                        </>
                                    }
                                    <div>
                                        <h5>
                                            {privateInfo.ranking || 0}
                                        </h5>
                                    </div>
                                </RankWrapper>
                                <UserImg>
                                  
                                        <img src={defaultImg} alt="기본이미지" />
                                        
                                  

                                </UserImg>


                                {!privateInfo.nick ?
                                    <UserNick style={{ width: "90%" }}>
                                        <h2>
                                            이름 모를 기부니
                                        </h2>
                                        <h3>을 기다리는 중</h3>
                                    </UserNick>

                                    :
                                    <UserNick>
                                        <h2>
                                            {privateInfo.nick} 
                                        </h2>
                                    </UserNick>
                                }


                                <UserGiv>

                                    {privateInfo.total &&
                                        <>
                                            <span>
                                                {(privateInfo.total / 100).toLocaleString() || 0}
                                            </span>
                                            <h5>
                                                기브
                                            </h5>
                                        </>
                                    }
                            &nbsp;

                        </UserGiv>
                            </>

                        }

                    </MyRankBar>

                    <RankBoard>
                        {totalInfo.map((item, index) => (
                            <MyRankBar
                                key={index}
                                style={{ width: "100%", marginLeft: "0px", marginBottom: "0px", border: "none", borderRadius: "0px", borderBottom: "1px solid #E5E5E5" }}>
                                <RankWrapper>
                                    {item.ranking === 1 &&
                                        <>
                                            <img src={Gold} alt="금메달" />
                                        </>
                                    }
                                    {item.ranking === 2 &&
                                        <>
                                            <img src={Silver} alt="은메달" />
                                        </>
                                    }
                                    {item.ranking === 3 &&
                                        <>
                                            <img src={Bronze} alt="동메달" />
                                        </>
                                    }
                                    <div>
                                        <h5>
                                            {item.ranking}
                                        </h5>
                                    </div>
                                </RankWrapper>
                                <UserImg>
                                    <img src={defaultImg} alt="유저이미지" />
                                </UserImg>
                                <UserNick>
                                    <h2>
                                        {item.nick.length > 7 ? item.nick.substring(0, 6) + "..." : item.nick}
                                    </h2>
                                </UserNick>
                                <UserGiv>
                                    <span>
                                        {(item.total / 100).toLocaleString()}
                                    </span>&nbsp;
                                    <h5>
                                        기브
                                    </h5>
                                </UserGiv>
                            </MyRankBar>
                        ))}

                    </RankBoard>
                    <Residual>

                    </Residual>
                    {userName === "funation_guest" ?
                        <OpenModalButton onClick={() => alert("로그인 후 이용해주세요")}>
                            <h5>
                                로그인 후 이용해주세요
                        </h5>
                        </OpenModalButton>

                        :
                        <OpenModalButton onClick={openModal}>
                            <h5>
                                참여하러가기
                            </h5>
                        </OpenModalButton>
                    }

                </OverBack>
            </Background>

            <PaymentsModal
                item={univInfo}
                modalIsOpen={isOpen}
                closeModal={closeModal}
                maxCoin={(univInfo.thing_target_money - univInfo.thing_crowd_money) / 100}
            />
        </>
    );
};

export default Index;