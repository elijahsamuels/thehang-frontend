import React, { Component, useEffect, useState } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import {
    List,
    Form,
    Image,
    Icon,
    Loader,
    Dimmer,
    Dropdown,
    Select,
    TextArea,
} from "semantic-ui-react";
import { UserCard } from "./UserCard";
import { editUser } from "../actions/userActions";
import InstrumentIDToName from "./staticComponents/InstrumentIDToName";

const genderOptions = [
    { key: "male", text: "Male", value: "male" },
    { key: "female", text: "Female", value: "female" },
    { key: "other", text: "Other", value: "other" },
    { key: "na", text: "Prefer not to say", value: "prefer not to say" },
];

const instruments = [
    { key: "1", text: "Guitar", value: "guitar" },
    { key: "2", text: "Bass", value: "bass" },
    { key: "3", text: "Drums", value: "drums" },
    { key: "4", text: "Piano", value: "piano" },
    { key: "5", text: "Saxophone", value: "saxophone" },
    { key: "6", text: "Trumpet", value: "trumpet" },
    // {
    //     name: "saxophone",
    //     key: "saxophone",
    //     text: "Saxophone",
    //     value: "saxophone",
    // },
    // { name: "oboe", key: "oboe", text: "Oboe", value: "oboe" },
    // { name: "bassoon", key: "bassoon", text: "Bassoon", value: "bassoon" },
    // { name: "trumpet", key: "trumpet", text: "Trumpet", value: "trumpet" },
    // { name: "trombone", key: "trombone", text: "Trombone", value: "trombone" },
    // {
    //     name: "acoustic guitar",
    //     key: "acoustic guitar",
    //     text: "Acoustic Guitar",
    //     value: "acoustic guitar",
    // },
    // {
    //     name: "electric guitar",
    //     key: "electric guitar",
    //     text: "Electric Guitar",
    //     value: "electric guitar",
    // },
    // {
    //     name: "electric bass",
    //     key: "electric bass",
    //     text: "Electric Bass",
    //     value: "electric bass",
    // },
    // { name: "drums", key: "drums", text: "Drums", value: "rums" },
    // {
    //     name: "piano/keys",
    //     key: "piano/keys",
    //     text: "Piano/Keys",
    //     value: "piano/keys",
    // },
    // {
    //     name: "vocals (male)",
    //     key: "vocals (male)",
    //     text: "Vocals (Male)",
    //     value: "vocals (male)",
    // },
    // {
    //     name: "vocals (female key)",
    //     key: "vocals (female)",
    //     text: "Vocals (Female)",
    //     value: "vocals (female)",
    // },
    // { name: "tuba", key: "tuba", text: "Tuba", value: "tuba" },
    // { name: "violin", key: "violin", text: "Violin", value: "violin" },
    // { name: "viola", key: "viola", text: "Viola", value: "viola" },
    // { name: "cello", key: "cello", text: "Cello", value: "cello" },
    // {
    //     name: "double bass",
    //     key: "double bass",
    //     text: "Double Bass (Upright Bass)",
    //     value: "double bass",
    // },
    // {
    //     name: "accordion",
    //     key: "accordion",
    //     text: "Accordion",
    //     value: "accordion",
    // },
    // { name: "dj", key: "dj", text: "DJ", value: "dj" },
    // { name: "banjo", key: "banjo", text: "Banjo", value: "banjo" },
    // { name: "mandolin", key: "mandolin", text: "Mandolin", value: "mandolin" },
    // { name: "other", key: "other", text: "Other", value: "other" },
];


