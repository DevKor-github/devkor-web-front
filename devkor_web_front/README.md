### Presentation & Container 패턴

React 디자인 패턴 중 가장 기본적인 패턴으로, **데이터 로직을 수행하는 Container 컴포넌트와 데이터를 출력하는 Presentation 컴포넌트를 분리**하여 구현하는 디자인 패턴입니다.

역할별 컴포넌트 분리로 인해 각각 명확한 기능과 책임을 갖습니다. 만약 분리하지 않고 하나의 컴포넌트 안에 로직, View를 구현하는 코드가 모두 있게 되면 컴포넌트 재사용이 어렵고, 컴포넌트 의존도가 높아지게 됩니다.

**Container(src/Containers) 컴포넌트**
- API 호출, State 관리, 이벤트 처리 등의 작업을 수행하는 컴포넌트입니다.
- 변경된 상태 값을 props를 통해 Presentation 컴포넌트로 전달해줍니다.

**Presentation(src/Components) 컴포넌트**
- UI를 표시하는 컴포넌트입니다.
- 직접 상태값을 관리하지 않고 Container 컴포넌트가 전달해준 props를 받아 출력만 해줍니다.

<img src="https://user-images.githubusercontent.com/78628241/234822403-77fd241f-7101-4b02-99b7-90b747defb0d.png" width="400"/>
<img src="https://user-images.githubusercontent.com/78628241/234824498-e985ad22-4cfa-474e-8b46-c2c3c0481f9e.png" width="400"/>


### 폴더 구조

- src/api : 서버의 API를 호출하는 소스 코드
- src/components : Presentation 컴포넌트를 담당하는 소스 코드
- src/containers : Container 컴포넌트를 담당하는 소스 코드
- src/pages : 라우팅되는 페이지 소스 코드
- src/styles : Global 스타일
- src/types : 컴포넌트 Props의 타입을 정의하는 interface 소스 코드
