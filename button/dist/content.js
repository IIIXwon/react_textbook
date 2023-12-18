class Content extends React.Component {
    render() {
        let number = 1;
        return React.createElement(
            "div",
            null,
            React.createElement(
                "div",
                null,
                React.createElement(Button, { buttonLabel: "Start" }),
                React.createElement(Button, null),
                React.createElement(Button, { title: number }),
                React.createElement(Button, null),
                React.createElement(Button, { email: "not-a-valid-email" }),
                React.createElement(Button, { email: "test@test.com" })
            ),
            React.createElement(
                "div",
                { className: "content" },
                this.props.children
            )
        );
    }
}

ReactDOM.render(React.createElement(
    "div",
    null,
    React.createElement(
        Content,
        null,
        React.createElement(
            "h1",
            null,
            "heloo"
        ),
        React.createElement(
            "p",
            null,
            "rock"
        )
    ),
    React.createElement(
        Content,
        null,
        React.createElement(
            "a",
            { href: "http://react.rocks" },
            "http://react.rocks"
        )
    )
), document.querySelector('#content'));