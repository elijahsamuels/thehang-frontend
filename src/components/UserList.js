import React, { Component } from "react";
import { connect } from "react-redux";
import UserCard from "./UserCard";
import { fetchUsers } from "../actions/userActions";
import { Loader, Card, Search, Dimmer } from "semantic-ui-react";

// make a copy of this file before converting to functional component
// need to convert to function component
// then utilize useState

export class UserList extends Component {
    
    componentDidMount() {
        this.props.fetchUsers();
        // this.setState({
        //     searchValue: this.props.searchValue,
        // });
    }


    handleChange = (event) => {
        // debugger
        this.setState({
            [event.target.name]: event.target.value,
            // searchValue: this.props.searchValue,
        });
        // debugger
    };
    
    render() {
        
        const { loading, users } = this.props;
        // let searchValue = this.props.searchValue ;
        // debugger
        // const usersSorted = users.filter(user => user.city === this.handleChange() );
        // debugger
		const userList = users.map(user => <UserCard key={user.id} user={user} history={this.props.history} />);

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
                        onChange={ event => this.props.handleChange(event)} // results={results}
                        value={this.props.searchValue}
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
