import React, { Component } from 'react';
import SignUpForm from './SignUpForm.js';

export class Index extends Component {
	render() {
		return (
			<div>
				<h2> This is Index the Index Page. </h2>
				<p>Index description coming soon!</p>
				<p>Build out user login/signup options</p>
				<p>Build out something else like recent story? Post? newest user?</p>
				<br/>
				<SignUpForm />

			</div>
		)
	}
}

export default Index
