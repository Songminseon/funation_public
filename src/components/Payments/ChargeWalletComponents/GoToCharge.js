import React, { useState, useEffect } from "react";
import styled from "styled-components";
import giv from "../../img/icon/givLogo.svg";
import PayPopup from "./PayPopup";
import axios from "axios";
import GivGuide from "./GivGuide";
import Popup from "../Popup/Popup";
import Footer from "../../MyStatus/HomeInformation/Footer";

const WholeWrapper = styled.div`  //배경 전체 채우기용
    width:100%;
    height:calc(100vh - 135px);
`;


const OptionCoverWrapper = styled.div` //옵션 커버
    width:calc(100% - 32px);
    height:272px;
    background:white;
    border: 1px solid #E5E5E5;
    margin-left:16px;
    border-radius:4px;
    display:flex;
    align-items:center;
    flex-wrap:wrap;
`

const OptionWrapper = styled.div`
    width:100%;
    height:53px;
    display:flex;
    flex-wrap:wrap;
    align-items:center;
`;

const OptionInnerWrapper = styled.div`
    width:calc(100% - 24px);
    height:24px;
    display:flex;
    align-items:center;
    margin-left:12px;   
`
const OptionImgWrapper = styled.div`
    width:18px;
    height:18px;
    display:flex;
    align-items:center;

    img{
        width:100%;
        height:100%;
    }
`
const OptionGivWrapper = styled.div`
    width:60px;
    height:16px;
    margin-left:9px;
    display:flex;
    align-items:center;
    h3{
        font-size: 0.8125rem;
        font-weight: 500;
        line-height: 1rem,;
        letter-spacing: -0.015rem;
        text-align: left;
    }
`

const OptionMoneyWrapper = styled.div`
    width:64px;
    height:24px;
    background:#333333;
    border-radius:2px;
    display:flex;
    align-items:center;
    text-align: center;
    margin-left:calc(100% - 151px);

    h3{
        color:white;
        font-size: 0.75rem;
        font-weight: 500;
        line-height: 1.3125rem;
        letter-spacing: -0.015rem;
        margin:0 auto;
    }
`;

const Bar = styled.div`
    width:100%;
    height:1px;
    background: #F2F2F2;
    transform: matrix(1, 0, 0, -1, 0, 0);
`



const option = [
    {
        "option": "30 기브",
        "content": "3,300원",
        "giv": 30
    },
    {
        "option": "50 기브",
        "content": "5,500원",
        "giv": 50
    },
    {
        "option": "100 기브",
        "content": "11,000원",
        "giv": 100
    },
    {
        "option": "300 기브",
        "content": "33,000원",
        "giv": 300
    },
    {
        "option": "500 기브",
        "content": "55,000원",
        "giv": 500
    },
]


const GoToCharge = () => {

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios("/api/getUserName")
            setNick(result.data.name)
        }
        fetchData()
    })

    const [nick, setNick] = useState("")
    const [reqGiv, setReqGiv] = useState(0)
    const [modalIsOpen, setIsOpen] = useState(false);
    const [modalIsOpen2, setIsOpen2] = useState(false);

    const openModal2 = (reqGiv) => {
        setIsOpen2(true)
        setReqGiv(reqGiv)
    }

    const closeModal2 = () => {
        setIsOpen2(false)
    }

    const closeModal = () => {
        setIsOpen(false)
    }

    const openModal = (reqGiv) => {
        setIsOpen(true)
        setReqGiv(reqGiv)
    }

    


    return (
        <WholeWrapper>
            <OptionCoverWrapper>
                {option.map((item, index) => (
                    <>
                        <OptionWrapper key={index}>
                            <OptionInnerWrapper>
                                <OptionImgWrapper>
                                    <img src={giv} alt="기부니코인" />
                                </OptionImgWrapper>
                                <OptionGivWrapper>
                                    <h3>
                                        {item.option}
                                    </h3>
                                </OptionGivWrapper>
                      
                                    <OptionMoneyWrapper> 
                                        <button onClick={()=>openModal(item.giv)} style={{ all: "unset", width: "64px", height: "24px", cursor: "pointer" }}>
                                            <h3>
                                                {item.content}
                                            </h3>
                                        </button>                                     
                                    </OptionMoneyWrapper>
                        


                            </OptionInnerWrapper>

                        </OptionWrapper>
                        <Bar>
                        </Bar>
                    </>
                ))}
            </OptionCoverWrapper>
            <GivGuide />   
            <PayPopup
                modalIsOpen={modalIsOpen}
                closeModal={closeModal}
                reqGiv={reqGiv}
                nick={nick}
            />
            <Popup
                modalIsOpen={modalIsOpen2}
                closeModal={closeModal2}
                reqGiv={reqGiv}
                nick={nick}
            />
	<Footer />
        </WholeWrapper>

    );
};

export default GoToCharge;
