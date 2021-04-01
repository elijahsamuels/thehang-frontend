import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addUser } from '../actions'
import { UserSignUp } from '../actions'
import { Form, Button } from 'semantic-ui-react'


export class SignUpForm extends Component {
	
	onChange = e => {
		this.setState({
			[e.target.first_name]: e.target.value
		})
	}
	
	onSubmit = e => {
		e.preventDefault();
		this.props.addUser(this.state);
	}

	render() {
		return (
			<Form onSubmit={ this.handleSubmit }>
				<div>
					<label htmlFor='first_name'/>				
					<input type="text" 
						id="first_name" 
						name="first_name" 
						placeholder="First name"
						value={this.state} 
						onChange={this.handleChange} />
					<label htmlFor='last_name'/>		
					<input type="text" 
						id="last_name" 
						name="last_name" 
						placeholder="Last name"
						value={this.state} 
						onChange={this.handleChange} />
					<label htmlFor='city'/>				
					<input type="text" 
						id="city" 
						name="city" 
						placeholder="City"
						value={this.state} 
						onChange={this.handleChange} />
					<label htmlFor='email'/>			
					<input type="text" 
						id="email" 
						name="email" 
						placeholder="Email"
						value={this.state} 
						onChange={this.handleChange} />
					<div>
						<div class="ui checkbox">
							<input type="checkbox" />
							<label>Agree to things</label>
						</div>
						<br />
						<Button type="submit" onClick={UserSignUp}>Submit</Button>
					</div>
				</div>
			</Form>
		)
	}
}
const mapDispatchToProps = dispatch => {
	return {
		addUser: (user) => dispatch(addUser(user)) 
	}
}

export default connect(null, mapDispatchToProps)(SignUpForm)
