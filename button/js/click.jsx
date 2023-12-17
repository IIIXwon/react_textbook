class Click extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 0
        }
    }

    click(event) {
        this.setState({number: this.state.number += 1})
    }

    render() {
        return (
            <button onClick={this.click.bind(this)}>
                click {this.state.number}
            </button>
        )
    }
}