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
			history.push('/musicians')
		})
	}
}
