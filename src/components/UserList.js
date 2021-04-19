import React, { Component } from "react";
import { connect } from "react-redux";
import UserCard from "./UserCard";
import { fetchUsers } from "../actions/userActions";
import { Loader, Card, Search, Dimmer } from "semantic-ui-react";

// make a copy of this file before converting to functional component
// need to convert to function component
// then utilize useState

export class UserList extends Component {
    

    state = {
        searchValue: ""
    }


    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
            // [this.state.searchValue]: event.target.value
        });
        
    };

    componentDidMount() {
        this.props.fetchUsers();
        this.functionSearch();
    }

    functionSearch = () => {
        const { users } = this.props;
        // debugger
            if (this.state.searchValue === "") {
                const userList = users.map(user => <UserCard key={user.id} user={user} history={this.props.history} />);
                return userList
            } else { 
                const usersSorted = users.filter(user => user.city === this.state.searchValue );
                const userList = usersSorted.map(user => <UserCard key={user.id} user={user} history={this.props.history} />);
                return userList
            };
        }

    render() {
        const { loading } = this.props;
        
        // let functionSearch = () => {
            //     if (this.state.searchValue === "") {
                //         return user.city
                //     } else { 
                    //         return this.state.searchValue
                    //     } 
                    // }
                    
                    

        // const usersSorted = users.filter(user => user.city === functionSearch() );
		// const userList = usersSorted.map(user => <UserCard key={user.id} user={user} history={this.props.history} />);



        // const usersSorted = users.filter(user => user.city === functionSearch() );
		// const userList = usersSorted.map(user => <UserCard key={user.id} user={user} history={this.props.history} />);
        
        // const usersSorted = users.filter(user => user.city === functionSearch() );
		// const userList = users.filter(user => user.city === functionSearch())//.filter(user => user.city === functionSearch())

        // <UserCard key={user.id} user={user} history={this.props.history} />)
        // .filter(user => console.log("user", user));
        // .filter(user => user.city === functionSearch());
        // console.log("this.props", this.props)
        // console.log("userList", userList)
        
        // let searchValue = if (users.length === 0 ) {users}  users ; "Austin"
		// const sorterUserList = usersSorted.map(user => <UserCard key={user.id} user={user} history={this.props.history} />);

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
                <p align="center">Musician Count: {this.functionSearch().length} </p>
                <div align="center">
                    <input
                        placeholder="Filter by City"
                        name="searchValue"
                        // input={{ icon: "search", iconPosition: "left" }}
                        loading={loading}
                        // onChange={handleChange(event)} // results={results}
                        value={this.state.searchValue}
                        onChange={this.handleChange} // results={results}
                        // onChange={(event) => this.handleChange(event)} // results={results}
                    />
                </div>

                <Card.Group
                    centered={true}
                    itemsPerRow={4}
                    style={{ padding: "20px" }}>
                    {this.functionSearch()}
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
