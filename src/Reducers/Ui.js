import * as types from '../Constants';

const uiInitState = {
    selectedUserId: null
}

function ui (state = uiInitState, action){
    switch (action.type) {
        case types.SELECT_USER:
            return {...state, selectedUserId: action.userId}
        case types.DESELECT_USER:
            const selectedUserId = state.selectedUserId === action.userId ? null : state.selectedUserId;
            return {...state, selectedUserId}
        default: return state
    }
}

export default ui;