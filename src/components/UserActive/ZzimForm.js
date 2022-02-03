import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import myZzim from "../img/icon/myZzim.svg";

const ImgWrapper = styled.div`
    width:178px;
    height:178px;
    margin-top:12px;
    display:flex;
    align-items:center;
    border-radius:4px;
    overflow:hidden;
    position:relative;
    

    @media screen and (max-width:400px){
        width:calc(50vw - 22px);
        height:calc(50vw - 22px);
    }

    img{
        width:100%;
        height:100%;
    }
`

const MyZzim = styled.div`
    position:absolute;
    width:24px;
    height:24px;
    bottom:7px;
    right:6px;

`;

const Unable = styled.div`
    width:100%;
    height:100%;
    background: rgba(52, 45, 37, 0.64);
    border-radius:3px;
    position:absolute;
    display:flex;
    align-items:center;

    h2{
        color:white;
        display:inline-block;
        margin:0 auto;
        font-size: 1rem;
        font-weight: 700;
        line-height: 1rem;
        letter-spacing: -0.015rem;   
    }
`;

const NoStyleLink = styled(Link)`
    all:unset;
    cursor:pointer;
    height:100%;
    
`;
const ZzimForm = ({item}) => {
    return(
        <NoStyleLink to={{
            pathname: `/giveAndTake/${item.thing_index}`,
            state: {
                item: item
            }}}>
          
            <ImgWrapper>
                <img src={"/myAssets" + item.thing_img_name} alt="찜상품"/>
                <MyZzim>
                    <img src={myZzim} alt="찜" />
                </MyZzim>
               {item.thing_status === 2 &&
                <Unable>
                    <h2>
                        한 발 늦은
                    </h2>
                </Unable>
               }
                
            </ImgWrapper>

            
        </NoStyleLink>
    );
};

export default ZzimForm;