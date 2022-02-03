import axios from "axios";
import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import styled from "styled-components";
import heart from "../../img/icon/heart.svg";
import Header from "../../Navigation/Header";
// import {loadTossPayments} from "@tosspayments/sdk";

// async function payments(coin,orderName, thing_index){
//     const tossPayments = await loadTossPayments(clientKey);
//     const date = new Date()
//     tossPayments.requestPayment('카드', {
//         amount: coin*100,
//         orderId: date.getFullYear()+date.getMonth()+date.getTime() + thing_index + Math.random().toString(36).substr(2,13),
//         orderName: orderName,
//         successUrl: window.location.origin + '/success',
//         failUrl: window.location.origin + '/fail',
//       });
// };

const SecondModalWrapper = styled.div`
  height: 33.5vh;
  background: white;
  width: 100%;
  margin-top: 71.857vh;
  box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.1);
  border-radius: 15px 15px 0px 0px;
  overflow: hidden;
`;

const SecondModalDescriptionWrapper = styled.div`
  height: 9.428vh;
  width: 100%;
  display: flex;

  align-items: center;
`;

const SecondModalCountWrapper = styled.div`
  width: 41.75%;
  height: 5.198vh;
  margin-left: 8%;
  margin-top: 0.41vh;
  display: flex;
  align-items: center;
`;

const SecondModalMinusButton = styled.button`
  width: 19.712%;
  height: 4.702vh;
  margin-top: 0.247vh;
  margin-left: 1.035%;
  border: 1px solid #979797;
  overflow: hidden;
  border-radius: 3px;
  background: white;
`;

const SecondModalInput = styled.div`
  margin-left: 2.712%;
  width: 53.071%;
  height: 4.664vh;
  margin-top: 0.267vh;
  border: 1px solid #000000;
  border-radius: 3px;
  display: flex;
  align-items: center;
  text-align: center;

  p {
    margin: 0 auto;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5rem;
    letter-spacing: -0.24px;
  }

  input {
    all: unset;
    width: 100%;
    height: 100%;
  }
`;

const SecondModalPlusButton = styled.button`
  width: 19.712%;
  height: 4.702vh;
  margin-top: 0.247vh;
  margin-left: 2.712%;
  border: 1px solid #979797;
  border-radius: 3px;
  background: white;
`;

const SecondModalContent = styled.div`
  width: 38.75%;
  height: 5.285vh;
  margin-left: 7.5%;
  display: flex;
  align-items: center;
  text-align: left;

  h1 {
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5rem;
    letter-spacing: -0.24px;
  }

  h1 span {
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5rem;
    letter-spacing: -0.24px;
  }
`;

const SecondModalStopBar = styled.div`
  width: 92%;
  height: 0.2857vh;
  background: #d9d9d9;
  margin-left: 4%;
`;

const MenuWrapper2 = styled.div`
  width: 100%;
  height: 9vh;
  display: flex;

  align-items: center;

  #share_wrapper {
    width: 6.25%;
    height: 3.577vh;
    margin-left: 7.6225%;

    img {
      width: 100%;
      height: 100%;
    }
  }

  button {
    width: 76.25%;
    height: 6.714vh;
    margin-left: 5.88%;
    background: white;
    border: 2px solid #f8b517;
    border-radius: 16px;
    display: flex;
    text-align: center;
    align-items: center;
    cursor: pointer;
  }

  button h2 {
    text-decoration: none;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1rem;
    letter-spacing: -0.24px;
    margin: 0 auto;
    color: black;
  }
`;

const HeartWrapper = styled.div`
  width: 6.25%;
  height: 3.577vh;
  margin-left: 7.6225%;

  button {
    all: unset;
    width: 100%;
    height: 100%;
    cursor: pointer;
  }

  button img {
    width: 100%;
    height: 100%;
  }
`;

const SecondModal = ({ item, modalIsOpen2, closeModal2, customStyles2, limiteCoin }) => {
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(`/api/searchMyDonation/${item.thing_index}`);
      const prevCoin = result.data.coin;
      if (prevCoin > limiteCoin) {
        setMaxCoin(0);
      } else {
        setMaxCoin(limiteCoin);
      }
    };
    fetchData();

    return () => setMaxCoin(0);
  });

  const [coin, setCoin] = useState(0);
  const [maxCoin, setMaxCoin] = useState(0);

  const minusCoin = () => {
    if (coin > 0) {
      setCoin(coin - 1);
      if (coin > maxCoin) {
        setCoin(maxCoin);
      }
    } else {
      setCoin(0);
    }
  };

  const plusCoin = () => {
    if (coin >= maxCoin) {
      setCoin(maxCoin);
    } else {
      if (coin < 0) {
        setCoin(0);
      }
      setCoin(coin + 1);
    }
  };

  const handleChange = (e) => {
    setCoin(e.target.value);
  };

  return (
    <>
      <Modal
        isOpen={modalIsOpen2}
        onRequestClose={closeModal2}
        contentLabel="participateModal"
        style={customStyles2}
        className="custom-dialog2"
        ariaHideApp={false}
      >
        <Header />
        <SecondModalWrapper>
          <SecondModalDescriptionWrapper>
            <SecondModalContent>
              <h1>
                최대 &nbsp;<span>{maxCoin}</span>기부니 참여 가능
              </h1>
            </SecondModalContent>
            <SecondModalCountWrapper>
              <SecondModalMinusButton onClick={minusCoin}>-</SecondModalMinusButton>
              <SecondModalInput>
                <p>
                  <input
                    value={coin <= maxCoin ? coin : maxCoin}
                    onChange={handleChange}
                    name="coin"
                  />
                </p>
              </SecondModalInput>
              <SecondModalPlusButton onClick={plusCoin}>+</SecondModalPlusButton>
            </SecondModalCountWrapper>
          </SecondModalDescriptionWrapper>
          <SecondModalStopBar></SecondModalStopBar>
          <MenuWrapper2>
            <HeartWrapper>
              <form action="/function/zzim" method="post">
                <input type="hidden" name="index" id="index" value={item.thing_index} />
                <button type="submit">
                  <img src={heart} alt="zzim" />
                </button>
              </form>
            </HeartWrapper>
            <form action="/payments/continuePayments" method="post">
              <input type="hidden" name="reqCoin" value={coin} />
              <input
                type="hidden"
                name="reqOrderId"
                value={
                  new Date().getFullYear() +
                  new Date().getMonth() +
                  new Date().getTime() +
                  Math.random().toString(36).substr(2, 13)
                }
              />
              <input type="hidden" name="reqThingIndex" value={item.thing_index} />
              <button type="submit">
                <h2>기부하기</h2>
              </button>
            </form>
          </MenuWrapper2>
        </SecondModalWrapper>
      </Modal>
    </>
  );
};

export default SecondModal;
