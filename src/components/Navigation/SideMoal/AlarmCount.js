import React, {useState,useEffect} from "react";
import styled from "styled-components";
import axios from "axios";

const Wrapper = styled.div`
    position:absolute;
    top:0;
    left:0;
    width:12px;
    height:12px;
    display:flex;
    border-radius:12px;
    background:#EB1D29;
    align-items:center;
    text-align:center;

    h5{
        color:#FFFFFF;
        display:inline-block;
        margin:0 auto;
        font-family: "GmarketSansBold";
        font-size: 10px;
        -webkit-transform:scale(0.7);
        line-height: 0.4375rem;
        letter-spacing: -0.015rem;
    }
`;

const AlarmCount = () => {

    useEffect(()=>{
        const fetchData = async()=>{
            const result = await axios("/api/searchAlarmCount")
            setCount(result.data.count)
        }
        fetchData()
    },[])

    const[count, setCount] = useState(0);

    return(
        <Wrapper>
            <h5>
                {count}
            </h5>
        </Wrapper>
    );
};

export default AlarmCount;