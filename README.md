# seoyoung
/* 이론 및 추가 관련 내용 or 키워드 */

**1차 세미나 실습 / 과제 : 0418

@ 자바스크립트 특징
1) 스크립트 언어 - 클래스 기반 객체 지향언어
  - 컴파일 되지 않은 언어가 사용되어 소스 노출이 크다
+ 2) Fixed values & variable value 존재
+ 3) Numbers are Always 64-bit Floating Point
4) 일급 객체 언어로 함수를 통해 무궁무진히 개발 가능
5) undefined 타입을 제외한 모든 것이 객체

@ var / let / const
1) function scope & block scope
2) 재선언, 재할당, 초기화 가능여부

@ hoisting - 변수의 정의가 그 범위에 따라 선언과 할당으로 분리

@ 기본 자료형
1) 원시자료형 : Boolean, Number, String, Symbol, Null, Undefined
2) 객체자료형 : Object - Array, Function

@ null / undefined / undeclared
1) null == undefined, null !== undefined
2) null : Object type, 값이 정해지지 않음
3) undefined : 타잆, 값이 정해지지 않음
4) undeclared : 선언도 안함

@ Array
1) 특정 배열 요소가 비어 있을 수도 있다; 연속적이지 않은 len 접근시 빈공간 생성
2) 선언방법 : 리터럴, 객체생성
+ 3) 유사배열 : 인덱스와 length 프로퍼티가 있는 객체
4) 접근 (배열의 참조) 
  - for-of : 엘리먼트 접근
  - for-in : 인덱스, 객체 키 접근
  - for-each : 엘리먼트 접근, 콜백등록 가능

@ Function
1) 일급객체 
  - 변수 or 데이터 구조에 담을 수 있다.
  - 파라미터, 반환값으로 사용가능

2) 함수 선언식 / 함수 표현식
3) 화살표 함수 : 익명함수 - 콜백함수에서 간결, this는 상위 스코프 this

@ Json - 자바 스크립트 객체 표현식
1) 프로퍼티(이름 + 값) / 메소드
2) 클라이언트와 통신 시 주로 사용

@ 연산자

------------------------------------------------

# hw1
1) 실습 정리
2) 팀원 Json 배열 만들고 forEach 사용하여 출력
  + 클래스 사용
**2차 세미나 실습 / 과제 : 0427

@ Node.js - 자바스크립트를 실행 시키는 런타임 환경
1) 비동기, non-blocking
2) 이벤트 기반

@ Express - NodeJS 기반의 웹 어플리케이션 프레임 워크
1) 서버를 구축하기 쉽게 틀을 제공
2) HTTP 요청에 대해 라우팅 및 미들웨어 기능 제공
3) bin / public / routes / views / app.js / package.json
4) routing - 특정 엔드포인트에 대한 클라이언트 요청에 애플리케이션이 응답하는 방법을 결정
5) 폴더, 파일 라우팅

@ EVENT-DRIVEN - 이벤트가 발생할 때 미리 지정해둔 작업을 수행
1) call stack : 실행되는 함수들이 쌓이는 곳
2) background : 로직이 실행되는 공간
3) callback que : 이벤트 발생 후 콜백함수들이 기다리는 공간
4) event loop : 콜백큐의 콜백함수를 콜스택이 비어있을 때 전달
5) callback function :  어떤 이벤트가 발생한 후, 수행될 함수

@ 동기 / 비동기
 1) 순차적 작업을 위한 흐름제어
 2) promise 
  - pending, fulfilled, rejected 
  - then, catch
  - resolve, reject
 3) async & await : 가독성 좋음, 효과적 콜백헬 해결

@ 모듈 - 독립된 기능을 하는 함수나 변수들의 집합
1) Client-side의 Javascript에서 문제가 되는 전역변수의 중복 문제해결

@ 내장모듈 중 "crypto" - 문자열을 암호화, 복호화, 해싱하는 모듈
1) 단방향 암호화 방식
2) salt : 암호화 중 해싱을 할 때 추가되는 임의의 문자열
3) Key Streching : 반복적으로 해싱하는 암호화 방식.
4) crypto.pbkdf2 (password, salt, iterations, keylen, digest, callback)
  - pbkdf2 (비밀번호, 솔트 값, 반복 횟수, 출력 byte, 해시 알고리즘, callback)

@ 내장모듈 중 "file system module" - 파일 생성, 삭제, 읽기, 쓰기 등 수행 OR 폴더 생성, 삭제
1) 비동기방식
  - fs.readFile(path, [options], callback)
  - fs.writeFile(file, data, [options], callback)
2) 동기방식
  - fs.readFileSync(path, [options])
  - fs.writeFileSync(file, data, [options])

# hw2
1) 실습 정리
2) 미션 - promise 로직, 계산기 모듈화, 비밀번호 암호화 & 파일시스템
3) Express 생성 후 라우팅하기
 
 # hw3
1) 로그인, 프로필 조회
2) 패스워드 hash, salt값과 저장
3) posting서버 구축하기

 # hw4
1) 데이터베이스 설계, 테이블 만들기, 데이터 조회하기 - 회원가입 & 로그인 구현
2) 프로필 조회기능 추가
3) post기능 완성시키기

 # hw5
1) user/post 연결 후 ERD 나타내기
2) EC2 / RDS 연결 후 postman 테스트 - 회원가입 & 로그인
3) EC2 / RDS 연결 후 postman 테스트 - 포스트

# hw6 - 합동세미나 
## https://github.com/SOPT-COLLABO
1) API 문서 - 스프레드시트 & wiki
2) 구조 ERD 제출
3) API / EC2 테스트

# hw7
1) 실습자료 제출 multer & s3
2) 합동세미나 architecture 그리기
3) 사진 여러개 받는 서버 구축하기
