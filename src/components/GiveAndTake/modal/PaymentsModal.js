import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Modal from "react-modal";
import "../../../modal.css";
import givLogo from "../../img/icon/givLogo.svg";
import vectorGrey from "../../img/icon/vectorGrey.svg";
import { Link } from "react-router-dom";
import axios from "axios";
import minusVector from "../../img/icon/minusVector.svg";
import plusVector from "../../img/icon/plusVector.svg";
import FinalCheckModal from "./FinalCheckModal";

const MyWalletWrapper = styled.div`
    width:calc(100% - 36px);
    margin-left:18px;
    margin-top:21px;
    height:18px;
    display:flex;
    align-items:center;
    justify-content:space-between;
`;

const GiveGiv = styled.div`
    width:auto;
    height:18px;
    display:flex;
`;

const NoLink = styled(Link)`
    all:unset;
    cursor: pointer;
    width:100%;
    height:100%;
`;

const WordWrapper = styled.div`
    width:84.5px;
    height:18px;
    display:flex;
    align-items:center;
   

    h3{
        color:#101010;
        font-size: 0.9375rem;
        font-weight: 500;
        line-height: 1.125rem;
        letter-spacing: -0.015rem;
    }
`;

const GoToCharge = styled.div`
    width:62px;
    height:18px;
    display:flex;
    align-items:center;

    h3{
        display:inline-block;
        color:#979797;
        font-size: 0.6875rem;
        font-weight: 500;
        line-height: 0.9375rem;
        letter-spacing: -0.015rem;
        
    }

`;

const GivImgWrapper = styled.div`
    width:18px;
    height:18px;
    display:flex;
    align-items:center;

    img{
        width:100%;
        height:100%;
    }
`;


const UserWallet = styled.div`
    width:auto;
    height:18px;
    display:flex;
    align-items:center;
    margin-left:5px;

    h2{
        color:#232323;
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.125rem;
        letter-spacing: -0.015rem;
        text-align: left;
        display:inline-block;
    }

    
`
const VectorWrapper = styled.div`
    width:6px;
    height:12px;
    display:flex;
    align-items:center;
    margin-left:11px;

    h3{
        font-size: 0.6875rem;
        font-weight: 500;
        line-height: 0.9375rem;
        letter-spacing: -0.015rem;
    }

    img{
        width:100%;
        height:100%;
    }

`;

const StopBar = styled.div`
    width:calc(100% - 32px);
    height:1px;
    margin-left:16px;
    margin-top:17px;
    background:#F2F2F2;
`;

const UserPart = styled.div`
    width:calc(100% - 36px);
    height:54px;
    margin-left:18px;
    display:flex;
    align-items:center;
    justify-content:space-between;
    
`;

const CountButton = styled.button`
    all:unset;
    cursor: pointer;
    width:30px;
    height:30px;
    display:flex;
    align-items:center;
    text-align:center;
    position:relative;
    
    img{
        
        margin:0 auto;
        width:16px;
        height:16px;
    }
`;

const Disable = styled.div`
    position:absolute;
    width:90%;
    height:90%;
    top:5%;
    left:5%;
    background:white;
    opacity:0.8;
 
`;


const CountInput = styled.div`
    width:60px;
    height:30px;
    color:#5E5E5E;
    font-size:0.875rem;

    input{
        all:unset;
        width:100%;
        height:100%;
    }
`;

const MaxUserPart = styled.div`
    width:141px;
    height:18px;
    display:flex;
    align-items:center;

    h2{
        color:#979797;
        font-size: 0.875rem;
        line-height: 1.125rem;
        letter-spacing: -0.015rem;
        text-align: left;
    }
`;

const UserControl = styled.div`
    width:120px;
    height:30px;
    border: 1px solid #D9D9D9;
    box-sizing: border-box;
    border-radius: 2px;
    display:flex;
    align-items:center;
`;

const Participate = styled.div`
    width:calc(100% - 32px);
    height:42px;
    margin-left:16px;
    background:#FFC02B;
    display:flex;
    align-items:center;
    text-align:center;
    border-radius:4px;

    h3{
        color:#101010;
        margin: 0 auto;
        font-size: 1rem;
        font-weight: 700;
        line-height: 1.3125rem;
        letter-spacing: -0.015rem;
        cursor: pointer;
    }

    form{
        all:unset;
    }

    button{
        all:unset;
        width:100%;
        height:100%;
    }
`


