import React, {useEffect, useState} from "react";
import styled from "styled-components";
import xVector from "../../img/icon/xVector.svg";
import Modal from "react-modal";
import "../../../modal.css";
import axios from "axios";

const customStyles = {
    overlay : {
        backgroundColor: 'rgba(52,45,37,0.64)'
    }
}

const ButtonCover = styled.div`
    width:calc(100% - 32px);
    height:210px;
    margin-left:16px;
    background:white;
    position:relative;
    color:#101010;
    border-radius:4px;
`;

const Confirm = styled.div`
    width:calc(100% - 32px);
    height:56px;
    display:flex;
    align-items:center;
    margin-left:16px;
    margin-top:54px;
    text-align:center;

    h2{
        margin:0 auto;
        font-size: 1.125rem;
        font-weight: 500;
        line-height: 1.75rem;
        letter-spacing: -0.015rem;
    }

    span{
        font-size: 1.125rem;
        font-weight: 700;
        line-height: 1.75rem;
        letter-spacing: -0.015rem;
    }
`;

const ButtonWrapper = styled.div`
    width:calc(100% - 32px);
    height:42px;
    margin-left:16px;
    margin-top:42px;
    display:flex;
    align-items:center;
    justify-content:space-between;
    text-align: center;

    h3{
        margin:0 auto;
        font-size: 1rem;
        font-weight: 700;
        line-height: 1.3125rem;
        letter-spacing: -0.015rem;
    }

`;

const PayButton = styled.button`
    all:unset;
    cursor:pointer;
    width:calc(calc(100% - 28px) / 3);
    height:100%;
    background:#FFC02B;
    border-radius:4px;
`;

const Exit = styled.button`
    all:unset;
    cursor: pointer;
    width:16px;
    height:16px;
    position:absolute;
    top:20px;
    right:20px;

    img{
        width:100%;
        height:100%;
    }
`;

const onClickPayment = (giv, method, closeModal, phone, snsId, email) => {
    setTimeout(() => {
        closeModal()
    
        const {IMP} = window;
        IMP.init(process.env.REACT_APP_IAMPORT)
    
        const data = {
            pg : 'uplus',
            pay_method : method,
            name:"기브",
            merchant_uid : 'merchant_' + new Date().getTime(),
            amount : giv*110,
            buyer_tel:phone,
            buyer_email:email,
            m_redirect_url:`https://do.funation.io/payments/mobileCallback/${giv}`
        };
    
        IMP.request_pay(data, callback)
    
        function callback(response) {
            const {
              success,
              paid_amount,
              error_msg,
              merchant_uid,
              status
            } = response;
            if (success) {
                axios({
                    url:"https://do.funation.io/payments/callback",
                    method:"POST",
                    headers:{
                        "Content-Type": "application/json"
                    },
                    data:{
                        reqGiv:paid_amount,
                        snsId:snsId,
                        merchant_uid:merchant_uid
                    }
                }).then(()=>{
                    if(status==="ready"){
                        alert("입금을 진행해주세요")
                    }
                    else{
                        alert("결제 완료")
                    }
                })
            } else {
              alert(`결제 실패: ${error_msg}`);
            }
          }
    }, 500);

}



const PayPopup = ({modalIsOpen, closeModal, reqGiv, nick}) => {

    useEffect(()=>{
        const fetchData = async() => {
            const result = await axios("/api/getAdditional")
            setPhone(result.data.phone_number)
            setSnsId(result.data.snsId)
            setEmail(result.data.email)
        }
        fetchData()
        
    },[])

    const [phone, setPhone] = useState("")
    const [snsId, setSnsId] = useState("")
    const [email, setEmail] = useState("")
    return(
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="paypopup modal"
            className="package"
            ariaHideApp={false}
            style={customStyles}
        >
            <ButtonCover>
                <Confirm>
                    <h2>
                        <span>{nick}님</span> 계정에<br/>
                        <span>{reqGiv}기브 충전</span>하기
                    </h2>
                </Confirm>
                {nick==="master" &&
                <ButtonWrapper>
                    <PayButton onClick={()=>onClickPayment(reqGiv,"card", closeModal, phone, snsId, email)}>
                        <h3>
                            카드 결제
                        </h3>
                    </PayButton>
                    <PayButton onClick={()=>onClickPayment(reqGiv, "trans", closeModal, phone, snsId, email)}>
                        <h3>
                            계좌이체
                        </h3>
                    </PayButton>
                    <PayButton onClick={()=>onClickPayment(reqGiv, "vbank", closeModal, phone, snsId, email)}>
                        <h3>
                            가상 계좌
                        </h3>
                    </PayButton>
                    
                </ButtonWrapper>
                }
                <Exit onClick={closeModal}>
                    <img src={xVector} alt="나가기" />
                </Exit>
            </ButtonCover>
        </Modal>
    );
};

export default PayPopup;
