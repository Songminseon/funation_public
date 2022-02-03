import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    width:100%;
    height:calc(100% - 475px);

`

const StepWrapper = styled.div`
    width:calc(100% - 36px);
    height:18px;
    margin:24px 18px;
    display:flex;
    
`;


const Step = styled.div`
    width:20%;
    height:18px;
    display:flex;
    align-items:center;
    text-align:center;

    h3{
        color:#979797;
        margin:0 auto;
        font-size: 0.75rem;
        line-height: 1.125rem;
        letter-spacing: -0.015rem;
    }
`;



const StatusBar = styled.div`
    position:relative;
    width:calc(100% - 36px);
    height:2px;
    margin-left:18px;
    background:#D9D9D9;
`;

const Current = styled.div`
    position:absolute;
    top:0;
    bottom:0;
    width:20%;
    height:100%;
    background:#FFC02B;
`;



const Circle = styled.div`
    position:absolute;
    top:-2px;
    left:calc(20% - 3px);
    width:6px;
    height:6px;
    border-radius:12px;
    background:#D9D9D9;
`;

const CurrentDonationStatus = ({ status }) => {
    return (
        <Wrapper>
            <StepWrapper>
                <Step style={{ marginLeft: "10%" }}>
                    <h3 style={{color:"#101010"}}>
                        모금 중
                    </h3>
                </Step>
                {status!==2?
                <>
                    <Step>
                        <h3>
                            모금 완료
                        </h3>
                    </Step>
                    <Step>
                        <h3>
                            추첨
                        </h3>
                    </Step>
                </>
                    :
                <>
                    <Step>
                        <h3 style={{color:"#101010"}}>
                            모금 완료
                        </h3>
                    </Step>
                    <Step>
                        <h3 style={{color:"#101010"}}>
                            추첨
                        </h3>
                    </Step>  
       
                </>
                }
                <Step>
                    <h3>
                        기부금 전달
                    </h3>
                </Step>

            </StepWrapper>
            <StatusBar>

                <Circle style={{ background: "#FFC02B" }}>

                </Circle>
                {status === 2 || status === 4 ?
                    <>
                        <Circle style={{ left: "calc(40% - 3px)", background: "#FFC02B" }}>

                        </Circle>
                        <Circle style={{ left: "calc(60% - 3px)", background: "#FFC02B" }}>

                        </Circle>
                    </>

                    :
                    <>
                        <Circle style={{ left: "calc(40% - 3px)" }}>

                        </Circle>
                        <Circle style={{ left: "calc(60% - 3px)" }}>

                        </Circle>
                    </>
                }

                <Circle style={{ left: "calc(80% - 3px)" }}>

                </Circle>
                {status ===2 || status === 4?
                                <Current style={{ width: "60%" }}>

                                </Current>
                    :
                    <Current style={{ width: "20%" }}>

                    </Current>
                
                }
            </StatusBar>
        </Wrapper>
    );
};

export default CurrentDonationStatus