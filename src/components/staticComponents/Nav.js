import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    makeStyles,
} from "@material-ui/core";

import { Image, Icon } from "semantic-ui-react";
// import { AppBar, Image, Sticky, Icon } from "semantic-ui-react";

import logo from "../../images/sampleLogo.png";
import { editUser } from "../../actions/userActions.js";
import Login from "../Login";
import Logout from "../Logout";

const useStyles = makeStyles((theme) => ({
    root: {
        background: "white",
    },
    button: {
        "&:hover": {
            backgroundColor: "white",
        },
    },
}));

const Nav = (props) => {
    const classes = useStyles();
    const currentUser = props.currentUser;
    return (
        <div>
            <AppBar className={classes.root} position="static" elevation={0}>
                <Toolbar>
                    <Typography >
                        <Link to="/" style={{ textDecoration: "none" }}>
                            <Image src={logo} width={50} />
                        </Link>

                        <IconButton
                            name="Main"
                            disableRipple="true"
                            size="small"
                            className={classes.button}>
                            <Link to="/" style={{ textDecoration: "none" }}>
                                The Hang
                            </Link>
                        </IconButton>

                        <IconButton
                            name="About"
                            disableRipple="true"
                            size="small"
                            className={classes.button}>
                            <Link
                                to="/about"
                                style={{ textDecoration: "none" }}>
                                About
                            </Link>
                        </IconButton>

                        <IconButton
                            name="Musicians"
                            disableRipple="true"
                            size="small"
                            className={classes.button}>
                            <Link
                                to="/musicians"
                                style={{ textDecoration: "none" }}>
                                Musicians
                            </Link>
                        </IconButton>

                        {!!currentUser ? (
                            <>
                                <IconButton
                                    name="Edit"
                                    className={classes.button}
                                    to={`/musician/${currentUser.id}/edit`}>
                                    <Link
                                        to={`/musician/${currentUser.id}/edit`}>
                                        <Icon loading name="setting" />
                                        Edit
                                    </Link>
                                </IconButton>
                                <Logout />
                            </>
                        ) : (
                            <IconButton
                                name="Login"
                                disableRipple="true"
                                className={classes.button}>
                                <Login />
                            </IconButton>
                        )}
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        loading: state.loading,
        users: state.users,
        user: state.user,
        currentUser: state.currentUser,
    };
};

export default connect(mapStateToProps, { editUser })(Nav);
