let secondsLeft = 5;
let interval = setInterval(() => {
    if (secondsLeft === 0) {
        ReactDOM.render(React.createElement(
            'div',
            null,
            'Note was removed after ',
            secondsLeft,
            ' seconds.'
        ), document.getElementById('content'));
        clearInterval(interval);
    } else {
        ReactDOM.render(React.createElement(Radio, { id: 1, name: 'test', label: 'test2', order: 2 }), document.querySelector('#content'));
    }
    secondsLeft--;
}, 1000);