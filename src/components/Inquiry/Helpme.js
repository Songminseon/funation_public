import React from "react";
import styled from "styled-components";
import Header from "../Navigation/Header";
import { CopyToClipboard } from "react-copy-to-clipboard";
import copy from "../img/icon/copy.svg";

const WholeWrapper = styled.div`
    width:100%;
    height:100%;
    background:white;
`;

const HeadWrapper = styled.div`
    width:100%;
    height:140px;
    background:white;
`;

const Support = styled.div`
    width:70px;
    height:56px;
    margin-left:21px;
    margin-top:24px;
    display:flex;
    align-items:center;
    text-align:left;

    h2{
        color:#101010;
        font-size: 1.125rem;
        font-weight: 700;
        line-height: 1.75rem;
        letter-spacing: -0.015rem;
    }
`;

const Description = styled.div`
    width:calc(100% - 42px);
    height:44px;
    margin-left:21px;
    margin-top:16px;
    display:flex;
    align-items:center;
    text-align:left;

    p{
        color:#101010;  
        font-size: 0.875rem;
        font-weight: 300;
        line-height: 1.375rem;
        letter-spacing: -0.015rem;
    }
`;

const AccountWrapper = styled.div`
    width:100%;
    height:calc(100vh - 223px);
    background:#F2F2F2;
    position:relative;
`;

const MyAccount = styled.div`
    position:absolute;
    width:calc(100% - 32px);
    height:44px;
    margin-left:16px;
    top:24px;
    background:white;
    display:flex;
    align-items:center;

    div{
        width:calc(100% - 39px);
        height:44px;
    }

    h3{
        font-size: 0.875rem;
        font-weight: 400;
        line-height: 1rem;
        letter-spacing: -0.015rem;
        text-align: left;
    }

    img{
        width:39px;
        height:44px;
    }
`;

const Crying = styled.div`
    position:absolute;
    width:calc(100% - 80px);
    height:224px;
    top:90px;
    left:40px;
    text-align:center;

    p{
        color:#979797;
        margin:0 auto;
        font-size: 1.125rem;
        font-weight: 400;
        line-height: 2rem;
        letter-spacing: -0.015rem;    
    }
`;

const Helpme = () => {
    return (
        <WholeWrapper>
            <Header />
            <HeadWrapper>
                <Support>
                    <h2>
                        선한 마음 테스트
                    </h2>
                </Support>
                <Description>
                    <p>
                        기부니의 소중한 후원금은 기부니가좋다 서비스를 더 좋은 방향으로 나아갈 수 있는 힘이 됩니다.
                    </p>
                </Description>
            </HeadWrapper>
            <AccountWrapper>
                <MyAccount>
                    <div>
                        <h3 style={{marginLeft:"12px"}}>
                            카카오뱅크 3333176389785 (이종훈)
                        </h3>
                    </div>
                    <CopyToClipboard text="3333176389785">
                        <button onClick={() => alert("복사되었습니다.")} style={{ all: "unset", cursor: "pointer", width: "39px", height: "44px", display: "flex", alignItems: "center", textAlign: "center", borderLeft: "1px solid #E5E5E5" }}>
                            <img src={copy} alt="복사하기"
                                style={{ width: "29px", height: "32px", margin: "0 auto" }}
                            />
                        </button>
                    </CopyToClipboard>
                </MyAccount>
                <Crying>
                    <p>
                    ╭┈┈┈┈╯    ╰┈┈┈╮<br/>
   
   ╰┳┳╯    ╰┳┳╯<br/>
   
         열　    　　     할<br/>
   
       심  　    　　게<br/>
   
                       ╰┈┈╯<br/>
   
       히     ╭━━━━━╮　요<br/>
   
        o            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;┈┈┈┈&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;           o
                    </p>
                </Crying>
            </AccountWrapper>
        </WholeWrapper>
    );
};

export default Helpme; 