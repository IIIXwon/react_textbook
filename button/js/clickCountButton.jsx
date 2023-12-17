const ClickCountButton = (props) => {
    return (
        <button
            onClick={props.handler}
            className="btn btn-info">
            Don't touch me with dirty hands
        </button>
    )
}