import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Header, Icon } from 'semantic-ui-react';
import { addUser } from '../actions/userActions.js';
import { withRouter } from 'react-router-dom';

export class SignUpForm extends Component {
	state = {
		first_name: '',
		last_name: '',
		city: '',
		email: '',
		password: '',
		confirmPassword: ''
}

	handleChange = event => {
		this.setState({
			[event.target.name]: event.target.value,
		})	  
	}
		
	handleSubmit = event => {
		event.preventDefault();
		this.props.addUser(this.state);
		this.setState({
			first_name: '',
            last_name: '',
            city: '',
            email: '',
            password: '',
			confirmPassword: ''

        })
        this.props.history.push('/musicians') 
	}

	render() {
		return (
			<Form onSubmit={ this.handleSubmit }>
				<div>
					<Header as='h1' align='center'>
						Sign up
					</Header>
				</div>
				<br/>
				<div>
					<Form.Group widths='equal'>
						<Form.Input 
							label="First Name"
							type="text"  
							id="first_name" 
							name="first_name" 
							placeholder="First name"
							value={this.state.first_name} 
							onChange={this.handleChange} />
						<Form.Input
							label="Last Name"
							type="text" 
							id="last_name" 
							name="last_name" 
							placeholder="Last name"
							value={this.state.last_name} 
							onChange={this.handleChange} />
					</Form.Group>
					<Form.Group widths='equal'>
						<Form.Input
							label="City"
							type="text" 
							id="city" 
							name="city" 
							placeholder="City"
							value={this.state.city} 
							onChange={this.handleChange} />
						<Form.Input
							label="Email"
							type="text"
							id="email" 
							name="email" 
							placeholder="Email"
							value={this.state.email} 
							onChange={this.handleChange}
							error={{
								content: 'Please enter a valid email address',
								pointing: 'below',
							  }}
						 />

					</Form.Group>
					<Form.Group>
					<Form.Input
						label="Password"
						type="password" 
						id="password" 
						name="password" 
						placeholder="Password"
						value={this.state.password} 
						onChange={this.handleChange} />

					<Form.Input
						label="Confirm Password"
						type="password" 
						id="confirmPassword" 
						name="confirmPassword" 
						placeholder="Confirm Password"
						value={this.state.confirmPassword} 
						onChange={this.handleChange} 
						error={this.state.confirmPasswordError || this.state.passwordMatchError}
						/>
					</Form.Group>
						<br />
						<br />
					<div>
						<div className="ui checkbox">
							<input type="checkbox" />
							<label className="user-agreement">Agree to things</label>
						</div>
						<br />
						<br />
						<Form.Button
						disabled={!this.state.first_name
							|| !this.state.last_name
							|| !this.state.city
							|| !this.state.password
							|| !this.state.email
							|| !this.state.confirmPassword
						}
						color="blue"
						type="submit" 
						id="submit"
						name="submit"
						onClick={this.onSubmit}><Icon name="signup"/>Submit</Form.Button>
					</div>
						<br />
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
// export default withRouter(connect(null, mapDispatchToProps)(SignUpForm))

export default withRouter(connect(null, { addUser })(SignUpForm))
