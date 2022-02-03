import React from "react";
import styled from "styled-components";
import Modal from "react-modal";
import Csrftoken from "../../Csrftoken";

const Wrapper = styled.div`
    width:100%;
    height:100%;
`;

const UserRequest = styled.div`
    width:calc(100% - 96px);
    height:56px;
    margin-left:48px;
    margin-top:54px;
    display:flex;
    align-items:center;
    text-align:center;

    span{
        display:inline-block;
        font-weight:700;
        font-size:1.125rem;
        line-height:1.75rem;
        letter-spacing:-0.015rem;
    }

    p{
        margin:0 auto;
        display:inline-block;
        font-weight:500;
        font-size:1.125rem;
        line-height:1.75rem;
        letter-spacing:-0.015rem;
    }
`;

const ButtonWrapper = styled.div`
    width:calc(100% - 32px);
    height:42px;
    margin-left:16px;
    margin-top:42px;
    display:flex;
`;

const NoButton = styled.button`
    all:unset;
    cursor:pointer;
    width:121px;
    height:42px;
    background:white;
    border: 1px solid #D9D9D9;
    display:flex;
    align-items:center;
    text-align:center;
    margin-left:calc(50% - 131px);
    border-radius:4px;

    h2{
        color:#333333;
        margin:0 auto;
        font-size: 1rem;
        font-weight: 500;
        line-height: 1.3125rem;
        letter-spacing: -0.015rem;
    }
`;

const YesButton = styled.button`
    all:unset;
    cursor:pointer;
    width:121px;
    height:42px;
    background:#FFC02B;
    border-radius:4px;
    display:flex;
    align-items:center;
    text-align:center;
    margin-left:14px;

    h2{
        margin:0 auto;
        font-size: 1rem;
        font-weight: 700;
        line-height: 1.3125rem;
        letter-spacing: -0.015rem;
    }
`;

const FinalCheckModal = ({ isOpen, closeModal, customStyles,
    reqSetIndex, reqCoin, thing_amount,
    thing_name, thing_index, maxCoin, thing_brand }) => {


    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={closeModal}
            style={customStyles}
            className="final-payments"
            ariaHideApp={false}
        >
            {thing_brand === "동구밭" ?  
            <form action="/payments/continuePayments" method="post">
                <Csrftoken />
                <input type="hidden" name="reqSetIndex" value={reqSetIndex} />
                <input type="hidden" name="reqCoin" value={reqCoin} />
                <input type="hidden" name="thing_amount" value={thing_amount} />
                <input type="hidden" name="thing_name" value={thing_name} />
                <input type="hidden" name="reqOrderId"
                    value={new Date().getFullYear() + new Date().getMonth() + new Date().getTime() + Math.random().toString(36).substr(2, 13)} />
                <input type="hidden" name="reqThingIndex" value={thing_index} />
                <input type="hidden" name="maxCoin" value={maxCoin} />
                <input type="hidden" name="reqBrand" value={thing_brand} />
                <Wrapper>
                    <UserRequest>
                        <p>
                            <span>
                                {thing_name}
                            </span>에<br/>
                            <span>
                                {reqCoin}기브&nbsp;
                            </span>
                            기부하시겠습니까?
                        </p>
                    </UserRequest>
                    <ButtonWrapper>
                        <NoButton onClick={closeModal}>
                            <h2>
                                고민좀..
                            </h2>
                        </NoButton>
                        <YesButton type="submit">
                            <h2>
                                그럼요!!
                            </h2>
                        </YesButton>
                    </ButtonWrapper>
                </Wrapper>
            </form>
            :

            <form action="/payments/continuePaymentsGabang" method="post">
            <Csrftoken />
            <input type="hidden" name="reqSetIndex" value={reqSetIndex} />
            <input type="hidden" name="reqCoin" value={reqCoin} />
            <input type="hidden" name="thing_amount" value={thing_amount} />
            <input type="hidden" name="thing_name" value={thing_name} />
            <input type="hidden" name="reqOrderId"
                value={new Date().getFullYear() + new Date().getMonth() + new Date().getTime() + Math.random().toString(36).substr(2, 13)} />
            <input type="hidden" name="reqThingIndex" value={thing_index} />
            <input type="hidden" name="maxCoin" value={maxCoin} />
            <input type="hidden" name="reqBrand" value={thing_brand} />
            <Wrapper>
                <UserRequest>
                    <p>
                        <span>
                            {thing_name}
                        </span>에<br/>
                        <span>
                            {reqCoin}기브&nbsp;
                        </span>
                        기부하시겠습니까?
                    </p>
                </UserRequest>
                <ButtonWrapper>
                    <NoButton onClick={closeModal}>
                        <h2>
                            고민좀..
                        </h2>
                    </NoButton>
                    <YesButton type="submit">
                        <h2>
                            그럼요!!
                        </h2>
                    </YesButton>
                </ButtonWrapper>
            </Wrapper>
        </form>

    }
        </Modal>
    );
};

export default FinalCheckModal;