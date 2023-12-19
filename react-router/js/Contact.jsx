const React = require('react')
module.exports = function Contact(props) {
  setTimeout(() => {props.router.push('about')}, 1000)
  return <div>
    <h3>Contact Us</h3>
    <input type="text" className="form-control" placeholder="your email"/>
    <textarea type="text" className="form-control" placeholder="your message"></textarea>
    <button className="btn btn-primary">send</button>
  </div>
}