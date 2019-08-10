import React, { Component } from "react"

export class ToggleButton extends Component {
	state = {
		active: false
	}

	handleClick = () => {
        this.setState(prevState => ({ active: !prevState.active }))
        this.props.fields.push(this.props.text)
    }
		
	render() {
        const { active } = this.state
        
		return (
			<button
				style={{ padding: 15 }}
				className={`ui ${active ? "active primary" : ""} button`}
				onClick={this.handleClick}
			>
				{this.props.text}
			</button>
		)
	}
}
