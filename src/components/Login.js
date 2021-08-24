import React from "react";
import { connect } from "react-redux";
import { GoogleLogin } from "react-google-login";
import { refreshTokenSetup } from "../utils/refreshToken.js";
import { loginUser } from "../actions/userActions";

const clientId =
    "1013700354653-b2kttdr1n3oh7pu52qp5f0e47jvfck0o.apps.googleusercontent.com";

const Login = (props) => {
    const onSuccess = (response) => {
        props.loginUser();
        props.loginUser(response.profileObj);
        refreshTokenSetup(response);
    };

    const onFailure = (response) => {
        alert(`Failed to login.`);
    };

    return (
        <div>
            <GoogleLogin
                clientId={clientId}
                buttonText="Google Login"
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
