# Backend Document (Updated 21-03-23)
<img src="https://media.vlpt.us/images/potter/post/76303932-4916-4c24-9252-7e530a57bf0c/1_XP-mZOrIqX7OsFInN2ngRQ.png" width="300" height="200"> 
<img src="https://dora-guide.com/wp-content/uploads/2019/09/MySQL-INSERT-MySQL-UPDATE-MySQL-DELETE-1.png" width="300" height="200">

# 서버세팅값
백엔드 port=8080 사용
다음과 같은 코드를 이용하여
```
app.get('*', (req,res)=>{
    res.sendFile(path.join(__dirname, "../dist/index.html"));
})
```
웹팩에 백엔드 정보를 전송함

```
const sessionOption = {
    resave:false,
    saveUninitialized:false,
    secret:process.env.COOKIE_SECRET,
    cookie:{
        httpOnly:true,
        secure:false,
    },
};
```

배포판에 한정하여
```
morgan('combined')
helmet()
hpp()
```
사용

WebpackConfig 설정 : <https://github.com/funation/web_app/blob/master/webpack.config.js>


# /api (단순 response json 내용은 생략)

## /
- 테스트용

## /users
- 테스트용

## /getUserName
- 생략

## /searchAllDonation
- 모든 기부내역(기부앤테이크 + 가방프로젝트)조회

## /searchPossbileThing/:category
- 기부앤테이크에서 카테고리(진행중, 모금완료, 모든상품)값을 이용하여 조회

## /searchDoneThing
- 생략

## /searchZzimThing
- 생략

## /isLogin
- 사용자가 로그인상태인지 게스트 로그인인지 boolean값으로 보냄

## /searchMyDonationDid:/thing_category/:subCategory
- 사용자가 메인카테고리(전체보기, 기부앤테이크, 가방프로젝트)와 서브카테고리(전체보기, 모금완료, 모금 중)을 골라서 조건에 맞는 값 조회
- 기본값 (전체보기, 전체보기)

## /searchSliderImg/:id
- 기부앤테이크 상품번호를 통해 슬라이더 이미지 리소스 조회

## /searchSetPackage
- 기부앤테이크 동구밭상품에서 패키지 상품 또는 단일 상품 모달띄워주는 정보 조회

## /searchAlarm
- 생략

## /searchMyDonation/:thing_index
- 생략

## /searchCurrentWallet
- 생략

## /searchMyRecords
- 생략

## /searchAlarmCount
- 생략

## /searchRecordByOrderNumber/:order_number
- 사용자 snsId와 주문번호를 이용하여 정보 조회
- front에서 window.match조건을 걸어놓아 로그인한 사용자에 대한 정보만 조회 가능

## /amILucky/:thing_index
- 물건번호를 통해 사용자에 기부 참여 기록이 없으면 null값 전송
- 사용자에 기부 참여가 있으면 사용자에 맞는 상태 값(물건당첨/굿즈응모권/기부증서)에 맞는 값을 보냄
- 비로그인 상태 시 null값 전송

## /checkZzim/:thing_index
- 사용자가 비로그인시 null 값 전송
- 찜 항목 테이블에서 물건번호와 사용자 snsId기반으로 찜 여부 boolean값으로 전송

## /getAmount/:set_index
- 물품별 가능 회차 조회

## /getGabangMain
- 가방프로젝트 전체건에 대해서 이제까지 모인 금액 기반으로 순위를 매김

## /getRanking/:thing_index
- 각 가방프로젝트 별 사용자 금액기반으로 사용자별 랭킹을 매김
- 사용자 snsId기반으로 사용자의 랭킹 제공
- 비로그인시 "funation_guest"값을 보냄

## /checkGuest
- 생략

## /searchGiveAndTake
- 기부앤테이크 총 금액만 조회

## /searchResult
- 기부앤테이크 결과가 나오고 아직 결과처리를 안한 건을 조회 (slack bot용)

## /searchGabang
- 가방프로젝트 총 금액만 조회

## /getAdditional
- 사용자에 추가적인 정보(핸드폰번호, 이메일, snsId)를 조회함
- 사용자가 없을 시 빈 값 전송
- 아임포트 시 보낼 data 조회용

<hr/>

# /application (어플리케이션 서버)
# 어플리케이션에 필요한 백엔드 담을예정

## /index
- 테스트용


<hr/>

# /auth

## /kakao
- /passport-kakao에 내장되어 있는 authenticate함수 이용

