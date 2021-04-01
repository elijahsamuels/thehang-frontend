import React, { Component } from 'react'
import { Button, Card } from 'semantic-ui-react'

const handleClick = (e) => {
	console.log("hello from edit button: ", e)
}

class User extends Component {
	render() {
		const user = this.props.user;
		return (
			<div>
				<Card.Group>
				<Card id={user.id} key={user.id}>
					<Card.Header align='center' as='h3'>{ user.first_name } { user.last_name }</Card.Header>
					{/* <Image 
						size='mini'
						src='pianodog.png' 
						alt='pianodog' 
						wrapped ui={false} /> */}
					<Card.Content>
						<p align='center'>{ user.city }</p>
						<p align='center'>{ user.email }</p>
					</Card.Content>
					<Button animated='fade' onClick={() => this.handleClick}>
						<Button.Content visible>Show Details</Button.Content>
						<Button.Content hidden>Hide Details</Button.Content>
					</Button>
				</Card>
				</Card.Group>

				<br/>
			</div>
		)
	}
}
export default User

