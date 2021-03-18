import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Store from './store'
import {Provider} from "react-redux";
ReactDOM.render(
    <BrowserRouter>
            <Route>
                <Switch>
                <Provider store={Store}>
                <App />
                </Provider>
                </Switch>
            </Route>

    </BrowserRouter>,
  document.getElementById('root')
);


