import React from "react"
import Header from "../Navigation/Header";
import CurrentWallet from "./WalletComponents/CurrentWallet";
import PaymentsRecords from "./WalletComponents/PaymentsRecords";


const Wallet = () => {
    return(
        <>
            <Header />
            <CurrentWallet />
            <PaymentsRecords />
        </>
    );
};

export default Wallet;