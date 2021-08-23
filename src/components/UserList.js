import React, { Component } from "react";
import { connect } from "react-redux";
import { Loader, Card } from "semantic-ui-react";
import UserCard from "./UserCard";
import { fetchUsers } from "../actions/userActions";

export class UserList extends Component {
    state = {
        citySearchValue: "",
        nameSearchValue: ""
    };

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };

    componentDidMount() {
        this.props.fetchUsers();
        this.citySearch();
        // this.userNameSearch();
    }

    cityMusiciansCount = () => {
        if (this.state.citySearchValue === "") {
            return `Total Musician Count: ${this.citySearch().length}`
        }
        else if (this.state.citySearchValue !== "") {
            return `Musicians in this city: ${this.citySearch().length}`
        }
    }

    // userNameSearch = () => {
    //     const { users } = this.props;
    //     if (this.state.nameSearchValue === "") {
    //         const userList = users.map((user) => (
    //             <UserCard
    //                 key={user.id}
    //                 user={user}
    //                 history={this.props.history}
    //             />
    //         ));
    //         return userList;
    //     } else {
    //         const usersSorted = users.filter(
    //             (user) => user.first_name.toLowerCase() === this.state.nameSearchValue.toLowerCase()
    //             // (user) => user.name.toLowerCase() === this.state.nameSearchValue.toLowerCase()
    //         );
    //         const userList = usersSorted.map((user) => (
    //             <UserCard
    //                 key={user.id}
    //                 user={user}
    //                 history={this.props.history}
    //             />
    //         ));
    //         return userList;
    //     }
    // }

    citySearch = () => {
        const { users } = this.props;
        if (this.state.citySearchValue === "") {
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
                (user) => user.city.toLowerCase() === this.state.citySearchValue.toLowerCase()
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
                    Musicians in this city: {this.citySearch().length}
                    {/* {this.cityMusiciansCount()} */}
                </p>
                <div align="center">
                    <input
                        placeholder="Filter by City"
                        name="citySearchValue"
                        loading={loading}
                        value={this.state.citySearchValue}
                        onChange={this.handleChange}
                    />
                    {/* <input
                        placeholder="Filter by Name"
                        name="nameSearchValue"
                        loading={loading}
                        value={this.state.nameSearchValue}
                        onChange={this.handleChange}
                    /> */}
                </div>

                <Card.Group
                    centered={true}
                    itemsPerRow={4}
                    style={{ padding: "20px" }}>
                    {this.citySearch() }
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
