import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ItemUserStatus from "./ItemUserStatus";
import Header from "../Navigation/Header";
import ImgSlider from "./ImgSlider";
import PaymentsModal from "./modal/PaymentsModal";
import KakaoShare from "../Kakao/KakaoShare";
import axios from "axios";
import SetItemModal from "./modal/SetItemModal";
import IsZzim from "./IsZzim";
import givLogo from "../img/icon/givLogo.svg";

const WholeWrapper = styled.div`
    width:100%;
    height:100vh;
    background:white;
    overflow:scroll;
`;

const ImgWrapper = styled.div`
    width:400px;
    height:400px;

    @media screen and (max-width:400px){
        width:100vw;
        height:100vw;
    }    
`;


const TopWrapper = styled.div`
    width:calc(100% - 32px);
    height:28px;
    margin-left:16px;
    margin-top:17px;
    display:flex;
    align-items:center;
`
const TitleWrapper = styled.div`
    width:calc(100% - 64px);
    height:28px;
    text-align:left;
    display:flex;
    align-items:center;

    h1{
        color:#101010;
        font-size: 1.125rem;
        font-weight: 700;
        line-height: 1rem;
        letter-spacing: -0.015rem;
    }
`;

const ShareButton = styled.div`
    width:28px;
    height:28px;    
`;


const DescriptionWrapper = styled.div`
    width:calc(100% - 32px);
    margin-left:16px;
    margin-top:9px;

    p{
        color:#101010;
        font-size: 0.875rem;
        font-weight: 300;
        line-height: 1.375rem;
        letter-spacing: -0.015rem;
        text-align: left;
    }
`

const TargetGivWrapper = styled.div`
    width:calc(100% - 32px);
    height:16px;
    margin-left:16px;
    margin-top:18px;
    display:flex;
    align-items:center;
    justify-content:space-between;
`;

const LeftGiv = styled.div`
    width:50%;
    height:100%;
    display:flex;
    align-items:center;

    h2{
        color:#F3A100;
        font-size: 1rem;
        font-weight: 700;
        line-height: 1rem;
        letter-spacing: -0.015rem;
        text-align: left;
    }

    img{
        width:16px;
        height:16px;
    }
`;

const LeftGivSecond = styled.div`
    width:50%;
    height:100%;
    display:flex;
    align-items:center;
    justify-content:flex-end;

    h2{
        display:inline-block;
        font-size: 0.875rem;
        font-weight: 500;
        line-height: 1rem;
        letter-spacing: -0.015rem;
        text-align: right;
        color:#595959;
    }  
`;

const PercentageWrapepr = styled.div`
    width:calc(100% - 32px);
    height:2px;
    margin-left:16px;
    margin-top:12px;
    margin-bottom:16px;
    background: #D9D9D9;

    div{
        width:80%;
        height:100%;
        background: #F8B517;
    }
`;

const StopBar = styled.div`
    width:calc(100% - 32px);
    height:1px;
    background:#F2F2F2;
    margin-left:16px;
`;

const BlankSpace = styled.div`
    width:100%;
    height:79px; 
    background:#F2F2F2;
`;

const Residual = styled.div`
    width:100%;
    height:calc(100vh - 741px);
    background:#F2F2F2;

    @media screen and (max-width:400px){
        height:calc(calc(100vh - 100vw) - 363px);
    }
`;

const customStyles = {
    overlay: {
        backgroundColor: 'rgba(52,45,37,0.64)'
    }
}

const ItemDetail = (match) => {

    const [item, setItem] = useState([]);
    const [modalIsOpen, setIsOpen] = useState(false);
    const [maxCoin, setMaxCoin] = useState(0)
    const [donguIsOpen, setDonguIsOpen] = useState(false);
    const [guest, setGuest] = useState(false);

    useEffect(() => {
        if (match.location.state === undefined) {
            match.history.push("/");
        }
        else {
            const fetchData = async () => {
                setItem(match.location.state.item)
                var result = await axios(`/api/searchMyDonation/${match.location.state.item.thing_index}`);
                var usedCoin = result.data.coin;
                {
                    (match.location.state.item.thing_target_money) * 0.005 - usedCoin < ((match.location.state.item.thing_target_money - match.location.state.item.thing_crowd_money) / 100)
                        ?
                        setMaxCoin((match.location.state.item.thing_target_money) * 0.005 - usedCoin)
                        :
                        setMaxCoin((match.location.state.item.thing_target_money - match.location.state.item.thing_crowd_money) / 100)
                }
            }
            const fetchData2 = async () => {
                var result = await axios('/api/checkGuest')
                setGuest(result.data.guest)
            }
            fetchData();
            fetchData2();
        }
        return () => {
            setMaxCoin(0)
            setItem([])
        }
    }, [])

    const openModal = () => {
        setIsOpen(true);
    }

    const closeModal = () => {
        setIsOpen(false);
    }
    const openDonguModal = () => {
        setDonguIsOpen(true);
    }

    const closeDonguModal = () => {
        setDonguIsOpen(false);
    }


    return (
        <>
            <WholeWrapper>
                <Header />
                <ImgWrapper>
                    <ImgSlider
                        key={item.thing_index}
                        index={item.set_index} />
                </ImgWrapper>
                <TopWrapper>
                    <TitleWrapper>
                        <h1>
                            {item.thing_name}
                        </h1>
                    </TitleWrapper>
                    <ShareButton>
                        <KakaoShare />
                    </ShareButton>
                    <IsZzim
                        value={item.thing_index}
                        guest={guest}
                    />
                </TopWrapper>
                <DescriptionWrapper>
                    <p>
                        {item.thing_oneDescription}<br />
                        {item.thing_description}
                    </p>
                </DescriptionWrapper>
                {/* <TargetTitleWrapper>
                        <h3>
                            목표 {(item.thing_crowd_money / item.thing_target_money * 100).toFixed(0)}% 달성
                        </h3>
                    </TargetTitleWrapper> */}
                <TargetGivWrapper>
                    <LeftGiv>
                        <h2>
                            목표까지
                            </h2>
                        <img src={givLogo} alt="기브코인" style={{ marginTop: "1px", marginLeft: "5px", marginRight: "3px" }} />
                        <h2>
                            {(item.thing_target_money - item.thing_crowd_money) / 100 ||0}
                        </h2>
                    </LeftGiv>
                    <LeftGivSecond>
                        <h2>
                            {item.thing_crowd_money / 100 || 0}&nbsp;
                        </h2>
                        <h2 style={{ color: "#ABABAB" }}>
                            / {item.thing_target_money / 100 ||0} 기브
                        </h2>


                    </LeftGivSecond>
                </TargetGivWrapper>
                <PercentageWrapepr>
                    <div style={{ width: (item.thing_crowd_money / item.thing_target_money * 100) + "%" }}>

                    </div>
                </PercentageWrapepr>
                <StopBar></StopBar>
                <SetItemModal
                    index={item.set_index}
                    openDonguModal={openDonguModal}
                    closeDonguModal={closeDonguModal}
                    isOpen={donguIsOpen}
                />


                <BlankSpace></BlankSpace>
                <Residual></Residual>
            </WholeWrapper>

            <ItemUserStatus
                openModal={openModal}
                item={item}
                maxCoin={maxCoin}
                thing_index={item.thing_index}
                guest={guest}
            />
            <PaymentsModal
                item={item}
                modalIsOpen={modalIsOpen}
                closeModal={closeModal}
                maxCoin={maxCoin}
                contentLabel="paymentsModal"
                style={customStyles}
                guest={guest}
            />
        </>
    );
};

export default ItemDetail;

