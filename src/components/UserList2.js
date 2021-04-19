import React, { Component } from "react";
import { connect } from "react-redux";
import UserCard from "./UserCard";
import { fetchUsers } from "../actions/userActions";
import { Loader, Card, Search, Dimmer } from "semantic-ui-react";

// make a copy of this file before converting to functional component
// need to convert to function component
// then utilize useState

const UserList = (props) => {
    
    componentDidMount = (props) => {
        props.fetchUsers();
    }

    handleChange = (event) => {
        console.log("event.target.value", event.target.value)
        setState({
            [event.target.name]: event.target.value,
        });
        
    };
    
    render() {
        console.log("render event.target.value", props.searchValue)

        const { loading, users } = props;
        let searchValue = "Austin" ;
        console.log("searchValue", searchValue)
        // debugger
        const usersSorted = users.filter(user => user.city === searchValue );
        console.log("users", users)
        // debugger
		const userList = usersSorted.map(user => <UserCard key={user.id} user={user} history={props.history} />);
        console.log('usersSorted', usersSorted)

        if (loading) {
            return (
                <div>
                    <Dimmer active>
                        <Loader size="massive">Loading</Loader>
                    </Dimmer>
                </div>
            );
        }

        return (
            <div>
                <h2 align="center">Musicians</h2>
                <p align="center">Musician Count: {userList.length} </p>
                <div align="center">
                    <Search
                        placeholder="Filter by City"
                        name="searchValue"
                        input={{ icon: "search", iconPosition: "left" }}
                        loading={loading}
                        // onChange={handleChange(event)} // results={results}
                        onChange={ event => props.handleChange(event)} // results={results}
                        value={props.searchValue}
                    />
                </div>

                <Card.Group
                    centered={true}
                    itemsPerRow={4}
                    style={{ padding: "20px" }}>
                    {userList}
                </Card.Group>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        loading: state.loading,
        users: state.users,
    };
};

export default connect(mapStateToProps, { fetchUsers })(UserList);
