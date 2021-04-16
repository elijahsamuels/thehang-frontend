import React, { Component } from "react";
import { Icon, Container, Sticky } from "semantic-ui-react";

class Footer extends Component {
    render() {
        return (
            <Container className="footer" align="center">
                <a
                    href="https://www.elijahsamuels.com"
                    target="_blank"
                    rel="noreferrer">
                    {new Date().getFullYear()} ©{" "}
                </a>
                    
                <a href="mailto:elijahsamuels@gmail.com">
                    {" "}
                    {"Elijah Samuels"} 
                    {" "}
                    {"Contact"}
                    {" "}
                    <Icon name="mail" color="black" />
                </a>
                <a href="https://github.com/elijahsamuels/thehang-frontend.git">
                    {" "}
                    <Icon name="github square" color="black" />
                </a>
            </Container>
        );
    }
}

export default Footer;
