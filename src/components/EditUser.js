import React, { useState } from "react";
import { connect } from "react-redux";
import {
    List,
    Form,
    Image,
    Icon,
    Loader,
    Dimmer,
    TextArea,
} from "semantic-ui-react";
import { editUser, deleteUser } from "../actions/userActions";
import InstrumentIDToName from "./staticComponents/InstrumentIDToName";

const EditUser = ({ currentUser, history, deleteUser, editUser, loading }) => {
    const [localUser, setLocalUser] = useState({
        id: currentUser.id,
        first_name: currentUser.first_name,
        last_name: currentUser.last_name,
        city: currentUser.city,
        state: currentUser.state,
        email: currentUser.email,
        phone: currentUser.phone,
        website: currentUser.website,
        primary_instrument_id: currentUser.primary_instrument_id,
        secondary_instrument_id: currentUser.secondary_instrument_id,
        description: currentUser.description,
        password: currentUser.password,
        imageUrl: currentUser.imageUrl,
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        editUser(localUser);
    };

    const handleDelete = (event) => {
        event.preventDefault();
        history.push("/about");
        deleteUser(localUser);
    };

    const handleChange = (event) => {
        setLocalUser({
            ...localUser,
            [event.target.name]: event.target.value,
        });
    };

    if (loading) {
        return (
            <div>
                <Dimmer active>
                    <Loader size="massive">Loading</Loader>
                </Dimmer>
            </div>
        );
    }

    return (
        <div>
            <br />
            <h1 align="center">Welcome, {localUser.first_name}!</h1>
            <br />

            <Form>
                <Image.Group widths="equal" align="center">
                    <Image
                        src={`${localUser.imageUrl}`}
                        size="small"
                        bordered={true}
                        rounded
                        alt="user image"
                    />
                </Image.Group>
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

                    <Form.Input
                        fluid
                        name="secondary_instrument_id"
                        label="Secondary Instrument"
                        type="text"
                        id="secondary_instrument_id"
                        placeholder="secondary_instrument_id"
                        value={InstrumentIDToName(
                            localUser.secondary_instrument_id
                        )}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group>
                    <Icon name="book" color="black" />
                    <TextArea
                        placeholder="Description"
                        name="Description"
                        id="Description"
                        label="Description"
                        value={localUser.description}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Button
                        color="blue"
                        type="submit"
                        id="submit"
                        name="submit"
                        onClick={handleSubmit}>
                        <Icon name="signup" />
                        Save Changes
                    </Form.Button>
                    <Form.Button
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
                    <List.Icon name="microchip" /> Info about your machine:{" "}
                    {clientInformation.userAgent}
                </List.Item>
                <List.Item>
                    <List.Icon name="computer" /> Your computer type:{" "}
                    {clientInformation.platform}
                </List.Item>
            </List>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        loading: state.loading,
        currentUser: state.currentUser,
    };
};

export default connect(mapStateToProps, { editUser, deleteUser })(EditUser);
