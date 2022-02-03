import React, {useEffect, useState} from "react";
import styled from "styled-components";
import axios from "axios";


const Wrapper = styled.div`
    width:100%;
    height:150px;
    background:white;
    border: 1px solid;
    margin-top:10px;
    text-align:left;
`;
const SubmitList = () => {

    // const [select, setSelect] = useState("wait")
    const [submitData, setSubmitData] = useState([])
    
    useEffect(()=>{
        const fetchData = async() => {
            const result = await axios('/function/getSubmitList')
            setSubmitData(result.data.info)
        }
        fetchData()
    }, [])

    

    return(
        <>
            
            {submitData.map((item, index)=>(
                <Wrapper key={index}>
                    <form action="/function/acceptSubmit" method="POST">
                            닉네임 : {item.nick} (신청번호 :{item.submit_index})<br/> 
                            신청날짜 : {item.submit_date}<br/>
                            신청 기브 : {item.submit_giv}<br/>
                            실제입금: {item.submit_giv*110}<br/>
                            예금주명 : {item.submit_accountOwner}<br/>
                            <input type="hidden" name="reqUser" value={item.snsId} />
                            <input type="hidden" name="reqIndex" value={item.submit_index} />
                            <input type="hidden" name="reqWallet" value={item.submit_giv} />
                            <button type="submit" onClick={()=>alert("확인")} name="type" value="1">
                                승인하기    
                            </button> 

                            <button type="submit" onClick={()=>alert("기각")} name="type" value="2" style={{marginLeft:"100px"}}>
                                기 →↗↘→ 각
                            </button>
                    </form>
                </Wrapper>
            ))}
        </>
    );
};

export default SubmitList;