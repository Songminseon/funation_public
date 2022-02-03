import React, {useState} from "react";
import styled from "styled-components";
import GivGuideModal from "./GivGuideModal";
import vectorDown from "../../img/icon/vectorDown.svg";
import vectorUp from "../../img/icon/vectorTop.svg";
import {Link} from "react-router-dom";
import Modal from "react-modal";
import "../../../modal.css";

const GivGuideWrapper = styled.div`
    width:calc(100% - 32px);
    height:39px;
    margin-left:16px;
    margin-top:12px;
    border-radius:4px;
    border: 1px solid #E5E5E5;
    display:flex;
    align-items:center;
    background:white;
    position:relative;
`;

const GuideTitle = styled.div`
    width:74px;
    height:14px;
    position:absolute;
    left:12px;
    top:12px;
    display:flex;
    align-items:center;

    h2{
        color:#333333;
        font-size: 0.8125rem;
        font-weight: 500;
        line-height: 0.875rem;
        letter-spacing: -0.015rem;
        text-align: left;
    }
`;

const VectorButton = styled.button`
    all:unset;
    cursor: pointer;
    width:24px;
    height:24px;
    top:7px;
    right:12px;
    display:flex;
    align-items:center;
    text-align:center;
    position:absolute;

    img{
        margin:0 auto;
        width:12px;
        height:6px;
    }
`;

const GoHomeGiv = styled(Link)`
    all:unset;
    cursor: pointer;
    color:#FFC02B;
`

const GivGuideContents = styled.div`
    width:calc(100% - 32px);
    height:auto;
    margin-left:16px;
    border: 1px solid #E5E5E5;
    background:white;

    div{
        width:calc(100% - 30px);
        height:100%;
    }

    li{
        color:#797979;
        margin-top:3px;
        font-size: 0.6875rem;
        line-height: 0.875rem;
        letter-spacing: -0.015rem;
        text-align: left;
    }
    
    span{
        color:#FFC02B;
        font-size: 0.6875rem;
        line-height: 0.875rem;
        letter-spacing: -0.015rem;
        cursor: pointer;
    }
`;

const OverBack = styled.div`
    width:100%;
    height:auto;
    background:#F2F2F2;
`;

const customStyles = {
    overlay: {
        backgroundColor: 'rgba(52,45,37,0.64)'
    }
}

const GivGuide = () => {

    const [dropdown, setDropDown] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    
    const openDropDown = () => {
        setDropDown(true);
    }

    const closeDropDown = () => {
        setDropDown(false)
    }

    const openModal = () => {
        setIsOpen(true)
    }
    
    const closeModal = () => {
        setIsOpen(false)
    }

    return(
        <OverBack>
            <GivGuideWrapper>
                <GuideTitle>
                    <h2>
                        기브 이용안내
                    </h2>
                </GuideTitle>
                
                {dropdown ?
                <>
                    <VectorButton onClick={closeDropDown}>
                        <img src={vectorUp} alt="드랍다운" />
                    </VectorButton>
                </>
                    
                    :
                    <VectorButton onClick={openDropDown}>
                        <img src={vectorDown} alt="드랍업" />    
                    </VectorButton>
                }
            </GivGuideWrapper>
            {dropdown && 
            <>
                <GivGuideContents>
                    <div>
                    <ul>
                        <li style={{marginTop:"0px"}}>
                            충전한 기브는 기부니가좋다 웹에서 사용할 수 있습니다.
                        </li>
                        <li>
                            기브로 구매한 콘텐츠에 대한 자세한 이용 방법은 각 컨텐츠 소개 페이지를 참고 바랍니다.
                        </li>
                        <li>
                            기브가 사용될 때는 이벤트 또는 유료 구매 시 보너스로 제공된 무료 기브가 유효기간 임박 순으로 먼저 사용됩니다.
                        </li>
                        <li>
                            결제 상세내역은 <GoHomeGiv to="/wallet">홈&gt;내 기브</GoHomeGiv> 메뉴에서 확인 가능하며, 현금성 충전 포인트로 결제한 경우 현금영수증 발행이 가능합니다.
                        </li>
                        <li>
                            기브의 가격은 부가가치세가 포함된 가격입니다.
                        </li>
                        <li>
                            기브 구매 또는 사용 전 이용약관 동의가 필요합니다. <span onClick={openModal}>기브 이용약관 &gt;</span>
                        </li>
                        <li>
                            구매 후 7일 이내, 사용하지 않은 기브 패키지는 내 기브에서 직접 구매 취소할 수 있습니다.                            
                        </li>
                        <li>
                            기브 구매 취소 시, 결제한 수단으로 환불됩니다.
                        </li>
                        <li>
                            일부 사용 후 잔여 기브에 대한 구매 취소는 고객센터를 통해 가능하며, 기브 구매 시 지급된 보너스 기브를 사용한 경우에는 해당 분량을 제외하고 환불됩니다. (기브 패키지가 환불되면 해당 기브로 구매한 컨텐츠 구매 취소 시, 해당 기브 분량을 제외하고 환불되니 주의 바랍니다.)
                        </li>
                        <li>    
                            기브 구매 시 지급되는 보너스 기브와 이벤트로 받은 무료 기브는 구매 취소 및 환불 대상이 아닙니다.
                        </li>
                    </ul>
                    </div>
                </GivGuideContents>
                <div style={{width:"calc(100% - 32px)", height:"54px"}}>
                
                </div>    
            </>
            }
            <Modal
                isOpen={isOpen}
                onRequestClose={closeModal}
                contentLabel="giv Guide Modal"
                className="result-modal"
                style={customStyles}
                ariaHideApp={false}
            >
                <GivGuideModal
                    closeModal={closeModal}
                />
            </Modal>
        </OverBack>
    );
};

export default GivGuide;