import React from "react";
import styled from "styled-components";
import StatusBar from './MyStatus/StatusBar';
import AllDonation from "./MyStatus/HomeInformation/AllDonation";
import Header from "./Navigation/Header";
import Footer from "./MyStatus/HomeInformation/Footer";
import GiveAndTake from "./Navigation/GiveAndTake";
import GabangProject from "./Navigation/GabangProject";
import Charity from "./Navigation/Charity";

const IndexWrapper = styled.div`
    width:400px;
    display:flex;
    flex-wrap:wrap;
    background:#F2F2F2;

    @media screen and (max-width:400px){
        width:100vw;
    }
`;

const GuideWrapper = styled.div`
    width:100%;
    height:521px;
    font-size:0.75rem;
    line-height:1.5rem;
    background:white;
`;


const Home = () => {
 
    return (
        <>
        <IndexWrapper>
    
            <Header
            />
            <StatusBar />
            <AllDonation/>
            <GuideWrapper>
                <GiveAndTake />
                <Charity />
                <GabangProject />
            </GuideWrapper>
            <Footer />
        </IndexWrapper>  
        </>
    );

};


export default Home;