## 프로젝트 소개

코로나 현황을 알려주는 웹 사이트

## 🌐프로젝트 링크

https://project-cut.netlify.app

## ⚙️개발 언어

Javascript, Nodejs

## ****💻****개발 스택

### Front
<p align='center'>
    <img src="https://img.shields.io/badge/React-v17.0.2-blue?logo=React"/>
    <img src="https://img.shields.io/badge/styled components-v5.3.1-pink?logo=react">
    <img src="https://img.shields.io/badge/axios-v0.21.1-blue?logo=axios">
</p>

### Back
<p align='center'>
    <img src="https://img.shields.io/badge/Express-v4.17.1-aaa?logo=express">
    <img src="https://img.shields.io/badge/request-v2.88.2-critical?logo=request">
</p>

## 배포

Front

- Netlify

Back

- Heroku

## ****⏱****개발기간

2021.08.27 ~ 2021.09.24 (약 2개월)

## 프로젝트 기능

- 로그인, 회원가입, 로그아웃 구현
- Jwt를 통해 로그인 유지
- 메인 페이지에서 오늘의 투두와 완료된 투두를 확인 , 수정 , 삭제 가능
- 달력으로 작성된 투두 확인 및 투두 수정, 삭제 가능
- 오늘 작성한 투두의 수, 완료 수, 달성률, 7일동안의 기록 등등의 데이터를 시각화
- 반응형으로 설계하여 모바일도 가능.

## 문제와 해결

1. Cors 문제

    - 클라이언트에서 axios로 openAPI를 받을수 없어 Express를 통해 데이터 수신

1. 데이터 시각화 방법

    - Chartjs를 이용하여 데이터를 도넛, 바 형태로 데이터를 시각화함.

## 추후 보완사항

- 월요일과 같은 날짜는 데이터가 집계되지 않는 일요일의 데이터와 비교하기 때문에 데이터가 집계되는 날짜와 비교하도록 바꿀것.
- 다크모드 적용- 
- 카카오맵 개선(커스텀 오버레이 닫기기능추가)

## 프로젝트 아키텍쳐

![image](https://user-images.githubusercontent.com/51808985/159130397-6e47f0fa-899a-4f95-91e4-d36c7c4e8ba2.png)

## 사이트 화면

### [국내 총 코로나 현황 집계화면(메인화면)]
![image](https://user-images.githubusercontent.com/51808985/146557756-707e1047-afc1-4985-b405-5dd8c3c034bb.png)

### [환자 현황과 지도로 국내 시도별 코로나 전일대비 확진자 표현]
![image](https://user-images.githubusercontent.com/51808985/146557815-0f383bfc-f082-4bd7-b3d5-9b1c152cd647.png)

### [카카오 맵 API를 이용한 주변 예방접종센터 확인]
![image](https://user-images.githubusercontent.com/51808985/146557835-5e177d5b-ea6a-47c4-adf2-fea12a10bd03.png)

### [해외 코로나 현황 화면]
![image](https://user-images.githubusercontent.com/51808985/146557857-6d74028e-8f69-4d19-968c-608dcb003a90.png)

### [존스 홉킨스 대학의 전세계 코로나 현황판]
![image](https://user-images.githubusercontent.com/51808985/146557884-b54d4445-ef69-4cbc-9766-056ea8aaa3a6.png)

### [네이버 API를 이용한 코로나 관련 뉴스]
![image](https://user-images.githubusercontent.com/51808985/146557901-303876e4-5073-4320-9e83-04c1ed50b425.png)

