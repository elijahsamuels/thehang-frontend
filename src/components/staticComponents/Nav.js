import React from "react";
// import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import {
    AppBar,
    Icon,
    Toolbar,
    IconButton,
    // Typography,
    // Slide,
    // useScrollTrigger,
    makeStyles,
} from "@material-ui/core";

import logo from "../../images/sampleLogo24x24.svg";
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
    rightToolbar: {
        marginRight: "auto",
    },
}));

// function HideOnScroll(props) {
//     const { children, window } = props;
//     // Note that you normally won't need to set the window ref as useScrollTrigger
//     // will default to window.
//     // This is only being set here because the demo is in an iframe.
//     const trigger = useScrollTrigger({ target: window ? window() : undefined });

//     return (
//       <Slide appear={false} direction="down" in={!trigger}>
//         {children}
//       </Slide>
//     );
//   }

//   HideOnScroll.propTypes = {
//     children: PropTypes.element.isRequired,
//     /**
//      * Injected by the documentation to work in an iframe.
//      * You won't need it on your project.
//      */
//     window: PropTypes.func,
//   };

const Nav = (props) => {
    const classes = useStyles();
    const currentUser = props.currentUser;
    return (
        <AppBar className={classes.root} position="sticky" elevation={0}>
            <Toolbar>
                    <Link to="/" style={{ textDecoration: "none" }}>
                        <Icon classes={{ root: classes.iconRoot }}>
                            <img
                                className={classes.imageIcon}
                                src={logo}
                                alt="sample SVG icon"
                            />
                        </Icon>
                    </Link>

                    <IconButton
                        name="Main"
                        disableRipple="true"
                        size="small"
                        className={classes.rightToolbar}>
                        <Link to="/" style={{ textDecoration: "none" }}>
                            theHang
                        </Link>
                    </IconButton>

                    <IconButton
                        name="About"
                        disableRipple="true"
                        size="small"
                        className={classes.button}>
                        <Link to="/about" style={{ textDecoration: "none" }}>
                            About
                        </Link>
                    </IconButton>
                    {/* className={classes.rightToolbar} */}
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
                                <Link to={`/musician/${currentUser.id}/edit`}>
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
            </Toolbar>
        </AppBar>
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
