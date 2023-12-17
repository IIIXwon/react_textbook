const ClickCountButton = props => {
    return React.createElement(
        "button",
        {
            onClick: props.handler,
            className: "btn btn-info" },
        "Don't touch me with dirty hands"
    );
};