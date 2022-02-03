import React, {useEffect,useState} from "react";
import Header from "../Navigation/Header";
import ReceiptForm from "./ReceiptForm";
import styled from "styled-components";
import OptionInDonation from "./OptionInDonation";
import CurrentDonationStatus from "./CurrentDonationStatus";

const Background = styled.div`
    width:100%;
    height:100vh;
    background:white;
`;

const TransactionReceipt = (match) => {    //사용자가 향후 다시 영수증 확인 하고싶을 때
    useEffect(() => {
        if (match.location.state === undefined) {
            match.history.push("/");
        }
        else{
            setInfo(match.location.state.item)
        }
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
            <OptionInDonation
                id={info.thing_index}
                item={info}
            />
        </Background>
    );
};

export default TransactionReceipt;