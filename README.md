<!-- 프로젝트 제목 -->
<div align="center">
  <h1>Restaurant App</h1>
</div>
<br />

<!-- 프로젝트 설명 -->
## 🍽️ About The Project
> <b>해당 프로젝트는 레스토랑 및 음식 배달을 위해 구축되었으며 주요 기능으로는 상품 추가, 삭제, 배송 상태 변경,<br/>장바구니 추가, 상품 주문이 가능한 Restaurant App 입니다.</b>
<br />

<!-- 프로젝트 구조 -->
## 💼 Project Structure
<img src="https://github.com/amh6281/Restaurant-App/assets/83646986/a53a64d1-8ebb-47ab-b670-01c722227a89"/>
<br />

<!-- 기술 스택 -->
## 💪 Skills
<img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white"/> <img src="https://img.shields.io/badge/next%20js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white"/>
<img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=whitee"/> <img src="https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white"/>
<img src="https://img.shields.io/badge/React_Query-FF4154?style=for-the-badge&logo=React_Query&logoColor=white"/> <img src="https://img.shields.io/badge/Stripe-626CD9?style=for-the-badge&logo=Stripe&logoColor=white"/>
<img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white"/>
<br />
<br />

<!-- 프로젝트 스크린샷 -->
## 🖼️ Screenshots
<!-- 홈 페이지 스크린샷 -->
<h2>Home Page</h2>
<div>
  <img src="https://github.com/amh6281/Restaurant-App/assets/83646986/ab7034b2-b508-4663-853c-05a09075d980" /> <br />
   <b>Home page는 아래의 컴포넌트로 구성되어있습니다.</b>

  - **Slider**: 웹 애플리케이션 홍보를 위한 컴포넌트로, setInterval 함수를 사용하여 2초마다 한 번씩 현재 슬라이드 인덱스를 업데이트합니다.

  - **Featured**: 슬라이더 바로 아래로 추천 메뉴 항목이 표시되어 가장 인기 있고 맛있는 상품을 사용자에게 제공하고 있습니다.

  - **Offer Component**: 이벤트 프로모션을 위한 컴포넌트로, 사용자는 할인 상품을 확인하고 주문할 수 있습니다.
</div>
<br />

<!-- 메뉴 페이지 스크린샷 -->
<h2>Menu Page</h2>
<div>
  <img src="https://github.com/amh6281/Restaurant-App/assets/83646986/45fd514f-0200-4486-b8b4-22c7fe0f3d1f" /><br />
  <b>Category data fetching 후 렌더링 작업을 수행하였습니다.</b>
</div>
<br />

<!-- 상품 페이지 스크린샷 -->
<h2>Product Page</h2>
<div>
  <img src="https://github.com/amh6281/Restaurant-App/assets/83646986/bf56a2f7-b214-49c7-a648-eb53cb4c6587" /><br />

  - Params 객체의 id를 추출하고, 해당 id를 기반으로 SingleProduct의 data를 가져와 렌더링하는 과정을 수행하였습니다.
    
  - 장바구니 추가 및 삭제 등의 상태 관리는 Zustand 라이브러리를 사용하였습니다.
</div>
<br />

<!-- 주문 페이지 스크린샷 -->
<h2>Order Page</h2>
<div>
  <img src="https://github.com/amh6281/Restaurant-App/assets/83646986/50e157e1-5d88-4b81-9ecc-e6b192868ceb" /><br />
  <b>결제 모듈로는 Stripe API를 사용하였습니다. 주문 확인 관련 기능은 다음과 같이 구현하였습니다.</b>

  - 만약 `session.user.isAdmin`이 `true`인 경우, 관리자 권한으로 모든 주문을 확인할 수 있습니다.

  - `session.user.isAdmin`이 `false`이고, `userEmail`이 `session.user.email`과 일치하는 경우에만<br />주문을 확인할 수 있도록 조건문을 활용하였습니다.
</div>
<br />

<!-- 관리자 기능 스크린샷 -->
<h2>주문 현황 변경</h2>
<div>
  <img src="https://github.com/amh6281/Restaurant-App/assets/83646986/bdf987f0-a2d6-4f0b-aff9-79bd397d140d" /><br />
  
  - 관리자는 사용자의 주문 현황을 변경할 수 있습니다.
    
  - React-Query의 useQuery를 이용하여 주문 내역을 가져오고, useMutation을 이용하여 주문 현황을 수정할 수 있습니다.
</div>
<br />

<h2>상품 추가 기능</h2>
<div>
  <img src="https://github.com/amh6281/Restaurant-App/assets/83646986/ecd4f2ab-19ea-4144-b796-60ef0cd602a3" /><br />
  <b>session.user.isAdmin이 true일 경우 상품 정보를 기입 후 상품을 생성할 수 있습니다.</b>
</div>
<br />

<h2>상품 삭제 기능</h2>
<div>
  <img src="https://github.com/amh6281/Restaurant-App/assets/83646986/c88b4438-d98f-4782-a371-dceb7a59ad3a" /><br />
  <b>session.user.isAdmin이 true일 경우 SingleProduct page에서 상품을 삭제할 수 있습니다.</b>
</div>
<br />

<!-- 로그인 페이지 스크린샷 -->
<h2>Login Page</h2>
<div>
  <img src="https://github.com/amh6281/Restaurant-App/assets/83646986/23353aaa-0efe-4803-be9b-a447a6835971" /><br />
  <b>Next-Auth를 통해 Google 및 Facebook 로그인 기능을 구현하였습니다.</b>
</div>
<br />

<!-- 부가 설명 -->
## 📝 부가 설명
- react-toastify를 사용하여 알림 기능 구현
- Cloudinary를 사용하여 이미지 업로드 기능 구현
