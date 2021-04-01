import React, { Component } from 'react';
import { connect } from 'react-redux';
import User from './User'
import { fetchUsers } from '../actions';
import { Dimmer, Loader } from 'semantic-ui-react'

export class UserList extends Component {
	componentDidMount() {
		this.props.fetchUsers();
	}
	render() {
		const { loading, users } = this.props;
		const userList = users.map(user => <User key={user.id} user={user} />);
		// const lastUser = users.slice(-1)[0]

		
		if (loading) {
			return (
				<div>    
					<Dimmer active>
						<Loader size='massive'>Loading</Loader>
					</Dimmer>
				</div>
			)
		}
		return (
			<div>
					<h2>Users</h2>
					<p>User Count: {userList.length} </p>
					{/* <p>Newest User: {lastUser.props} </p> */}
					{ userList }
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
