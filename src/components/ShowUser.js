import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
// import { List, Image } from "semantic-ui-react";

import {
    Card,
    CardHeader,
    CardContent,
    CardMedia,
    List,
    ListItem,
    ListItemIcon,
    makeStyles,
} from "@material-ui/core";

import { showUser } from "../actions/userActions";
import InstrumentIDToName from "./staticComponents/InstrumentIDToName";
import userImage from "./staticComponents/userImage";

const useStyles = makeStyles({
    root: {
        maxWidth: `calc(100% - 500px)`,
    },
    media: {
        // height: 130,
        // width: 130,
        // maxHeight: 130,
        // maxWidth: 130,
        minHeight: 400,
        minWidth: 400,
    },
    header: {
        padding: "4px",
    },
});

const ShowUser = (props) => {
    const currentUser = props.currentUser;
    const user = props.user;
    const location = `${user.city}, ${user.state}`;
    const baseLocationURL = "www.google.com/maps/place/";
    const classes = useStyles();

    const dispatch = useDispatch();
    useEffect(
        () => dispatch(showUser(parseInt(props.match.params.id))),
        [dispatch]
    );
    if (props.loading) {
        return <div>"...loading"</div>;
    }

    return (
        <div>
            <Card className={classes.root} id={user.id} key={user.id}>
                <CardMedia
                    className={classes.media}
                    image={userImage(user)}
                    title="User Image"
                    alt="pianodog"
                />
                <CardContent className={classes.media}>
                    {/* <ListItemIcon name="users" color="black" /> */}
                    <ListItem label="user_name">
                        {user.first_name} {user.last_name}
                    </ListItem>

                    <ListItem
                        label="user_location"
                        as={Link}
                        to={baseLocationURL + location}
                        style={{ textDecoration: "none" }}>
                        {/* <List.Icon name="marker" color="black" /> */}
                        {location}
                    </ListItem>

                    {/* <List.Icon name="mail" color="black" /> */}
                    <ListItem
                        style={{ textDecoration: "none" }}
                        label="user_email">
                        <a href={`mailto:${user.email}`}>{user.email}</a>
                    </ListItem>

                    <ListItem label="user_website">
                        {/* <List.Icon name="linkify" color="black" /> */}
                            <a
                                href={`${user.website}`}
                                target="_blank"
                                rel="noreferrer">
                                {" "}
                                {user.website}{" "}
                            </a>
                    </ListItem>
                </CardContent>

                {/* 
                <List.Item>
                    <List.Icon name="users" color="black" />
                    <List.Content label="user_name">
                        {user.first_name} {user.last_name}
                    </List.Content>
                </List.Item> */}

                {/* <List.Item as={Link} to={baseLocationURL + location} style={{ textDecoration: "none" }}>
                    <List.Icon name="marker" color="black" />
                    <List.Content label="user_location">
                        {location}
                    </List.Content>
                </List.Item>

                {!!currentUser ? (
                    <List.Item style={{ textDecoration: "none" }}>
                        <List.Icon name="mail" color="black" />
                        <List.Content label="user_email">
                            <a href={`mailto:${user.email}`}>{user.email}</a>
                        </List.Content>
                    </List.Item>
                ) : (
                    <></>
                )} */}

                {/* <List.Item>
                    <List.Icon name="linkify" color="black" />
                    <List.Content label="user_website" >
                        <a
                            href={`${user.website}`}
                            target="_blank"
                            rel="noreferrer">
                            {" "}
                            {user.website}{" "}
                        </a>
                    </List.Content>
                </List.Item> */}

                {/* {!!currentUser ? (
                    <List.Item>
                        <List.Icon name="phone" />{" "}
                        <List.Content label="user_phone">
                            <a
                                href={`tel:${user.phone}`}
                                target="_blank"
                                rel="noreferrer">
                                {" "}
                                {user.phone}{" "}
                            </a>
                        </List.Content>
                    </List.Item>
                ) : (
                    <></>
                )} */}

                {/* <List.Item>
                    <List.Icon name="book" />
                    <List.Content label="user_description">
                        {user.description}
                    </List.Content>
                </List.Item>

                <List.Item>
                    <List.Icon name="music" />
                    <List.Content label="primary_instrument">
                        Primary Instrument:{" "}
                        {InstrumentIDToName(user.primary_instrument_id)}
                    </List.Content>
                </List.Item>

                <List.Item>
                    <List.Icon name="music" />
                    <List.Content label="primary_instrument">
                        Secondary Instrument:{" "}
                        {InstrumentIDToName(user.secondary_instrument_id)}
                    </List.Content>
                </List.Item> */}
            </Card>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        user: state.showUser,
        currentUser: state.currentUser,
    };
};

export default connect(mapStateToProps)(ShowUser);
