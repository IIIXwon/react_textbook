class Content extends React.Component{
    render() {
        let number = 1
        return (
            <div>
                <div>
                    <Button buttonLabel="Start"/>
                    <Button></Button>
                    <Button title={number}></Button>
                    <Button></Button>
                    <Button email="not-a-valid-email"></Button>
                    <Button email="test@test.com"></Button>
                </div>
                <div className="content">
                    {this.props.children}
                </div>
            </div>
        )
    }
}

ReactDOM.render(
    <div>
        <Content>
            <h1>heloo</h1>
            <p>rock</p>
        </Content>
        <Content>
            <a href="http://react.rocks">http://react.rocks</a>
        </Content>
    </div>,
    document.querySelector('#content')
)