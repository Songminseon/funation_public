import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import menuimg from '../../img/icon/hamburger.svg';
import closebutton from '../../img/icon/closebutton.svg';
import vectorRight from "../../img/icon/vectorRight.svg";

const Closebutton = styled.div`
    width:32px;
    height:32px;
    margin-top:13px;
    margin-right:13px;
    position: absolute;
    opacity:0.48;
    top:0;
    right:0;

    button {
        all:unset;
        width:100%;
        height:100%;
        cursor: pointer;
    }

    button img{
        width:100%;
    }
`

const MenulistWrapper = styled.div`   
    width:100%;
    

`
const Menulist = styled(Link)`
    width:calc(100% - 16px);
    
    height:48px;
    display:flex;
    align-items: center;
    justify-content:space-between;
    text-decoration:none;
    margin-left:16px;
    color:#101010;

        h1{
            
            font-size: 0.9375rem;
            line-height: 1rem;
            letter-spacing: -0.015rem;
            text-align: left;
        }
`

const SubMenuWrapper = styled.div`
    position:fixed;
    width:267px;
    height:152px;
    bottom:12px;

    @media screen and (max-width:400px){
        width:66.75%;
    }
`;

const SubMenu = styled.div`
    width:calc(100% - 16px);
    height:16px;
    margin-left:16px;
    margin-top:12px;
    display:flex;
    align-items:center;


    h2{
        color:#101010;
        font-size: 0.75rem;
        line-height: 1rem;
        letter-spacing: -0.015rem;
        text-align:left;
    }
`;

const Line = styled.div`
    height: 1px;
    width: 100%;
    background:#F2F2F2;
`

const VectorWrapper = styled.div`
    width:6px;
    height:12px;
    display:flex;
    align-items:center;
    margin-right:17px;

    img{
        width:100%;
        height:100%;
    }
`;

const MyWrapper = styled.div`
    width:100%;
`
const MenuLinkTwo = styled(Link)`
    text-decoration:none;
    width:100%;
`;

const Menuimg = styled.div`
    width:32px;
    height:32px;
    margin-top:13px;
    margin-left:12px;
    position: absolute;
    top:0;
    left:0;
    opacity:0.48;
    button{
        all:unset;
        width:100%;
        height:100%;
        cursor:pointer;
    }
    
    img {
        width:100%;
    }
`

const ShowGivIntroWrapper = styled.div`
    width:100%;
    height:40px;
    background:#F2F2F2;
    display:flex;
    align-items:center;
`;

const GoIntro = styled(Link)`
    all:unset;
    cursor: pointer;
    width:calc(100% - 16px);
    height:16px;
    margin-left:16px;
    display:flex;
    align-items:center;

    h1{
        font-size: 0.75rem;
        font-weight: 400;
        line-height: 1rem;
        letter-spacing: -0.015rem;
    }
`;

const menuOption = [
    {
        "option":"?????? ?????? ??????",
        "link":"/inquiry/FAQ"
    },
    {
        "option":"????????????",
        "link":"/inquiry/suggestion1",
    },
    {
        "option":"?????????????????????",
        "link":"/inquiry/terms",
    },
    {
        "option":"????????????????????????",
        "link":"/inquiry/privacy"
    },
    {
        "option":"?????? ?????? ?????????",
        "link":"/inquiry/donation"
    }
]

const MenuModal = ({closeModal}) => {

    return (
        <>
            <MyWrapper>
                <Menuimg>
                    <button onClick={closeModal}>
                        <img src={menuimg} alt="???????????????" />
                    </button>
                </Menuimg>
                <Closebutton>
                    <button onClick={closeModal}>
                        <img src={closebutton} alt="????????????" />
                    </button>
                </Closebutton>
                <Line style={{ marginTop: "57px" }}></Line>
                <MenulistWrapper>
                    <Menulist to="/giveAndTake">
                            <h1>
                                ??????????????????
                            </h1>
                            <VectorWrapper>
                                <img src={vectorRight} alt="??????" />
                            </VectorWrapper>
                    </Menulist>
                    <ShowGivIntroWrapper>
                        <GoIntro to="/inquiry/intro">
                                <button style={{all:"unset", cursor:"pointer"}}>
                                    <h1>
                                        ??? ?????????????????? ?????? ????????????
                                    </h1>
                                </button>
                        </GoIntro>
                    </ShowGivIntroWrapper>
                    <Menulist to="/gabang">
                        
                            <h1>
                                ????????????????????????
                            </h1>
                                <VectorWrapper>
                                <img src={vectorRight}  alt="??????" />
                            </VectorWrapper>
                    </Menulist>
                    <Line></Line>
                    <Menulist to="/mypage/myDonationZzim">
                            <h1>
                                ????????? ???????????? (??? ??????)
                            </h1>
                            <VectorWrapper>
                                <img src={vectorRight} alt="??????" />
                            </VectorWrapper>

                    </Menulist>
                    <Line></Line>
                    <Menulist to="/mypage/myDonationDid">
                            <h1>
                                ?????? ??? ?????? (?????? ??????)
                                </h1>
                                <VectorWrapper>
                                <img src={vectorRight} alt="??????" />
                            </VectorWrapper>
            
                    </Menulist>
                    <Line></Line>
                    <Menulist to="/wallet">
                            <div>
                                <h1>

                                    ??? ??????
                                </h1>
                            </div>
                            <VectorWrapper>
                                <img src={vectorRight} alt="??????" />
                            </VectorWrapper>
                    </Menulist>
                    <Line></Line>
                </MenulistWrapper>
                <SubMenuWrapper>
                       {menuOption.map((item, index)=>(
                           <SubMenu key={index}>
                               <MenuLinkTwo to={item.link}>
                                   <h2>
                                       {item.option}
                                   </h2>
                               </MenuLinkTwo>
                           </SubMenu>
                       ))}
                </SubMenuWrapper>

            </MyWrapper>
        </>
    );
};

export default MenuModal;