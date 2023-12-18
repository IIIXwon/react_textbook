const Timer = (props) => {

    if (props.second === null || props.second === 0) {
        return <div></div>
    }
    return (<h1>Timer left: {props.second}</h1>)
}
