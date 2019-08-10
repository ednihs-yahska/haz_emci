import React from "react"

import {
	BrowserRouter as Router,
	Route,
	Redirect,
	Switch
} from "react-router-dom"
import { Provider } from "react-redux"
import styled from "styled-components"
import { connect } from "react-redux"
import store from "./store"
import Home from "./components/home"
import Alert from "./components/alert"

function App() {
	return (
		<Provider store={store}>
			<Router>
				<Switch>
					{/*<Route path="/login" component={Login} />*/}
					<Route exact path="/" component={Home} />
					<Route exact path="/alert" component={Alert} />
				</Switch>
			</Router>
		</Provider>
	)
}

export default App
