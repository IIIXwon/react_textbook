class Content extends React.Component {
    constructor(props) {
        super(props)
        this.launchClock()
        this.state = {
            counter: 0,
            time: (new Date()).toLocaleTimeString()
        }
    }

    launchClock() {
        setInterval(() => {
            this.setState({
                counter: ++this.state.counter,
                currentTime: (new Date()).toLocaleTimeString()
            })
        }, 1000)
    }

    render() {
        console.log(this.state.counter)
        if (this.state.counter > 2) return <div/>
        return <Logger time={this.state.currentTime}></Logger>
    }
}