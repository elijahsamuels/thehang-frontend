import React from "react";
import { connect } from "react-redux";
import { Card, Image } from "semantic-ui-react";
import { showUser } from "../actions/userActions.js";
import pianoDog from "../images/pianodog.jpg";
import InstrumentIDToName from "./staticComponents/InstrumentIDToName";

const UserCard = (props) => {
    const user = props.user;
    const currentUser = props.currentUser;
    const userImage = () => {
        if (!!user.imageUrl) {
            return user.imageUrl;
        }
        return pianoDog;
    };

    return (
        <div>
            <Card.Group style={{ padding: "2px" }}>
                <Card
                    raised={true}
                    id={user.id}
                    key={user.id}
                    href={`/musician/${user.id}`}>
                    <Card.Header align="center" as="h3">
                        {user.first_name} {user.last_name}
                    </Card.Header>
                    <Image.Group align="center">
                        <Image src={userImage()} size="small" alt="pianodog" />
                    </Image.Group>
                    <Card.Content>
                        <p align="center">
                            {InstrumentIDToName(user.primary_instrument_id)}
                        </p>
                        <p align="center">
                            {user.city}, {user.state}
                        </p>
                        {!!currentUser ? (
                            <p align="center">{user.email}</p>
                        ) : (
                            <></>
                        )}
                    </Card.Content>
                </Card>
            </Card.Group>
            <br />
            <br />
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        loading: state.loading,
        users: state.users,
        currentUser: state.currentUser,
    };
};

export default connect(mapStateToProps, { showUser })(UserCard);
