class Mouse extends React.Component {
    handleMouseOver(event) {
        console.log('mouse is over with event')
        console.dir(event.target)
        console.log(event)
        // event.persist()
        // window.e = event
        setTimeout(() =>{
            // console.table(event.target)
            // console.table(window.e.target)
        }, 2345)
    }
    render() {
        return (
            <div>
                <div
                    style={{border: '1px solid red'}}
                    onMouseOver={this.handleMouseOver.bind(document)} >
                    Open DevTools and move your mouse cursor over here
                </div>
            </div>
        )
    }
}
