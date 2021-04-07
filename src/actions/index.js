export const fetchUsers = () => {
	return dispatch => {
		dispatch({ type: "LOADING"})
		fetch("/users")
		.then(response => response.json())
		.then(payload => dispatch({ type: "SET_USERS", payload }))
	}
}

export const addUser = (user, history) => {
	return dispatch => {
		fetch('/users', {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ user })
		})
		.then(response => response.json())
		.then(user => {
			dispatch({ type: "ADD_USER", user })
		})
	}
}

export const showUser = ( user ) => {
	return dispatch => {
		debugger
		fetch("/users/" + user.id)
		.then(response => response.json())
		.then(payload => {
			dispatch({ type: "SHOW_USER", payload })
		})
		this.props.history.push(`/musician/${user.id}`);

	}
}