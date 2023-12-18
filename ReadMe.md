Quiz 7

1. 제어 컴포넌트 value를 설정하고, 비제어 컴포넌트는 value를 설정하지 않는다

2. 기본값을 설정하는 방법
> defaultValue

3. React에서 onInput보다 onChange 사용을 권장

4. React에서 `<textarea>` 입력값 설정을 value를 통해 설정한다

5. form의 selected는 `<option>`에서 사용할 수 있다

6. React에서 참조를 통해 DOM 노드를 가져오는 best practices는
> ReactDom.findDOMNone(this.refs.name)

---
요약
- 폼을 다루는 방법 중 권장하는 방법은 변경을 감지하여 이벤트 리스너로 상태에 데이터를 저장하는 제어 컴포넌트 사용하는 것이다
- 변경을 감지 하거나 감지하지 않는 비제어 컴포넌트를 사용하는 방법은 좋은 방법이 아니므로 피하는 것이 좋다
- React의 `<textarea>`는 innerHTML대신 value속성을 사용한다
- this.refs.NAME은 클래스 참조에 접근하는 방법인다
- defaultValue는 엘리먼트 초기 뷰(DOM)를 설정할 떄 사용 할 수 있다
- 참조를 설정하려면 ref={el => {this.input = el;}} 처럼 함수를 사용하거나 ref="NAME"으로 문자열을 사용할 수 있다