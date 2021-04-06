import React, { Component } from 'react'
import { Button, Card, Image } from 'semantic-ui-react'
import pianoDog from '../images/pianodog.jpg';


class User extends Component {
	
	handleClick = (event) => {
		console.log("hello from user number: ", event.id)
		// edit the user info 
	}
	
	render() {
		const user = this.props.user;
		// let user = this.props.users.find(user => user.id === user)

		return (
			<div>
				<Card.Group 
					itemsPerRow={3}
					centered={true} >
				{/* <Card class="blurring dimmable image"> */}

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
							{/* <Image src='src/components/pianodog.jpg' /> */}
							{/* <Image src={pianodog.jpg} wrapped ui={false} /> */}

						<Image 
							size='mini'
							// width='200'
							// src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/986fcf72-d963-4496-94ab-02a754c17849/d4ggxn6-0f39f486-1e44-4d86-aff8-6cb24f9ce736.png/v1/fill/w_900,h_928,strp/cartoon_musician__oots_style_by_janholan_d4ggxn6-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD05MjgiLCJwYXRoIjoiXC9mXC85ODZmY2Y3Mi1kOTYzLTQ0OTYtOTRhYi0wMmE3NTRjMTc4NDlcL2Q0Z2d4bjYtMGYzOWY0ODYtMWU0NC00ZDg2LWFmZjgtNmNiMjRmOWNlNzM2LnBuZyIsIndpZHRoIjoiPD05MDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.6PCumW1i3FKuua6guNqTeohrCfhMewME5Y3f0joSUo4'
							src={pianoDog}	
							alt='pianodog' 
							wrapped ui={false} />
						<Card.Content>
							<p align='center'>{ user.city }</p>
							<p align='center'>{ user.email }</p>
						</Card.Content>
						<Button 
							animated='fade' 
							id={user.id} 
							>
							<Button.Content visible>Show Details</Button.Content>
							<Button.Content hidden>Hide Details</Button.Content>
						</Button>
					</Card>
					{/* </Card> */}
				</Card.Group>

				<br/>
				<br/>
			</div>
		)
	}
}
export default User

