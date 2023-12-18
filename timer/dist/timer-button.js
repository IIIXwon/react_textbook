const Button = props => {
    return React.createElement(
        "button",
        {
            onClick: () => props.timer(props.timeLeft) },
        props.name === undefined ? `${props.timeLeft / 60} 분` : props.name
    );
};