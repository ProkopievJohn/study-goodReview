import { combineReducers } from 'redux'

import users from './Users';
import reviews from './Reviews';
import ui from './Ui';
import modalForms from './ModalForms';
import popups from './Popups';

const commonReducer = combineReducers({
    users,
    reviews,
    ui,
    modalForms,
    popups
});

export default commonReducer;