## /kakao/callback
- passport-kakao 기반 함수
- 사용자가 카카오 로그인에 성공시 메인페이지로 이동
- 사용자가 카카오 로그인 실패시 /onBoarding(없는페이지)으로 이동

## /csrfToken
- csurf를 이용하여 csrf 값 전송

<hr/>

# /backend (사용자기능 or 어드민 관련 기능)

## /checkAdmin
- 사용자가 정해진 관리자인지 아닌지 확인

## ~~/getSubmitList
- 사용자가 인간지능 결제요청건 조회**(Legacy)**~~

## ~~/acceptSubmit **(Legacy)**~~
~~- 프론트에서 정보와 백엔드 정보를 비교하는 크로스체크 방식~~
~~- 동시 체크를 막기 위해 이중 확인을 진행~~
~~- 입금 수락 또는 기각버튼을 누름으로서 Int값 전송받음
- 입금을 수락 시 입금을 원하는 유저의 현 기브 정보를 받아오고 사용자가 요청한 기브를 합산하여 업데이트함~~
~~- 수락 완료 시 wallet_tranaction에 기록이 남음 그 후 그 건에 대해 submit_check을 1로 업데이트
- 입금 기각 시 submit_check을 2로 업데이트~~

## /zzim
- 사용자가 비로그인 시 기능 활성화 안됨
- 사용자가 로그인 시, 현 상품에 대한 번호 기반으로 zzim_list에 사용자 snsId와 상품번호를 저장함 (찜 완료)
- 사용자가 이미 찜 한건에 대해 다시 함수를 활성화 하면 zzim_list에 사용자 snsId와 상품번호를 삭제함 (찜 취소)

## /suggestion
- 기부니 or 기부하니에 대한 정보, 제안 내용, 제목, 작성시간을 저장함

## /readAll
- 사용자가 비로그인시 어떠한 기능도 실행되지 않음
- 사용자가 읽지 않는 알림건에 대해 모두 읽음으로 표시함

## /userCheck
- 처음 회원가입한 유저에 대한 정보수신동의, 개인정보처리방침, 마케팅처리방침에 대해 수락/거절을 받음
- 정보수신동의, 개인정보처리방침에 대해 필수적인 수락을 받아야함
- 위 사항을 동의하지않을 시 같은페이지에 머무름

## /userWantGabang
- 사용자가 가방프로젝트에 원하는 학교가 없을 시 신청을 받기 위한 기능
- 학교이름, 관계, 작성시간을 받아 database에 저장함

## /changeNick
- 사용자가 원하는 닉네임으로 바꿈
- 최대 길이를 6자로 프론트에서 정해놓음 (백에서는 검증안했음)
- csrf protection을 통해 위조공격 방지


<hr/>

# /middleware (Local로그인에 대한 미들웨어장치)
- ~~**Local로그인이 없어 사라질 예정**~~

<hr/>

# /passport
## index.js
- 카카오로그인 기반으로 kakaoStrategy.js와 passport를 이용하여 User 테이블 기반으로 serialize, deserialize 진행

## indexApp.js
- 앱기반으로 serialize, deserialize진행 **(구현 예정)**

## kakaoStrategy.js
- 카카오로 로그인시 /auth/kakao/callback함수 실행
- 카카오API를 통해 사용자에 profile을 가져옴
- email, nickname, snsId, age_range, gender, phone_number, profile_img의 정보를 가져오고 provider="kakao", wallet=0, level="기부니", created_at:connected_at을 부여하여 기본 정보 값을 설정함
- 이미 있는 사용자에 대해서는 done실행

<hr/>

# /payments (결제관련함수)

~~## /fail
- 테스트용**(Legacy)**~~

~~## /charge
- 결제용**(Legacy)** ~~

## /saveWalletRecords
- 인간지능을 이용할 때 결제 형식을 작성하여 제출함
- 예금주명, 요청기브, 신청시간의 정보를 받아서 submit 테이블에 저장함
- 예금주명이 없을 시 fail로 redirect
- 모든 정보작성 완료 시 결제페이지창으로 redirect

