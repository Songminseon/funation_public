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
                        <img src={xVector} alt="?????????" />
                    </button>
                </XWrapper>
                <form action="payments/saveWalletRecords" method="POST">
                    <Csrftoken/>
                    {popFirst && 
                        <ContentWrapper>
                            <Title>
                                <h1>
                                    {nick}??? ?????????<br/>
                                    {(reqGiv*110).toLocaleString()}??? ????????????
                                </h1>
                            </Title>
                            <Description>
                                <p>
                                    ?????????????????? ??????????????? ?????????????????? <br/>
                                    <span>???????????? ??????</span>?????? ????????? ???????????? ??? ?????????.
                                    <br/><br/>
                                    <span>?????? ??? ?????? ???????????? ?????? 30???</span>??? ????????? ??? ?????????,<br />
                                    ???????????? ???????????? ?????? ??? ?????? ??? ?????? ??? ?????????<br />
                                    ?????? ???????????? ????????? ????????? ?????????????????? ????????????.<br />
                                    <br /><br />
                                    ??? ?????? ???????????? ???????????? ??????????????? ???????????????!
                                </p>
                            </Description>
                            <DescriptionSecond>
                                <span>??? ?????? ?????? ?????? : 10 ~ 22???</span>
                                <p>?????? ?????? ?????? ??? ???????????? ????????? ???????????????<br />
                                ?????? 10?????? ?????? ???????????????.</p>
                            </DescriptionSecond>
                            <ButtonWrapper>
                                <button onClick={openPopSecond}>
                                    <h2>
                                        ???????????????!
                                    </h2>
                                </button>
                            </ButtonWrapper>
                        </ContentWrapper>
                    }

                    {popSecond &&
                        <ContentWrapper>
                            <Title>
                                <h1>
                                    {nick}??? ?????????<br/>
                                    {(reqGiv*110).toLocaleString()}??? ????????????
                                </h1>
                            </Title>
                            <AccountOwner>
                                
                                    <h2>
                                        ?????? ?????? ???????????? <span>*</span>
                                    </h2>
                                    <br/>
                                    <input type="text" value={owner} onChange={handleChange} placeholder="?????? ????????? ??????????????? ??????????????????." />
                                
                            </AccountOwner>
                        
                            <Bar></Bar>
                            <Description>
                                <p style={{marginTop:"42px"}}>
                                    ?????? ???????????? ?????? ???????????? ??????<br/>
                                    ?????? ????????? ??????????????? ?????? ?????? ?????????<br/>
                                    ???????????? <span>??????????????? ???????????? ???????????????<br/>
                                    ???????????? ??????</span>?????? ????????????, ??????????????? ?????????<br/>
                                    ?????? ????????? <span>?????? ??????</span>??? ???????????????<br/>
                                    ?????? ???????????????????????? ????????????????????????!
                                </p>
                            </Description>
                            <ButtonWrapper>
                                <button onClick={openPopThird}>
                                    <h2>
                                        ???????????????!
                                    </h2>
                                </button>
                            </ButtonWrapper>
                        </ContentWrapper>
                    
                    }
                    {popThird && 
                        <ContentWrapper>
                            <Title>
                                <h1>
                                    ?????????(?????????)??????<br/>
                                    {(reqGiv*110).toLocaleString()}??? ????????????
                                </h1>
                            </Title>
                            <AccountInfo>
                                <LastMessage>
                                    <h1>
                                        ?????? ??? ???????????????<br/>
                                        ????????? ??????????????????!!
                                    </h1>
                                </LastMessage>
                                <FunationAccount>
                                    <Account>
                                        <h1>
                                            ??????????????? 7979-30-66702
                                        </h1>
                                    </Account>
                                    <CopyToClipboard text="7979-30-66702">
                                        <div onClick={()=>alert("?????????????????????.")} style={{all:"unset", cursor:"pointer", width:"39px", height:"44px", display:"flex", alignItems:"center", textAlign:"center", borderLeft:"1px solid #E5E5E5"}}>
                                            <img src={copy} alt="????????????"
                                                style={{width:"29px", height:"32px", margin:"0 auto"}}
                                            />
                                        </div>
                                    </CopyToClipboard>
                                </FunationAccount>
                            </AccountInfo>
                            <ButtonWrapper>
                                    <input type="hidden" name="reqAccountOwner" value={owner} />
                                    <input type="hidden" name="reqGiv" value={reqGiv} />
                                <button type="submit" onClick={()=>alert("?????????????????????")}>
                                    <h2>
                                        ???????????????!
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
