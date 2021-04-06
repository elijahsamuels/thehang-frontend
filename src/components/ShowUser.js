import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Form, Button, Card, Image } from 'semantic-ui-react'

const genderOptions = [
	{ key: 'm', text: 'Male', value: 'male' },
	{ key: 'f', text: 'Female', value: 'female' },
	{ key: 'o', text: 'Other', value: 'other' },
	{ key: 'n', text: 'Prefer not to say', value: 'prefer not to say' },
  ]
  
export class ShowUser extends Component {
	// const user = this.props.user;

	render() {
		return (
			<div>
				<Form>
					<Form.Group widths='equal'>
						<Form.Input fluid label='First name' placeholder='First name' />
						<Form.Input fluid label='Last name' placeholder='Last name' />
						<Form.Input fluid label='City' placeholder='City' />
						<Form.Input fluid label='Email' placeholder='Email' />
					</Form.Group>
					<Form.Select options={genderOptions} placeholder='Gender' />
					<Form.Checkbox label='I agree to the Terms and Conditions' />

				{/* 
				{user.first_name}
				{user.last_name}
				{user.city}
				{user.email}
				
			*/}
			</Form>


			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	
})

const mapDispatchToProps = {
	
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowUser)
