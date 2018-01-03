import React from 'react';

class User extends React.Component{
    render(){
        const {user, activeUserId, onShowUserProfile} = this.props;

        return(
            <span className={activeUserId !== user.id ? "user" : "user active"} onClick={() => onShowUserProfile(user.id)}>
                <span className="userIcon" >
                    <i className="material-icons">person</i>
                </span>
                <span className="userName">
                    {user.firstName} {user.lastName}
                </span>
            </span>
        )
    }
}

export default User;