export const obtainUser = (user) => ({ type: "SHOW_USER", payload: user });

export const fetchUsers = () => {
    return (dispatch) => {
        dispatch({ type: "LOADING" });
        fetch("/users")
            .then((response) => response.json())
            .then((payload) => dispatch({ type: "SET_USERS", payload }));
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
                    throw dispatch({
                        type: "ERROR",
                        payload: "could not find the data for that resource",
                    });
                }
                return response.json();
            })
            .then((data) => {
                dispatch(obtainUser(data));
                dispatch({ type: "LOADING", payload: false });
            })
            .catch((error) => {
                dispatch({ type: "LOADING", payload: false }); 
                dispatch({ type: "ERROR", payload: error.message });
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
                    throw dispatch({
                        type: "ERROR",
                        payload: "ERROR: Unable to save edits.",
                    });
                }
                return response.json();
            })
            .then((data) => {
                dispatch({ type: "EDIT_CURRENT_USER", payload: data });
                dispatch({ type: "LOADING", payload: false });
                dispatch({ type: "ERROR", payload: null });
            })
            .catch((err) => {
                dispatch({ type: "LOADING", payload: false });
                dispatch({ type: "ERROR", payload: err.message });
            });
    };
};

export const deleteUser = (user) => {
    return (dispatch) => {
        dispatch({ type: "DELETE_USER", payload: user });
        fetch(`/users/${user.id}`, {
            method: "DELETE",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ user }),
        })
            .then((response) => response.json())
            .then((data) => dispatch({ type: "DELETE_USER", payload: data }));
    };
};

export const currentUser = (user) => ({ type: "CREATE_USER", payload: user });

export const loginUser = (userObj) => {
    return (dispatch) => {
        fetch(`/users`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ userObj }),
        })
            .then((response) => response.json())
            .then((data) => dispatch({ type: "CURRENT_USER", payload: data }));
    };
};

export const logoutUser = () => {
    return (dispatch) => {
        dispatch({ type: "CURRENT_USER", payload: null });
    };
};
