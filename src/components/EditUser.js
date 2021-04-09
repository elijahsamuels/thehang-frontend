import React, { Component, useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import { List, Form, Button, Card, Image, Dropdown } from "semantic-ui-react";
import { UserCard } from "./UserCard";
import { editUser } from "../actions";

const genderOptions = [
    { key: "male", text: "Male", value: "male" },
    { key: "female", text: "Female", value: "female" },
    { key: "other", text: "Other", value: "other" },
    { key: "na", text: "Prefer not to say", value: "prefer not to say" },
];

const instruments = [
    { name: 'flute', key: 'flute', text: 'Flute', value: 'flute' },
    { name: 'clarinet', key: 'clarinet', text: 'Clarinet', value: 'clarinet' },
    { name: 'saxophone', key: 'saxophone', text: 'Saxophone', value: 'saxophone' },
    { name: 'oboe', key: 'oboe', text: 'Oboe', value: 'oboe' },
    { name: 'bassoon', key: 'bassoon', text: 'Bassoon', value: 'bassoon' },
    { name: 'trumpet', key: 'trumpet', text: 'Trumpet', value: 'trumpet' },
    { name: 'trombone', key: 'trombone', text: 'Trombone', value: 'trombone' },
    { name: 'acoustic guitar', key: 'acoustic guitar', text: 'Acoustic Guitar', value: 'acoustic guitar' },
    { name: 'electric guitar', key: 'electric guitar', text: 'Electric Guitar', value: 'electric guitar' },
    { name: 'electric bass', key: 'electric bass', text: 'Electric Bass', value: 'electric bass' },
    { name: 'drums', key: 'drums', text: 'Drums', value: 'rums' },
    { name: 'piano/keys', key: 'piano/keys', text: 'Piano/Keys', value: 'piano/keys' },
    { name: 'vocals (male)', key: 'vocals (male)', text: 'Vocals (Male)', value: 'vocals (male)' },
    { name: 'vocals (female key)', key: 'vocals (female)', text: 'Vocals (Female)', value: 'vocals (female)' },
    { name: 'tuba', key: 'tuba', text: 'Tuba', value: 'tuba' },
    { name: 'violin', key: 'violin', text: 'Violin', value: 'violin' },
    { name: 'viola', key: 'viola', text: 'Viola', value: 'viola' },
    { name: 'cello', key: 'cello', text: 'Cello', value: 'cello' },
    { name: 'double bass', key: 'double bass', text: 'Double Bass (Upright Bass)', value: 'double bass' },
    { name: 'accordion', key: 'accordion', text: 'Accordion', value: 'accordion' },
    { name: 'dj', key: 'dj', text: 'DJ', value: 'dj' },
    { name: 'banjo', key: 'banjo', text: 'Banjo', value: 'banjo' },
    { name: 'mandolin', key: 'mandolin', text: 'Mandolin', value: 'mandolin' },
    { name: 'other', key: 'other', text: 'Other', value: 'other' },
  ]
//   <List.Icon name="mail" />
//   <List.Content label="user_email">
//       <a href={`mailto:${user.email}`}>{user.email}</a>
//   </List.Content>

// debugger

const EditUser = (props) => {
    // const user = this.props.users.find(user => user.id == this.props.match.params.id)
    const dispatch = useDispatch();
    useEffect(() => dispatch(editUser(parseInt(props.match.params.id))), [dispatch]); // this is like componentDidMount
    
    console.log("props.loading", props.loading)

    if (props.loading) {
        
        return <div>"...Loading"</div>;
        
    }
    const user = props.user;
    // const findUser = users.find(user => user.id == routerProps.match.params.id)

    const baseLocationURL = "www.google.com/maps/place/";
    console.log("this is current user object: ", props.user);
    const location = user.city + ", " + user.state;

    function onCallHover(event) {
        // edit a popup
        // give options to text OR call
        event.target.style.background = 'red';
        // return (
        //     window.prompt(
        //         <div>
        //             <a href={`sms:${user.phone}`}>
        //             Send a text message</a>
        //             <a href={`tel:${user.phone}`}>
        //             Give them a call
        //             </a>
        //         </div>
        //     )
        // )
    }
    function onCallHoverLeave(event) {
        event.target.style.background = 'white';
    }

    function handleChange(event) {
		this.setState({
			[event.target.name]: event.target.innerText
		})
	}

    const instrumentsOptions = () => {
        return instruments.map(i => i.id)
    }
    
    return (
        <div>
            <List>
                <List.Item>
                    <List.Icon name="users" color='black' />
                    <List.Content label="user_name">
                        {user.first_name} {user.last_name}
                    </List.Content>
                </List.Item>
                <List.Item as={Link} to={baseLocationURL + location}>
                    <List.Icon name="marker" color='black' />
                    <List.Content label="user_location">
                        {location}
                    </List.Content>
                </List.Item>
                <List.Item >
                    <List.Icon name="mail" color='black' />
                    <List.Content label="user_email">
                        <a href={`mailto:${user.email}`}>{user.email}</a>
                    </List.Content>
                </List.Item>
                <List.Item>
                    <List.Icon name="linkify" color='black' />
                    <List.Content label="user_website">
                        <a href={`${user.website}`}
                            target="_blank"
                            rel="noreferrer">
                            {user.website}
                        </a>
                        
                        {/* <Link to={{pathname: user.website}} target="_blank">{user.website}</Link> */}
                    </List.Content>
                </List.Item>

                <List.Item >
                    <List.Icon name="phone" /> {/* onMouseOver={onCallHover} onMouseLeave={onCallHoverLeave}  */}
                    <List.Content label="user_phone">
                        <a href={`tel:${user.phone}`} target="_blank" rel="noreferrer">
                            {user.phone}
                        </a>
                    </List.Content>
                </List.Item>

                <List.Item>
                    <List.Icon name="book" />
                    <List.Content label="user_description">
                        {user.description}
                    </List.Content>
                </List.Item>
                    {/* <Dropdown.Item text='Call' description='ctrl + o' />
                    <Dropdown.Item icon='folder' text='Move to folder' />
                    <Dropdown.Item icon='trash' text='Move to trash' />
                    <Dropdown.Divider />
                    <Dropdown.Item text='Download As...' />
                    <Dropdown.Item text='Publish To Web' />
                    <Dropdown.Item text='E-mail Collaborators' /> */}
                    {/* <Dropdown color='black' label="user_phone" text='Contact' pointing='right' >
                        <Dropdown.Menu label="user_phone" content='hi'>
                        <Dropdown.Header content='Call or Text' />
                            <Dropdown.Item text='Call' icon='phone square' color='black' href={`tel:${user.phone}`}/>
                            <Dropdown.Item text='Text' icon='text telephone' color='black' href={`sms:${user.phone}`} />
                        </Dropdown.Menu>
                    </Dropdown> */}
                <List.Item>
                    <List.Icon name="music" />
                    <List.Content>
                    
                        <Dropdown placeholder='Primary Instrument' selection clearable options={instruments} onChange={handleChange} />
                        {/*                      
                        <Dropdown placeholder='Secondary Instrument' selection clearable options={instruments} />
                        <Dropdown placeholder='Other Instruments' selection clearable multiple options={instruments} /> */}
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
        user: state.user
    };
};


export default connect(mapStateToProps)(EditUser);
