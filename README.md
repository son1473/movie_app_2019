# Movie App 2019

React JS fundamentals Course (2019 Update!)

## 알게 된 것을 적을 것

### 아무것도 안하기 보단 코딩이라도 하는게 낫다.

### 나는 서비스를 만드는 것.

### 서비스를 만드는 사람이 될 것임.

### react class component는 render 말고도 많은 기능이 있음.

#### ex) mounting, updating, unmounting 등등

### render 전에 생성 되는 것, render 중에 생성 되는 것, render 후에 생성 되는 것을 알아보겠음.

1. mounting 태어나는 것  
   마운팅은 constructor() > render() > componentDidMount() 가 실행되면서 컴포넌트가 시작됨.

2. updating 업데이트 되는 것  
   내가 뭔가를 클릭하면 상태변화가 일어나는데 이걸 업데이트라고 함  
   클릭 > render() 랜더링 > componentDidUpdate()  
   이렇게 실행되면서 업데이트가 완료 됨.

3. unmounting 컴포넌트(component)가 죽는 것을 의미함  
   그게 컴포넌트가 돔에서 제거 될 때를 의미  
   componentWillUnmount()

### setTimeout 이란?

#### js 시간 지연 함수, 일정 시간 뒤 실행시키는 것.

#### 코드작성 방법

#### setTimeout(function() { // Code here }, delay);

### data를 가져오는 것 : fetch

#### 하지만 니꼬는 fetch 대신 axios 가 더 좋은 방법이라고 한다.

#### axios로 데이터를 가져올 것임

#### npm i axios 하고 import axios

### yts API 사용하기.

#### https://yts.mx/api/v2/list_movies.json

#### 니꼬의 프록시 url https://yts.mx/api/v2/list_movies.json

#### {data: {data: { movies },},} 이것은 data.data.movies와 같다.

#### 함수가 끝나고 나는 걸 확인하려고 async await를 사용함.

### 코딩이 어떻게 일어나는가

데이터 가져옴(axios 함).
그것을 setState로 상태에 있는 영화 배열에 추가하였고,
데이터를 가져오는 것이 완료되면 로딩이 완료 준비됨이라는 표시로 만듬.
