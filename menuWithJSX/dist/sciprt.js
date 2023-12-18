class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menus: []
        };
    }

    componentWillMount() {
        fetch('http://localhost:8080/menus.json').then(data => data.json()).then(obj => {
            debugger;
            this.setState({ menus: obj.menus });
        });
    }

    render() {
        // const menus = ['Home', 'About', 'Service', 'Portfolio', 'Contact us']
        return React.createElement(
            'div',
            null,
            this.state.menus.map((v, i) => {
                return React.createElement(
                    'div',
                    { key: i },
                    React.createElement(Link, { label: v })
                );
            })
        );
    }

}

class Link extends React.Component {
    render() {
        const url = '/' + this.props.label.toLowerCase().trim().replace(' ', '-');
        return React.createElement(
            'div',
            null,
            React.createElement(
                'a',
                { href: url },
                this.props.label
            ),
            React.createElement('br', null)
        );
    }
}

ReactDOM.render(React.createElement(Menu, null), document.querySelector('#menu'));