const EditUser = (props) => {
    // const user = this.props.users.find(user => user.id == this.props.match.params.id)
    
    // useEffect(() => {
    //     return function setUserImg() {
    //         if (props !== undefined) {
    //             console.log("from 109", props.currentUser.imageUrl)
    //             console.log("from 110", props.currentUser.first_name)
    //         }}
    //     });

    const [localUser, setLocalUser] = useState({
        id: props.currentUser.id,
        first_name: props.currentUser.first_name,
        last_name: props.currentUser.last_name,
        city: props.currentUser.city,
        state: props.currentUser.state,
        email: props.currentUser.email,
        phone: props.currentUser.phone,
        website: props.currentUser.website,
        primary_instrument_id: props.currentUser.primary_instrument_id,
        secondary_instrument_id: props.currentUser.secondary_instrument_id,
        description: props.currentUser.description,
        password: props.currentUser.password,
        imageUrl: props.currentUser.imageUrl,
    });


    const handleSubmit = (event) => {
        event.preventDefault();
        props.editUser(localUser);
    };

    // need to build this out to actions, reducer, and database. we want to HIDE the user, not actually delete the account.
    const handleDelete = (event) => {
        event.preventDefault();
        props.deleteUser(localUser);
    };

    const handleChange = (event) => {
        setLocalUser({
            ...localUser,
            [event.target.name]: event.target.value,
        });
    };

    // HELP/TODO: Move this out to a separate component
    // const text = async (url) => {
    //     return await fetch(url).then((res) => res.text());
    // };
    // text("https://www.cloudflare.com/cdn-cgi/trace").then((data) => {
    //     let ipRegex = /[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}/;
    //     let ip = data.match(ipRegex)[0];
    //     localUser.ip = ip; // HELP: Doesn't always show... Why?
    // });


    if (props.loading) {
        return (
            <div>
                <Dimmer active>
                    <Loader size="massive">Loading</Loader>
                </Dimmer>
            </div>
        );
    }

    // const baseLocationURL = "www.google.com/maps/place/";

    return (
        <div>
            <br/>
            <h1 align="center">Welcome, {localUser.first_name}!</h1>
            <br/>

            <Form>
                <Form.Group widths="equal">
                    <Icon name="user" color="black" />
                    <Form.Input
                        fluid
                        name="first_name"
                        label="First name"
                        type="text"
                        id="first_name"
                        placeholder="First name"
                        value={localUser.first_name}
                        onChange={handleChange}
                    />

                    <Icon name="user" color="black" />
                    <Form.Input
                        fluid
                        name="last_name"
                        label="Last name"
                        type="text"
                        id="last_name"
                        placeholder="Last name"
                        value={localUser.last_name}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group widths="equal">
                    <Icon name="building" color="black" />
                    <Form.Input
                        fluid
                        name="city"
                        label="City"
                        type="text"
                        id="city"
                        placeholder="City"
                        value={localUser.city}
                        onChange={handleChange}
                    />
                    <Icon name="building" color="black" />
                    <Form.Input
                        fluid
                        name="state"
                        label="State"
                        type="text"
                        id="state"
                        placeholder="State"
                        value={localUser.state}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group widths="equal">
                    <Icon name="phone" color="black" />
                    <Form.Input
                        fluid
                        name="phone"
                        label="Phone"
                        type="text"
                        id="phone"
                        placeholder="Phone"
                        value={localUser.phone}
                        onChange={handleChange}
                    />
                    <Icon name="mail" color="black" />
                    <Form.Input
                        fluid
                        name="email"
                        label="Email"
                        type="text"
                        id="email"
                        placeholder="Email"
                        value={localUser.email}
                        onChange={handleChange}
                    />
                        <Icon name="linkify" color="black" />
                    <Form.Input
                        fluid
                        name="website"
                        label="Website"
                        type="text"
                        id="website"
                        placeholder="Website"
                        value={localUser.website}
                        onChange={handleChange}
                    />
                    <Image src={`${localUser.imageUrl}`} size='medium' rounded />
                    {/* <Form.Input
                        fluid
                        name="imgUrl"
                        label="imgUrl"
                        type="text"
                        id="imgUrl"
                        placeholder="imgUrl"
                        value={localUser.imgUrl}
                        onChange={handleChange}
                    /> */}
                </Form.Group>
                <Form.Group>
                    <Form.Input
                        fluid
                        name="primary_instrument_id"
                        label="Primary Instrument"
                        type="text"
                        id="primary_instrument_id"
                        placeholder="primary_instrument_id"
                        value={InstrumentIDToName(
                            localUser.primary_instrument_id
                        )}
                        onChange={handleChange}
                    />
                    {/* <Dropdown
                        fluid
                        search
                        selection
                        name="primary_instrument_id"
                        label="Primary Instrument"
                        // id="primary_instrument_id" placeholder="Primary Instrument"
                        options={instruments}
                        value={InstrumentIDToName(
                            localUser.primary_instrument_id
                        )}
                        // onChange={handleChange}
                    /> */}
                      <Select 
                      placeholder={InstrumentIDToName(localUser.primary_instrument_id)} 
                      value={InstrumentIDToName(localUser.primary_instrument_id)}
                    //   selected={localUser.primary_instrument_id}  
                      options={instruments}
                      onChange={handleChange}
                       />
                    <Form.Input
                        fluid
                        name="secondary_instrument_id"
                        label="Secondary Instrument"
                        type="text"
                        id="secondary_instrument_id"
                        placeholder="secondary_instrument_id"
                        value={InstrumentIDToName(localUser.secondary_instrument_id)}
                        onChange={handleChange}
                    />
                    <Form.Input
                        fluid
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        placeholder="password"
                        value={localUser.password}
                        onChange={handleChange}
                    />
                    {/* <Dropdown
                        placeholder='Select Country'
                        // fluid
                        search
                        selection
                        options={instrumentIDToName}
                        onChange={handleChange}
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
                <Form.Group>
                    <Icon name="book" color="black" />
                    <TextArea
                        label="Description"
                        // value={user.description}
                        value={localUser.description}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Button // HELP! Can't get the button to disable IF fields are empty
                        // disabled={!localUser.first_name
                        //     || !localUser.last_name
                        //     || !localUser.email
                        //     || !localUser.phone
                        // }
                        color="blue"
                        type="submit"
                        id="submit"
                        name="submit"
                        onClick={handleSubmit}>
                        <Icon name="signup" />
                        Save Changes
                    </Form.Button>
                    <Form.Button // HELP! Can't get the button to disable IF fields are empty
                        // disabled={!localUser.first_name
                        //     || !localUser.last_name
                        //     || !localUser.email
                        //     || !localUser.phone
                        // }
                        color="red"
                        type="delete"
                        id="delete"
                        name="delete"
                        onClick={handleDelete}>
                        <Icon name="delete" />
                        Delete Account
                    </Form.Button>
                </Form.Group>
            </Form>
            <List>
                <List.Item>
                    <List.Icon name="microchip" /> Info about your machine: {clientInformation.userAgent} 
                </List.Item>
                <List.Item>
                    <List.Icon name="computer" /> Your computer type: {clientInformation.platform}
                </List.Item>
                {/* <List.Item>
                    <List.Icon name="location arrow" /> Your IP Address: {localUser.ip}
                </List.Item> */}
            </List>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        currentUser: state.currentUser,
    };
};

export default connect(mapStateToProps, { editUser })(EditUser);
// export default withRouter(connect(mapStateToProps, { editUser })(EditUser))

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
