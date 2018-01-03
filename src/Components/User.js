import React from 'react';
import ContextMenu from './ContextMenu'

class User extends React.Component{
    render(){
        const {
            user,
            onUserContextMenu,
            activeContextMenu,
            activeUserId,
            onShowUserProfile,
            onOpenReviewFrom,
            onUserDelete} = this.props;

        return(
            <li>
                <div className="userListItem">
                    <span className={activeUserId !== user.id ? "user" : "user active"} onClick={() => onShowUserProfile(user.id)}>
                        <span className="userIcon" >
                            <i className="material-icons">person</i>
                        </span>
                        <span className="userName">
                            {user.firstName} {user.lastName}
                        </span>
                    </span>
                    <span className={activeContextMenu === user.id ? "userContextMenuBtn active" : "userContextMenuBtn"} onClick={() => onUserContextMenu(user.id)}>
                        <i className="material-icons">more_vert</i>
                    </span>
                </div>
                <ContextMenu
                    userId={user.id}
                    activeContextMenu={activeContextMenu}
                    onOpenReviewFrom={onOpenReviewFrom}
                    onUserDelete={onUserDelete}
                />
            </li>
        )
    }
}

export default User;