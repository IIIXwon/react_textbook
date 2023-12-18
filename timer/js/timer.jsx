class TimerWrapper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            originTime: null, timeLeft: null, timer: null, timerStatus: null
        }
        this.startTimer = this.startTimer.bind(this)
        this.pauseTimer = this.pauseTimer.bind(this)
        this.resumeTimer = this.resumeTimer.bind(this)
        this.cancelTimer = this.cancelTimer.bind(this)
        this.initTimer = this.initTimer.bind(this)
    }

    startTimer(timeLeft) {
        clearInterval(this.state.timer)
        let timer = setInterval(() => {
            var timeLeft = this.state.timeLeft - 1;
            if (timeLeft === 0) clearInterval(timer)
            this.setState({
                timeLeft: timeLeft
            })
        }, 1000)
        return this.setState({originTime: timeLeft, timeLeft: timeLeft, timer: timer, timeStatus: null})
    }

    pauseTimer(timeLeft) {
        clearInterval(this.state.timer)
        return this.setState({timeLeft: timeLeft, timeStatus: null})
    }

    resumeTimer(timeLeft) {
        let timer = setInterval(() => {
            var timeLeft = this.state.timeLeft - 1;
            if (timeLeft === 0) clearInterval(timer)
            if (timeLeft < 0) clearInterval(timer)
            this.setState({
                timeLeft: timeLeft
            })
        }, 1000)
        return this.setState({timeLeft: timeLeft, timer: timer, timeStatus: null})
    }

    cancelTimer() {
        clearInterval(this.state.timer)
        return this.setState({timeLeft: 0, timer: null, timerStatus: 'cancel'})
    }

    initTimer() {
        this.setState({timeLeft: this.state.originTime})
    }

    render() {
        return (<div>
            <h1>Timer</h1>
            <br/>
            <Button timeLeft={5 * 60} timer={this.startTimer}></Button>
            <Button timeLeft={10 * 60} timer={this.startTimer}></Button>
            <Button timeLeft={15 * 60} timer={this.startTimer}></Button>
            <Button timeLeft={this.state.timeLeft} timer={this.pauseTimer} name='일시정지'></Button>
            <Button timeLeft={this.state.timeLeft} timer={this.resumeTimer} name='재시작'></Button>
            <Button timer={this.cancelTimer} name='취소'></Button>
            <Button timer={this.initTimer} name='최기화'></Button>
            <br/>
            <Timer second={this.state.timeLeft} status={this.state.timerStatus}></Timer>
            <Audio second={this.state.timeLeft} status={this.state.timerStatus}></Audio>

        </div>)
    }
}






ReactDOM.render(<TimerWrapper></TimerWrapper>, document.querySelector('#timer-app'))