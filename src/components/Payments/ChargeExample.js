import React from 'react';
import Header from "../Navigation/Header";
import styled from "styled-components"

const Example = styled.div`
    width:100%;
    height:91vh;
    display:flex;
    text-align:center;
    align-items:center;
`

const ChargeExample = () => {
    return(
        <>
            <Header />
            <Example>
                결제성공
            </Example>            
        </>
    );
};

export default ChargeExample;