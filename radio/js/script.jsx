let secondsLeft = 5
let interval = setInterval(() => {
    if (secondsLeft === 0) {
        ReactDOM.render(
            <div>
                Note was removed after {secondsLeft} seconds.
            </div>,
            document.getElementById('content')
        )
        clearInterval(interval)
    } else {
        ReactDOM.render(
            <Radio id={1} name='test' label='test2' order={2}></Radio>,
            document.querySelector('#content')
        )
    }
    secondsLeft--
}, 1000)