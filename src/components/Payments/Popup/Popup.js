import React, {useState} from "react";
import styled from "styled-components"
import Modal from "react-modal"
import "../../../modal.css";
import xVector from "../../img/icon/xVector.svg";
import {CopyToClipboard} from "react-copy-to-clipboard";
import copy from "../../img/icon/copy.svg";
import Csrftoken from "../../Csrftoken";

const customStyles = {
    overlay: {
        backgroundColor: 'rgba(52,45,37,0.64)'
    }
}

const ContentWrapper = styled.div`
    width:100%;
    height:calc(100vh - 74px);
    overflow:auto;
    color:#333333;

    p{
        font-size: 0.75rem;
        font-weight: 400;
        line-height: 1.3125rem;
        letter-spacing: -0.015rem;
        text-align: left;
    }

    span{        
        font-size: 0.75rem;
        font-weight: 700;
        line-height: 1.3125rem;
        letter-spacing: -0.015rem;
        text-align: left;
    }
`;

const XWrapper = styled.div`
    position:fixed;
    width:24px;
    height:24px;
    top:32px;
    right:32px;
    background:white;
    display:flex;
    align-items:center;
    text-align:center;

    @media screen and (min-width:401px){
        margin-right:calc(50vw - 200px);
    }

    button {
        all:unset;
        cursor: pointer;
        width:100%;
        height:100%;
    }

    img{
        margin:0 auto;
        width:14px;
        height:14px;
    }
`;

const Title = styled.div`
    width:calc(100% - 32px);
    height:56px;
    padding-top:1px;
    margin-left:16px;
    text-align:left;
    
    h1{
        font-size: 1.125rem;
        font-weight: 700;
        line-height: 1.75rem;
        letter-spacing: -0.015rem;
    }
`;

const Description = styled.div`
    width:calc(100% - 32px);
    margin-top:35px;
    margin-left:16px;
    color:black;
`;

const DescriptionSecond = styled.div`
    width:calc(100% - 32px);
    height:auto;
    margin-left:16px;
    text-align:left;
    margin-top:121px;
`;

const ButtonWrapper = styled.div`
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

const AccountOwner = styled.div`
    width:calc(100% - 32px);
    height:52px;
    margin-left:16px;
    margin-top:35px;
    text-align:left;
    align-items:center;
    

    input{
        all:unset;
        text-align:left;
        cursor:auto;
        display:block;
        margin-top:16px;
        
    }

    input::placeholder{
        font-size: 0.8125rem;
        font-weight: 300;
        line-height: 1.25rem;
        letter-spacing: -0.015rem;
        text-align: left;
    }

    h2{
        display:inline-block;
        color:#333333;
        font-size: 1rem;
        font-weight: 700;
        line-height: 1rem;
        letter-spacing: -0.015rem;
        text-align: left;
    }

    span{
        margin-left:3px;
        color:#F8B517;
        font-size: 0.875rem;
        font-weight: 700;
        line-height: 1rem;
        letter-spacing: -0.015rem;
        text-align: left;
    }
`;

const Bar = styled.div`
    width:calc(100% - 32px);
    height:1px;
    background:#F2F2F2;
    margin-left:16px;
    margin-top:31px;
`;

const AccountInfo =  styled.div`
    width:calc(100% - 32px);
    height:116px;
    margin-left:16px;
    margin-top:138px;
`;

const FunationAccount = styled.div`
    width:100%;
    height:44px;
    bottom:100px;
    margin-top:16px;
    display:flex;
    align-items:center;
    border: 1px solid #E5E5E5;
    border-radius:4px;
`;

const Account = styled.div`
    width:calc(100% - 39px);
    margin-left:12px;
    display:flex;
    align-items:center;

    h1{
        color:#333333;
        font-size: 0.875rem;
        font-weight: 400;
        line-height: 1rem;
        letter-spacing: -0.015rem;
    }
`;

const LastMessage = styled.div`
    width:100%;
    height:56px;
    text-align: center;
    display:flex;
    align-items:center;

    h1{
        margin:0 auto;
        color:#333333;
        font-size: 1rem;
        font-weight: 700;
        line-height: 1.75rem;
        letter-spacing: -0.015rem;
    }
