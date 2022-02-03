import React, {useEffect, useState} from "react";
import Header from "../Navigation/Header";
import ReceiptForm from "./ReceiptForm";
import styled from "styled-components";
import CurrentDonationStatus from "./CurrentDonationStatus";
import Option from "./OptionAfterTransaction";
import axios from "axios"

const Background = styled.div`
    width:100%;
    height:100vh;
    background:white;
`;



const Success = (match) => {

    useEffect(()=>{
        const fetchData = async() =>{
            const result = await axios(`/api/searchRecordByOrderNumber/${match.match.params.order_number}`)
            setInfo(result.data.resource[0])
        }
        fetchData()

        return setInfo([])
    },[])

    const [info, setInfo] = useState([])
    

    return(
        <Background>
            <Header />
            <ReceiptForm
               info={info}
            />
            <CurrentDonationStatus
                status={info.thing_status}
            />
            <Option />
        </Background>
    );
};

export default Success;