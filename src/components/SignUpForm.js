import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { addUser } from '../actions'
// import { UserSignUp } from '../actions'
import { Form, Button } from 'semantic-ui-react'


export class SignUpForm extends Component {
	state = {
		first_name: '',
		last_name: '',
		city: '',
		email: ''
}

	handleChange = e => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}
		
	onSubmit = e => {
		e.preventDefault();
		this.props.addUser(this.state)
		this.setState({
			first_name: '',
			last_name: '',
			city: '',
			email: ''
		})
		debugger
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
						value={this.state.first_name} 
						onChange={this.handleChange} />
					<label htmlFor='last_name'/>		
					<input type="text" 
						id="last_name" 
						name="last_name" 
						placeholder="Last name"
						value={this.state.last_name} 
						onChange={this.handleChange} />
					<label htmlFor='city'/>				
					<input type="text" 
						id="city" 
						name="city" 
						placeholder="City"
						value={this.state.city} 
						onChange={this.handleChange} />
					<label htmlFor='email'/>			
					<input type="text" 
						id="email" 
						name="email" 
						placeholder="Email"
						value={this.state.email} 
						onChange={this.handleChange} />
					<div>
						<div className="ui checkbox">
							<input type="checkbox" />
							<label>Agree to things</label>
						</div>
						<br />
						<Button type="submit" onClick={this.onSubmit}>Submit</Button>
					</div>
				</div>
			</Form>
		)
	}
}
const mapDispatchToProps = dispatch => {
	return {
		addUser: (user) => dispatch(this.addUser(user)) 
	}
}

export default connect(null, mapDispatchToProps)(SignUpForm)
