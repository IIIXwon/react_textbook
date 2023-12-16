let helloWorldReactElement = React.createElement(
    'h1',
    null,
    'Hello world'
);
class HelloWorld extends React.Component {
    render() {
        return React.createElement(
            'div',
            { className: !this.props.admin ? 'hidden' : 'display' },
            helloWorldReactElement,
            helloWorldReactElement
        );
    }
}

class ProfileLink extends React.Component {
    render() {
        return React.createElement(
            'a',
            {
                href: this.props.url,
                title: this.props.label,
                target: '_blank'
            },
            'Profile'
        );
    }
}

class Content extends React.Component {
    getUrl() {
        return 'http://shwan.be:8081';
    }
    render() {
        return React.createElement(
            'div',
            null,
            React.createElement(
                'p',
                null,
                'My REST API URL is : ',
                React.createElement(
                    'a',
                    { href: this.getUrl() },
                    this.getUrl()
                )
            )
        );
    }

}
ReactDOM.render(React.createElement(Content, null), document.querySelector('#content'));
ReactDOM.render(React.createElement(ProfileLink, { url: '/user/iiixwon', label: 'Profile for iiixwon' }), document.querySelector('#profile'));
ReactDOM.render(React.createElement(HelloWorld, { admin: false }), document.querySelector('#helloworld'));
