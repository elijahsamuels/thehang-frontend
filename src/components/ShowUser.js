import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Form, Button, Card, Image } from 'semantic-ui-react';
import { UserCard } from './UserCard';

// const user = UserCard(event)
// const user = this.event

const genderOptions = [
	{ key: 'male', text: 'Male', value: 'male' },
	{ key: 'female', text: 'Female', value: 'female' },
	{ key: 'other', text: 'Other', value: 'other' },
	{ key: 'na', text: 'Prefer not to say', value: 'prefer not to say' },
]


const ShowUser = (props) => {
	// const user = this.props.users.find(user => user.id == this.props.match.params.id)

	console.log("this is something", props)
	// debugger
		return (
			<div>
				<Form>

					<Form.Group widths='equal'>
						<Form.Input fluid 
							label='First name' 
							placeholder='First name'
							value={"user.first_name"} />
						
						<Form.Input fluid 
							label='Last name' 
							placeholder='Last name'
							value={'hi'} />
					</Form.Group>

					<Form.Group widths='equal'>
						<Form.Input fluid 
							label='City' 
							placeholder='City' />
						
						<Form.Input fluid 
							label='Email' 
							placeholder='Email' />
					</Form.Group>
					{/* <Form.Select options={genderOptions} placeholder='Gender' /> */}
					{/* <Form.Checkbox label='I agree to the Terms and Conditions' /> */}

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

const mapStateToProps = (state) => ({
	
})

const mapDispatchToProps = {
	
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowUser)
