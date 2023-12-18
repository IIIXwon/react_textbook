class Content extends React.Component {
    constructor(props) {
        super(props);
        this.submit = this.submit.bind(this)
        this.prompt = 'Please enter your email to win $1,000,000.'
        this.emailInput = ''
    }
    submit(event) {
        let comment = this.refs.comment;
        console.log(ReactDOM.findDOMNode(this.emailInput).value);
        console.log(ReactDOM.findDOMNode(comment).value);
    }
    render() {
        return (
            <div className="well">
                <p>{this.prompt}</p>
                <div className="form-group">
                    Email: <input ref={(input) => { this.emailInput = input}} className="form-control" type="text" placeholder="react@react.com"/>
                </div>
                <div className="form-group">
                    Comments: <textarea ref="comment" className="form-control" placeholder="I like your web site"></textarea>
                </div>
                <div className="form-group">
                    <a className="btn btn-primary" value="Submit" onClick={this.submit}>SubMit</a>
                </div>
            </div>
        )
    }
}
ReactDOM.render(
    <Content></Content>,
    document.querySelector('#uncontroll')
)