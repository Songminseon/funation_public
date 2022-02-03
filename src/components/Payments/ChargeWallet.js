import React from "react";
import Header from "../Navigation/Header";
import CurrentWallet from "./ChargeWalletComponents/CurrentWallet";
import GoToCharge from "./ChargeWalletComponents/GoToCharge";

const ChargeWallet = () => {
    return(
        <>
            <Header />
            <CurrentWallet/>
            <GoToCharge/>
          

        </>
    );
};

export default ChargeWallet;