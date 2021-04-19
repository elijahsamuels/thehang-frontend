import React from "react";
import { connect } from "react-redux";
import { GoogleLogout } from "react-google-login";
import { logoutUser } from "../actions/userActions";
import { useHistory } from 'react-router';
// import history from "../components/staticComponents/history";

const clientId = "1013700354653-b2kttdr1n3oh7pu52qp5f0e47jvfck0o.apps.googleusercontent.com";

export const Logout = (props) => {
    let history = useHistory()
    const onSuccess = () => {
        history.push('/about')
        props.logoutUser(null)
        // console.log("Logout made successfully");
    };
    
    return (
        <div>
            <GoogleLogout
                clientId={clientId}
                onLogoutSuccess={onSuccess}>
            </GoogleLogout>
        </div>
    );
}

const mapStateToProps = (props) => {
    return {
        currentUser: props.response,
    };
};

export default connect(mapStateToProps, { logoutUser })(Logout);