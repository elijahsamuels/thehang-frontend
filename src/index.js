import React from "react";
import ReactDOM from "react-dom";
import 'semantic-ui-css/semantic.min.css';
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import usersReducer from './reducers/usersReducer';
import { Container } from 'semantic-ui-react';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(usersReducer, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
        <Provider store={store}>
            <Container>
                <App />
            </Container>
        </Provider>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
