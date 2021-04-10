import React, { Component, useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import {
    List,
    Form,
    Button,
    Icon,
    Loader,
    Dimmer,
    Dropdown,
    Select,
    TextArea,
} from "semantic-ui-react";
import { UserCard } from "./UserCard";
import { editUser } from "../actions";


const genderOptions = [
    { key: "male", text: "Male", value: "male" },
    { key: "female", text: "Female", value: "female" },
    { key: "other", text: "Other", value: "other" },
    { key: "na", text: "Prefer not to say", value: "prefer not to say" },
];

const instruments = [
    { name: "flute", key: "flute", text: "Flute", value: "flute" },
    { name: "clarinet", key: "clarinet", text: "Clarinet", value: "clarinet" },
    {
        name: "saxophone",
        key: "saxophone",
        text: "Saxophone",
        value: "saxophone",
    },
    { name: "oboe", key: "oboe", text: "Oboe", value: "oboe" },
    { name: "bassoon", key: "bassoon", text: "Bassoon", value: "bassoon" },
    { name: "trumpet", key: "trumpet", text: "Trumpet", value: "trumpet" },
    { name: "trombone", key: "trombone", text: "Trombone", value: "trombone" },
    {
        name: "acoustic guitar",
        key: "acoustic guitar",
        text: "Acoustic Guitar",
        value: "acoustic guitar",
    },
    {
        name: "electric guitar",
        key: "electric guitar",
        text: "Electric Guitar",
        value: "electric guitar",
    },
    {
        name: "electric bass",
        key: "electric bass",
        text: "Electric Bass",
        value: "electric bass",
    },
    { name: "drums", key: "drums", text: "Drums", value: "rums" },
    {
        name: "piano/keys",
        key: "piano/keys",
        text: "Piano/Keys",
        value: "piano/keys",
    },
    {
        name: "vocals (male)",
        key: "vocals (male)",
        text: "Vocals (Male)",
        value: "vocals (male)",
    },
    {
        name: "vocals (female key)",
        key: "vocals (female)",
        text: "Vocals (Female)",
        value: "vocals (female)",
    },
    { name: "tuba", key: "tuba", text: "Tuba", value: "tuba" },
    { name: "violin", key: "violin", text: "Violin", value: "violin" },
    { name: "viola", key: "viola", text: "Viola", value: "viola" },
    { name: "cello", key: "cello", text: "Cello", value: "cello" },
    {
        name: "double bass",
        key: "double bass",
        text: "Double Bass (Upright Bass)",
        value: "double bass",
    },
    {
        name: "accordion",
        key: "accordion",
        text: "Accordion",
        value: "accordion",
    },
    { name: "dj", key: "dj", text: "DJ", value: "dj" },
    { name: "banjo", key: "banjo", text: "Banjo", value: "banjo" },
    { name: "mandolin", key: "mandolin", text: "Mandolin", value: "mandolin" },
    { name: "other", key: "other", text: "Other", value: "other" },
];


const EditUser = (props) => {
    // const user = this.props.users.find(user => user.id == this.props.match.params.id)
    
    const [name, setName] = useState("");

    const [localUser, setLocalUser] = useState({
        first_name: props.user.first_name,
		last_name: props.user.last_name,
		city: props.user.city,
		email: props.user.email,
		state: props.user.state,
		phone: props.user.phone,
		website: props.user.website,
		description: props.user.description,
		primary_instrument_id: props.user.primary_instrument_id,
		secondary_instrument_id: props.user.secondary_instrument_id,
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        // alert(`Submitting Name ${name}`)
    }

    const handleChange = event => {
		setLocalUser({
			[event.target.name]: event.target.value
		})
	}

    const instrumentIDToName = (instrumentIDs) => {
        const instrumentArray = {
            0: "",
            1: "Guitar",
            2: "Bass",
            3: "Drums",
            4: "Keys",
            5: "Saxophone",
        };
        if (!!instrumentIDs) {
            return instrumentArray[instrumentIDs];
        }
            return instrumentArray[0];
    };

    const dispatch = useDispatch();
        useEffect(() => dispatch(editUser(parseInt(props.match.params.id))), [
            dispatch,
        ]); // this is like componentDidMount
    
    if (props.loading) {
        return <div>
            <Dimmer active>
                <Loader size='massive'>Loading</Loader>
            </Dimmer>
        </div>;
    }
    const user = props.user;
    // const findUser = users.find(user => user.id == routerProps.match.params.id)

    const baseLocationURL = "www.google.com/maps/place/";
    console.log("this is current user object: ", props.user);

    return (
        <div>
            <Form>
                <Form.Group widths="equal">
                    <Icon name="user" color="black" />
                    <Form.Input
                        fluid
                        label="First name"
                        placeholder="First name"
                        value={localUser.first_name}
                        onChange={handleChange}
                    />

                    <Icon name="user" color="black" />
                    <Form.Input
                        fluid
                        label="Last name"
                        placeholder="Last name"
                        value={localUser.last_name}
                        onChange={handleChange}
                    />

                </Form.Group>
                <Form.Group widths="equal">
                    <Icon name="building" color="black" />
                    <Form.Input
                        fluid
                        label="City"
                        placeholder="City"
                        value={localUser.city}
                        onChange={handleChange}
                    />
                    <Icon name="building" color="black" />
                    <Form.Input
                        fluid
                        label="State"
                        placeholder="State"
                        value={localUser.state}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group widths="equal">
                    <Icon name="phone" color="black" />
                    <Form.Input
                        fluid
                        label="Phone"
                        placeholder="Phone"
                        value={localUser.phone}
                        onChange={handleChange}

                    />
                    <Icon name="mail" color="black" />
                    <Form.Input
                        fluid
                        label="Email"
                        placeholder="Email"
                        value={localUser.email}
                        onChange={handleChange}
                    />
                    <Icon name="linkify" color="black" />
                    <Form.Input
                        fluid
                        label="Website"
                        placeholder="Website"
                        value={localUser.website}
                        onChange={handleChange}
                    />
                    <Form.Input
                        fluid
                        label="Primary Instrument"
                        placeholder="primary_instrument_id"
                        // value={localUser.primary_instrument_id.value}
                        onChange={handleChange}
                        />
                    <Form.Input
                        fluid
                        label="Secondary Instrument"
                        placeholder="secondary_instrument_id"
                        // value={instrumentIDToName(user.secondary_instrument_id)}
                        // value={localUser.secondary_instrument_id}
                        onChange={handleChange}
                    />
                    {/* <Dropdown
                        placeholder='Select Country'
                        fluid
                        search
                        selection
                        options={instrumentIDToName}
                        onChange={handleChange}
                    /> */}

                    {/* <Dropdown
                        // label="Primary Instrument"
                        placeholder="Primary Instrument"
                        value={instrumentIDToName(user.primary_instrument_id)}
                        // onChange={handleChange}
                    /> */}

                    {/*<Icon name="genderless" color="black" />
                    <Form.Select
                        label="Gender"
                        options={genderOptions}
                        placeholder="Gender"
                        value={localUser.website}
                        onChange={handleChange}

                    /> */}
                </Form.Group>
                <Icon name="book" color="black" />
                <Form>
                    <TextArea
                        fluid
                        label="Description"
                        // value={user.description}
                        value={localUser.description}
                        onChange={handleChange}
                    />
                </Form>
            </Form>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        user: state.user,
    };
};

export default connect(mapStateToProps)(EditUser);





    // function onCallHover(event) {
    //     event.target.style.background = "red";
    //     // edit a popup
    //     // give options to text OR call
    //     // return (
    //     //     window.prompt(
    //     //         <div>
    //     //             <a href={`sms:${user.phone}`}>
    //     //             Send a text message</a>
    //     //             <a href={`tel:${user.phone}`}>
    //     //             Give them a call
    //     //             </a>
    //     //         </div>
    //     //     )
    //     // )
    // }
    // function onCallHoverLeave(event) {
    //     event.target.style.background = "white";
    // }

    // const instrumentsOptions = () => {
    //     return instruments.map((i) => i.id);
    // };

    // const handleChange = (event) => {
        // setState({
        //     [event.target.name]: event.target.value,
        //     // [event.target.name]: event.target.innerText,
        // });
    // };