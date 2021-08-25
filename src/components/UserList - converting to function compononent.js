







import React, { Component, useState } from "react";
import { connect } from "react-redux";
import { Loader } from "semantic-ui-react";
import { Paper, Card, makeStyles } from "@material-ui/core";

import UserCard from "./UserCard";
import { fetchUsers } from "../actions/userActions";

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(1),
        width: theme.spacing(16),
        height: theme.spacing(16),
      },
    },
  }));


const UserList = ({ currentUser, users, loading}) => {

    const [citySearchValue, setCitySearchValue] = useState({
        asdf: asdf
    })

    //     citySearchValue: "",
    //     nameSearchValue: "",
    // const [event, setEvent] = useState(event.target.name)

    const handleChange = event => {
        setEvent(event.target.value)

function Loading(props) {
    const { loading } = this.props.loading;

    if (loading) {
        return (
            <div>
                <Loader size="massive">Loading</Loader>
            </div>
        );
    }}



}


// const handleChange = (event) => {
    // };
    // this.setState({
        //     [event.target.name]: event.target.value,
        // });
        
// **** this might work
// const handleChange = (event) => {
//     setLocalUser({
//         ...localUser,
//         [event.target.name]: event.target.value,
//     });
// };


const componentDidMount = (props) => {
    props.fetchUsers();
    citySearch();
    // userNameSearch();
}

const cityMusiciansCount = () => {
    if (state.citySearchValue === "") {
        return `Total Musician Count: ${citySearch().length}`;
    } else if (state.citySearchValue !== "") {
        return `Musicians in city: ${citySearch().length}`;
    }
};

const citySearch = (props) => {
    const { users } = props;
    if (state.citySearchValue === "") {
        const userList = users.map((user) => (
            <UserCard
                key={user.id}
                user={user}
                history={props.history}
            />
        ));
        return userList;
    } else {
        const usersSorted = users.filter(
            (user) =>
                user.city.toLowerCase() === state.citySearchValue.toLowerCase()
        );
        const userList = usersSorted.map((user) => (
            <UserCard
                key={user.id}
                user={user}
                history={props.history}
            />
        ));
        return userList;
    }
};

// export class UserList extends Component {
    // state = {
    //     citySearchValue: "",
    //     nameSearchValue: "",
    // };

                // const classes = useStyles();


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
                <div align="center">
                    <Paper
                        centered={true}
                        itemsPerRow={4}
                        elevation={0}
                        square={false}
                        style={{ padding: "20px" }}>
                        {this.citySearch()}
                    </Paper>
                </div>
            </div>
        );
    


const mapStateToProps = (state) => {
    return {
        loading: state.loading,
        users: state.users,
    };
};

export default connect(mapStateToProps, { fetchUsers })(UserList);
