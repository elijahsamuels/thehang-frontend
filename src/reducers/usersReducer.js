const initialState = {
	loading: true,
	users: []
}

const usersReducer = (state=initialState, action) => {
	switch(action.type) {
		case "LOADING":
			return {
				...state,
				loading: true
			}
		case "SET_USERS":
			return {
				...state,
				loading: false,
				users: action.payload
			}
		case "ADD_USER":
			return {
				...state,
				users: [...state.users, action.user]
			}
		case "SHOW_USER":
			return {
				...state,
				user: [...state.user ]
			}
		
		default:
			return state;
	}
}

export default usersReducer;