const customStyles = {
    overlay: {
        backgroundColor: 'rgba(52,45,37,0.64)'
    }
}

const PaymentsModal = ({ item, modalIsOpen, closeModal, maxCoin, guest }) => {
    const [finalModal, setFinalModal] = useState(false);
    const [currentWallet, setCurrentWallet] = useState(0);
    const [coin, setCoin] = useState(0)

    const openFinalModal = () => {
        setFinalModal(true)
    }

    const closeFinalModal = () => {
        setFinalModal(false)
    }


    const handleChange = e => {
        if(isNaN(e.target.value)){
            setCoin(parseInt(0)||0)
        }
        else{
            setCoin(e.target.value||0)
        }
    }

    const minusCoin = () => {
        if (coin > 0) {
            setCoin(coin - 1);
            if (coin > maxCoin) {
                setCoin(maxCoin)
            }

        }
        else {
            setCoin(1);
        }
    }

    const plusCoin = () => {
        if (coin >= maxCoin) {
            setCoin(maxCoin);
        } else {
            if (coin < 0) {
                setCoin(1);
            }
            setCoin(parseInt(coin) + 1);
        }
    }


    useEffect(() => {
        const fetchData = async () => {
            const result = await axios('/api/searchCurrentWallet');
            setCurrentWallet(result.data.wallet||0)
        }
        fetchData()
    })

   

    return (


        <>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="participateModal"
                className="custom-payments"
                ariaHideApp={false}
                >
                <>
                    <NoLink to="/walletCharge">
                        <MyWalletWrapper>
                            <GiveGiv>
                                <WordWrapper>
                                    <h3>
                                        Give 가능한
                                    </h3>
                                </WordWrapper>
                                <GivImgWrapper>
                                    <img src={givLogo} alt="기브" />

                                </GivImgWrapper>
                                <UserWallet>

                                    <h2>
                                        {currentWallet} 기브
                                    </h2>
                                </UserWallet>
                            </GiveGiv>
                            <GoToCharge>
                                <h3>
                                    충전하기
                                    </h3>
                                <VectorWrapper>

                                    <img src={vectorGrey} alt="충전하러가기" />
                                </VectorWrapper>
                            </GoToCharge>
                        </MyWalletWrapper>
                    </NoLink>
                    <StopBar></StopBar>
                    <UserPart>
                        <MaxUserPart>
                            <h2>
                                최대 {Math.floor(maxCoin)}까지 참여 가능
                                </h2>
                        </MaxUserPart>
                        <UserControl>
                            <CountButton
                                onClick={minusCoin}
                                style={{ borderRight: "1px solid #D9D9D9" }}>
                                <img src={minusVector} alt="마이너스" />
                                {coin === 0 &&
                                    <Disable>

                                    </Disable>}
                            </CountButton>
                            <CountInput>
                                <input type="text" value={coin <= maxCoin ? parseInt(coin) : parseInt(0) || 0} onChange={handleChange} name="coin" />
                            </CountInput>
                            <CountButton
                                onClick={plusCoin}
                                style={{ borderLeft: "1px solid #D9D9D9" }}>
                                <img src={plusVector} alt="플러스" />

                                {coin === maxCoin &&
                                    <Disable>

                                    </Disable>
                                }

                            </CountButton>
                        </UserControl>
                    </UserPart>

                 
                    <Participate>
                        {coin === 0 ?
                            <h3>기부하기</h3>
                            :

                            <button onClick={openFinalModal}>
                                <h3>
                                    기부하기
                                </h3>
                            </button>
                        }

                        <FinalCheckModal
                            isOpen={finalModal}
                            closeModal={closeFinalModal}
                            customStyles={customStyles}
                            reqSetIndex={item.set_index}
                            reqCoin={coin}
                            thing_amount={item.thing_amount}
                            thing_name={item.thing_name}
                            thing_index={item.thing_index}
                            thing_brand={item.brand}
                            maxCoin={maxCoin}
                        />

                    </Participate>
                    {/* </form> */}

                </>
            </Modal>
        </>
    );
};

export default PaymentsModal;