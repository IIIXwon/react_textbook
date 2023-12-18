class Content extends React.Component {
    constructor(props) {
        super(props);
        this.handleRadio = this.handleRadio.bind(this);
        this.handleCheckbox = this.handleChecked.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
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
        };
    }
    handleSelect(event) {
        this.setState({ selectedValue: event.target.value }, () => console.log(this.state.selectedValue));
    }
    handleRadio(event) {
        let obj = {};
        obj[event.target.value] = event.target.checked;
        this.setState({ radioGroup: obj });
    }

    handleChecked(event) {
        let obj = Object.assign(this.state.checkboxGroup);
        obj[event.target.value] = event.target.checked;
        this.setState({ checkboxGroup: obj });
    }
    render() {
        return React.createElement(
            "div",
            null,
            React.createElement(
                "form",
                null,
                React.createElement(
                    "label",
                    null,
                    React.createElement("input", { type: "radio", name: "radioGroup", value: "angular", checked: this.state.radioGroup['angular'],
                        onChange: this.handleRadio }),
                    "Angular"
                ),
                React.createElement("br", null),
                React.createElement(
                    "label",
                    null,
                    React.createElement("input", { type: "radio", name: "radioGroup", value: "react", checked: this.state.radioGroup['react'],
                        onChange: this.handleRadio }),
                    "React"
                ),
                React.createElement("br", null),
                React.createElement(
                    "label",
                    null,
                    React.createElement("input", { type: "radio", name: "radioGroup", value: "vue", checked: this.state.radioGroup['vue'],
                        onChange: this.handleRadio }),
                    "vue"
                )
            ),
            React.createElement(
                "form",
                { action: "" },
                React.createElement(
                    "label",
                    { htmlFor: "" },
                    React.createElement("input", { type: "checkbox", name: "checkboxGroup", value: "node",
                        checked: this.state.checkboxGroup.node, onChange: this.handleCheckbox }),
                    "node"
                ),
                React.createElement(
                    "label",
                    { htmlFor: "" },
                    React.createElement("input", { type: "checkbox", name: "checkboxGroup", value: "react",
                        checked: this.state.checkboxGroup.react, onChange: this.handleCheckbox }),
                    "react"
                ),
                React.createElement(
                    "label",
                    { htmlFor: "" },
                    React.createElement("input", { type: "checkbox", name: "checkboxGroup", value: "express",
                        checked: this.state.checkboxGroup.express, onChange: this.handleCheckbox }),
                    "express"
                ),
                React.createElement(
                    "label",
                    { htmlFor: "" },
                    React.createElement("input", { type: "checkbox", name: "checkboxGroup", value: "mongodb",
                        checked: this.state.checkboxGroup.mongodb, onChange: this.handleCheckbox }),
                    "mongodb"
                )
            ),
            React.createElement("textarea", { name: "description", value: JSON.stringify(this.state.checkboxGroup) }),
            React.createElement(
                "form",
                { action: "" },
                React.createElement(
                    "select",
                    { value: this.state.selectedValue, onChange: this.handleSelect },
                    React.createElement(
                        "option",
                        { value: "ruby" },
                        "Ruby"
                    ),
                    React.createElement(
                        "option",
                        { value: "node" },
                        "Node"
                    ),
                    React.createElement(
                        "option",
                        { value: "python" },
                        "Python"
                    )
                )
            )
        );
    }
}