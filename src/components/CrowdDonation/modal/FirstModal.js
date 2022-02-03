import React, { useEffect, useState } from "react";
import '../../../modal.css';
import styled from 'styled-components';
import Header from "../../Navigation/Header";
import heart from "../../img/icon/heart.svg";
import vectorRight from "../../img/icon/vectorRight.svg";
import smallLogo from "../../img/logo/logotext.svg";
import SecondModal from "./SecondModal";
import KakaoShare from "../../Kakao/KakaoShare";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../../../onBoarding.css';
import ImgSlider from "./ImgSlider";


const ModalImageWrapper = styled.div`
    width:92%;
    height:34.714vh;
    margin-left:4%;
    border-radius:20px;
    overflow:hidden;

    img{
        width:100%;
        height:100%;
    }
`;


const ModalTitleWrapper = styled.div`
    width:86%;
    height:9vh;
    margin-left:6.5%;
    margin-top:1.142vh;
    display:flex;
    align-items:center;
    text-align: left;
    h1{
        font-size: 1.4375rem;
        font-style: normal;
        font-weight: 400;
        line-height: 2.0625rem;
        letter-spacing: -0.24px;
    }
`;

const ModalBodyWrapper = styled.div`
    width:86%;
    height:9vh;
    margin-top:1.142vh;
    margin-left:6.5%;
    display:flex;
    align-items:center;
    text-align:left;

    h2{
        font-size: 1rem;
        font-style: normal;
        font-weight: 400;
        line-height: 1.5rem;
        letter-spacing: -0.23999999463558197px;
    }
`

const ModalStatusWrapper = styled.div`
    width:86%;
    height:5.285vh;
    margin-left:6.5%;
    margin-top:2.142vh;
    display:flex;
    align-items:center;
   
`;

const ModalNumberPercentWrapper = styled.div`
    width:31.104%;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5rem;
    letter-spacing: -0.015rem;
    text-align: left;
    
    span{
        font-size:1rem;
        font-style:normal;
        line-height:1.5rem;
        letter-spacing:-0.015rem;
    }
`;

const ModalNumberGiveWrapper = styled.div`
    width:33.104%;
    margin-left:37.209%;
    font-style:normal;
    font-weight:400;
    line-height: 1.5rem;
    letter-spacing: -0.015rem;
    font-size:0.75rem;
    span{
        font-size:1rem;
        line-height:1.5rem;
        letter-spacing:-0.015rem;
        font-weight:400;
    }
`;

const ModalPercentGiveWrapper = styled.div`
    width:92%;
    height:0.571vh;
    margin-left:4%;
    border-radius:2px;

    background:#D9D9D9;
    display:flex;

    #modal-donation{
        width:100%;
        height:0.571vh;
        background:#FB8517;
    }

    #modal-img-wrapper{
            
            height:4vh;
            width:7.608%;
            margin-left:-3.804%;
            margin-top:-1.428vh;
            
            #modal-img-logo{
                width:100%;
                height:100%;
            }
        }
    
   
`;

const StopBar = styled.div`
    width:92%;
    margin-left:4%;
    background:#E0E0E0;
    height:1px;
    margin-top:2.571vh;
`

const ModalGoDetailWrapper = styled.div`
    width:91.75%;
    height:5.857vh;
    background:#979797;
    border-radius:9px;
    display:flex;
    align-items:center;
    
    color:white;
    margin-top:2.285vh;
    margin-left:4.25%;

    p{
        margin-left:30.245%;
        font-size: 0.875rem;
        font-style: normal;
        font-weight: 400;
        line-height: 1rem;
        letter-spacing: -0.24px;
    }

    #vector-wrapper{
        width:1.362%;
        height:1.142vh;
        margin-left:2.179%;
        display:flex;
        align-items:center;
        img{
            width:100%;
            height:100%;
        }   
    }
`;


const MenuWrapper = styled.div`
    width:100%;
    height:9vh;
    display:flex;
    background:white;
    box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.1);
    border-radius: 20px 20px 0px 0px;
    margin-top:2.428vh;
    align-items:center;
   
    #share_wrapper{
        width:6.25%;
        height:3.577vh;
        margin-left:7.6225%;
        
        img{
            width:100%;
            height:100%;
        }
    }


    button{
        width:60.25%;
        height:6.714vh;
        margin-left:6.13%;
        background:#F8B517;
        border:none;
        border-radius:16px;
        display:flex;
        text-align:center;
        align-items:center;
        cursor:pointer;
    }

   

    button h1{
            font-size: 1.125rem;
            font-style: normal;
            font-weight: 400;
            line-height: 1rem;
            letter-spacing: -0.24px;
            margin:0 auto;
            color:black;
    }
`;

