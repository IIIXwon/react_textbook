class Content extends React.Component {
    constructor(props) {
        super(props);
        this.submit = this.submit.bind(this);
        this.prompt = 'Please enter your email to win $1,000,000.';
        this.emailInput = '';
    }
    submit(event) {
        let comment = this.refs.comment;
        console.log(ReactDOM.findDOMNode(this.emailInput).value);
        console.log(ReactDOM.findDOMNode(comment).value);
    }
    render() {
        return React.createElement(
            'div',
            { className: 'well' },
            React.createElement(
                'p',
                null,
                this.prompt
            ),
            React.createElement(
                'div',
                { className: 'form-group' },
                'Email: ',
                React.createElement('input', { ref: input => {
                        this.emailInput = input;
                    }, className: 'form-control', type: 'text', placeholder: 'react@react.com' })
            ),
            React.createElement(
                'div',
                { className: 'form-group' },
                'Comments: ',
                React.createElement('textarea', { ref: 'comment', className: 'form-control', placeholder: 'I like your web site' })
            ),
            React.createElement(
                'div',
                { className: 'form-group' },
                React.createElement(
                    'a',
                    { className: 'btn btn-primary', value: 'Submit', onClick: this.submit },
                    'SubMit'
                )
            )
        );
    }
}
ReactDOM.render(React.createElement(Content, null), document.querySelector('#uncontroll'));