import React, { Component } from "react";
import UserList from './components/UserList';
import ShowUser from './components/ShowUser';
import Nav from './components/staticComponents/Nav';
import Footer from './components/staticComponents/Footer';
import ErrorLoading from './components/staticComponents/ErrorLoading';
import About from './components/staticComponents/About';
import Index from './components/Index';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

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
                            <Route exact path="/about" component={ About } />
                            <Route path="/musician/:id" component={ ShowUser } />
                            <Route exact path="/musicians" component={ UserList } />
                            <Route component={ ErrorLoading } />
                        </Switch>
                    <Footer />
                </Router>
            </div>
        );
    }
}

export default App;


// const mapStateToProps = state => {
//     return {
//         loading: state.loading
//     }
// }

// export default connect(mapStateToProps, { getUsers })(App);