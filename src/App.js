import React, { useState, useEffect, createRef } from "react";
import UserList from "./components/UserList";
import ShowUser from "./components/ShowUser";
import EditUser from "./components/EditUser";
import Nav from "./components/staticComponents/Nav";
import { connect } from "react-redux";
import Footer from "./components/staticComponents/Footer";
import ErrorLoading from "./components/staticComponents/ErrorLoading";
import About from "./components/staticComponents/About";
import Index from "./components/Index";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useHistory } from "react-router-dom";
// import history from "./components/staticComponents/history.js";
import { fetchUsers } from "./actions/userActions";
import env from "react-dotenv";
import { Container, Sticky, Ref } from "semantic-ui-react";

// useComponentDidMOunt

const App = (props) => {
    const allUsers = props.users;
    let history = useHistory()

    // .find(user => user.id == parseInt(props.users.id))
    // const contextRef = createRef()

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
            {/* <Ref innerRef={contextRef}> */}
            <Router >
            {/* <Router history={history}> */}
                <Container fluid>
                    <Nav />
                    <Switch>
                        <Route exact path="/" component={Index} />
                        <Route exact path="/about" component={About} />
                        <Route exact path="/musician/:id" component={ShowUser} />
                        <Route exact path="/musician/:id/edit" component={EditUser} />
                        <Route exact path="/musicians" component={UserList} />
                        <Route component={ErrorLoading} />
                    </Switch>
                    {/* <Sticky
                        bottomOffset={50}
                        context={contextRef}
                        offset={50}
                        pushing>
                    </Sticky> */}
                </Container>
                {/* </Ref> */}
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
