class Account extends React.Component {
    constructor(props) {
        super(props);
        this.handlerInput = this.handlerInput.bind(this)
        this.state = {
            account: ''
        }
    }

    handlerInput(event) {
        console.log('typed: ', event.target.value)
        this.setState({account: event.target.value.replace(/[^0-9]/ig, '')})
    }

    render() {
        return (
            <div>
                account number:
                <input type="text" onChange={this.handlerInput} value={this.state.account} placeholder="123456"/>
                <br/>
                <span>{this.state.account.length > 0 ? 'you entered: ' + this.state.account : ''}</span>
            </div>
        )
    }
}

ReactDOM.render(
    <Account></Account>,
    document.querySelector('#account')
)