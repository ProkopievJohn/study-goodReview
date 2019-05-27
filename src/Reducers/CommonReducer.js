import { combineReducers } from 'redux'

import users from './Users';
import reviews from './Reviews';
import ui from './Ui';
import profile from './Profile';

const commonReducer = combineReducers({
    users,
    reviews,
    ui,
    profile
});

export default commonReducer;