import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import usersReducer from "./reducers/usersReducer";
import "semantic-ui-css/semantic.min.css";
import { Container } from "semantic-ui-react";
// import env from "react-dotenv";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore( usersReducer, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
    <Provider store={store}>
        <Container>
            <App />
        </Container>
    </Provider>,
    document.getElementById("root")
);