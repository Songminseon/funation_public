import React from "react";
import styled from "styled-components";
import funationText from "../../img/logo/funationText.png"

const FooterWrapper = styled.div`
    width:100%;
    height:314px;
    background:#F2F2F2;
`

const LogoWrapper = styled.div`
    width:calc(100% - 32px);
    height:24px;
    display:flex;
    align-items:center;
    margin-left:16px;
    padding-top:22px;
    justify-content:space-between;

    
    img{
        width:110px;
        height:24px;
    }

    div{
        width:88px;
        height:18px;
        display:flex;
        align-items:center;
        margin-top:4px;
    }

    h4{
        color:#333333;
        opacity:0.42;
        font-size: 0.75rem;
        line-height: 1.125rem;
        letter-spacing: 0px;
    }
`;

const FooterTitle = styled.div`
    width:calc(100% - 16px);
    height:42px;
    display:flex;
    align-items:center;
    margin:17px 16px;
    text-align:left;
        
        h1{
            font-size: 0.875rem;
            font-weight: 500;
            line-height: 1.3125rem;
        }
`;

const Description = styled.div`
    width:calc(100 - 32px);
    height:142px;
    margin-left:16px;
    text-align: left;
    
    p{
        color:#333333;
        font-size: 0.75rem;
        line-height: 1.125rem;
    }
`;

const Dummy = styled.div`
    width:153px;
    height:18px;
    display:flex;
    align-items:center;
    margin-left:16px;
    margin-bottom:29px;

    h3{
        color:#333333;
        font-size: 0.625rem;
        line-height: 1rem;
        letter-spacing: 0px;
        text-align: left;
    }
`;

const Footer = () => {
    return(
        <FooterWrapper>
            <LogoWrapper>
                <img src={funationText} alt="퍼네이션로고"/>
                <div>
                    <h4>
                        베타 서비스 ver.2
                    </h4>
                </div>
            </LogoWrapper>
            <FooterTitle>
                <h1>
                    기부를 쉽고 재미있게 만드는,<br/>
                    퍼네이션(fun+donation)
                </h1>
            </FooterTitle>
            <Description>
                <p>
                    대표 : 라서현  |  사업자등록번호 : 740-05-01908<br/>
	    	    통신판매번호:2021-서울노원-0600<br/>
                    (01849) 서울시특별시 노원구 동일로174길 27 <br/>
                    서울창업디딤터 1층 STATION:D<br/><br/>

                    대표 전화 : 070-8064-0402<br/>
                    탄력근무제로 통화가 어려울 수 있으니 가급적 이메일로 문의해주세요!
                </p>
            </Description>
            <Dummy>
                <h3>
                   © FUNATION Co., Ltd. 2020-2021.
                </h3>
            </Dummy>
        </FooterWrapper>
    );
};

export default Footer;
