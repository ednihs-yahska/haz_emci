import 'regenerator-runtime/runtime'
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store';
import Home from './components/home'
import Dashboard from './components/dashboard'

function App() {
  return (
    <Provider store={store}>
      <Router>
            <Switch>
                {/*<Route path="/login" component={Login} />*/}
                <Route exact path="/" component={Home}/>
                <Route exact path="/dash" component={Dashboard}/>
            </Switch>
      </Router>
    </Provider>
  );
}

export default App;
