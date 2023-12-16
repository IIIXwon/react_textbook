class Logger extends React.Component {
    constructor(props) {
        super(props);
        console.log('constructor');
    }

    componentWillMount() {
        console.log('componentWillMount 실행');
    }

    componentDidMount(e) {
        console.log('componentDidMount 실행');
        console.log('Dom node: ', ReactDOM.findDOMNode(this));
        console.log('event e:', e);
    }

    componentWillReceiveProps(nextProp) {
        console.log('componentWillReceiveProps 실행');
        console.log('새로운 속성: ', nextProp);
    }

    shouldComponentUpdate(nextProp, nextState) {
        console.log('componentWillReceiveProps 실행');
        console.log('새로운 속성: ', nextProp);
        console.log('새로운 상태: ', nextState);
        return true;
    }

    componentWillUpdate(nextProp, nextState) {
        console.log('componentWillUpdate 실행');
        console.log('새로운 속성: ', nextProp);
        console.log('새로운 상태: ', nextState);
    }

    componentDidUpdate(oldProp, oldState) {
        console.log('componentDidUpdate 실행');
        console.log('이전 속성: ', oldProp);
        console.log('이전 상태: ', oldState);
    }

    componentWillUnmount() {
        console.log('componentWillUnmount 실행');
    }
    render() {
        return React.createElement(
            'div',
            null,
            this.props.time
        );
    }
}