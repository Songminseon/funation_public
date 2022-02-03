import React, { useEffect, useState } from "react";
import styled from "styled-components";
import xVector from "../img/icon/xVector.svg";
import axios from "axios";
import CsrfToken from "../Csrftoken";

const WholeWrapper = styled.div`
    width:100%;
    height:100%;
    color:#101010;
    position:relative;
    
    h2{
        text-align:left;
        font-size: 1.125rem;
        font-weight: 700;
        line-height: 1.75rem;
        letter-spacing: -0.015rem;
    }

    h3{        
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
        margin-left:4px;
    }

    p{
        color:#333333;
        font-size: 0.875rem;
        font-weight: 300;
        line-height: 1.375rem;
        letter-spacing: -0.015rem;
        text-align: left;
    }
`;

const TitleWrapper = styled.div`
    width:66px;
    height:56px;
    margin-left:16px;
    position:absolute;
    top:16px;
    display:flex;
    align-items:center;
`;

const NickLimit = styled.div`
    width:calc(100% - 32px);
    height:44px;
    margin-left:16px;
    position:absolute;
    top:100px;
    display:flex;
    align-items:center;
`;

const XWrapper = styled.button`
    all:unset;
    cursor: pointer;
    width:16px;
    height:16px;
    position:absolute;
    right:20px;
    top:20px;
    display:flex;
    align-items:center;
    text-align:center;

    img{
        width:100%;
        height:100%;
        margin:0 auto;
    }
`;

const Nick = styled.div`
    width:calc(100% - 32px);
    height:100px;
    margin-left:16px;
    position:absolute;
    top:151px;
    display:flex;
    align-items:center;
    flex-wrap:wrap;

    input{
        all:unset;
        cursor:text;
        width:100%;
        text-align:left;
    }

    input::placeholder{
        color:#595959;
        font-size: 0.8125rem;
        font-weight: 300;
        line-height: 1.25rem;
        letter-spacing: -0.015rem;
        text-align: left;
    }

    div{
        width:100%;
        height:1px;
        background:#F2F2F2;
    }
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



const ChangeNickModal = ({ closeModal }) => {

    const [name, setName] = useState("");
    const [newNick, setNewNick] = useState("");


    const handleChange = e => {
        if(e.target.value.length<=6){
            setNewNick(e.target.value)
        }
    }


    useEffect(() => {
        const fetchData = async () => {
            const result = await axios('/api/getUserName');
            setName(result.data.name)
        }

        fetchData()

        return () => {
            setName("")
        }
    }, [])

    return (
        <>

                <WholeWrapper>
                    <TitleWrapper>
                        <h2>
                            닉네임<br />
                            수정하기
                        </h2>
                    </TitleWrapper>
                    <NickLimit>
                        <p>
                            변경가능한 닉네임 글자수는 최대 6자입니다. <br/>
                            부적절한 닉네임은 제재 대상이 됩니다.
                        </p>
                    </NickLimit>
                    <XWrapper onClick={closeModal}>
                        <img src={xVector} alt="나가기" />
                    </XWrapper>
                    <Nick>
                        <h3>
                            닉네임
                        </h3>
                        <span>
                            *
                        </span>
                        <input type="text" placeholder={name} onChange={handleChange} maxLength="6" />

                        {!newNick.length > 0
                            ?
                            <div></div>
                            :
                            <div style={{ background: "#F8B517" }}></div>
                        }
                    </Nick>
                </WholeWrapper>
                <form action="/function/changeNick" method="POST">
                    <ButtonWrapper>
                        <CsrfToken />
                        <input type="hidden" value={newNick} name="newNick"/>
                        <button type="submit" onClick={()=>alert("닉네임이 변경되었습니다.")}>
                            <h2>수정하기</h2>
                        </button>
                    </ButtonWrapper>
                </form>
        </>
    );
};

export default ChangeNickModal;