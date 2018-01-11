import * as types from './Constants';

export function createUser(firstName, lastName, skills) {
    return dispatch => {
        dispatch({type: types.ADD_USER, firstName, lastName, skills});
        dispatch({type: types.CLOSE_USER_FORM});
        dispatch({type: types.SHOW_POPUP, message: "New user created"});
    };
}

export function removeUser(userId) {
    return dispatch => {
        dispatch({type: "REMOVE_USER", userId});
        dispatch({type: "DESELECT_USER", userId});
        dispatch({type: "REMOVE_USER_REVIEWS", userId});
        dispatch({type: "SHOW_POPUP", message: "User deleted"});
    };
}

export function createReview(reviewText, userId) {
    return dispatch => {
        dispatch({type: "ADD_REVIEW", reviewText, userId});
        dispatch({type: "CLOSE_REVIEW_FORM"});
        dispatch({type: "SHOW_POPUP",message: "New review created"});
    };
}

export function removeReview(id) {
    return dispatch => {
        dispatch({type: types.REMOVE_REVIEW, id});
        dispatch({type: types.SHOW_POPUP, message: "Review deleted"})
    };
}

