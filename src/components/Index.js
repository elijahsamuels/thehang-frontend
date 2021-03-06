import React, { Component } from "react";
import { Image } from "semantic-ui-react";
import hangbackground from "../images/hangbackground.jpg";

export class Index extends Component {
    render() {
        return (
            <div align="center">
                <h2> Welcome to The Hang! </h2>
                <p>Create a profile and connect with other musicians!</p>
                <br />
                <Image.Group>
                    <Image src={hangbackground} size="small" alt="background" />
                </Image.Group>
            </div>
        );
    }
}

export default Index;
