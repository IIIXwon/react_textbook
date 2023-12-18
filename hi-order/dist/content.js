
class Button extends React.Component {
    render() {
        return React.createElement(
            "button",
            {
                className: "btn btn-primary",
                onClick: this.props.handleClick },
            this.props.label
        );
    }
}
class Link extends React.Component {
    render() {
        return React.createElement(
            "a",
            { onClick: this.props.handleClick, href: "#" },
            this.props.label
        );
    }
}
class Logo extends React.Component {
    render() {
        return React.createElement("img", { onClick: this.props.handleClick, width: "40", src: "https://github.com/azat-co/react-quickly/blob/master/ch08/hi-order/logo.png", href: "#" });
    }
}

let EnhancedButton = LoadWebsite(Button);
let EnhancedLink = LoadWebsite(Link);
let EnhancedLogo = LoadWebsite(Logo);

ReactDOM.render(React.createElement(
    "div",
    null,
    React.createElement(EnhancedButton, null),
    React.createElement("br", null),
    React.createElement("br", null),
    React.createElement("br", null),
    React.createElement(EnhancedLink, null),
    React.createElement("br", null),
    React.createElement("br", null),
    React.createElement("br", null),
    React.createElement(EnhancedLogo, null),
    React.createElement("iframe", { id: "frame", width: "600", height: "600" })
), document.querySelector('#content'));