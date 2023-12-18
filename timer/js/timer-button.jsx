const Button = (props) => {
    return <button
        onClick={() => props.timer(props.timeLeft)}>{props.name === undefined ? `${props.timeLeft / 60} 분` : props.name}</button>
}