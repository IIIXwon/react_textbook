Quiz 5

1. componentWillMount()는 서버 렌더링 시에도 호출된다

2. componentWillMount -> componentDidMount 순으로 호출된다

3. componentWillMount는 서버에서 데이터를 가져오기 위해 ajax 요청을하기 적절한 이벤트 핸들러다

4. componentWillReceiveProps는 부모의 구조로부터 속성 값이 새로운 값을 전달받았는지 확신할 수 없다

5. ...Mount 이벤트는 한번 발생한다

---
요약
- componentWillMount()는 서버와 클라이언트에서 모두 실행되는 반면에, componentDidMount()는 클리언트에서만 실행된다
- 마운팅 이벤트는 일반젇으로 React를 다른 라이브러리와 통합하거나 저자소 또는 서버에서 데이터를 가져올떄 사용한다
- shouldComponentUpdate() 사용해서 렌더링을 최적화할 수 있다 return true or false
- componentWillReceiveProps()를 사용하면 새로운 속성이 전달될 때 상태를 변경할 수 있다, 다만 렌더링은 되지 않는다
- 언마운팅 이벤트는 일반적으로 정리에 사용된다
- 갱신 이벤트는 새로운 속성이나 상태를 의존하는 로직을 작성할 떄 사용 되고, 뷰를 갱신하는 시점을 세밀하게 조절할 수 있다