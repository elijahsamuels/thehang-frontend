import React, { Component, useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import { List, Form, Button, Card, Image } from "semantic-ui-react";
import { UserCard } from "./UserCard";
import { showUser } from "../actions";

// const user = UserCard(event)
// const user = this.event

const genderOptions = [
    { key: "male", text: "Male", value: "male" },
    { key: "female", text: "Female", value: "female" },
    { key: "other", text: "Other", value: "other" },
    { key: "na", text: "Prefer not to say", value: "prefer not to say" },
];

const ShowUser = (props) => {
    // const user = this.props.users.find(user => user.id == this.props.match.params.id)
    const user = props.user;
	// debugger

    // const findUser = users.find(user => user.id == routerProps.match.params.id)

    const location = user.city + ", " + user.state;
    const baseLocationURL = "www.google.com/maps/place/";
    console.log("this is current user object: ", props.user);
    const dispatch = useDispatch();
    useEffect(() => dispatch(showUser(parseInt(props.match.params.id))), [dispatch]); // this is like componentDidMount

    if (props.loading) {
        return <div>"...Loading"</div>;
    }

    return (
        <div>
            <List>
                <List.Item>
                    <List.Icon name="users" />
                    <List.Content label="user_name">
                        {user.first_name} {user.last_name}
                    </List.Content>
                </List.Item>
                <List.Item as={Link} to={baseLocationURL + location}>
                    <List.Icon name="marker" />
                    <List.Content label="user_location">
                        {location}
                    </List.Content>
                </List.Item>
                <List.Item>
                    <List.Icon name="mail" />
                    <List.Content label="user_email">
                        <a href={`mailto:${user.email}`}>{user.email}</a>
                    </List.Content>
                </List.Item>
                <List.Item>
                    <List.Icon name="linkify" />
                    <List.Content>
                        <a
                             href={`${user.website}`}
                            target="_blank"
                            rel="noreferrer">
                            {user.website}
                        </a>
                        {/* <Link to={{pathname: user.website}} target="_blank">{user.website}</Link> */}
                    </List.Content>
                </List.Item>
            </List>

            {/* 
				<Form>
				<Form.Group widths='equal'>
				<Form.Input fluid 
				label='First name' 
				placeholder='First name'
				value={user.first_name} />
				
				<Form.Input fluid 
				label='Last name' 
				placeholder='Last name'
				value={user.last_name} />
				</Form.Group>
				
				<Form.Group widths='equal'>
				<Form.Input fluid 
				label='City' 
				placeholder='City'
				value={user.city} />
				
				<Form.Input fluid 
				label='State' 
				placeholder='State'
				value={user.state} />
				</Form.Group>
				<Form.Group widths='equal'>
				<Form.Input fluid 
				label='Phone' 
				placeholder='Phone'
				value={user.phone} />
				
				<Form.Input fluid 
				label='Email' 
				placeholder='Email'
				value={user.email} />
			</Form.Group> */}
            {/* <Form.Select options={genderOptions} placeholder='Gender' /> */}
            {/* <Form.Checkbox label='I agree to the Terms and Conditions' /> */}

            {/* 
				{user.first_name}
				{user.last_name}
				{user.city}
				{user.email}
				
			*/}
            {/* </Form> */}
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        user: state.showUser
    };
};


export default connect(mapStateToProps)(ShowUser);
