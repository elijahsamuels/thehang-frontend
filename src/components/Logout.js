import React from "react";
import { connect } from "react-redux";
import { GoogleLogout } from "react-google-login";
// import { Redirect } from 'react-router-dom'
import { logoutUser } from "../actions/userActions";
import { useHistory } from 'react-router';
// import history from "../components/staticComponents/history";



const clientId =
"707788443358-u05p46nssla3l8tmn58tpo9r5sommgks.apps.googleusercontent.com";

function Logout(props) {
    let history = useHistory()
    const onSuccess = () => {
        history.push('/about')
        props.logoutUser(null)
        // debugger
        // console.log("Logout made successfully");
        // alert('Logout made successfully ✌');
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

