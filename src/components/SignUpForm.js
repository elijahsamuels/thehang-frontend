import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Button } from 'semantic-ui-react';
import { addUser } from '../actions/index.js';

export class SignUpForm extends Component {
	state = {
		first_name: '',
		last_name: '',
		city: '',
		email: '',
		password: ''
}

	handleChange = event => {
		this.setState({
			[event.target.name]: event.target.value
		})
	}
		
	handleSubmit = event => {
		event.preventDefault();
		// console.log('this.state: ',this.state );
		this.props.addUser(this.state, this.props.history);
		// this.setState({
		// 	first_name: '',
		// 	last_name: '',
		// 	city: '',
		// 	email: ''
		// })
	}

	render() {
		return (
			<Form onSubmit={ this.handleSubmit }>
				<div>
					<label htmlFor='signup'>			
						Sign up!
					</label>			
				</div>
				<div>
					<label htmlFor='first_name'>First Name</label>			
					<input type="text" 
						id="first_name" 
						name="first_name" 
						placeholder="First name"
						value={this.state.first_name} 
						onChange={this.handleChange} />
					<label htmlFor='last_name'>Last Name</label>		
					<input type="text" 
						id="last_name" 
						name="last_name" 
						placeholder="Last name"
						value={this.state.last_name} 
						onChange={this.handleChange} />
					<label htmlFor='city'>City</label>				
					<input type="text" 
						id="city" 
						name="city" 
						placeholder="City"
						value={this.state.city} 
						onChange={this.handleChange} />
					<label htmlFor='email'>Email</label>			
					<input type="text" 
						id="email" 
						name="email" 
						placeholder="Email"
						value={this.state.email} 
						onChange={this.handleChange} />
					<label htmlFor='password'>Password</label>			
					<input type="text" 
						id="password" 
						name="password" 
						placeholder="Password"
						value={this.state.password} 
						onChange={this.handleChange} />
						<br />
						<br />
					<div>
						<div className="ui checkbox">
							<input type="checkbox" />
							<label className="user-agreement">Agree to things</label>
						</div>
						<p>User should have to prove they're a musician by passing some music related question. Either identify musical note on a staff, instrument, or something else </p>
						<br />
						<br />
						<Button type="submit" onClick={this.onSubmit}>Submit</Button>
					</div>
				</div>
			</Form>
		)
	}
}
// const mapDispatchToProps = dispatch => {
// 	return {
// 		addUser: (user) => dispatch(this.addUser(user)) 
// 	}
// }

export default connect(null, { addUser })(SignUpForm)
