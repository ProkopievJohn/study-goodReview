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
        dispatch({type: types.REMOVE_USER, userId});
        dispatch({type: types.DESELECT_USER, userId});
        dispatch({type: types.REMOVE_USER_REVIEWS, userId});
        dispatch({type: types.SHOW_POPUP, message: "User deleted"});
    };
}

export function createReview(reviewText, userId) {
    return dispatch => {
        dispatch({type: types.ADD_REVIEW, reviewText, userId});
        dispatch({type: types.CLOSE_REVIEW_FORM});
        dispatch({type: types.SHOW_POPUP,message: "New review created"});
    };
}

export function removeReview(id) {
    return dispatch => {
        dispatch({type: types.REMOVE_REVIEW, id});
        dispatch({type: types.SHOW_POPUP, message: "Review deleted"})
    };
}

