import React from "react";
import styled from "styled-components";
import AlarmPost from "../AlarmPost";
import bellimg from '../../img/icon/alarmbell.svg';
import closebutton from '../../img/icon/closebutton.svg';
import Csrftoken from "../../Csrftoken";
import AlarmCount from "./AlarmCount";

const IconWrapper = styled.div`
    width:100%;
    height:57px;
    display:flex;
    align-items:center;
`;

const IconXWrapper = styled.div`
    width:32px;
    height:32px;
    margin-left:12px;
    display:flex;
    align-items:center;
    text-align:center;
    opacity:0.52;

    button{
        all:unset;
        cursor:pointer;
        width:100%;
        height:100%;
    }
    
    button img{
        width:100%;
        height:100%;
    }
`;


const AlarmBellWrapper = styled.div`
    width:32px;
    height:32px;
    margin-left:180px;
    display:flex;
    align-items:center;
    text-align:center;
    opacity:0.52; 
    position:relative;
    
    button{
        all:unset;
        cursor:pointer;
        height:100%;
        width:100%;
    }
    img{
        margin-top:2.5px;    
        width:21.5px;
        height:27px;
    }
`;

const BodyWrapper = styled.div`
    width:100%;
    height:calc(100% - 112px);
    overflow:scroll;
`

const ReadAllWrapper = styled.div`
    position:fixed;
    width:268px;
    height:54px;
    bottom:0;
    
`
const ReadAll = styled.div`
    width:calc(100% - 32px);
    height:42px;
    margin-left:16px;
    border-radius:4px;
    background:#333333;
    text-align:center;
    display:flex;
    align-items:center;

    button{
        all:unset;
        width:100%;
        height:100%;
        cursor:pointer;
        z-index:15;
    }

    h2{
        color:#FFFFFF;
        margin:0 auto;
        font-size: 1rem;
        font-weight: 700;
        line-height: 1.3125rem;
        letter-spacing: -0.015rem;

    }
`;

const StopBar = styled.div`
    width:100%;
    height:1px;
    background:#F2F2F2;
`


const AlertModal = ({closeModal2, alarm}) => {


    return (
        <>
            <IconWrapper>
                <IconXWrapper>
                    <button onClick={closeModal2}>
                        <img src={closebutton} alt="닫기버튼" />
                    </button>
                </IconXWrapper>
                <AlarmBellWrapper>
                    <button onClick={closeModal2}>
                        <img src={bellimg} alt="알림벨" />
                    </button>
                    <AlarmCount />
                       
                </AlarmBellWrapper>
            </IconWrapper>
            <StopBar></StopBar>

            <BodyWrapper>
                    {!alarm ?
                        <h2 style={{marginTop:"50px"}}>아직 알림이 없어요!</h2>
                    :
                        <> 
                        {alarm.map((item, index)=>(
                            <AlarmPost 
                                key={index}
                                alarmInfo={item}
                            />
                        ))}
                        </>
                }
                
                <ReadAllWrapper>
                    <form action="/function/readAll" method="POST">
                    <Csrftoken />
                    <ReadAll>
                        
                        <button type="submit">
                            <h2>
                                알림 모두 확인
                            </h2>
                        </button>
                    </ReadAll>
                    </form>
                </ReadAllWrapper>
                
            </BodyWrapper>
        </>
    );
};

export default AlertModal;