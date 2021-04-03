import React, { Component } from "react";
import UserList from './components/UserList';
// import UserSignUp from './components/UserSignUp';
// import SignUpForm from './components/SignUpForm';
import Nav from './components/staticComponents/Nav';
import Footer from './components/staticComponents/Footer';
import ErrorLoading from './components/staticComponents/ErrorLoading';
import About from './components/staticComponents/About';
import Index from './components/Index';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Router>
                    <Nav />
                        <Switch>
                            {/* <UserSignUp /> */}
                            {/* <UserList />
                            <SignUpForm /> */}
                            <Route exact path ='/' component={ Index } />
                            {/* <Route component={UserList} /> */}
                            <Route exact path="/about" component={About} />
                            <Route exact path="/musicians" component={ UserList} />
                            <Route component={ErrorLoading} />
                        </Switch>
                    <Footer />
                </Router>
            </div>
        );
    }
}

export default App;
