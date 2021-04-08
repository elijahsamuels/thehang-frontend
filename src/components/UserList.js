import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserCard from './UserCard'
import { fetchUsers } from '../actions';
import { Loader, Card } from 'semantic-ui-react'

export class UserList extends Component {
	
	componentDidMount() {
		this.props.fetchUsers();
	}
	
	render() {
		const { loading, users } = this.props;
		const userList = users.map(user => <UserCard key={user.id} user={user} history={this.props.history} />);

		if (loading) {
			return (
				<div>    
					{/* <Dimmer active> */}
						<Loader size='massive'>Loading</Loader>
					{/* </Dimmer> */}
				</div>
			)
		}
			return (
				<div>
					<h2>Musicians</h2>
					<p>Musician Count: {userList.length} </p>
					{/* <p>Newest User: {lastUser.props} </p> */}
					{/* { userList } */}

					<Card.Group 
						centered={true}
						itemsPerRow={4}
						style={{padding: "20px"}}>
						{ userList }
					</Card.Group>


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

export default connect(mapStateToProps, { fetchUsers })(UserList)