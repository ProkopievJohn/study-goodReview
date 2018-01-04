import React from 'react';
import User from './User';

import './ListOfUsers.scss';

class ListOfUsers extends React.Component{
    render(){
        const {users, activeUserId, onUserSelect, onUserDelete} = this.props;
        const listOfUsers = users.map(user => {
            if (!user.isAdmin){
                return (
                    <User
                        key={user.id}
                        user={user}
                        activeUserId={activeUserId}
                        onSelectUser={onUserSelect}
                        onUserDelete={onUserDelete}
                    />)
            }
            return false;
        });
        return(
            <div className="listOfUsersBlock">
                <button className="simpleButton addUserBtn">Add user</button>
                <ul>
                    {listOfUsers}
                </ul>
            </div>
        )
    }
}

export default ListOfUsers;