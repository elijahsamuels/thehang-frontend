const initialState = {
	loading: true,
	users: [],
	showUser: {},
	// need to revert this back to empty object once Auth is setup
	user: {
		"id": 1,
		"first_name": "John",
		"last_name": "Doe",
		"email": "johndoe@thehang.com",
		"password": "123",
		"city": "Denver",
		"phone": "123456789",
		"website": "www.johndie.com",
		"travel_distance": null,
		"description": "I play guitar and make music",
		"state": "CO",
		"primary_instrument_id": 1,
		"secondary_instrument_id": 5,
		"other_instruments": [
			1,
			2,
			3,
			4,
			5
		],
		"created_at": "2021-04-09T06:48:47.881Z",
		"updated_at": "2021-04-09T06:48:47.881Z"
	},
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
			// UNTESTED!!!
		// building this out. find the object by index. (slice it out of the array), edit, and then replace and resend 
		case "EDIT_USER":
			// debugger
			// let User = state.users
			// let user = User.all.find(u => u.id === action.payload.id)
			// let index = User.all.indexOf(user)
			// let firstHalf = User.all.slice(0, index);
			// let secondHalf = User.all.slice(index + 1, User.all.length)
			// return {
			// 	...state,
			// 	users: ([...firstHalf, action.payload, ...secondHalf])
			// }
			return {
				...state,
				user: action.payload
			}

			default:
				return state;
	}
}

export default usersReducer;

//     switch(action.type){
//         case "GOT_USERS":
//             return {...state, users: action.payload }
//         case "SHOW_USER":
//             return {...state, showUser: action.payload}
//         case "ADDED_USER":
//             return { ...state, users: [...state.users, action.payload] }
//         case "LOADING":
//             return  {...state, loading: action.payload }
//         case "ERROR":
//             return {...state, error: action.payload}
//         default: 
//             return state
//     }
// }