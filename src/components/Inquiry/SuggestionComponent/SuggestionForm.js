import React from "react";
import styled from "styled-components";


const WholeWrapper = styled.div`
    width:100%;
    height:68.286vh;
`;

const DescriptionWrapepr = styled.div`
    width:60.25%;
    height:26.285vh;
    margin-left:20%;
    margin-top:3.285vh;
    background: #FFFFFF;
    box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.1);
    border-radius: 20px;
    display:flex;
    align-items:center;
    text-align:center;
        
        p{
            margin:0 auto;
            font-size: 0.625rem;
            font-weight: 400;
            line-height: 1rem;
            letter-spacing: -0.015rem;
        }
`;

const TextWrapper = styled.div`
    width:60.25%;
    height:19.285vh;
    margin-left:20%;
    margin-top:3.285vh;
    background:white;
    box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.1);
    border-radius: 20px;
    text-align:left;

    textarea{
        margin:0 auto;
        all:unset;
        width:90%;
        height:100%;
        font-size:0.75rem;
        line-height:1rem;   
        padding: 10px 10px 10px 10px;
        
    }
`;

const LinkWrapper = styled.div`
    width:60.25%;
    height:5.285vh;
    margin-left:20%;
    margin-top:3.285vh;
    background: #FFFFFF;
    box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.1);
    border-radius: 20px;
    

    input{
        all:unset;
        width:100%;
        height:100%;
        font-size: 0.75rem;
        line-height: 1rem;
    }
`;

const SubmitWrapper = styled.div`
    width:60.25%;
    height:5.285vh;
    margin-left:20%;
    margin-top:3.285vh;
    background: #F8B517;
    box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.1);
    border-radius: 20px;

    button{
        all:unset;
        width:100%;
        height:100%;
        cursor:pointer;
    }

    button h1{
        font-size: 0.75rem;
        line-height: 1rem;
        letter-spacing: -0.015rem;
        font-weight:500;
    }
`;


const SuggestionForm = () => {
    return(
    
        <WholeWrapper>
    
            <DescriptionWrapepr>
                <p>퍼네이션에 문의할 내용을 아래에 적어주세요.</p>
            </DescriptionWrapepr>
                    <TextWrapper>
                        <textarea name="content" placeholder="문의할 내용, 회신받을 이메일이나 번호를 적어주시면 보다 원활한 문의가 진행됩니다."></textarea>
                    </TextWrapper>
                    <LinkWrapper>
                        <input type="text" name="link" placeholder="링크"/>
                    </LinkWrapper>
                    <SubmitWrapper>
                        <button type="submit" onClick={()=>alert("제출되었습니다")}><h1>제안하기</h1></button>
                    </SubmitWrapper>
         
        </WholeWrapper>
      
    );
};

export default SuggestionForm;