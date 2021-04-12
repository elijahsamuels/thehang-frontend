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
	// debugger
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
