import React from "react";
import { GoogleLogout } from "react-google-login";
import { Redirect } from "react-router";

const clientId =
    "707788443358-u05p46nssla3l8tmn58tpo9r5sommgks.apps.googleusercontent.com";

function Logout() {
    const onSuccess = () => {
        <Redirect to="/" />;
        console.log("Logout made successfully");
        // alert('Logout made successfully ✌');
    };

    return (
        <div>
            <GoogleLogout
                clientId={clientId}
                // buttonText="Logout"
                // button="logout!"
                onLogoutSuccess={onSuccess}></GoogleLogout>
        </div>
    );
}

export default Logout;
