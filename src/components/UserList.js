import React, { Component } from "react";
import { connect } from "react-redux";
import { Loader, Card } from "semantic-ui-react";
import UserCard from "./UserCard";
import { fetchUsers } from "../actions/userActions";

export class UserList extends Component {
    state = {
        searchValue: "",
    };

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };

    componentDidMount() {
        this.props.fetchUsers();
        this.functionSearch();
    }

    functionSearch = () => {
        const { users } = this.props;
        if (this.state.searchValue === "") {
            const userList = users.map((user) => (
                <UserCard
                    key={user.id}
                    user={user}
                    history={this.props.history}
                />
            ));
            return userList;
        } else {
            const usersSorted = users.filter(
                (user) => user.city.toLowerCase() === this.state.searchValue.toLowerCase()
            );
            const userList = usersSorted.map((user) => (
                <UserCard
                    key={user.id}
                    user={user}
                    history={this.props.history}
                />
            ));
            return userList;
        }
    };

    render() {
        const { loading } = this.props.loading;

        if (loading) {
            return (
                <div>
                    <Loader size="massive">Loading</Loader>
                </div>
            );
        }

        return (
            <div>
                <h2 align="center">Musicians</h2>
                <p align="center">
                    Musician Count: {this.functionSearch().length}{" "}
                </p>
                <div align="center">
                    <input
                        placeholder="Filter by City"
                        name="searchValue"
                        loading={loading}
                        value={this.state.searchValue}
                        onChange={this.handleChange}
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
