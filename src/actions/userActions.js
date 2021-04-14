import history from "../components/staticComponents/history";

export const obtainUser = (user) => ({ type: "SHOW_USER", payload: user });

export const fetchUsers = () => {
    return (dispatch) => {
        dispatch({ type: "LOADING" });
        fetch("/users")
            .then((response) => response.json())
            // .then(payload => dispatch({ type: "SET_USERS", payload }))
            .then((payload) =>
                console.log(dispatch({ type: "SET_USERS", payload }))
            );
    };
};

export const addUser = (user, history) => {
    return (dispatch) => {
        fetch("/users", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ user }),
        })
            .then((response) => response.json())
            .then((user) => {
                dispatch({ type: "ADD_USER", user });
            });
    };
};

export const showUser = (id) => {
    return (dispatch) => {
        dispatch({ type: "LOADING", payload: true });
        fetch(`/users/${id}`)
            .then((response) => {
                if (response.ok === false) {
                    // error coming back from server
                    throw dispatch({
                        type: "ERROR",
                        payload: "could not find the data for that resource",
                    });
                    // Error("could not fetch the data for that resource");
                }
                return response.json();
            })
            .then((data) => {
                // console.log(data)
                dispatch(obtainUser(data));
                dispatch({ type: "LOADING", payload: false });
                // setData(data);
                dispatch({ type: "ERROR", payload: null });
                // setError(null);
            })
            .catch((error) => {
                dispatch({ type: "LOADING", payload: false }); // auto catches network / connection error
                dispatch({ type: "ERROR", payload: error.message }); // setError(err.message);
            });
    };
};

export const editUser = (user) => {
    return (dispatch) => {
		dispatch({ type: "LOADING", payload: true });
        fetch(`/users/${user.id}`, {
            method: "PATCH",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ user }),
        })
            .then((response) => {
                if (response.ok === false) {
                    // server error
                    throw dispatch({
                        type: "ERROR",
                        payload: "ERROR: Unable to save edits.",
                    });
                }
                return response.json();
            })
            .then((data) => {
                // console.log(data)
                dispatch(obtainUser(data));
                dispatch({ type: "LOADING", payload: false });
                // setData(data);
                dispatch({ type: "ERROR", payload: null });
                // setError(null);
            })
            .catch((err) => {
                // auto catches network / connection error
                dispatch({ type: "LOADING", payload: false });
                // setError(err.message);
                dispatch({ type: "ERROR", payload: err.message });
            });
    };
};

export const currentUser = (user) => ({ type: "CREATE_USER", payload: user });

export const loginUser = (userObj) => {
    return (dispatch) => {
        // dispatch({ type: "LOADING", payload: true });
        fetch(`/users`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ userObj }),
        })
        .then(response => response.json()) // fulfilled and returns the user object
        .then(data => {
            console.log(data.id)
            dispatch({type:'CURRENT_USER', payload: data})
        })
    }

}

    // grab the object from the GoogleLogin component
    // send to the rails API, users controller => find_or_create by the object passed in
    // on the response, set the incoming data to the currentUser in state
{/* 
    
    axios
    .get(`https://people.googleapis.com/v1/people/${googleId}?personFields=birthdays,genders&access_token=${accessToken}`)
    .then((response) => {console.log(JSON.stringify(response, null, 4)); }) //You will get data here
    .catch((error) => {console.warn(JSON.stringify(error, null, 4));});
    
*/}


// https://people.googleapis.com/v1/people/109441694687044824001?personFields=birthdays,genders&access_token=AIzaSyA2dy67S5fSB8H70A3cSZtL-uEdwKwOCc0