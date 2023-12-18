class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menus: []
        }
    }

    componentWillMount() {
        fetch('http://localhost:8080/menus.json')
            .then(data => data.json())
            .then((obj) => {
                debugger;
                this.setState({menus: obj.menus})
            })
    }

    render() {
        // const menus = ['Home', 'About', 'Service', 'Portfolio', 'Contact us']
        return (
            <div>
                {this.state.menus.map((v, i) => {
                    return (
                        <div key={i}>
                            <Link label={v}></Link>
                        </div>
                    )
                })}
            </div>
        )
    }

}

class Link extends React.Component {
    render() {
        const url = '/' + this.props.label.toLowerCase().trim().replace(' ', '-')
        return (
            <div>
                <a href={url}>{this.props.label}</a>
                <br/>
            </div>
        )
    }
}

ReactDOM.render(
    <Menu></Menu>,
    document.querySelector('#menu')
);