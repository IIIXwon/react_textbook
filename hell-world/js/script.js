let h1 = React.createElement('h1', null, 'hello world!');
class HelloWorlds extends React.Component {
    render() {
        return React.createElement(
            'h1',
            this.props,
            'hello ' + this.props.frameworkName + ' world!!!'
        );
    }
}

ReactDOM.render(
    React.createElement('div',null,
        React.createElement(HelloWorlds, {
            id: 'emeber',
            frameworkName: 'Ember.js',
            title: 'A framework for creating ambitious web applications.'}),
        React.createElement(HelloWorlds, {
            id: 'backbone',
            frameworkName: 'Backbone.js',
            title: 'Backbone.js give structure to web applications.'}),
        React.createElement(HelloWorlds, {
            id: 'angular',
            frameworkName: 'Angular.js',
            title: 'Superheroic JavaScript MVW Framework'})
    ),
    document.querySelector('#content')
)