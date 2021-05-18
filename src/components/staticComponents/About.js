import React from "react";
import QRCode from "../../images/paypalQRCode.png";
import {} from "semantic-ui-react";

const About = () => {
    return (
        <div className="about">
            <h2 align="center"> What's this all about?! </h2>
            <div className="description" align="center">
                <p>
                    This was created for musicians worldwide to connect with one
                    another and help facilitate finding other musicians for
                    various projects. A collection of musicians throughout the
                    world. The ultimate rollidex!
                </p>
                <p>
                    As a musician, you're able to sign in with your Google
                    account. Once signed in, you can continue to complete your
                    profile. This will help other musicians find you based on
                    your location, instruments and type of gigs you want to
                    play.
                </p>
            </div>
            <br />
            <div className="donations" align="center">
                Please consider donating to help offset our costs.
                <form
                    action="https://www.paypal.com/donate"
                    method="post"
                    target="_top">
                    <br />
                    <input
                        type="hidden"
                        name="hosted_button_id"
                        value="ZMFAUDELBR7P6"
                    />

                    <input
                        type="image"
                        src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif"
                        border="0"
                        name="submit"
                        title="PayPal - The safer, easier way to pay online!"
                        alt="Donate with PayPal button"
                    />
                    <img
                        alt=""
                        border="0"
                        src="https://www.paypal.com/en_US/i/scr/pixel.gif"
                        width="1"
                        height="1"
                    />
                    <br />
                    <img src={QRCode} alt="paypal donation" />
                </form>
            </div>
        </div>
    );
};

export default About;