`;

const Popup = ({modalIsOpen, closeModal, reqGiv, nick}) => {

    const [popFirst, setPopFirst] = useState(true);
    const [popSecond, setPopSecond] = useState(false);
    const [popThird, setPopThird] = useState(false);
    const [owner, setOwner] = useState("");

    const openPopSecond = () => {
        setPopFirst(false);
        setPopSecond(true);
    }

    const openPopThird = () => {
        setPopSecond(false);
        setPopThird(true);
    }

    const handleChange = e => {
        setOwner(e.target.value);
    }

    const resetModal = () => {
        closeModal();
        setPopFirst(true);
        setPopSecond(false);
        setPopThird(false);

    }


    return(
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={resetModal}
            contentLabel="charge Modal"
            className="charge-modal"
            style={customStyles}
            ariaHideApp={false}
            >
                <XWrapper>
                    <button onClick={resetModal}>
                        <img src={xVector} alt="나가기" />
                    </button>
                </XWrapper>
                <form action="payments/saveWalletRecords" method="POST">
                    <Csrftoken/>
                    {popFirst && 
                        <ContentWrapper>
                            <Title>
                                <h1>
                                    {nick}님 계정에<br/>
                                    {(reqGiv*110).toLocaleString()}원 충전하기
                                </h1>
                            </Title>
                            <Description>
                                <p>
                                    기부니가좋다 베타서비스 기간동안에는 <br/>
                                    <span>계좌이체 방식</span>으로 기브를 충전하실 수 있어요.
                                    <br/><br/>
                                    <span>이체 후 충전 완료까지 최대 30분</span>이 소요될 수 있으며,<br />
                                    사용자가 급격하게 몰릴 시 조금 더 걸릴 수 있으니<br />
                                    빨리 참여하고 싶어도 조금만 기다려주시길 바랍니다.<br />
                                    <br /><br />
                                    더 나은 서비스로 발전하는 퍼네이션이 되겠습니다!
                                </p>
                            </Description>
                            <DescriptionSecond>
                                <span>※ 충전 반영 시간 : 10 ~ 22시</span>
                                <p>충전 반영 시간 외 시간에는 입금은 가능하지만<br />
                                오전 10시에 일괄 반영됩니다.</p>
                            </DescriptionSecond>
                            <ButtonWrapper>
                                <button onClick={openPopSecond}>
                                    <h2>
                                        충전할래요!
                                    </h2>
                                </button>
                            </ButtonWrapper>
                        </ContentWrapper>
                    }

                    {popSecond &&
                        <ContentWrapper>
                            <Title>
                                <h1>
                                    {nick}님 계정에<br/>
                                    {(reqGiv*110).toLocaleString()}원 충전하기
                                </h1>
                            </Title>
                            <AccountOwner>
                                
                                    <h2>
                                        출금 계좌 예금주명 <span>*</span>
                                    </h2>
                                    <br/>
                                    <input type="text" value={owner} onChange={handleChange} placeholder="출금 계좌의 예금주명을 입력해주세요." />
                                
                            </AccountOwner>
                        
                            <Bar></Bar>
                            <Description>
                                <p style={{marginTop:"42px"}}>
                                    잘못 충전되는 것을 방지하기 위해<br/>
                                    출금 계좌의 예금주명을 입력 받고 있으나<br/>
                                    신청인의 <span>신청금액과 송금액이 일치하는지<br/>
                                    확인하는 용도</span>로만 활용되며, 베타서비스 기간이<br/>
                                    끝난 후에는 <span>즉시 파기</span>될 예정이오니<br/>
                                    조금 번거로우시더라도 양해부탁드립니다!
                                </p>
                            </Description>
                            <ButtonWrapper>
                                <button onClick={openPopThird}>
                                    <h2>
                                        입력했어요!
                                    </h2>
                                </button>
                            </ButtonWrapper>
                        </ContentWrapper>
                    
                    }
                    {popThird && 
                        <ContentWrapper>
                            <Title>
                                <h1>
                                    라서현(예금주)에게<br/>
                                    {(reqGiv*110).toLocaleString()}원 송금하기
                                </h1>
                            </Title>
                            <AccountInfo>
                                <LastMessage>
                                    <h1>
                                        송금 전 예금주명을<br/>
                                        반드시 확인해주세요!!
                                    </h1>
                                </LastMessage>
                                <FunationAccount>
                                    <Account>
                                        <h1>
                                            카카오뱅크 7979-30-66702
                                        </h1>
                                    </Account>
                                    <CopyToClipboard text="7979-30-66702">
                                        <div onClick={()=>alert("복사되었습니다.")} style={{all:"unset", cursor:"pointer", width:"39px", height:"44px", display:"flex", alignItems:"center", textAlign:"center", borderLeft:"1px solid #E5E5E5"}}>
                                            <img src={copy} alt="복사하기"
                                                style={{width:"29px", height:"32px", margin:"0 auto"}}
                                            />
                                        </div>
                                    </CopyToClipboard>
                                </FunationAccount>
                            </AccountInfo>
                            <ButtonWrapper>
                                    <input type="hidden" name="reqAccountOwner" value={owner} />
                                    <input type="hidden" name="reqGiv" value={reqGiv} />
                                <button type="submit" onClick={()=>alert("완료되었습니다")}>
                                    <h2>
                                        송금했어요!
                                    </h2>
                                </button>
                            </ButtonWrapper>
                        </ContentWrapper>
                    }
            </form>
        </Modal>
    );
};

export default Popup;
