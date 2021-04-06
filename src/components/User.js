import React, { Component } from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Button, Card, Image } from 'semantic-ui-react';
// import { showUser } from '../components/ShowUser.js';
import pianoDog from '../images/pianodog.jpg';


class User extends Component {
	
	handleClick = (event) => {
		console.log("hello from user number: ", event.id)
		// show the user info. send this event to the usersReducer
		// pass this.props into the store to show the individual user?
		// this.props.user === event // true

			// this.props.showUser(this.event.id);
			// this.props.history.push('/musicians')
	
	}
	
	render() {
		const user = this.props.user;
		// let user = this.props.users.find(user => user.id === user)

		return (
			<div>
				<Card.Group 
					itemsPerRow={3}
					centered={true} >

					<Card
						// fluid={true}
						raised={true}
						id={user.id} 
						key={user.id} 
						onClick={() => this.handleClick(user)}>
						<Card.Header 
							align='center' 
							as='h3'>
								{ user.first_name } { user.last_name }
						</Card.Header>
						<Image 
							size='mini'
							src={pianoDog}	
							alt='pianodog' 
							wrapped ui={false} />
						<Card.Content>
							<p align='center'>{ user.city }</p>
							<p align='center'>{ user.email }</p>
						</Card.Content>
						<Button 
							animated='fade' 
							id={user.id}>
							<Button.Content visible>Show Details</Button.Content>
							<Button.Content hidden>Hide Details</Button.Content>
						</Button>
					</Card>
				</Card.Group>
				<br/>
				<br/>
			</div>
		)
	}
}

export default withRouter(connect(null, {  })(User))
