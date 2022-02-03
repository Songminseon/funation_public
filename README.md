# V 0.1.0

## DATE : 21-02-09

기부니가좋다 2차 베타서비스 오픈
기브앤테이크 오픈 with 동구밭

# V 0.2.0

## DATE : 21-02-15

웹팩 적용
기존 public -> /dist/myAssets으로 변환
local / test / deploy 분리

# V 0.3.0

## DATE : ?

가방프로젝트 적용 예정
비로그인 구현

# V 0.3.1

## DATE : 21-03-02

test와 production모드에서 db가 분리되지 않았던 점 수정
퍼네이션이 쏜다 265,000원 추가!
가방프로젝트에서 닉네임 변경 가능
기부앤테이크 물품 솔팅 수정

# V 0.3.2

## DATE : 21-03-08

webpack dev <-> webpack express 분리
홍보

# V 0.3.3

## DATE : 21-03-15

toss결제모듈
가방배너 변경

# V 0.3.4

## DATE : 21-04-03

동구밭 Blueroad 캠페인

## 향후 고쳐야 할 것

결제에 input에 string을 넣으면 숫자 반영은 되지만 인식이 잘 안되는거
json 복호화 할까말까
찜 res.sendstatus시 잘 안되는 점 보완

## 배포 할 때

auth, strategy url 변경
webpack 설정 변경
결제 url 변경
database => production

## 테스트 배포 할 시

public -> meta 태그 제외
