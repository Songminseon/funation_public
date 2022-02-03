import React from "react";
import styled from "styled-components";

const AlarmForm = styled.div`
    width:calc(100% - 16px);
    height:87px;
    margin-left:16px;    
    position:relative;
 `;

const Date = styled.div`
    width:100%;
    height:16px;
    display:flex;
    align-items:center;
    padding-top:12px;
    
            h3{
                color:#9D9D9D;
                font-size: 0.6875rem;
                line-height: 1rem;
                letter-spacing: -0.015rem;
                text-align: left;
            }
 `;

const Title = styled.div`
    width:100%;
    height:16px;
    display:flex;
    align-items:center;
    margin-top:5px;
 
    h1{
        font-size: 0.9375rem;
        font-weight: 500;
        line-height: 1rem,;
        letter-spacing: -0.015rem;
        text-align: left;
    }
 `;

const Description = styled.div`
    width:100%;
    height:16px;
    display:flex;
    align-items:center;
    margin-top:6px;
    h2{
        color:#797979;
        font-size: 0.8125rem;
        line-height: 1rem;
        letter-spacing: -0.015rem;

    }
 `;

const Checked = styled.div`
    position:absolute;
    width:100%;
    height:100%;
    top:0;
    left:0;
    background:white;
    opacity:0.58; 
`;

const StopBar = styled.div`
    width:100%;
    height:1px;
    background:#F2F2F2;
`

const AlarmPost = ({ alarmInfo }) => {
    return (
        <>
            <AlarmForm>
                <Date >
                    <h3>
                        {alarmInfo.date_format}
                    </h3>
                </Date>
                <Title>
                    <h1>
                        {alarmInfo.alarm_title}
                    </h1>
                </Title>
                <Description>
                    <h2>

                        {alarmInfo.alarm_body}
                    </h2>
                </Description>
                {alarmInfo.readOrNot === 1 &&
                    <Checked>

                    </Checked>
                }

            </AlarmForm>
            <StopBar></StopBar>
        </>
    );
};

export default AlarmPost;