class Content extends React.Component {
    constructor(props) {
        super(props)
        this.handleRadio = this.handleRadio.bind(this)
        this.handleCheckbox = this.handleChecked.bind(this)
        this.handleSelect = this.handleSelect.bind(this)
        this.state = {
            radioGroup: {
                angular: false,
                react: true,
                vue: false
            },
            checkboxGroup: {
                node: false,
                react: true,
                express: false,
                mongodb: false
            },
            selectedValue: 'node'
        }
    }
    handleSelect(event) {
        this.setState({selectedValue: event.target.value}, () =>
            console.log(this.state.selectedValue)
        )
    }
    handleRadio(event) {
        let obj = {}
        obj[event.target.value] = event.target.checked
        this.setState({radioGroup: obj})
    }

    handleChecked(event) {
        let obj = Object.assign(this.state.checkboxGroup)
        obj[event.target.value] = event.target.checked
        this.setState({checkboxGroup: obj})
    }
    render() {
        return (
            <div>
                <form>
                    <label>
                        <input type="radio" name="radioGroup" value='angular' checked={this.state.radioGroup['angular']}
                               onChange={this.handleRadio}/>
                        Angular
                    </label>
                    <br/>
                    <label>
                        <input type="radio" name="radioGroup" value='react' checked={this.state.radioGroup['react']}
                               onChange={this.handleRadio}/>
                        React
                    </label>
                    <br/>
                    <label>
                        <input type="radio" name="radioGroup" value='vue' checked={this.state.radioGroup['vue']}
                               onChange={this.handleRadio}/>
                        vue
                    </label>
                </form>
                <form action="">
                    <label htmlFor="">
                        <input type="checkbox" name="checkboxGroup" value="node"
                               checked={this.state.checkboxGroup.node} onChange={this.handleCheckbox}/>
                        node
                    </label>
                    <label htmlFor="">
                        <input type="checkbox" name="checkboxGroup" value="react"
                               checked={this.state.checkboxGroup.react} onChange={this.handleCheckbox}/>
                        react
                    </label>
                    <label htmlFor="">
                        <input type="checkbox" name="checkboxGroup" value="express"
                               checked={this.state.checkboxGroup.express} onChange={this.handleCheckbox}/>
                        express
                    </label>
                    <label htmlFor="">
                        <input type="checkbox" name="checkboxGroup" value="mongodb"
                               checked={this.state.checkboxGroup.mongodb} onChange={this.handleCheckbox}/>
                        mongodb
                    </label>
                </form>
                <textarea name="description" value={JSON.stringify(this.state.checkboxGroup)}></textarea>
                <form action="">
                    <select value={this.state.selectedValue} onChange={this.handleSelect}>
                        <option value="ruby">Ruby</option>
                        <option value="node">Node</option>
                        <option value="python">Python</option>
                    </select>
                </form>
            </div>
        )
    }
}