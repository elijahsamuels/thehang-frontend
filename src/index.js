import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { Container } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import App from "./App";
import usersReducer from "./reducers/usersReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    usersReducer,
    composeEnhancers(applyMiddleware(thunk))
);

ReactDOM.render(
    <Provider store={store}>
        <Container>
            <App />
        </Container>
    </Provider>,
    document.getElementById("root")
);
