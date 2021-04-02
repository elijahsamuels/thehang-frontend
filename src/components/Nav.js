import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Nav extends Component {
	render() {
		return (
			<div>
				The Navigator! 
				<Link to="/"> Main</Link>
				<Link to="about"> About</Link>
			</div>
		)
	}
}

export default Nav
