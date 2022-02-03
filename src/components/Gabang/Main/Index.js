import React, {useEffect, useState} from "react";
import styled from "styled-components";
import Header from "../../Navigation/Header"
import axios from "axios";
import RankingForm from "./RankingForm";
import UnivIcon from "../../img/icon/school.svg";
import FormModal from "./FormModal";

import ThumbNail from "./ThumbNail";

const BodyWrapper = styled.div`
    width:100%;
    height:calc(100vh - 77px);
    color:#101010;
`

const GabangTitle = styled.div`
    width:131px;
    height:24px;
    display:flex;
    align-items:center;
    margin-left:21px;
    margin-top:18px;
    margin-bottom:18px;

    h1{
        font-size: 1.125rem;
        font-weight: 700;
        line-height: 1.5rem;
        letter-spacing: -0.015rem;
    }

`;

const RankingTitle = styled.div`
    width:109px;
    height:24px;
    margin-left:21px;
    margin-top:24px;
    margin-bottom:1 4px;
    display:flex;
    align-items:center;

    h2{
        font-size: 1rem;
        font-weight: 700;
        line-height: 1.5rem;
        letter-spacing: -0.015rem;
    }
`;

const RankingWrapper = styled.div`
    width:calc(100% - 32px);
    height:153px;
    margin-left:16px;
    margin-top:14px;
    background:white;
    border-radius:4px;
    border:1px solid #E5E5E5;
`;

const ApplyUnivWrapper = styled.div`  //modal
    width:100%;
    height:48px;
    display:flex;
    align-items:center;

    button{
        all:unset;
        cursor: pointer;
        width:100%;
        height:100%;
    }
`;

const ApplyUniv = styled.div`
    width:176px;
    height:32px;
    margin-left:calc(50% - 88px);
    display:flex;
    align-items:center;
    text-align:center;

    img{
        width:32px;
        height:32px;
    }

    h2{
        margin:4px auto;
        font-size: 0.875rem;
        font-weight: 500;
        line-height: 1.25rem;
        letter-spacing: -0.015rem;
    }
`;

const Index = () => {

    const [univInfo, setUnivInfo] = useState([]);
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    }

    const closeModal = () => {
        setIsOpen(false);
    }

    useEffect(()=>{
        const fetchData = async()=>{
            const result = await axios("/api/getGabangMain")
            setUnivInfo(result.data.info)

        }
        fetchData();

        return () => {
            setUnivInfo([]);
        }
    },[])


    return(
        <>
            <Header/>
            <BodyWrapper>
                <GabangTitle>
                    <h1>
                        기부니가좋은가방
                    </h1>
                </GabangTitle>
                <ThumbNail />
                <RankingTitle>
                    <h2>
                        우리 학교는 지금
                    </h2>
                </RankingTitle>
                <RankingWrapper>
                    <RankingForm
                        univInfo={univInfo}
                    />
                    <ApplyUnivWrapper>
                        <button onClick={openModal}>
                            <ApplyUniv>
                                <img src={UnivIcon} alt="학교아이콘" />
                                <h2>
                                    기부니의 학교가 없다면?
                                </h2>
                            </ApplyUniv>
                        </button>
                    </ApplyUnivWrapper>
                </RankingWrapper>
            </BodyWrapper>
            <FormModal
                modalIsOpen={isOpen}
                closeModal={closeModal}
            />
        </>
    );
};

export default Index;