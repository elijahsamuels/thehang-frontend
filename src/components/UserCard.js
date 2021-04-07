import React, { Component } from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Button, Card, Image } from 'semantic-ui-react';
import { showUser } from '../actions/index.js';
import { UserList } from './UserList.js';
import pianoDog from '../images/pianodog.jpg';


export class UserCard extends Component {
	
	handleClick = user => {
		console.log("hello from user number: ", user.id);
		showUser(user)

		// debugger

        // this.props.history.push(`/musician/${user.id}`);
		// this.props.user.setState({id: user});
		// showUser(user);
		// this.setState({
		// 	[user.target.name]: user.target.value
		// })
		
		// show the user info. send this user to the usersReducer
		// pass this.props into the store to show the individual user?
		// this.props.user === user // true

			// this.props.showUser(this.user.id);
			// this.props.history.push('/musicians')
	
	}
	
	render() {
		const user = this.props.user;
		// let user = this.props.users.find(user => user.id === user)

		return (
			<div>
				<Card.Group>

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
						{/* <Button 
							animated='fade' 
							id={user.id}>
							<Button.Content visible>Show Details</Button.Content>
							<Button.Content hidden>Hide Details</Button.Content>
						</Button> */}
					</Card>
				</Card.Group>
				<br/>
				<br/>
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		loading: state.loading,
		users: state.users
	}
} 

// export default withRouter(connect(mapStateToProps, { showUser })(UserCard))

export default connect(mapStateToProps, { showUser })(UserCard)