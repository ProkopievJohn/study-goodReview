import React from 'react';
import User from './User';

import './ListOfUsers.scss';

class ListOfUsers extends React.Component{
    render(){
        const {users, selectedUserId, onUserSelect, onReviewFormOpen, onUserDelete, onNewUser} = this.props;
        const listOfUsers = users.map(user => {
            if (!user.isAdmin){
                return (
                    <User
                        key={user.id}
                        user={user}
                        selectedUserId={selectedUserId}
                        onSelectUser={onUserSelect}
                        onReviewFormOpen={onReviewFormOpen}
                        onUserDelete={onUserDelete}
                    />)
            }
            return false;
        });
        return(
            <div className="listOfUsersBlock">
                <button className="simpleButton addUserBtn" onClick={onNewUser}>Add user</button>
                <ul>
                    {listOfUsers}
                </ul>
            </div>
        )
    }
}

export default ListOfUsers;