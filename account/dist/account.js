class Account extends React.Component {
    constructor(props) {
        super(props);
        this.handlerInput = this.handlerInput.bind(this);
        this.state = {
            account: ''
        };
    }

    handlerInput(event) {
        console.log('typed: ', event.target.value);
        this.setState({ account: event.target.value.replace(/[^0-9]/ig, '') });
    }

    render() {
        return React.createElement(
            'div',
            null,
            'account number:',
            React.createElement('input', { type: 'text', onChange: this.handlerInput, value: this.state.account, placeholder: '123456' }),
            React.createElement('br', null),
            React.createElement(
                'span',
                null,
                this.state.account.length > 0 ? 'you entered: ' + this.state.account : ''
            )
        );
    }
}

ReactDOM.render(React.createElement(Account, null), document.querySelector('#account'));