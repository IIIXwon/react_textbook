let secondsLeft = 5
let interval = setInterval(() => {
    if (!secondsLeft) {
        ReactDOM.render(
            <div>
                note는 {secondsLeft}초 후에 제거됩니다
            </div>,
            document.querySelector('#content')
        )
        clearInterval(interval)
    } else {
        ReactDOM.render(
            <div>
                <Note secondsLeft={secondsLeft}/>
            </div>,
            document.querySelector('#content')
        )
    }
    secondsLeft--
}, 1000)