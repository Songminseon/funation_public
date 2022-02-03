import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Modal from "react-modal";
import { Link } from 'react-router-dom';
import '../../modal.css';
import HeaderLogo from '../img/logo/HeaderLogo.svg';
import hamburger from '../img/icon/hamburger.svg';
import alarmbell from '../img/icon/alarmbell.svg';
import MenuModal from "./SideMoal/MenuModal";
import AlertModal from "./SideMoal/AlertModal";
import AlarmCount from "./SideMoal/AlarmCount";


const HeadWrapper = styled.div`
    width:100%;
    background:#FFFFFF;
    height:58px;
    display:flex;
    align-items:center;
`;

const WholeSideWrapper = styled.div`
    width:calc(100% - 24px);
    margin-left:12px;
    height:32px;
    display:flex;
    justify-content:space-between;
    align-items:center;
`

const SideWrapper1 = styled.div`
    width:32px;
    height:32px;
    
    button {
        all:unset;
        width:100%;
        height:100%;
        cursor: pointer;
    }

    button img{
        width:100%;
    
    }
    
`;

const SideWrapper2 = styled.div`
    position:relative;
    width:32px;
    height:32px;
    display:flex;
    align-items:center;
    text-align:center;

    button {
        all:unset;
        width:100%;
        height:100%;
        cursor: pointer;
    }
    img{
        margin-top:2.5px;    
        width:21.5px;
        height:27px;
    }
`;


const TitleWrapper = styled.div`
    
    width:32px;
    height:32px;
    display:flex;
    text-align:center;
    align-items:center;

    img{
        width:100%;
    }
`;

const LogoLink = styled(Link)`
        all:unset;
        margin:0 auto;
        color:black;
        font-family: "GmarketSansBold";
        font-size: 1.3125rem;
        line-height: 1rem;
        letter-spacing: -0.24px;
        margin-top:0.5vh;
        cursor:pointer;
`

const Bar = styled.div`
    width:100%;
    height:1px;
    background: rgba(0, 0, 0, 0.05);

`

const customStyles = {
    overlay: {
        backgroundColor: 'rgba(52,45,37,0.64)',
        zIndex:10,
    }
}

const Header = () => {
    const [modalIsOpen, setIsOpen] = useState(false); 
    const [modalIsOpen2, setIsOpen2] = useState(false); 
    const [alarm, setAlarm] = useState([]);
    const [count, setCount] = useState(0);

    function openModal() {
        setIsOpen(true);
    }
    function closeModal() {
        setIsOpen(false);
    }
    function openModal2() {
        setIsOpen2(true);
    }
    function closeModal2() {
        setIsOpen2(false);
    }

    useEffect(()=>{
        fetch('/api/searchAlarm')
            .then((res)=>res.json())
            .then((data)=>{
                setAlarm(data.contents)
                setCount(data.count)
            })

        return () => {
            setAlarm([])
            setCount(0)
        }
    },[])

    return (
        <>
        <HeadWrapper>
            <WholeSideWrapper>
                <SideWrapper1>
                    <button onClick={openModal}><img src={hamburger} alt="메뉴모음" /></button>
                    <Modal
                        isOpen={modalIsOpen}
                        onRequestClose={closeModal}
                        className="custom-dialog-left"
                        contentLabel="Example Modal"
                        style={customStyles}
                        ariaHideApp={false}
                    >
                        <MenuModal
                            closeModal={closeModal}
                        />
                    </Modal>
                </SideWrapper1>
                <TitleWrapper>
                    <LogoLink to="/"><img src={HeaderLogo} alt="헤드로고"/></LogoLink>
                </TitleWrapper>
                
                <SideWrapper2>
                    <button onClick={openModal2}><img src={alarmbell} alt="알림벨" /></button>
                     <AlarmCount />
                      
                    <Modal
                        isOpen={modalIsOpen2}
                        onRequestClose={closeModal2}
                        className="custom-dialog-right"
                        contentLabel="Example Modal"
                        style={customStyles}
                        ariaHideApp={false}
                        >

                        <AlertModal
                            closeModal2={closeModal2}
                            alarm={alarm}
                            count={count}
                        />
                    </Modal>
                </SideWrapper2>
            </WholeSideWrapper>
        </HeadWrapper>
        <Bar>

        </Bar>
        </>
    );
};

export default Header;