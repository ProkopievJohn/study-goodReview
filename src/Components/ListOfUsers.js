import React from 'react';
import { connect } from 'react-redux';
import User from './User';
import './ListOfUsers.scss';

class ListOfUsers extends React.Component{
    render(){
        const {users, dispatch} = this.props;
        const listOfUsers = users.map(user => {
            if (!user.isAdmin){
                return (<User key={user.id} user={user} />)
            }
            return false;
        });
        return(
            <div className="listOfUsersBlock">
                <button className="simpleButton addUserBtn" onClick={() => dispatch({type: 'OPEN_USER_FORM'})}>Add user</button>
                <ul>
                    {listOfUsers}
                </ul>
            </div>
        )
    }
}

export default connect()(ListOfUsers);