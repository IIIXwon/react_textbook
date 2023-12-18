
class Button extends React.Component {
    render() {
        return <button
            className="btn btn-primary"
            onClick={this.props.handleClick}>
            {this.props.label}
        </button>
    }
}
class Link extends React.Component {
    render() {
        return <a onClick={this.props.handleClick} href="#">{this.props.label}</a>
    }
}
class Logo extends React.Component {
    render() {
        return <img onClick={this.props.handleClick} width="40" src="https://github.com/azat-co/react-quickly/blob/master/ch08/hi-order/logo.png" href="#"/>
    }
}

let EnhancedButton = LoadWebsite(Button);
let EnhancedLink = LoadWebsite(Link);
let EnhancedLogo = LoadWebsite(Logo);

ReactDOM.render(
    <div>
        <EnhancedButton></EnhancedButton>
        <br/>
        <br/>
        <br/>
        <EnhancedLink></EnhancedLink>
        <br/>
        <br/>
        <br/>
        <EnhancedLogo></EnhancedLogo>
        <iframe id="frame" width="600" height="600"></iframe>
    </div>,
    document.querySelector('#content')
)