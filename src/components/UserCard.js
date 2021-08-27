import React from "react";
import { connect } from "react-redux";
// import { Link } from "react-router-dom";

import {
    Card,
    CardHeader,
    CardContent,
    CardMedia,
    makeStyles,
    Link,
} from "@material-ui/core";
// import { AccessAlarm, ThreeDRotation } from '@material-ui/icons';
import PhoneEnabledIcon from '@material-ui/icons/PhoneEnabled';
import PhoneDisabledIcon from '@material-ui/icons/PhoneDisabled';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import PhonelinkLockIcon from '@material-ui/icons/PhonelinkLock';
import EmailIcon from '@material-ui/icons/Email';
import { showUser } from "../actions/userActions.js";
import InstrumentIDToName from "./staticComponents/InstrumentIDToName";
import userImage from "./staticComponents/userImage";

const useStyles = makeStyles({
    root: {
        maxWidth: 200,
    },
    media: {
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
    const mailToUserEmail = () => {
        return `mailto:${user.email}`;
    };
    const phoneUser = () => {
        return `tel:${user.phone}`;
    };
    const textUser = () => {
        return `sms:${user.phone}`;
    };

    const userLinkOrAlert = () => {
        return !!currentUser ? `/musician/${user.id}` : false;
        // const notLoggedInAlert = () => alert("hello")
    };

    const user = props.user;
    const currentUser = props.currentUser;
    const classes = useStyles();

    return (
        <div>
            <Link href={userLinkOrAlert()} style={{ textDecoration: "none" }}>
                <Card className={classes.root} id={user.id} key={user.id}>
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

                    <CardContent className={classes.media}>
                        <p align="center">
                            {user.first_name} {user.last_name}
                        </p>
                        <p align="center">
                            {InstrumentIDToName(user.primary_instrument_id)}
                        </p>
                        <p align="center">
                            {user.city}, {user.state}
                        </p>
                        {!!currentUser ? (
                            <p align="center">
                                <a
                                    href={mailToUserEmail()}
                                    style={{ textDecoration: "none" }}>
                                    <EmailIcon />
                                </a>
                                <a
                                    href={phoneUser()}
                                    style={{ textDecoration: "none" }}>
                                    <PhoneEnabledIcon />
                                </a>
                                <a
                                    href={textUser()}
                                    style={{ textDecoration: "none" }}>
                                    <PhoneIphoneIcon />
                                </a>
                            </p>
                        ) : (
                            <div>
                            <EmailIcon />
                            <PhoneDisabledIcon />
                            <PhonelinkLockIcon />
                            </div>
                        )}
                    </CardContent>
                </Card>
            </Link>
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
