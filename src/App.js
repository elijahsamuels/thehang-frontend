import React from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container } from "semantic-ui-react";
import UserList from "./components/UserList";
import ShowUser from "./components/ShowUser";
import EditUser from "./components/EditUser";
import Index from "./components/Index";
import Nav from "./components/staticComponents/Nav";
import Footer from "./components/staticComponents/Footer";
import ErrorLoading from "./components/staticComponents/ErrorLoading";
import About from "./components/staticComponents/About";
import { fetchUsers } from "./actions/userActions";

const App = () => {
    return (
        <div className="App">
            <Router>
                <Container fluid>
                    <Nav />
                    <Switch>
                        <Route exact path="/" component={Index} />
                        <Route exact path="/about" component={About} />
                        <Route
                            exact
                            path="/musician/:id"
                            component={ShowUser}
                        />
                        <Route
                            exact
                            path="/musician/:id/edit"
                            component={EditUser}
                        />
                        <Route exact path="/musicians" component={UserList} />
                        <Route component={ErrorLoading} />
                    </Switch>
                </Container>
            </Router>
            <Footer />
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        loading: state.loading,
        users: state.users,
    };
};

export default connect(mapStateToProps, { fetchUsers })(App);
