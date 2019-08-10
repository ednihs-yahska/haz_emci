import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Stepper from "@material-ui/core/Stepper"
import Step from "@material-ui/core/Step"
import StepLabel from "@material-ui/core/StepLabel"
import Button from "@material-ui/core/Button"
import Step1 from "./step1"
import Step2 from "./step2"
import Step3 from "./step3"
import Step4 from "./step4"
import Confirm from "./confirm"

const useStyles = makeStyles(theme => ({
	root: {
		width: "95%"
	},
	backButton: {
		marginRight: theme.spacing(1)
	},
	instructions: {
		marginTop: theme.spacing(1),
		marginBottom: theme.spacing(1)
	}
}))

function getSteps() {
	return ["ID HAZARD", "LOCATION", "CHOOSE RECIPIENT(S)", "CONFIRMATION"]
}

function getStepContent(stepIndex) {
	switch (stepIndex) {
		case 0:
			return <Step1 />
		case 1:
			return <Step2 />
		case 2:
			return <Step3 />
		case 3:
			return <Step4 />
		default:
			return "Unknown stepIndex"
	}
}

export default function HorizontalLabelPositionBelowStepper() {
	const classes = useStyles()
	const [activeStep, setActiveStep] = React.useState(0)
	const steps = getSteps()

	function handleNext() {
		setActiveStep(prevActiveStep => prevActiveStep + 1)
	}

	function handleBack() {
		setActiveStep(prevActiveStep => prevActiveStep - 1)
	}

	function handleReset() {
		setActiveStep(0)
	}

	return (
		<div className={classes.root}>
			<Stepper activeStep={activeStep} alternativeLabel>
				{steps.map(label => (
					<Step key={label}>
						<StepLabel>{label}</StepLabel>
					</Step>
				))}
			</Stepper>
			<div className="ui divider" />
			<div>
				{activeStep === steps.length ? (
					<div>
						<Confirm />
						<Button onClick={handleReset}>CONFIRM</Button>
					</div>
				) : (
					<div>
						{getStepContent(activeStep)}
						<div>
							<Button
								disabled={activeStep === 0}
								onClick={handleBack}
								className={classes.backButton}
							>
								Back
							</Button>
							<Button variant="contained" color="primary" onClick={handleNext}>
								{activeStep === steps.length - 1 ? "Finish" : "Next"}
							</Button>
						</div>
					</div>
				)}
			</div>
		</div>
	)
}
