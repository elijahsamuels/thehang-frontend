import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { List, Image } from "semantic-ui-react";
import { showUser } from "../actions/userActions";
import InstrumentIDToName from "./staticComponents/InstrumentIDToName";
import pianoDog from "../images/pianodog.jpg";

const ShowUser = (props) => {
    const currentUser = props.currentUser;
    const user = props.user;
    const location = `${user.city}, ${user.state}`;
    const baseLocationURL = "www.google.com/maps/place/";

    const dispatch = useDispatch();
    useEffect(() => dispatch(showUser(parseInt(props.match.params.id))), [
        dispatch,
    ]);
    if (props.loading) {
        return <div>"...Show User is Loading"</div>;
    }
    const userImage = () => {
        if (!!user.imageUrl) {
            return user.imageUrl;
        }
        return pianoDog;
    };

    return (
        <div>
            <List>
                <Image.Group>
                    <Image src={userImage()} size="small" alt="pianodog" />
                </Image.Group>

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

                {!!currentUser ? (
                    <List.Item>
                        <List.Icon name="mail" color="black" />
                        <List.Content label="user_email">
                            <a href={`mailto:${user.email}`}>{user.email}</a>
                        </List.Content>
                    </List.Item>
                ) : (
                    <></>
                )}

                <List.Item>
                    <List.Icon name="linkify" color="black" />
                    <List.Content label="user_website">
                        <a
                            href={`${user.website}`}
                            target="_blank"
                            rel="noreferrer">
                            {" "}
                            {user.website}{" "}
                        </a>
                    </List.Content>
                </List.Item>

                {!!currentUser ? (
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
                )}

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
                        {InstrumentIDToName(user.primary_instrument_id)}
                    </List.Content>
                </List.Item>
                <List.Item>
                    <List.Icon name="music" />
                    <List.Content label="primary_instrument">
                        Secondary Instrument:{" "}
                        {InstrumentIDToName(user.secondary_instrument_id)}
                    </List.Content>
                </List.Item>
            </List>
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
