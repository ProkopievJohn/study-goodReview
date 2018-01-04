import React from 'react';
import ContextMenu from './ContextMenu';

class User extends React.Component{
    render(){
        const {user, activeUserId, onShowUserProfile} = this.props;

        return(
            <div>
                <span className={activeUserId !== user.id ? "user" : "user active"} onClick={() => onShowUserProfile(user.id)}>
                    <span className="userIcon" >
                        <i className="material-icons">person</i>
                    </span>
                    <span className="userName">
                        {user.firstName} {user.lastName}
                    </span>
                </span>
                <ContextMenu
                    userId={user.id}
                    activeContextMenu={activeContextMenu}
                    onContextMenu={this.handleContextMenu}
                    onOpenReviewFrom={this.handleOpenReviewFrom}
                    onUserDelete={this.handleUserDelete}
                />
            </div>
        )
    }
}

export default User;