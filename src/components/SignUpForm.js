import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Button, Header, Icon, Input } from 'semantic-ui-react';
import { addUser } from '../actions/index.js';
import { withRouter } from 'react-router-dom';

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
		this.props.addUser(this.state);
		this.setState({
			first_name: '',
            last_name: '',
            city: '',
            email: '',
            password: ''
        })
        this.props.history.push('/musicians') // HELP MOVE THIS TO THE ACTIONS
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
							// control={Input}
							id="email" 
							name="email" 
							placeholder="Email"
							value={this.state.email} 
							onChange={this.handleChange}
							// error={{
							// 	content: 'Please enter a valid email address',
							// 	pointing: 'below',
							//   }}
						 />

					</Form.Group>
					<Form.Input
						label="Password"
						type="password" 
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
						<br />
						<br />
						<Button type="submit" onClick={this.onSubmit}><Icon name="signup"/>Submit</Button>
					</div>
						<br />
						<p>User should have to prove they're a musician by passing some music related question. Either identify musical note on a staff, instrument, or something else </p>
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

export default withRouter(connect(null, { addUser })(SignUpForm))
