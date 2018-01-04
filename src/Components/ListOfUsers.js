import React from 'react';
import User from './User';

import './ListOfUsers.scss';

class ListOfUsers extends React.Component{
    state = {
        activeUserId: null,
    };

    handleSelectUser = (userId) => {
        this.setState({activeUserId: userId});
    }

    render(){
        const {users, onUserDelete} = this.props;
        const {activeUserId} = this.state;
        const listOfUsers = users.map(user => {
            if (!user.isAdmin){
                return (
                    <User
                        key={user.id}
                        user={user}
                        activeUserId={activeUserId}
                        onSelectUser={this.handleSelectUser}
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