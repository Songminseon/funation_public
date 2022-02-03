import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../Navigation/Header";
import axios from "axios";
import GabangReceipt from "./GabangReceipt";
import CurrentDonationStatus from "./CurrentDonationStatus";
import GabangOption from "./OptionAfterGabang";
import Modal from "react-modal";
import "../../modal.css";
import xVector from "../img/icon/xVector.svg";
import RadioChoice from "../Gabang/Main/RadioChoice";

const Background = styled.div`
    width:100%;
    height:100vh;
    background:white;
`;

const WholeWrapper = styled.div`
    width:100%;
    height:100%;
    position:relative;
`;

const FormTitle = styled.div`
    width:111px;
    height:56px;
    display:flex;
    align-items:center;
    text-align:left;
    margin-left:16px;
    top:16px;
    position:absolute;
    
    h1{
        font-size: 1.125rem;
        font-weight: 700;
        line-height: 1.75rem;
        letter-spacing: -0.015rem;
    }
`;

const XWrapper = styled.div`
    width:24px;
    height:24px;
    position:absolute;
    top:20px;
    right:20px;

    button{
        all:unset;
        cursor: pointer;
        width:100%;
        height:100%;

    }

    img{
        width:100%;
        height:100%;
    }
`;

const Description = styled.div`
    width:calc(100% - 32px);
    height:44px;
    display:flex;
    align-items:center;
    position:absolute;
    top:100px;
    margin-left:16px;
    p{
        font-size: 0.875rem;
        font-weight: 300;
        line-height: 1.375rem;
        letter-spacing: -0.015rem;
        text-align: left;
    }
`;

const CheckWrapper = styled.div`
    width:calc(100% - 32px);
    height:95px;
    margin-left:16px;
    top:231px;
    position:absolute;
    display:flex;
    flex-wrap:wrap;
`;

const AskRelation = styled.div`
    width:calc(100% - 32px);
    height:16px;
    margin-left:16px;
    top:191px;
    display:flex;
    align-items:center;
    position:absolute;

    h2{
        color:#333333;
        font-size: 1rem;
        font-weight: 700;
        line-height: 1rem;
        letter-spacing: -0.015rem;
        text-align: left;
    }
`;

const ApplyButton = styled.div`
    position:fixed;
    width:368px;
    height:42px;
    bottom:16px;
    text-align:center;
    display:flex;
    align-items:center;
    background:#FFC02B;
    border-radius:0px 0px 4px 4px;
    

    @media screen and (max-width:400px){
        width:calc(100% - 32px);
    }

    button{
        all:unset;
        cursor: pointer;
        width:100%;
        height:100%;
    }

    h2{
        font-size: 1rem;
        font-weight: 700;
        line-height: 1.3125rem;
        letter-spacing: -0.015rem;
        margin:0 auto;
    }
`;

const customStyles = {
    overlay: {
        backgroundColor: 'rgba(52,45,37,0.64)'
    }
}

const GabangSuccess = (match) => {
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(`/api/searchRecordByOrderNumber/${match.match.params.order_number}`)
            setInfo(result.data.resource[0])
        }
        fetchData()

        return setInfo([])
    }, [])

    const [info, setInfo] = useState([]);
    const [isOpen, setIsOpen] = useState(true);

    const closeModal = () => {
        setIsOpen(false);
    }

    const handleonClick = (param) => {
        if(param==="1"){
            alert("제출되었습니다")
        }
        
        setTimeout(()=>{
            setIsOpen(false)}
            ,500)
        }


    return (
        <Background>
            <Header />
            <GabangReceipt
                info={info}
            />
            <CurrentDonationStatus
                status={info.thing_status}
            />
            <GabangOption />
            <Modal
                isOpen={isOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Gabang questionary"
                className="charge-modal"
                ariaHideApp={false}
            >
                <WholeWrapper>
                    <form action="/function/userWantGabang" method="POST">
                        <input type="hidden" name="reqUniv" value="결제후" />
                        <FormTitle>
                            <h1>
                                {(info.transaction_money / 100).toLocaleString()} 기브
                                <br />
                                기부 완료
                            </h1>
                        </FormTitle>
                        <XWrapper>
                            <button onClick={()=>handleonClick("2")}>
                                <img src={xVector} alt="나가기" />
                            </button>
                        </XWrapper>
                        <Description>
                            <p>
                                새내기가 따뜻한 대학생활을 하게 될 거예여
                            </p>
                        </Description>
                        <AskRelation>
                            <h2>
                                학교와의 관계
                            </h2>
                        </AskRelation>
                        <CheckWrapper>
                            <RadioChoice />
                        </CheckWrapper>
                        <ApplyButton>
                            <button type="submit" onClick={()=>handleonClick("1")}>
                                <h2>
                                    제출하기
                                </h2>
                            </button>
                        </ApplyButton>
                    </form>
                </WholeWrapper>
                
            </Modal>
        </Background>
    );
};

export default GabangSuccess;