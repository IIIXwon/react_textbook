Quiz 5

1. 이벤트 선언
> onClick={this.doStuff}

2. componentDidMount()는 서버 측 렌더링에서는 실행되지 않는다

3. 데이터를 컴포넌트 계층 트리의 위쪽으로 옮겨서 여러 자식 컴포넌트에 전달할 수 있다

4. React가 이벤트 객체를 재사용하므로 비동기적으로 사용할 수 없다. 비동기적으로 사용하거나 이벤트 핸들러 외부에서 사용하라면 합성 이벤트 객체의 persist() 메서드를 호출해야 한다

5. 컴포넌트 라이프사이클 이벤트 리스너를 설정하면 다른 라이브러리와 통합하거나 React가 지원하지 않는 이벤트를 사용할 수 있다

---
요약
- onClick은 마우스와 트랙패드의 클릭을 캡쳐한다
- JSX문법으로 이벤트 리스너를 추가할 떄는 `<a onNAME={this.METHOD}>`로 작성한다
- constructor() 또는 JSX를 이용해 bind()로 이벤트 핸들러에 this를 바인딩해서 컴포넌트 클래스의 인스턴스에 접근할 수 있다
- componentDidMount()는 브라우저에서만 실행된다. componentWillMount()는 브라우저와 서버 측 렌더링에서 모두 실행된다
- React는 합성 이벤트 객체를 제공함으로써 거의 대부분의 표준 HTML DOM 이벤트를 지원한다
- React를 다른 프레임워크와 통합하거나 React가 지원하지 않는 이벤트를 처리하기 위해 componentDidMount()와 componentWillUnmount()를 사용할 수 있다