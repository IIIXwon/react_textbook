let helloWorldReactElement = <h1>Hello world</h1>;
let inputValue = '서울'

class Autocomplete extends React.Component{
    updateValue() {
        this.props.inputValud = '부산'
        inputValue = '부산'
        this.inputValue = '부산'
    }
    render() {
        return (
            <div>
                {this.props.inputValue}
                {inputValue}
                {this.inputValue}
            </div>
        )
    }
}

ReactDOM.render(
    <Autocomplete/>,
    document.querySelector('#autocomplete')
)
class HelloWorld extends React.Component {
    render() {
        return (
            <div className={!this.props.admin ? 'hidden' : 'display'}>
                {helloWorldReactElement}
                {helloWorldReactElement}
            </div>
        )
    }
}

class ProfileLink extends React.Component {
    render() {
        return (
            <a
                href={this.props.url}
                title={this.props.label}
                target="_blank"
            >Profile
            </a>
        )
    }
}

class Content extends React.Component {
    getUrl() {
        return (
            'http://shwan.be:8081'
        )
    }

    render() {
        return (
            <div>
                <p>
                    My REST API URL is : <a href={this.getUrl()}>{this.getUrl()}</a>
                </p>
            </div>
        )
    }

}

ReactDOM.render(
    <Content/>,
    document.querySelector('#content')
)
ReactDOM.render(
    <ProfileLink url='/user/iiixwon' label='Profile for iiixwon'/>,
    document.querySelector('#profile')
)
ReactDOM.render(
    <HelloWorld admin={false}/>,
    document.querySelector('#helloworld')
)