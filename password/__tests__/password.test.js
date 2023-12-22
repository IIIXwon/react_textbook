describe('password', () => {
  const TestUtils = require('react-dom/test-utils')
  const React = require('react')
  const ReactDOM = require('react-dom')
  const Password = require('../password/jsx/password.jsx')
  const fd = ReactDOM.findDOMNode

  it('should ', () => {

  });

  let password = TestUtils.renderIntoDocument(<Password
    upperCase={true}
    lowerCase={true}
    special={true}
    number={true}
    over6={true}>
  </Password>)

  let rules = TestUtils.scryRenderedDOMComponentsWithTag(password, 'li')
  expect(rules.length).toBe(5)
  expect(fd(rules[0]).textContent).toEquals('대문자가 최소한 한 글자는 있어야한다')
  let generateButton = TestUtils.findRenderedDOMComponentWithClass(password, 'generated-btn')
  expect(fd(rules[1]).firstChild.nodeName.toLowerCase()).toBe('#text')
  TestUtils.Simulate.click(fd(generateButton))
  expect(fd(rules[1]).firstChild.nodeName.toLowerCase()).toBe('strike')
});