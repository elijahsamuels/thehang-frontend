import React, { Component } from "react";
import UserList from './components/UserList';
import UserSignUp from './components/UserSignUp';
import SignUpForm from './components/SignUpForm';

class App extends Component {
    render() {
        return (
            <div className="App">
                {/* <UserSignUp /> */}
                <UserList />
                <SignUpForm />
            </div>
        );
    }
}

export default App;
