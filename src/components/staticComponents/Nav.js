import React, { Component, createRef } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Menu, Input, Image, Sticky, Icon } from "semantic-ui-react";
import logo from "../../images/sampleLogo.png";
import { editUser } from "../../actions/userActions.js";
import Login from "../Login";
import Logout from "../Logout";

const Nav = (props) => {
    const currentUser = props.currentUser;
    console.log(3);
    return (
        <div>
            <Sticky active={false}>
                <Menu secondary>
                    <Link to="/">
                        <Image src={logo} width={50} />
                    </Link>
                    <Menu.Item name="Main" to="/">
                        <Link to="/">The Hang</Link>
                    </Menu.Item>

                    <Menu.Item position="right" name="About" to="/">
                        <Link to="/about">About</Link>
                    </Menu.Item>

                    <Menu.Item name="Musicians" to="/">
                        <Link to="/musicians">Musicians</Link>
                    </Menu.Item>

                    {!!currentUser ? (
                        <>
                            <Menu.Item
                                name="Edit"
                                to={`/musician/${currentUser.id}/edit`}>
                                <Link to={`/musician/${currentUser.id}/edit`}>
                                    <Icon loading name="setting" />
                                    Edit
                                </Link>
                            </Menu.Item>
                            <Logout />
                        </>
                    ) : (
                        <Login />
                    )}
                    
                    <Menu.Item position="right">
                        <Input
                            transparent
                            icon={{ name: "search", link: true }}
                            placeholder="Search users..."
                        />
                    </Menu.Item>
                </Menu>
                {/* <Link to="/"> Main</Link>
						<Link to="about"> About</Link>
					<Link to="musicians"> Musicians</Link> */}
            </Sticky>
        </div>
    );
};

const mapStateToProps = (state) => {
    // console.log("state", state); // array of users
    return {
        loading: state.loading,
        users: state.users,
        user: state.user,
        currentUser: state.currentUser,
        // test: console.log("mapStateToProps: ", state)
    };
};

// export default Nav
export default connect(mapStateToProps, { editUser })(Nav);
