const React = require('react')
const ReactDOM = require('react-dom')
// const Router = require('react-router')
const Router = require('./router.jsx')
const mapping = {
  '#profile': <div>Profile (<a href="#">home</a>)</div>,
  '#accounts': <div>Accounts (<a href="#">home</a>)</div>,
  '*': <div>Dashboard<br/>
    <a href="#profile">Profile</a>
    <br/>
    <a href="#accounts">Accounts</a>
  </div>
}
ReactDOM.render(
  <Router mapping={mapping}/>,
  document.querySelector('#content')
)

// ReactDOM.render((
//   <Router history={hashHistory}>
//     <Router path="/" component={Content}>
//       <Router path="/about" component={About}></Router>
//       <Router path="/posts" component={Posts} posts={Posts}></Router>
//       <Router path="/posts:id" component={Posts} posts={Posts}></Router>
//       <Router path="/contact" component={Contact}></Router>
//     </Router>
//     <Router path="/login" component={Login}></Router>
//   </Router>
// ), document.querySelector('#content'))