const HeartWrapper = styled.div`
        width:6.25%;
        height:3.577vh;
        margin-left:9.5%;
        
        
       button{
           all:unset;
           
           width:100%;
           height:100%;
           cursor:pointer;
       }

       button img{
           width:100%;
           height:100%;
       }

    
    
`;

const DetailWrapper = styled.div`
    width:100%;
    height:100vh;
    
`;

const DonguWrapper = styled.div`
    width:100%;
    height:5.714vh;
    display:flex;
    text-align:center;
    align-items:center;
    
    h1{
        margin:0 auto;
        font-size: 0.75rem;
        line-height: 1rem;
        letter-spacing: -0.24px;

    }
`;

const customStyles2 = {
    overlay: {
        backgroundColor: 'rgba(0,0,0,0.5)'
    }
}

const FirstModal = (match) => {

    const [modalIsOpen2, setIsOpen2] = useState(false);
    const [item, setItem] = useState([]);
    const [limiteCoin, setLimiteCoin] = useState(0)




    useEffect(() => {
        if (match.location.state === undefined) {
            match.history.push("/");
        }
        else {
            setItem(match.location.state.item);
    
            const maxCoin = match.location.state.item.thing_target_money * 0.002
            const leftCoin = (match.location.state.item.thing_target_money - match.location.state.item.thing_crowd_money) / 100;
            leftCoin < maxCoin ? setLimiteCoin(leftCoin) : setLimiteCoin(maxCoin) 
        }

    }, [])



    function openModal2() {
        setIsOpen2(true);
    }
    function closeModal2() {
        setIsOpen2(false);
    }

    return (
        <>
            <DetailWrapper>

                <Header />
                <DonguWrapper>
                    <h1>
                        동구밭
                        </h1>
                </DonguWrapper>

              
                    <>
                        {/* 이미지 슬라이더 구간  */}
                        <ModalImageWrapper>
                          
                                <ImgSlider
                                    index={item.thing_index}
                                />
              
                        </ModalImageWrapper>
                        <ModalTitleWrapper>
                            <h1>
                                {item.thing_name}
                            </h1>
                        </ModalTitleWrapper>
                        <ModalBodyWrapper>
                            <h2>
                                {item.thing_description}
                            </h2>
                        </ModalBodyWrapper>
                        <ModalStatusWrapper>
                            <ModalNumberPercentWrapper>
                                지금까지<span>{((item.thing_crowd_money) / (item.thing_target_money) * 100).toFixed(0)}</span>%성공
                                    </ModalNumberPercentWrapper>
                            <ModalNumberGiveWrapper>
                                <span>{(item.thing_target_money-item.thing_crowd_money)/100}</span>기부니 남았어요!
                                    </ModalNumberGiveWrapper>
                        </ModalStatusWrapper>
                        <ModalPercentGiveWrapper>
                            <div id="modal-donation" style={{ width: (item.thing_crowd_money / item.thing_target_money * 100) + "%" }}>

                            </div>

                            <div id="modal-img-wrapper">
                                <img id="modal-img-logo" src={smallLogo} alt="기부니진행" />
                            </div>

                        </ModalPercentGiveWrapper>
                        <StopBar>
                        </StopBar>
                        <ModalGoDetailWrapper>
                            <p>제품 자세히 알아보기</p>
                            <div id="vector-wrapper">
                                <img src={vectorRight} alt="더보기" />
                            </div>
                        </ModalGoDetailWrapper>

                        <MenuWrapper>
                            <KakaoShare />

                            <HeartWrapper>
                                <form action="/function/zzim" method="post">
                                    <input type="hidden" name="index" id="index" value={item.thing_index} />
                                    <button type="submit">
                                        <img src={heart} alt="찜"/>
                                    </button>
                                </form>
                            </HeartWrapper>

                            <button onClick={openModal2}>
                                <h1>
                                    기부참여하기
                                         </h1>
                            </button>

                        </MenuWrapper>
                    </>


            </DetailWrapper>

            <SecondModal
                item={item}
                modalIsOpen2={modalIsOpen2}
                closeModal2={closeModal2}
                customStyles2={customStyles2}
                limiteCoin={limiteCoin}
            />


        </>
    );
};

export default FirstModal;