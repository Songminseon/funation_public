import React, { useState } from "react";
import styled from "styled-components";
import Header from "../Navigation/Header";
import vectorDown from "../img/icon/vectorDown.svg";
import vectorTop from "../img/icon/vectorTop.svg";

const Whole = styled.div`
    width:100%;
    height:100vh;
    background:white;
    position:relative;
`;

const FAQWrapper = styled.div`
    width:100%;
    overflow:visible;
    background:white;
    
`;

const Title = styled.div`
    position:absolute;
    width:calc(100% - 21px);
    height:15px;
    margin-left:21px;
    top:83px;
    text-align:left;
    
    h1{
        color:#101010;
        font-size: 1.125rem;
        font-weight: 700;
        line-height: 1rem;
        letter-spacing: -0.015rem;
    }
`;

const QuestionList = styled.div`
    width:calc(100% - 32px);
    height:auto;
    margin-left:16px;
    margin-top:93.25px;
    border-top : 1px solid #E5E5E5;
    border-left : 1px solid #E5E5E5;
    border-right : 1px solid #E5E5E5;
    border-radius:4px;
`;

const Question = styled.div`
    width:100%;
    height:52px;
    display:flex;
    align-items:center;
    border-bottom: 1px solid #E5E5E5;
    position:relative;
    color:#101010;

    button{
        all:unset;
        cursor: pointer;
        position:absolute;
        right:18px;
        height:23px;
        width:12px;
        height:6px;
        display:flex;
        align-items:center;

        img{
            width:100%;
            height:100%;
        }
    }

    h2{
        margin-left:12px;
        font-size: 0.875rem;
        font-weight: 400;
        line-height: 1.5rem;
        letter-spacing: -0.015rem;
    }
`;

const AnswerSheet = styled.div`
    width:100%;
    height:auto;
    background:#F2F2F2;
    color:#232323;
    display:flex;
    

    p{
        font-size: 0.875rem;
        font-weight: 300;
        line-height: 1.5rem;
        letter-spacing: -0.015rem;
    }

    span{
        font-size: 0.875rem;
        font-weight: 500;
        line-height: 1.5rem;
        letter-spacing: -0.015rem;
    }
`;

const AnswerMark = styled.div`
    width:13px;
    height:16px;
    margin-left:12px;
    margin-top:17px;
    display:flex;
    align-items:center;

    h5{
        font-family: 'GmarketSansMedium';
        font-size: 0.9375rem;
        line-height: 1rem;
        letter-spacing: -0.015rem;
    }
`;

const MyAnswer = styled.div`
    width:calc(100% - 47px);
    margin-left:9px;
    text-align:left;
`;


