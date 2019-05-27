import * as types from '../Constants';

const uiInitState = {
    showModalUserForm: false,
    showModalReviewForm: false,
    proceedUserId: null,
    popups: []
}

var popupId = 1;

function popups (state, action){
    switch(action.type){
        case types.SHOW_POPUP:
            return state.concat({id: popupId++, message: action.message});
        case types.CLOSE_POPUP:
            return state.filter(popup => popup.id !== action.id);
        default: return state;
    }
}

function ui (state = uiInitState, action){
    switch(action.type){
        case types.CLOSE_USER_FORM:
            return {...state, showModalUserForm: false};
        case types.OPEN_USER_FORM:
            return {...state, showModalUserForm: true};
        case types.CLOSE_REVIEW_FORM:
            return {...state, showModalReviewForm: false};
        case types.OPEN_REVIEW_FORM:
            return {...state, showModalReviewForm: true, proceedUserId: action.userId};
        case types.SHOW_POPUP:
            return {...state, popups: popups(state.popups, action)};
        case types.CLOSE_POPUP:
            return {...state, popups: popups(state.popups, action)};
        default: return state;
    }
}

export default ui;