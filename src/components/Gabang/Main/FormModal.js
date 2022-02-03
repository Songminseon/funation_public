import React, {useState} from "react";
import styled from "styled-components";
import Modal from "react-modal";
import "../../../modal.css";
import xVector from "../../img/icon/xVector.svg"
import RadioChoice from "./RadioChoice";

const customStyles = {
    overlay: {
        backgroundColor: 'rgba(52,45,37,0.64)',
        zIndex:5
    }
}

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

const ContentWrapper = styled.div`
    width:100%;
    height:calc(100% - 233px);
    position:absolute;
    top:191px;
    overflow:scroll;
`;

const WriteUniv = styled.div`
    width:calc(100% - 32px);
    height:16px;
    margin-left:16px;
    text-align:left;
    align-items:center;

    input{
        all:unset;
        text-align:left;
        cursor:auto;
        display:block;
        margin-top:21px;
        
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
        color:#F8B517;
        font-size: 0.875rem;
        font-weight: 700;
        line-height: 1rem;
        letter-spacing: -0.015rem;
        text-align: left;
    }

    div{
        width:100%;
        height:1px;
        background:#F2F2F2;
        margin-top:8px;
    }
`;

const CheckRelationTitle = styled.div`
    width:calc(100% - 32px);
    height:16px;
    margin-left:16px;
    display:flex;
    align-items:center;
    top:126px;
    position:absolute;

    h2{
        color:#333333;
        font-size: 1rem;
        font-weight: 700;
        line-height: 1rem;
        letter-spacing: -0.015rem;
    }
    
`;

const CheckWrapper = styled.div`
    width:calc(100% - 32px);
    height:95px;
    margin-left:16px;
    top:174px;
    position:absolute;
    display:flex;
    flex-wrap:wrap;
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
 
const FormModal = ({modalIsOpen, closeModal}) => {

    const [univName, setUnivName] = useState("")


    const handleChange = e => {
        setUnivName(e.target.value);
    }

    return(
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="apply Modal"
            className="charge-modal"
            style={customStyles}
            ariaHideApp={false}
        >
            <WholeWrapper>
                <FormTitle>
                    <h1>
                        기부니의<br/>
                        학교가 없다면
                    </h1>
                </FormTitle>
                <XWrapper>
                    <button onClick={closeModal}>
                        <img src={xVector} alt="나가기" />
                    </button>
                </XWrapper>
                <Description>
                    <p>
                        정식 앱 출시 전까지 10명의 신청자가 모이면 오픈합니다.<br/>
                        (신청자가 모이지 않을 시 오픈되지 않을 수 있습니다.)
                    </p>
                </Description>
                <ContentWrapper>
                    <form action="/function/userWantGabang" method="POST">
                        <WriteUniv>
                            <h2>
                                학교 이름 <span>*</span>
                            </h2>
                            <br/>
                            <input type="text" value={univName} onChange={handleChange} placeholder="정식 학교 명칭을 기재해주세요!"/>
                            {univName.length>0
                                    ?
                                <div style={{background:"#F8B517"}}>
                                
                                </div>
                                    :
                                <div>
                                
                                </div>
                            }
                        </WriteUniv>
                        <CheckRelationTitle>
                            <h2>
                                학교와의 관계
                            </h2>
                        </CheckRelationTitle>
                        <CheckWrapper>
                            <RadioChoice/>
                        </CheckWrapper>
                        <ApplyButton>
                            {univName.length>0 ?
                                <button type="submit" onClick={()=>alert("제출되었습니다~")}>
                                    <input type="hidden" name="reqUniv" value={univName} />

                                    <h2>
                                        학교 신청
                                    </h2>
                                </button>
                            :
                                <h2>
                                    학교 신청
                                </h2>
                            }
                        </ApplyButton>
                    </form>
                </ContentWrapper>
            </WholeWrapper>
        </Modal>
    );
};

export default FormModal;