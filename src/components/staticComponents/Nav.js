import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Nav extends Component {
	render() {
		return (
			<div>
				<Link to="/"> Main</Link>
				<Link to="about"> About</Link>
				<Link to="musicians"> Musicians</Link>
			</div>
		)
	}
}

export default Nav
