const Counter = props => {
    return React.createElement(
        "span",
        null,
        " Clicked ",
        props.value,
        " times."
    );
};