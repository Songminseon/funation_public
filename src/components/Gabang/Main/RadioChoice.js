import React,{useState} from "react";
import styled from "styled-components";

const Choice = styled.div`
    width:100px;
    height:20px;
    display:flex;
    align-items:center;
    margin-bottom:16px;

    /* input{
        margin:0;
        width:18px;
        height:18px;
    } */

    input[type="radio"],
    input[type="radio"]:checked {
        all:unset;
        border-radius:100%;
    }

    input[type="radio"]{
        background-color:white;
        width:18px;
        height:18px;
        border: 1px solid #D9D9D9;
    }

    input[type="radio"]:checked {
        width:18px;
        height:18px;
        border: 1px solid #F3A100;
    }

    input[type="radio"]:checked:before{
        content:'';
        display:block;
        width:10px;
        height:10px;
        margin-left:3px;
        margin-top:3px;
        border-radius:100%;
        background-color:#F3A100;
        border: 1px solid #D9D9D9;
    }

    label{
        margin-left:8px;
        width:70px;
        height:20px;
        font-size: 0.875rem;
        line-height: 1.25rem;
        letter-spacing: -0.015rem;
        text-align: left;
    }
`;

const ChoiceOther = styled.div`
    width:100%;
    height:20px;
    display:flex;
    align-items:center;
    flex-wrap:wrap;


    input[type="radio"],
    input[type="radio"]:checked {
        all:unset;
        border-radius:100%;
    }

    input[type="radio"]{
        background-color:white;
        width:18px;
        height:18px;
        border: 1px solid #D9D9D9;
    }

    input[type="radio"]:checked {
        width:18px;
        height:18px;
        border: 1px solid #F3A100;
    }

    input[type="radio"]:checked:before{
        content:'';
        display:block;
        width:10px;
        height:10px;
        margin-left:3px;
        margin-top:3px;
        border-radius:100%;
        background-color:#F3A100;
        border: 1px solid #D9D9D9;
    }


    label{
        text-align:left;
        margin-left:8px;
        width:70px;
        height:20px;
        font-size: 0.875rem;
        line-height: 1.25rem;
        letter-spacing: -0.015rem;
       
    }

    input[type="text"]{
        all:unset;
        text-align:left;
        cursor:auto;
        display:block;
        margin-left:-30px;
        width:calc(100% - 100px);
        height:20px;
    }

    div{
        width:100%;
        height:1px;
        background:#F2F2F2;
        margin-top:8px;
    }
`;

const RadioChoice = () => {

    const [checkOther, setCheckOther] = useState(false);
 
    const onHandleChange = e => {
        if(e.target.value==="ans6"){
            setCheckOther(true)
        }
        else{
            setCheckOther(false)
        }   
    }

    return(
        <>
            <Choice>
                <input type="radio" name="answer" value="다니고 있음" onChange={onHandleChange}/>
                <label for="ans1">다니고 있음</label>
            </Choice>
            <Choice style={{marginLeft:"calc(100% - 238px)"}}>
                <input type="radio" name="answer" value="다녔음" onChange={onHandleChange}/>
                <label for="ans2">다녔음</label>
            </Choice>
            <Choice>
                <input type="radio" name="answer" id="ans3" value="다니고 싶음" onChange={onHandleChange}/>
                <label for="ans3">다니고 싶음</label>
            </Choice>
            <Choice style={{marginLeft:"calc(100% - 238px)"}}>
                <input type="radio" name="answer" id="ans4" value="다닐 것 같음" onChange={onHandleChange}/>
                <label for="ans4">다닐 것 같음</label>
            </Choice>
            <Choice>
                <input type="radio" name="answer" id="ans5" value="관계 없음" onChange={onHandleChange}/>
                <label for="ans5">관계 없음</label>
            </Choice>
            <ChoiceOther>
                <input type="radio" name="answer" id="ans6" value="ans6" checked={checkOther} onChange={onHandleChange}/>
                <label for="ans6">기타 : </label>
                
                {checkOther ?
                <>
                <input type="text" name="otherOption"/>

                <div style={{background:"#F8B517"}}>

                </div>
                </>
                :
                <div>

                </div>
                }
                
            </ChoiceOther>               
       </>
    );
};

export default RadioChoice;