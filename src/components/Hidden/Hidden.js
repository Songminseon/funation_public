import React from "react";
import Hidden1 from "../img/hidden/hidden1.png";
import Hidden2 from "../img/hidden/hidden2.png";

const Hidden = () => {
    return(
        <>
            <h1>후훗 여기를 뚫고 오다니 대단한걸? 여기는 기부니 로고를 쓸려고 만들어놓은 공간이야</h1>
            <p>아는사람만 아는 히든페이지지 ㅋㅋㄹㅃㅃ</p>
            <img src={Hidden1} alt="히든1" />
            <br/>
            <img src={Hidden2} alt="히든2" />
        </>
    );
};

export default Hidden;