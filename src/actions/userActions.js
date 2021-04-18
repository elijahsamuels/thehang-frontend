export const obtainUser = (user) => ({ type: "SHOW_USER", payload: user });

export const fetchUsers = () => {
    return (dispatch) => {
        dispatch({ type: "LOADING" });
        fetch("/users")
            .then(response => response.json())
            .then(payload => dispatch({ type: "SET_USERS", payload }))
            // .then(payload => // console.log(dispatch({ type: "SET_USERS", payload })))
    };
};

export const addUser = (user) => {
    return (dispatch) => {
        fetch("/users", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ user }),
        })
            .then( response => response.json())
            .then( user => {
                dispatch({ type: "ADD_USER", user });
            });
    };
};

export const showUser = (id) => {
    return (dispatch) => {
        dispatch({ type: "LOADING", payload: true });
        fetch(`/users/${id}`)
            .then( response => {
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
            .then( data => {
                // console.log(data)
                dispatch(obtainUser(data));
                // dispatch{ type: "SHOW_USER", payload: user };
                dispatch({ type: "LOADING", payload: false });
                // setData(data);
                // dispatch({ type: "ERROR", payload: false });
                // setError(null);
            })
            .catch( error => {
                dispatch({ type: "LOADING", payload: false }); // auto catches network / connection error
                dispatch({ type: "ERROR", payload: error.message }); // setError(err.message);
            });
    };
};

export const editUser = (user) => {
    return (dispatch) => {
        dispatch({ type: "LOADING", payload: true });
        // console.log(1, "???");
        fetch(`/users/${user.id}`, {
            method: "PATCH",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ user }),
        })
        .then( response => {
            if (response.ok === false) {
                // console.log(5, "5 only on error from editUser");
                throw dispatch({
                    type: "ERROR",
                    payload: "ERROR: Unable to save edits.",
                });
            }
            return response.json();
        })
        .then( data => {
    
            // console.log(2, "2 from editUser");
            dispatch({ type: "EDIT_CURRENT_USER", payload: data });
            dispatch({ type: "LOADING", payload: false });
            // console.log(3, "3 from editUser");
            dispatch({ type: "ERROR", payload: null });
            // console.log(4, "4 from editUser");
            // setError(null);
        })
        .catch( err => {
            // auto catches network / connection error
            dispatch({ type: "LOADING", payload: false });
            // setError(err.message);
            dispatch({ type: "ERROR", payload: err.message });
        });
        // console.log(3);
    };
};

export const deleteUser = (user) => ({ type: "DELETE_USER", payload: user });


export const currentUser = (user) => ({ type: "CREATE_USER", payload: user });

export const loginUser = (userObj) => {
    return (dispatch) => {
        // console.log("Login, stage: 2. This triggers the fetch() ");
        fetch(`/users`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ userObj })
        })
            .then( response => response.json()) // fulfilled and returns the user object
            .then( data => dispatch({ type: "CURRENT_USER", payload: data }));
    };
};

export const logoutUser = () => {
    return (dispatch) => {
        dispatch({ type: "CURRENT_USER", payload: null });
    };
};

// grab the object from the GoogleLogin component
// send to the rails API, users controller => find_or_create by the object passed in
// on the response, set the incoming data to the currentUser in state
// {
//     /* 
//     
//     axios
//     .get(`https://people.googleapis.com/v1/people/${googleId}?personFields=birthdays,genders&access_token=${accessToken}`)
//     .then((response) => {console.log(JSON.stringify(response, null, 4)); }) //You will get data here
//     .catch((error) => {console.warn(JSON.stringify(error, null, 4));});
//     
// */
// }

// https://people.googleapis.com/v1/people/109441694687044824001?personFields=birthdays,genders&access_token=AIzaSyA2dy67S5fSB8H70A3cSZtL-uEdwKwOCc0
