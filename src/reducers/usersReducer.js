const initialState = {
	loading: true,
	users: [],
	showUser: {},
	error: null
}

const usersReducer = (state = initialState, action) => {
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
				showUser: action.payload
			}
		
		default:
			return state;
	}
}

export default usersReducer;


//     switch(action.type){
//         case "GOT_DIYS":
//             return {...state, diys: action.payload }
//         case "SHOW_DIY":
//             return {...state, showDiy: action.payload}
//         case "ADDED_DIY":
//             return { ...state, diys: [...state.diys, action.payload] }
//         case "LOADING":
//             return  {...state, loading: action.payload }
//         case "ERROR":
//             return {...state, error: action.payload}
//         default: 
//             return state
//     }
// }

// export default diyReducer