## /continuePayments
- 위조공격방지를 위해 csrf Protection 사용
- 기부앤테이크 결제에 관한 기능
- 사용자가 기부하고자 하는 기브보다 현재 갖고있는 기브보다 클 경우 /fail로 redirect
- 사용자가 기부하고자 하는 기브보다 현재 갖고있는 기브보다 작을 경우 사용자가 기부하고자 하는 기브가 가능한지 조회하고 이에 사항에 해당하지 않을 시 /fail로 redirect
- 위에 두 조건을 만족시 현재 기부하고자 하는 물품에 대한 정보를 조회 후, 백엔드에서 다시 한번 그 물품에 대한 정보를 조회하여 이상있는지 확인(동시 결제를 막을 수 있음)
- 사용자가 기부한 기브가 마지막 기부(목표금액 달성)일 시 현 기부물품건에 대한 status를 2로 저장하고 다음 회차에 기부물품 status값을 1로 바꿔줌으로 다음 회차 기부를 열어줌
- 사용자가 기부한 기브가 마지막 기부(목표금액 달성)일 시 결제한 유저를 대상으로 추첨결과(물품당첨/굿즈응모권/기부증서)를 부여함
- 물품당첨자는 굿즈응모권사용자가 될수 없으며 2명의 굿즈응모권은 다른 사람이어야 함
- 단, 2명의 참가자가 기부 목표금액을 달성 시 물품당첨자1명 굿즈응모권1명을 선택함
- 만약 굿즈 응모권이나 물품당첨자가 중복되면, 그 전 당첨자정보는 놔두고 겹친 후자건에 대해 랜덤함수를 다시 실행함
- 사용자가 기부한 기브가 마지막 기부(목표금액 달성)일 시 결제한 모든 사용자에 대해 알림을 발송, 끝난 기부건에 당첨자와 굿즈응모권 사용자 정보를 저장함
- 사용자가 기부를 마칠 시, 사용자가 기부한 금액과 현 모인기부금액을 합산하여 업데이트함
- 사용자가 기부를 마칠 시, 기부에 대한 정보가 donation_transaction 테이블에 쌓임
- 사용자가 기부를 마칠 시, 기부상품번호가 생성되며 그 상품번호를 기반으로 영수증페이지로 redirect함
- 기부상품번호는 기부한 년도 날짜 시간과 난수 10자리를 이용하여 생성함

## /continuePaymentGabang
- 위조공격 방지를 위해 csrf Protection을 사용함
- 가방프로젝트 결제에 관한 기능
- 사용자가 기부하고자 하는 기브보다 현재 갖고있는 기브보다 클 경우 /fail로 redirect
- 사용자가 기부하고자 하는 기브보다 현재 갖고있는 기브보다 작을 경우 사용자가 기부하고자 하는 기브가 가능한지 조회하고 이에 사항에 해당하지 않을 시 /fail로 redirect
- 위에 두 조건을 만족시 현재 기부하고자 하는 물품에 대한 정보를 조회 후, 백엔드에서 다시 한번 그 물품에 대한 정보를 조회하여 이상있는지 확인(동시 결제를 막을 수 있음)
- 사용자가 기부한 기브가 마지막 기부일 시, 해당 건에 대한 status값을 4로 업데이트
- 사용자가 기부를 마칠 시, 기부에 대한 정보가 donation_transaction 테이블에 쌓임
- 사용자가 기부를 마칠 시, 기부상품번호가 생성되며 그 상품번호를 기반으로 영수증페이지로 redirect함
- 기부상품번호는 기부한 년도 날짜 시간과 난수 10자리를 이용하여 생성함

## /callback
- 웹에서 아임포트 결제시 실행되는 콜백함수
- 사용자에 결제금액, 사용자 snsId, 주문번호를 iamport 테이블에 저장함
- 기부상품번호는 기부한 년도 날짜 시간과 난수 10자리를 이용하여 생성함

## /iamportCallBack
- 아임포트 웹훅함수
- 앙임포트 주문번호, 자체주문번호, 상태값을 req.body로 parsing함
- status가 paid일시 아임포트 rest_api키와 시크릿키를 이용하여 access token을 부여받음
- access token을 이용하여 아임포트에 저장된 정보를 가져옴
- 아임포트정보와 자체 데이터베이스에 저장된 정보를 비교하여 위조공격을 막음
- 사용자의 결제사항이 확인되면 금액에 맞는 기브를 사용자 지갑에 업데이트함
- 그 외의 status paid외의 사항일 시 메인으로 redirect

## /mobileCallback/:amount
- 모바일웹에서 아임포트 결제시 실행되는 콜백함수
- query parameter로 주문번호, params로 금액을 받아 iamport 데이터베이스에 저장함
- 기부상품번호는 기부한 년도 날짜 시간과 난수 10자리를 이용하여 생성함
