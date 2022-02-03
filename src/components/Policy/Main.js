import React, {useState} from "react";
import styled from "styled-components";
import Privacy from "./Privacy";
import Terms from "./Terms";
import CsrfToken from "../Csrftoken";

const Wrapper = styled.div`
    width:100%;
    height:100vh;
    position:relative;
`;

const PolicyWrapper = styled.div`
    width:calc(100% - 32px);
    height:calc(100% - 32px);
    background:white;
    top:16px;
    left:16px;
    position:absolute;
    border-radius:4px;
`;


const Title = styled.div`
    width:calc(100% - 24px);
    height:56px;
    margin:24px 24px;

    h1{
        font-size: 1.125rem;
        font-weight: 700;
        line-height: 1.75rem;
        letter-spacing: -0.015rem;
        text-align: left;
    }
`;

const Agreements = styled.div`
    width:calc(100% - 48px);
    height:124px;
    margin-left:24px;
    margin-top:32px;
`;

const MyCheckBox = styled.input`
    width:18px;
    height:18px;
    background:white;
    border: 1px solid #C4C4C4;    
    margin-left:8px;
`;

const AgreeWrapper = styled.div`
    width:100%;
    height:18px;
    text-align:left;
    margin-top:8px;
    display:flex;
    align-items:center;
    color:#333333;

    h2{
        cursor:pointer;
        text-decoration:underline;
        font-size: 0.8125rem;
        font-weight: 400;
        line-height: 1rem;
        letter-spacing: -0.015rem;
    }

    h3{
        font-size: 0.75rem;
        font-weight: 400;
        line-height: 1rem;
        letter-spacing: -0.015rem; 
    }
`;

const AllAgree = styled.div`
    width:100%;
    height:18px;
    text-align:left;
    display:flex;
    align-items:center;

    div{
        height:16px;
        display:flex;
        align-items:center;
    }

    h1{
        color:#333333;
        font-size: 0.875rem;
        font-weight: 500;
        line-height: 1rem;
        letter-spacing: -0.015rem;

    }
`;
    


const GoFunation = styled.button`
    all:unset;
    cursor:pointer;
    position:fixed;
    width:368px;
    height:42px;
    background:#FFC02B;
    bottom:16px;
    display:flex;
    align-items:center;
    text-align:center;
    margin-left:16px;

    h1{
        margin:0 auto;
        font-size: 0.9375rem;
        font-weight: 700;
        line-height: 1.3125rem;
        letter-spacing: -0.015rem;
    }

    @media screen and (max-width:400px){
        width:calc(100% - 32px);
    }
`;

const GoFunationDiv = styled.div`
    all:unset;
    cursor:pointer;
    position:fixed;
    width:368px;
    height:42px;
    background:#FFC02B;
    bottom:16px;
    display:flex;
    align-items:center;
    text-align:center;
    margin-left:16px;

    h1{
        margin:0 auto;
        font-size: 0.9375rem;
        font-weight: 700;
        line-height: 1.3125rem;
        letter-spacing: -0.015rem;
    }

    @media screen and (max-width:400px){
        width:calc(100% - 32px);
    }
`;

const Main = () => {
    const [checkFirst, setCheckFirst] = useState(false);
    const [checkSecond, setCheckSecond] = useState(false);
    const [checkThird, setCheckThird] = useState(false);

    const [modalFirst, setModalFirst] = useState(false);
    const [modalSecond, setModalSecond] = useState(false);
   
    const closeModalFirst = () => {
        setModalFirst(false)
    }

    const openModalFirst = () => {
        setModalFirst(true)
    }

    const closeModalSecond = () => {
        setModalSecond(false)
    }

    const openModalSecond = () => {
        setModalSecond(true)
    }

 

    const handleAllCheck = (e) => {
        if(e.target.checked){
            setCheckFirst(true)
            setCheckSecond(true)
            setCheckThird(true)
        }
        else{
            setCheckFirst(false)
            setCheckSecond(false)
            setCheckThird(false)
        }
    }


    const onHandleChangeFirst = (e) => {
        if(e.target.checked){
            setCheckFirst(true)
        }
        else{
            setCheckFirst(false)
        }
    }

    const onHandleChangeSecond = (e) => {
        if(e.target.checked){
            setCheckSecond(true)
        }
        else{
            setCheckSecond(false)
        }
    }


    const onHandleChangeThird = (e) => {
        if(e.target.checked){
            setCheckThird(true)
        }
        else{
            setCheckThird(false)
        }
    }

    
        
    return(
        <Wrapper>
            <form action="/function/userCheck" method="POST">
                <CsrfToken />
                <Terms
                    modalIsOpen={modalFirst}
                    closeModal={closeModalFirst}
                />
                <Privacy
                    modalIsOpen={modalSecond}
                    closeModal={closeModalSecond}
                />
                        
                <PolicyWrapper>
                    <Title>
                        <h1>
                            이용약관을<br/>
                            동의해주세요!
                        </h1>
                    </Title>
                    <Agreements>
                        <AllAgree>
                            <MyCheckBox type="checkbox"
                            style={{marginLeft:"0px"}}
                            onChange={handleAllCheck}
                            />
                            <div>
                                <h1>
                                    전체동의
                                </h1>
                            </div>
                        </AllAgree>
                        <AgreeWrapper>
                            <MyCheckBox type="checkbox" name="agree1" checked={checkFirst} onChange={onHandleChangeFirst}/>
                            <h2 onClick={openModalFirst}>
                                서비스 이용약관
                            </h2>
                            <h3>
                                에 동의합니다. (필수)
                            </h3>
                        </AgreeWrapper>
                        <AgreeWrapper>
                            <MyCheckBox type="checkbox" name="agree2" checked={checkSecond} onChange={onHandleChangeSecond}/>
                            <h2 onClick={openModalSecond}>
                                개인정보취급방침
                            </h2>
                            <h3>
                                에 동의합니다. (필수)
                            </h3>
                        </AgreeWrapper>
                        <AgreeWrapper>
                            <MyCheckBox type="checkbox" name="agree3" style={{textDecoration:"none"}} checked={checkThird} onChange={onHandleChangeThird}/>
                            <h2 style={{textDecoration:"none", cursor:"default"}}>
                                마케팅 수신
                            </h2>
                            <h3>
                                에 동의합니다. (선택)
                            </h3>
                        </AgreeWrapper>
                    </Agreements>
                </PolicyWrapper>
                <GoFunationDiv style={{cursor:"Default"}}>
                    <h1>
                        기부니가좋다 GO
                    </h1>
                </GoFunationDiv>

                {checkFirst && checkSecond ?
                                <GoFunation type="submit">
                                <h1>
                                    기부니가좋다 GO
                                </h1>
                        </GoFunation>
                        :
                        <GoFunationDiv style={{cursor:"Default"}}>
                        <h1>
                            기부니가좋다 GO
                        </h1>
                    </GoFunationDiv>
    
                        }

            </form>
            
        </Wrapper>
    );
};

export default Main;