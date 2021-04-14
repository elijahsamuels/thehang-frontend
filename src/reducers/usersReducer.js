const initialState = {
    loading: true,
    users: [],
    showUser: {},
    currentUser: null,
    error: false,
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case "LOADING":
            return {
                ...state,
                loading: true,
            };
        case "SET_USERS":
            return {
                ...state,
                loading: false,
                users: action.payload,
            };
        case "ADD_USER":
            return {
                ...state,
                users: [...state.users, action.user],
            };
        case "SHOW_USER":
            return {
                ...state,
                showUser: action.payload,
            };
			// UNTESTED!!!
			// building this out. find the object by index. (slice it out of the array), edit, and then replace and resend
		case "CURRENT_USER":
            return {
                ...state,
				currentUser: action.payload,
			};

		case "ERROR":
			return { ...state, error: action.payload };
				
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

        default:
            return state;
    }
};

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
