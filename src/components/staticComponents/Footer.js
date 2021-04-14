import React, { Component } from "react";
import { Icon } from "semantic-ui-react";

 class Footer extends Component {
    render() {
        return (
            <div align='center'>
                <a href="https://www.elijahsamuels.com" target="_blank" rel="noreferrer">© {new Date().getFullYear()}</a>
				<a href="mailto:elijahsamuels@gmail.com"> <Icon name="mail" color="black" />{"Elijah Samuels"}</a>
            </div>
        );
    }
}

export default Footer;
