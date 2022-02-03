import React from "react";
import Header from "../Navigation/Header";
import styled from "styled-components";

const Wrapper = styled.div`
    width:100%;
    height:100%;
`;

const PaymentsFail = () => {
    return(
        <Wrapper>
            <Header />
                <h1>서비스 이용 간 에러가 발생하였습니다. 다음과 같은 사항</h1>
                <h2>1. 현재 기부하신 물품금액이 모두 완료된 경우</h2>
                <h2>2. 잔고가 부족한 경우</h2>
                <h2>3. 그 외의 경우는 문의 </h2>
                <h2>4. 기브할 갯수를 정확히 입력해주세요!!</h2>
                <h2>5. 예금주에 빈칸을 입력하지 말아주세요.</h2>
            
        </Wrapper>
    );
};

export default PaymentsFail;