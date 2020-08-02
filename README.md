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

#### this.state.isLoading은 이렇게 다시 표현할 수 있다.

#### const {isLoading} = this.state로 표현

#### this.state.movies도 불러오려면 따로 변수선언치 않고 이렇게 표현할 수 있다.

#### const {isLoading, movies} = this.state;

#### movies.map() this.state.movies array에 map() 함수를 실행

#### map 함수란?

#### map() 메서드는 배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환합니다.

#### 초반 강의 때 나온 부분 Movie 함수는 component로 사용함

#### <Movie /> 이것이 component

#### array에

#### ES6 => 함수에 익숙해질 필요가 있겠다.

#### 준비가 완료 되면 실행되는 것

#### state 속 movies 배열에는 영화 데이터가 담긴 오브젝트가 20개 있을 것임.

#### 그 각각 오브젝트에다 함수를 실행하고 반환값을 받는게 map()함수임.

#### map 함수로 각 오브젝트를 movie라 칭하고(그냥 매개변수임) 무언가를 실행할 건데 그게 뭐냐 import 해온 <Movie /> 컴포넌트(함수)임 (Movie.js에 만들어 놓음)

#### 거기 들어가서 인자를 할당할 건데, id = {그 오브젝트.id}
