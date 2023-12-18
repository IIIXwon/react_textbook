class TimerWrapper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            originTime: null, timeLeft: null, timer: null, timerStatus: null
        };
        this.startTimer = this.startTimer.bind(this);
        this.pauseTimer = this.pauseTimer.bind(this);
        this.resumeTimer = this.resumeTimer.bind(this);
        this.cancelTimer = this.cancelTimer.bind(this);
        this.initTimer = this.initTimer.bind(this);
    }

    startTimer(timeLeft) {
        clearInterval(this.state.timer);
        let timer = setInterval(() => {
            var timeLeft = this.state.timeLeft - 1;
            if (timeLeft === 0) clearInterval(timer);
            this.setState({
                timeLeft: timeLeft
            });
        }, 1000);
        return this.setState({ originTime: timeLeft, timeLeft: timeLeft, timer: timer, timeStatus: null });
    }

    pauseTimer(timeLeft) {
        clearInterval(this.state.timer);
        return this.setState({ timeLeft: timeLeft, timeStatus: null });
    }

    resumeTimer(timeLeft) {
        let timer = setInterval(() => {
            var timeLeft = this.state.timeLeft - 1;
            if (timeLeft === 0) clearInterval(timer);
            if (timeLeft < 0) clearInterval(timer);
            this.setState({
                timeLeft: timeLeft
            });
        }, 1000);
        return this.setState({ timeLeft: timeLeft, timer: timer, timeStatus: null });
    }

    cancelTimer() {
        clearInterval(this.state.timer);
        return this.setState({ timeLeft: 0, timer: null, timerStatus: 'cancel' });
    }

    initTimer() {
        this.setState({ timeLeft: this.state.originTime });
    }

    render() {
        return React.createElement(
            'div',
            null,
            React.createElement(
                'h1',
                null,
                'Timer'
            ),
            React.createElement('br', null),
            React.createElement(Button, { timeLeft: 5 * 60, timer: this.startTimer }),
            React.createElement(Button, { timeLeft: 10 * 60, timer: this.startTimer }),
            React.createElement(Button, { timeLeft: 15 * 60, timer: this.startTimer }),
            React.createElement(Button, { timeLeft: this.state.timeLeft, timer: this.pauseTimer, name: '\uC77C\uC2DC\uC815\uC9C0' }),
            React.createElement(Button, { timeLeft: this.state.timeLeft, timer: this.resumeTimer, name: '\uC7AC\uC2DC\uC791' }),
            React.createElement(Button, { timer: this.cancelTimer, name: '\uCDE8\uC18C' }),
            React.createElement(Button, { timer: this.initTimer, name: '\uCD5C\uAE30\uD654' }),
            React.createElement('br', null),
            React.createElement(Timer, { second: this.state.timeLeft, status: this.state.timerStatus }),
            React.createElement(Audio, { second: this.state.timeLeft, status: this.state.timerStatus })
        );
    }
}

ReactDOM.render(React.createElement(TimerWrapper, null), document.querySelector('#timer-app'));