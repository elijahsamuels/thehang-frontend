export const obtainUser = (user) => ({ type: "SHOW_USER", payload: user })

export const fetchUsers = () => {
	return dispatch => {
		dispatch({ type: "LOADING"})
		fetch("/users")
		.then(response => response.json())
		// .then(payload => dispatch({ type: "SET_USERS", payload }))
		.then(payload => console.log(dispatch({ type: "SET_USERS", payload })))
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

// export const showUser = ( user, history ) => {
// 	return dispatch => {
// 		fetch("/users/" + user)
// 		.then(response => response.json())
// 		.then(user => {
// 			dispatch({ type: "SHOW_USER", user })
// 			history.push(`/musician/${user.id}`);
// 		})
// 	}
// }

export const showUser = (id) => {
	return (dispatch) => {
	  dispatch({ type: "LOADING", payload: true })
	  fetch(`/users/${id}`)
		.then(res => {
		  if (!res.ok) { // error coming back from server
			throw dispatch({ type: "ERROR", payload: 'could not find the data for that resource' })
			// Error('could not fetch the data for that resource');
		  }
		  return res.json();
		})
		.then(data => {
	// console.log(data)
		  dispatch({ type: "LOADING", payload: false })
		  dispatch(obtainUser(data))
		  // setData(data);
		  dispatch({ type: "ERROR", payload: null })
		  // setError(null);
		})
		.catch(err => {
		  // auto catches network / connection error
		  dispatch({ type: "LOADING", payload: false })
		  // setError(err.message);
		  dispatch({ type: "ERROR", payload: err.message })
  
		})
	}
  }

  