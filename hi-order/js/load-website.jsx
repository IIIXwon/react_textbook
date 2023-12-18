const LoadWebsite = (Component) => {
    class _LoadWebsite extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                label: 'run',
                handleClick: this.handleClick.bind(this)
            }
        }
        getUrl() {
            return 'https://facebook.github.io/react/docs/top-level-api.html'
        }
        handleClick(event) {
            var ifram = document.getElementById('frame').src = this.getUrl()
        }

        componentDidMount() {
            console.log(ReactDOM.findDOMNode(this))
        }

        render() {
            console.log(this.state)
            return (
                <Component {...this.state} {...this.props} {...[1,2,3,4,5]}></Component>
            )
        }
    }
    _LoadWebsite.displayName = 'EnhancedComponent'
    return _LoadWebsite
}