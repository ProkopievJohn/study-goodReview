import React from 'react';
import ContextMenu from './ContextMenu';

class User extends React.Component{
    render(){
        const {
            user,
            activeUserId,
            onShowUserProfile,
            activeContextMenu,
            onContextMenu,
            onOpenReviewFrom,
            onUserDelete} = this.props;

        return(
            <li>
                <div className={activeUserId !== user.id ? "usersListItem" : "usersListItem active"}>
                    <div className="user" onClick={() => onShowUserProfile(user.id)}>
                        <span className="userIcon" >
                            <i className="material-icons">person</i>
                        </span>
                        <span className="userName">
                            {user.firstName} {user.lastName}
                        </span>
                    </div>
                    <ContextMenu
                        userId={user.id}
                        activeContextMenu={activeContextMenu}
                        onContextMenu={onContextMenu}
                        onOpenReviewFrom={onOpenReviewFrom}
                        onUserDelete={onUserDelete}
                    />
                </div>
            </li>
        )
    }
}

export default User;