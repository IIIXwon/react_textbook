class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(event) {
        this.setState({
            counter: this.state.counter += 1
        })
    }

    render() {
        return (
            <div>
                <ClickCountButton handler={this.handleClick}></ClickCountButton>
                <br/>
                <Counter value={this.state.counter}></Counter>
            </div>
        )
    }
}