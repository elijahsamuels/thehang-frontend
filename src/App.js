import React, { useState, useEffect } from "react";
import UserList from "./components/UserList";
import ShowUser from "./components/ShowUser";
import EditUser from "./components/EditUser";
import Nav from "./components/staticComponents/Nav";
import { connect } from "react-redux";
import Footer from "./components/staticComponents/Footer";
import ErrorLoading from "./components/staticComponents/ErrorLoading";
import About from "./components/staticComponents/About";
import Index from "./components/Index";
// import { Router } from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { fetchUsers } from "./actions/userActions";
import history from "./components/staticComponents/history.js";
// import Login from "./components/Login";
// import Logout from "./components/Logout";
import env from "react-dotenv";

// useComponentDidMOunt

const App = (props) => {
    const allUsers = props.users; // .find(user => user.id == parseInt(props.users.id))
    // console.log(users)

    // componentDidMount() {
    //     const users = this.props.fetchUsers();
    // }

    // const [users, setUsers] = useState([])

    // useEffect(() => {
    //     fetchUsers()
    //     console.log("HI there you're in useEffect")
    //     getAllUsers()
    //   },[])

    // const getAllUsers = () => {
    // 	fetch("/users")
    // 	.then(response => response.json())
    // 	.then(data => {
    //         setUsers(data)
    //     })
    // }

    return (
        <div className="App">
            {/* <div>{env.API_URL}</div>; */}
            <Router history={history}>
                <Nav />
                <Switch>
                    <Route exact path="/" component={Index} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/musician/:id" component={ShowUser} />
                    <Route exact path="/musician/:id/edit" component={EditUser} />
                    <Route exact path="/musicians" component={UserList} />
                    <Route component={ErrorLoading} />
                </Switch>
                <Footer />
            </Router>
        </div>
    );
};

// const mapStateToProps = (state) => {
//     return {
//         users: state.user.users
//     }
//     }

const mapStateToProps = (state) => {
    return {
        loading: state.loading,
        users: state.users,
    };
};

export default connect(mapStateToProps, { fetchUsers })(App);

// export default connect(mapStateToProps)(user) ;

// const mapStateToProps = state => {
//     return {
//         loading: state.loading
//     }
// }

// export default connect(mapStateToProps, { getUsers })(App);

// <Route  exact path="/testing/:id/composer/:composer_id" component={(routerProps) => {
//     const findObj = blogs.find(el => el.id == routerProps.match.params.id)
//     return  <Testing obj={findObj}/>
// }
//  } />
