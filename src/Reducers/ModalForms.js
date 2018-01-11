import * as types from '../Constants';

const modalFormsInitState = {
    showModalUserForm: false,
    showModalReviewForm: false,
    proceedUserId: null,
}

function modalForms (state = modalFormsInitState, action){
    switch(action.type){
        case types.CLOSE_USER_FORM:
            return {...state, showModalUserForm: false};
        case types.OPEN_USER_FORM:
            return {...state, showModalUserForm: true};
        case types.CLOSE_REVIEW_FORM:
            return {...state, showModalReviewForm: false};
        case types.OPEN_REVIEW_FORM:
            return {...state, showModalReviewForm: true, proceedUserId: action.userId};
        default: return state;
    }
}

export default modalForms;