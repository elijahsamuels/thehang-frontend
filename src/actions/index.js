export const fetchUsers = () => {
	return dispatch => {
		dispatch({ type: "LOADING"})
		fetch("/users")
		.then(response => response.json())
		.then(payload => dispatch({ type: "SET_USERS", payload }))
	}
}

export const addUser = (user) => {
	return {
		type: "ADD_USER",
		user
	}
}

export const addUser = (user) => {
	return {
		type: "ADD_USER",
		user
	}
}