import React, { useState, useEffect } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Gabang from "./components/Gabang/Main/Index";
import OnBoarding from "./components/OnBoarding";
import GiveAndTake from "./components/GiveAndTake";
import SuggestionOne from "./components/Inquiry/SuggestionOne";
import SuggestionTwo from "./components/Inquiry/SuggestionTwo";
import MyDonationZzim from "./components/UserActive/Zzim";
import MyDonationDid from "./components/UserActive/DonationDid";
import styled from "styled-components";
import FirstModal from "./components/CrowdDonation/modal/FirstModal";
import PaymentsFail from "./components/Payments/PaymentsFail";
import Wallet from "./components/Payments/Wallet";
import ChargeWallet from "./components/Payments/ChargeWallet";
import ChargeExample from "./components/Payments/ChargeExample";
import Hidden from "./components/Hidden/Hidden";
import ProductDetail from "./components/GiveAndTake/ItemDetail";
import TransactionReceipt from "./components/Receipt/TransactionReceipt";
import Success from "./components/Receipt/Success";
import { CookiesProvider } from "react-cookie";
import Admin from "./components/Hidden/AdminPage";
import Polish from "./components/Policy/Main";
import Terms from "./components/Policy/TermsContent";
import Privacy from "./components/Policy/PrivacyContent";
import Helpeme from "./components/Inquiry/Helpme";
import FAQ from "./components/Inquiry/FAQ";
import Intro from "./components/Inquiry/Intro";
import DonationGabang from "./components/Gabang/DonationUniv/Index";
import SuccessGabang from "./components/Receipt/GabangSuccess";
import BlueRoadTest from "./components/BlueRoad/Index";


const AppWrapper = styled.div`
  width: 400px;
  background: #f2f2f2;
  height: auto;
  margin: 0;
  padding: 0;
  top: 0;
  bottom: 0;
  left: calc(50vw - 200px);

  @media screen and (max-width: 400px) {
    width: 100vw;
    left: 0;
    position: fixed;
    overflow: scroll;
  }
`;

const App = () => {
  const [isAgree, setIsAgree] = useState(true);
  const [isLogin, setIsLogin] = useState(true);

  const loginByGuest = () => {
    setIsAgree(true);
    setIsLogin(true);
  };

  useEffect(() => {
    fetch("/api/isLogin")
      .then((res) => res.json())
      .then((data) => {
        setIsLogin(data.status || false);
        setIsAgree(data.agree || false);
      });
  }, []);

  return (
    <>
      <CookiesProvider>
      <AppWrapper>
        <BrowserRouter>
          <Switch>
            <Route
              path="/blueroad"
              component={(props) => <BlueRoadTest {...props} />}
            />
              {!isLogin ? (
                <OnBoarding loginByGuest={loginByGuest} />
              ) : (
                <>
                  {!isAgree ? (
                    <Polish />
                  ) : (
                    <>
                      <Route
                        path="/"
                        component={(props) => <Home {...props} />}
                        exact={true}
                      />
                      <Route
                        path="/gabang"
                        component={(props) => <Gabang {...props} />}
                      />
                      <Route
                        path="/giveAndTake"
                        component={(props) => <GiveAndTake {...props} />}
                        exact={true}
                      />
                      <Route
                        path="/giveAndTake/:id"
                        component={(props) => <ProductDetail {...props} />}
                      />
                      <Route
                        path="/mypage/myDonationZzim"
                        component={(props) => <MyDonationZzim {...props} />}
                      />
                      <Route
                        path="/mypage/myDonationDid"
                        component={(props) => <MyDonationDid {...props} />}
                      />
                      <Route
                        path="/crowdDonation/:id"
                        component={(props) => <FirstModal {...props} />}
                      />
                      <Route
                        path="/fail"
                        component={(props) => <PaymentsFail {...props} />}
                      />
                      <Route
                        path="/wallet"
                        component={(props) => <Wallet {...props} />}
                      />
                      <Route
                        path="/walletCharge"
                        component={(props) => <ChargeWallet {...props} />}
                      />
                      <Route
                        path="/chargeSuccess"
                        component={(props) => <ChargeExample {...props} />}
                      />
                      <Route
                        path="/success/:order_number"
                        component={(props) => <Success {...props} />}
                      />
                      <Route
                        path="/transactionReceipt/:order_number"
                        component={(props) => <TransactionReceipt {...props} />}
                      />
                      <Route
                        path="/hidden/bysongminseon/forfunationlogo"
                        component={(props) => <Hidden {...props} />}
                      />
                      <Route
                        path="/hidden/admin/hatirubi"
                        component={(props) => <Admin {...props} />}
                      />
                      <Route
                        path="/inquiry/terms"
                        component={(props) => <Terms {...props} />}
                      />
                      <Route
                        path="/inquiry/privacy"
                        component={(props) => <Privacy {...props} />}
                      />
                      <Route
                        path="/inquiry/suggestion1"
                        component={(props) => <SuggestionOne {...props} />}
                      />
                      <Route
                        path="/inquiry/suggestion2"
                        component={(props) => <SuggestionTwo {...props} />}
                      />
                      <Route
                        path="/inquiry/donation"
                        component={(props) => <Helpeme {...props} />}
                      />
                      <Route
                        path="/inquiry/FAQ"
                        component={(props) => <FAQ {...props} />}
                      />
                      <Route
                        path="/inquiry/intro"
                        component={(props) => <Intro {...props} />}
                      />
                      <Route
                        path="/gabangUniv/:id"
                        component={(props) => <DonationGabang {...props} />}
                      />
                      <Route
                        path="/successGabang/:order_number"
                        component={(props) => <SuccessGabang {...props} />}
                      />
                    </>
                  )}
                </>
              )}
            
          </Switch>
        </BrowserRouter>
        </AppWrapper>
      </CookiesProvider>
    </>
  );
};

export default App;
