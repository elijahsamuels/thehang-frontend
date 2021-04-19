import React, { useState } from "react";
import { connect, useDispatch } from "react-redux";
import { GoogleLogin } from "react-google-login";
import { refreshTokenSetup } from "../utils/refreshToken.js"; // refresh token
import { loginUser, currentUser } from "../actions/userActions";
import { useHistory } from 'react-router';

const clientId = "1013700354653-b2kttdr1n3oh7pu52qp5f0e47jvfck0o.apps.googleusercontent.com";

const Login = (props) => {
    let history = useHistory()

    const onSuccess = (response) => {
        debugger
        props.loginUser(response.profileObj);
        history.push("/about"); // this one works!
		refreshTokenSetup(response);
        // console.log("Login, stage: 1. This then sends to the loginUser (action) userActions (file)");
		//   dispatch({ type: "CURRENT_USER", payload: response.profileObj.email})
	};

    const onFailure = (response) => {
        // console.log("Login failed: response:", response);
        alert(`Failed to login.`);
    };

    return (
        <div>
            <GoogleLogin
                clientId={clientId}
                buttonText="Login"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={"single_host_origin"}
                style={{ marginTop: "100px" }}
                isSignedIn={true}
            />
        </div>
    );
};

const mapStateToProps = (props) => {
    return {
        currentUser: props.response,
    };
};

export default connect(mapStateToProps, { loginUser })(Login);
