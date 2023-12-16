class HelloWorlds extends React.Component {
    render() {
        return (
            <h1>
                {...this.props} Hello {this.props.frameworkName} word!!!
            </h1>
        )
    }
}

ReactDOM.render(
    <div>
        <HelloWorlds
            id='emeber'
            frameworkName='Ember.js'
            title='A framework for creating ambitious web applications.'/>,
        <HelloWorlds
            id='backbone'
            frameworkName='Ember.js'
            title='A framework for creating ambitious web applications.'/>,
        <HelloWorlds
            id='angular'
            frameworkName='Angular.js'
            title='Superheroic JavaScript MVW Framework'/>
    </div>,
    document.querySelector('#content')
)