const Timer = props => {

    if (props.second === null || props.second === 0) {
        return React.createElement("div", null);
    }
    return React.createElement(
        "h1",
        null,
        "Timer left: ",
        props.second
    );
};