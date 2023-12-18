class Button extends React.Component{
    render() {
        return (
            <button className="btn">{this.props.buttonLabel}</button>
        )
    }
}

Button.defaultProps = { buttonLabel: 'submit'}

Button.propTypes = {
    handler: PropTypes.func.isRequired,
    title: PropTypes.string,
    email(props, propName, componentName) {
        let emailRegex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i
        if(!emailRegex.test(propName)) {
            return new Error('email validation failed')
        }
    }
}