const FAQ = () => {

    const [questionFirst, setQuestionFirst] = useState(false);
    const [questionSecond, setQuestionSecond] = useState(false);
    const [questionThird, setQuestionThird] = useState(false);
    const [questionFourth, setQuestionFourth] = useState(false);
    const [questionFifth, setQusetionFifth] = useState(false);
    const [questionSixth, setQusetionSixth] = useState(false);
    const [questionSeventh, setQuestionSeventh] = useState(false);
    const [questionEighth, setQuestionEighth] = useState(false);
    const [questionNineth, setQusetionNineth] = useState(false);
    const [questionTenth, setQuestionTenth] = useState(false);

    const openFirst = () => {
        setQuestionFirst(true);
    }

    const closeFirst = () => {
        setQuestionFirst(false);
    }

    const openSecond = () => {
        setQuestionSecond(true);
    }

    const closeSecond = () => {
        setQuestionSecond(false);
    }

    const openThird = () => {
        setQuestionThird(true);
    }

    const closeThird = () => {
        setQuestionThird(false);
    }

    const openFourth = () => {
        setQuestionFourth(true);
    }

    const closeFourth = () => {
        setQuestionFourth(false);
    }

    const openFifth = () => {
        setQusetionFifth(true);
    }

    const closeFifth = () => {
        setQusetionFifth(false);
    }

    const openSixth = () => {
        setQusetionSixth(true);
    }

    const closeSixth = () => {
        setQusetionSixth(false);
    }

    const openSeventh = () => {
        setQuestionSeventh(true);
    }

    const closeSeventh = () => {
        setQuestionSeventh(false);
    }

    const openEighth = () => {
        setQuestionEighth(true);
    }

    const closeEighth = () => {
        setQuestionEighth(false);
    }

    const openNineth = () => {
        setQusetionNineth(true);
    }

    const closeNineth = () => {
        setQusetionNineth(false);
    }

    const openTenth = () => {
        setQuestionTenth(true);
    }

    const closeTenth = () => {
        setQuestionTenth(false);
    }

    return (
        <Whole>
            <Header />
            <FAQWrapper>
                <Title>
                    <h1>
                        자주 묻는 질문
                    </h1>
                </Title>
                <QuestionList>
                    <Question>
                        <h2>
                            Q. 기부니? 기부하니? 기브? 다시 정리해주세요!
                        </h2>
                        {!questionFirst ?
                            <button onClick={openFirst}>
                                <img src={vectorDown} alt="질문다운" />
                            </button>
                            :
                            <button onClick={closeFirst}>
                                <img src={vectorTop} alt="질문업" />
                            </button>
                        }

                    </Question>
                    {questionFirst &&
                        <AnswerSheet>
                            <AnswerMark>
                                <h5>
                                    A
                                </h5>
                            </AnswerMark>

                            <MyAnswer>
                                <p>
                                    <span>기부니</span> : '기부니가좋다'에서 기부하는 모든 개인 고객 <br/>
                                    <span>기부하니</span> : '기부니가좋다'와 함께하는 사회적 가치를 지닌 기업 <br/>
                                    <span>기브</span> : '기부니가좋다'에서 사용할 수 있는 재화. 1기브 = 110원(VAT 포함) <br/>
                                </p>
                            </MyAnswer>

                        </AnswerSheet>
                    }

                    <Question>
                        <h2>
                            Q. 기부금인데 왜 부가세가 붙죠?
                        </h2>
                        {!questionSecond ?
                            <button onClick={openSecond}>
                                <img src={vectorDown} alt="질문다운" />
                            </button>
                            :
                            <button onClick={closeSecond}>
                                <img src={vectorTop} alt="질문업" />
                            </button>
                        }

                    </Question>
                    {questionSecond &&
                        <AnswerSheet>
                            <AnswerMark>
                                <h5>
                                    A
                                </h5>
                            </AnswerMark>

                            <MyAnswer>
                                <p>
                                '기부니가좋다'는 기본적으로 플랫폼 서비스에요!<br/>
                                <span>'기브'는 컨텐츠를 이용하기 위한 '전용 이용권'입니다.</span><br/>
                                저희가 부가적으로 만들어낸 가치인 만큼, 부가세를 내는 것이 당연합니다.<br/>
                                물론 부가세는 저희가 갖는 게 아니고 <span>세금으로 빠져나가요!</span><br/><br/>

# 사업목적이 영리이든 비영리이든 관계없이 사업상 독립적으로 재화 또는 용역을 공급하는 사업자 및 재화를 수입하는 자에 해당하는 자로서 개인, 법인(국가, 지방자치단체, 지방자치단체 조합을 포함), 법인격이 없는 사단·재단 또는 그 밖의 단체는 부가가치세를 납부할 의무가 있다.(부가가치세법 제3조)
                                </p>
                            </MyAnswer>

                        </AnswerSheet>
                    }

                    <Question>
                        <h2>
                            Q. 왜 계좌이체로 하는 건가요?
                        </h2>
                        {!questionThird ?
                            <button onClick={openThird}>
                                <img src={vectorDown} alt="질문다운" />
                            </button>
                            :
                            <button onClick={closeThird}>
                                <img src={vectorTop} alt="질문업" />
                            </button>
                        }

                    </Question>
                    {questionThird &&
                        <AnswerSheet>
                            <AnswerMark>
                                <h5>
                                    A
                                </h5>
                            </AnswerMark>

                            <MyAnswer>
                                <p>
                                    그것은..죄송합니다.<br/>
                                    저희도 서비스를 오픈하기 전에 <span>PG사와의 계약</span>을 통해 보다 더 나은 결제 경험을 제공하고 싶었습니다.<br/>
                                    예상보다 절차와 시간이 많이 소요되어, 더 빨리 여러분들에게 서비스를 공개하고 싶은 마음에 임시로 '<span>인간지능</span>'을 활용한 결제를 진행하고 있습니다.<br/>
                                    대부분의 기능이 자동화되어 있어서 기브가 덜 충전되거나 더 충전되는 경우는 없으니 안심하세요!
                                </p>
                            </MyAnswer>

                        </AnswerSheet>
                    }


                    <Question>
                        <h2>
                            Q. 기부금은 100% 기부처로 전달되나요?
                        </h2>
                        {!questionFourth ?
                            <button onClick={openFourth}>
                                <img src={vectorDown} alt="질문다운" />
                            </button>
                            :
                            <button onClick={closeFourth}>
                                <img src={vectorTop} alt="질문업" />
                            </button>
                        }

                    </Question>
                    {questionFourth &&
                        <AnswerSheet>
                            <AnswerMark>
                                <h5>
                                    A
                                </h5>
                            </AnswerMark>

                            <MyAnswer>
                                <p>
                                    아뇨!<br/>
                                    기부니들의 기부 참여액 중 <span>20%를 운영비로 사용</span>합니다.<br/>
                                    운영비에는 서비스를 제공하기 위한 서버비, 카드 수수료, 굿즈 제작비, 택배비 등이 포함되어 있어요.<br/>
                                    지속가능한 서비스가 되기 위한 결정이랍니다!<br/>
                                    플랫폼이 커질수록 운영비는 줄여나갈 계획이에요.<br/>
                                    <span>운영비 집행 내역</span>도 최대한 상세하게 공개할 내용이니 걱정하지 않으셔도 됩니다! :D
                                </p>
                            </MyAnswer>

                        </AnswerSheet>
                    }

                    <Question>
                        <h2>
                            Q. 나머지 80%는 정말로 기부처로 가는 건가요?
                        </h2>
                        {!questionFifth ?
                            <button onClick={openFifth}>
                                <img src={vectorDown} alt="질문다운" />
                            </button>
                            :
                            <button onClick={closeFifth}>
                                <img src={vectorTop} alt="질문업" />
                            </button>
                        }

                    </Question>
                    {questionFifth &&
                        <AnswerSheet>
                            <AnswerMark>
                                <h5>
                                    A
                            </h5>
                            </AnswerMark>

                            <MyAnswer>
                                <p>
                                당연하죠!<br/>
                                현금 혹은 그에 준하는 기부물품을 기부처에 전달할 예정이에요.<br/>
                                단순히 돈만 주는 것보다는 꼭 필요로 하는 물건들을 전달하면 기부금이 우리 손을 떠난 뒤에도 잘못 쓰일 가능성을 줄일 수 있을 거라고 생각하고 있습니다.<br/>
                                내역도 물론 자세하게 알려줄 거구요! 
                                </p>
                            </MyAnswer>

                        </AnswerSheet>
                    }

                    <Question>
                        <h2>
                            Q. 그럼 그 기부금은 어디로 전달되나요?
                        </h2>
                        {!questionSixth ?
                            <button onClick={openSixth}>
                                <img src={vectorDown} alt="질문다운" />
                            </button>
                            :
                            <button onClick={closeSixth}>
                                <img src={vectorTop} alt="질문업" />
                            </button>
                        }

                    </Question>
                    {questionSixth &&
                        <AnswerSheet>
                            <AnswerMark>
                                <h5>
                                    A
                            </h5>
                            </AnswerMark>

                            <MyAnswer>
                                <p>
                                    우리가 도울 수 있는 모든 곳이요!<br/>
                                    기본적으로는 <span>'환경'</span>을 메인 테마로 갖고 있어요.<br/>
                                    하지만, 기부니와 기부하니가 원하는 최대한 많은 곳을 도울 수 있게 노력할 계획이에요!
                                </p>
                            </MyAnswer>

                        </AnswerSheet>
                    }

                    <Question>
                        <h2>
                            Q. '기부니가좋다'에서 기부해야 하는 이유가 있나요?
                        </h2>
                        {!questionSeventh ?
                            <button onClick={openSeventh}>
                                <img src={vectorDown} alt="질문다운" />
                            </button>
                            :
                            <button onClick={closeSeventh}>
                                <img src={vectorTop} alt="질문업" />
                            </button>
                        }

                    </Question>
                    {questionSeventh &&
                        <AnswerSheet>
                            <AnswerMark>
                                <h5>
                                    A
                            </h5>
                            </AnswerMark>

                            <MyAnswer>
                                <p>
                                기부니가좋다! 저희는 <span>'기분 좋은 기부'</span>라는 슬로건 아래 '기부가 일상인 세상'을 만들기 위해 노력하고 있습니다.<br/>
                                어떻게 하면 조금 더 많은 사람들이 즐겁게 기부할 수 있을지 고민 중이죠.<br/>이렇게 기부하니 기부니가좋다!
                                </p>
                            </MyAnswer>

                        </AnswerSheet>
                    }

                    <Question>
                        <h2>
                            Q. '기부앤테이크'가 어떤 뜻인가요?
                        </h2>
                        {!questionEighth ?
                            <button onClick={openEighth}>
                                <img src={vectorDown} alt="질문다운" />
                            </button>
                            :
                            <button onClick={closeEighth}>
                                <img src={vectorTop} alt="질문업" />
                            </button>
                        }

                    </Question>
                    {questionEighth &&
                        <AnswerSheet>
                            <AnswerMark>
                                <h5>
                                    A
                            </h5>
                            </AnswerMark>

                            <MyAnswer>
                                <p>
                                    말 그대로 '기부'와 'Take'의 합성어입니다.<br/>
                                    흔히 쓰는 'Give & Take'를 변형한 건데요. 기부를 받는 사람 뿐만 아니라, 기부를 하는 모두도 무언가를 받을 수 있는 서비스를 만들고 싶었습니다!
                                </p>
                            </MyAnswer>

                        </AnswerSheet>
                    }

                    <Question>
                        <h2>
                            Q. 기업이 '기부하니'가 되려면 어떻게 하나요?
                        </h2>
                        {!questionNineth ?
                            <button onClick={openNineth}>
                                <img src={vectorDown} alt="질문다운" />
                            </button>
                            :
                            <button onClick={closeNineth}>
                                <img src={vectorTop} alt="질문업" />
                            </button>
                        }

                    </Question>
                    {questionNineth &&
                        <AnswerSheet>
                            <AnswerMark>
                                <h5>
                                    A
                                </h5>
                            </AnswerMark>

                            <MyAnswer>
                                <p>
                                    info@funation.io &lt;&lt; 여기로 메일 보내주세요!!<br/>
                                    저희는 사회적 가치를 실현하는 모든 기업을 존경하고 있습니다.<br/>
                                </p>
                            </MyAnswer>

                        </AnswerSheet>
                    }
                    <Question>
                        <h2>
                            Q. '기부니가좋은가방'은 뭔가요? 
                        </h2>
                        {!questionTenth ?
                            <button onClick={openTenth}>
                                <img src={vectorDown} alt="질문다운" />
                            </button>
                            :
                            <button onClick={closeTenth}>
                                <img src={vectorTop} alt="질문업" />
                            </button>
                        }

                    </Question>
                    {questionTenth &&
                        <AnswerSheet>
                            <AnswerMark>
                                <h5>
                                    A
                                </h5>
                            </AnswerMark>

                            <MyAnswer>
                                <p>
                                    '기부니가좋은가방'은 저희가 준비하고 있는 두 번째 프로젝트입니다!<br/>
                                    자세한 내용은... 조금만 더 기다려주실 거죠?
                                </p>
                            </MyAnswer>

                        </AnswerSheet>
                    }

                </QuestionList>
            </FAQWrapper>
        </Whole>
    )
}

export default FAQ;