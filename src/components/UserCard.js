import React from "react";
import { connect } from "react-redux";
import {
    Card,
    CardHeader,
    CardContent,
    CardMedia,
    makeStyles,
} from "@material-ui/core";

import { showUser } from "../actions/userActions.js";
import InstrumentIDToName from "./staticComponents/InstrumentIDToName";
import userImage from "./staticComponents/userImage";

const useStyles = makeStyles({
    root: {
        maxWidth: 200,
    },
    media: {
        height: 130,
        width: 130,
        maxHeight: 130,
        maxWidth: 130,
        minHeight: 130,
        minWidth: 130,
    },
    header: {
        padding: "4px",
    },
});

const UserCard = (props) => {
    const user = props.user;
    const currentUser = props.currentUser;
    const classes = useStyles();

    return (
        <div>
            <Card
                className={classes.root}
                id={user.id}
                key={user.id}
                href={`/musician/${user.id}`}>

                <CardHeader 
                    className={classes.header} 
                    align="center" 
                    as="h3">
                    {user.first_name} {user.last_name}
                </CardHeader>

                <CardMedia
                    className={classes.media}
                    image={userImage(user)}
                    title="User Image"
                    alt="pianodog"
                />

                <CardContent className={classes.media}
>
                    <p align="center">
                        {user.first_name} {user.last_name}
                    </p>
                    <p align="center">
                        {InstrumentIDToName(user.primary_instrument_id)}
                    </p>
                    <p align="center">
                        {user.city}, {user.state}
                    </p>
                    {!!currentUser ? <p align="center">{user.email}</p> : <></>}
                </CardContent>
            </Card>
            <br />
            <br />
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        loading: state.loading,
        users: state.users,
        currentUser: state.currentUser,
    };
};

export default connect(mapStateToProps, { showUser })(UserCard);
