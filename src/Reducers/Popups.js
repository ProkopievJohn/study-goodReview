import * as types from '../Constants';

var popupId = 1;

function popups (state = [], action){
    switch (action.type){
        case types.SHOW_POPUP:
            return state.concat({message: action.message, id: popupId++});
        case types.CLOSE_POPUP:
            return state.filter(popup => popup.id !== action.id);
        default: return state;
    }
}

export default popups;