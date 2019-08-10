import React, { Component } from "react"
import { Field, reduxForm, formValueSelector, FieldArray } from "redux-form"
import { connect } from "react-redux"
import renderHTML from "react-render-html"
import ReactQuill from "react-quill"
import "react-quill/dist/quill.snow.css"
import { ToggleButton as Button } from "../reusables/toggleButton"

const HAZARDS = [
	"Fire",
	"Crime and Violence",
	"Evacuation",
	"Terror",
	"Weather",
	"Biohazard",
	"Earthquake",
	"Landslide",
	"Flood",
	"Traffic"
]

const toolbarStyle = {
	background: "#eaecec",
	borderTopLeftRadius: "0.5em",
	borderTopRightRadius: "0.5em",
	borderBottom: "none"
}

const CustomToolbar = () => (
	<div id="toolbar" style={toolbarStyle}>
		<select className="ql-header" defaultValue={""} onChange={e => e.persist()}>
			<option value="1" />
			<option value="2" />
			<option selected />
		</select>
		<button className="ql-bold" />
		<button className="ql-italic" />
		<button className="ql-underline" />
		<select className="ql-color">
			<option value="red" />
			<option value="green" />
			<option value="blue" />
			<option value="orange" />
			<option value="violet" />
			<option value="#d0d1d2" />
			<option selected />
		</select>
	</div>
)

const modules = {
	toolbar: {
		container: "#toolbar"
	},
	clipboard: {
		matchVisual: false
	}
}

class Step1 extends Component {
	renderHazards = ({ fields }) => {
		return HAZARDS.map(hazard => {
			return <Button fields={fields} text={hazard} />
		})
	}

	renderRichTextEditorField = ({ input }) => {
		return (
			<div>
				<CustomToolbar />
				<ReactQuill
					{...input}
					placeholder={"Please enter an alert message..."}
					style={{ height: 200 }}
					modules={modules}
					onChange={newValue => {
						input.onChange(newValue)
					}}
					onBlur={() => {
						input.onBlur(input.value)
					}}
				/>
			</div>
		)
	}

	renderPreview = () => {
		const { message, hazards } = this.props

		if (message && hazards) {
			let hazardsPreview = ""
			hazardsPreview = hazards.map(hazard => {
				return <li className="item">{hazardsPreview + hazard}</li>
			})
			return (
				<div>
					<div className="ui center aligned basic segment">
						<div className="ui horizontal bulleted link list">
							{hazardsPreview}
						</div>
					</div>
					<div>{renderHTML(message)}</div>
				</div>
			)
		}

		return <div>Please select a hazard and enter an alert message...</div>
	}

	render() {
		return (
			<div
				className="ui center aligned basic segment"
				style={{ marginTop: 20 }}
			>
				<div className="ten ui buttons">
					<FieldArray name="hazards" component={this.renderHazards} />
				</div>
				<div className="ui basic segment">
					<div className="ui grid">
						<div className="eight wide column" style={{ marginTop: 15 }}>
							<Field
								name="message"
								component={this.renderRichTextEditorField}
							/>
						</div>
						<div className="eight wide column">
							<div className="ui left aligned basic segment">
								<strong>Preview</strong>
								<div className="ui message" style={{ wordWrap: "break-word" }}>
									{this.renderPreview()}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

let formWrapped = reduxForm({
	form: "createAlert",
	destroyOnUnmount: false,
	forceUnregisterOnUnmount: true
})(Step1)

const selector = formValueSelector("createAlert")

export default connect(state => {
	const message = selector(state, "message")
	const hazards = selector(state, "hazards")
	return { message, hazards }
})(formWrapped)
