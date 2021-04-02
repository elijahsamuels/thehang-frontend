import React, { Component } from "react";
import UserList from './components/UserList';
import UserSignUp from './components/UserSignUp';
import SignUpForm from './components/SignUpForm';
import Nav from './components/Nav';
import Footer from './components/Footer';
import ErrorLoading from './components/ErrorLoading';
import About from './components/About';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Nav />
                        <Switch>
                            {/* <UserSignUp /> */}
                            {/* <UserList />
                            <SignUpForm /> */}
                            <Route exact path ='/' component={ UserList } />
                            <Route component={About} />
                            <Route component={ErrorLoading} />
                        </Switch>
                    <Footer />
                </div>
            </Router>
        );
    }
}

export default App;
