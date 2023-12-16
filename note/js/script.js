let secondsLeft = 5;
let interval = setInterval(() => {
    if (!secondsLeft) {
        ReactDOM.render(React.createElement(
            'div',
            null,
            'note\uB294 ',
            secondsLeft,
            '\uCD08 \uD6C4\uC5D0 \uC81C\uAC70\uB429\uB2C8\uB2E4'
        ), document.querySelector('#content'));
        clearInterval(interval);
    } else {
        ReactDOM.render(React.createElement(
            'div',
            null,
            React.createElement(Note, { secondsLeft: secondsLeft })
        ), document.querySelector('#content'));
    }
    secondsLeft--;
}, 1000);