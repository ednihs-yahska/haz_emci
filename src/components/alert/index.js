import React, { Component } from "react"
import { Search } from "semantic-ui-react"
import Clock from "react-live-clock"

import HorizontalLabelPositionBelowStepper from "./StepperWithText"

class createAlert extends Component {
	dateFormatter() {
		const today = new Date()
		let dd = today.getDate()
		let mm = today.getMonth() + 1
		const yyyy = today.getFullYear()

		if (dd < 10) {
			dd = "0" + dd
		}

		if (mm < 10) {
			mm = "0" + mm
		}

		return mm + "/" + dd + "/" + yyyy + " "
	}

	// handleChange = input => e => {
	// 	this.setState({ [input]: e.target.value })
	// }

	render() {
		return (
			<div>
				<div className="ui left visible very thin sidebar inverted vertical menu" />
				<div className="pusher" style={{ marginTop: 20 }}>
					<div className="ui container">
						<div className="ui grid">
							<div className="six wide column">
								<strong>CREATE EMERGENCY ALERT</strong>
							</div>
							<div className="four wide column">
								<strong>
									{this.dateFormatter()}
									<Clock
										format={"HH:mm:ss"}
										ticking={true}
										timezone={"US/Pacific"}
									/>
								</strong>
							</div>
							<div className="six wide column">
								<Search input={{ fluid: true }} />
							</div>
						</div>
						<div className="ui container">
							<div className="ui center aligned basic segment">
								<HorizontalLabelPositionBelowStepper />
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default createAlert
