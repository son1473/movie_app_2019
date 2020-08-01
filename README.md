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
