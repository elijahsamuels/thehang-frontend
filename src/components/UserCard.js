import React, { Component } from "react";
import { connect } from "react-redux";
import { Card, Image } from "semantic-ui-react";
import { showUser } from "../actions/userActions.js";
import pianoDog from "../images/pianodog.jpg";
import InstrumentIDToName from "./staticComponents/InstrumentIDToName";

const UserCard = (props) => {
    const user = props.user;
    const currentUser = props.currentUser;
    // debugger
    // let user = props.users.find(user => user.id === user)
    const userImage = () => {
    // function userImage() {
        // console.log("props from userImage(): ",props, pianoDog)
        // debugger
        if (!!user.imageUrl) {
            return user.imageUrl
        } else {
            return pianoDog
        }
    }
    return (
        <div>
            <Card.Group style={{ padding: "2px" }}>
                <Card
                    raised={true}
                    id={user.id}
                    key={user.id}
                    // onClick={() => handleClick(user)}
                    href={`/musician/${user.id}`}>
                    <Card.Header align="center" as="h3">
                        {user.first_name} {user.last_name}
                    </Card.Header>
                    <Image.Group align="center">
                        <Image
                            // src={pianoDog}
                            // src={user.imageUrl}
                            src={userImage()}
                            size="small"
                            alt="pianodog"
                            // wrapped
                            // ui={false}
                        />
                    </Image.Group>
                    <Card.Content>
                        <p align="center">
                            {InstrumentIDToName(user.primary_instrument_id)}
                        </p>
                        <p align="center">{user.city}</p>
                        {!!currentUser ? (
                            <p align="center">{user.email}</p>
                        ) : (
                            <></>
                        )}
                    </Card.Content>
                    {/* <Button 
							animated='fade' 
							id={user.id}>
							<Button.Content visible>Show Details</Button.Content>
							<Button.Content hidden>Hide Details</Button.Content>
						</Button> */}
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

// export default withRouter(connect(mapStateToProps, { showUser })(UserCard))

export default connect(mapStateToProps, { showUser })(UserCard);
