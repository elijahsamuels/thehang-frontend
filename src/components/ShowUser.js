import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { List } from "semantic-ui-react";
// import { UserCard } from "./UserCard";
import { showUser } from "../actions/userActions";

// const user = UserCard(event)
// const user = this.event

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

const ShowUser = (props) => {
    const user = props.user;
    // const user = this.props.users.find(user => user.id == this.props.match.params.id)
    // const findUser = users.find(user => user.id == routerProps.match.params.id)

    const location = `${user.city}, ${user.state}` ;



    const baseLocationURL = "www.google.com/maps/place/";
    console.log("this is current user object: ", props.user);
    const dispatch = useDispatch();
    useEffect(() => dispatch(showUser(parseInt(props.match.params.id))), [
        dispatch
    ]); // this is like componentDidMount

    if (props.loading) {
        return <div>"...Show User is Loading"</div>;
    }

    const instrumentIDToName = (instrumentIDs) => {
        const instrumentArray = [
            "",
            "Guitar",
            "Bass",
            "Drums",
            "Keys",
            "Saxophone",
        ];
        if (!!instrumentIDs) {
            return instrumentArray[instrumentIDs];
        }
            return instrumentArray[0];
    };

    return (
        <div>
            <List>
                <List.Item>
                    <List.Icon name="users" color="black" />
                    <List.Content label="user_name">
                        {user.first_name} {user.last_name}
                    </List.Content>
                </List.Item>
                <List.Item as={Link} to={baseLocationURL + location}>
                    <List.Icon name="marker" color="black" />
                    <List.Content label="user_location">
                        {location}
                    </List.Content>
                </List.Item>
                <List.Item>
                    <List.Icon name="mail" color="black" />
                    <List.Content label="user_email">
                        <a href={`mailto:${user.email}`}>{user.email}</a>
                    </List.Content>
                </List.Item>
                <List.Item>
                    <List.Icon name="linkify" color="black" />
                    <List.Content label="user_website">
                        <a
                            href={`${user.website}`}
                            target="_blank"
                            rel="noreferrer">
                            {user.website}
                        </a>

                        {/* <Link to={{pathname: user.website}} target="_blank">{user.website}</Link> */}
                    </List.Content>
                </List.Item>

                <List.Item>
                    <List.Icon name="phone" />{" "}
                    <List.Content label="user_phone">
                        <a
                            href={`tel:${user.phone}`}
                            target="_blank"
                            rel="noreferrer">
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
                <List.Item>
                    <List.Icon name="music" />
                    <List.Content label="primary_instrument">
                        Primary Instrument:{" "}
                        {instrumentIDToName(user.primary_instrument_id)}
                    </List.Content>
                </List.Item>
                <List.Item>
                    <List.Icon name="music" />
                    <List.Content label="primary_instrument">
                        Secondary Instrument:{" "}
                        {instrumentIDToName(user.secondary_instrument_id)}
                    </List.Content>
                </List.Item>
                
            </List>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        user: state.showUser,
    };
};

export default connect(mapStateToProps)(ShowUser);