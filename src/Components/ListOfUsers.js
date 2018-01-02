import React from 'react';
import './ListOfUsers.scss';

class ContextMenu extends React.Component{
    render(){
        const {userId, activeContextMenu, onOpenReviewFrom, onUserDelete} = this.props;
        return(
            <div className={activeContextMenu === userId ? "userContextMenu open" : "userContextMenu"}>
                <div className="contextMenuBody">
                    <div onClick={() => onOpenReviewFrom(userId)}>Add review</div>
                    <div onClick={() => onUserDelete(userId)}>Delete user</div>
                </div>
            </div>
        );
    }
}

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

class ListOfUsers extends React.Component{
    state = {
        activeContextMenu: null,
        activeUserId: null,
    };

    closeContexMenu = () => {
        this.setState({activeContextMenu: null});
        document.removeEventListener("click", this.handlerClickOut, true);
    }

    handlerClickOut = (event) => {
        if (event.target.closest(".userContextMenu") === null) {
            event.stopImmediatePropagation();
            this.closeContexMenu();
        }
    }

    handleUserContextMenu = (userId) =>{
        const {activeContextMenu} = this.state;
        const resId = userId === activeContextMenu ? null : userId;
        resId !== null && document.addEventListener("click", this.handlerClickOut, true);
        this.setState({activeContextMenu : resId});
    }

    handleOpenReviewFrom = (userId) => {
        const {onOpenReviewFrom} = this.props;
        this.closeContexMenu();
        onOpenReviewFrom(userId);
    }

    handleUserDelete = (userId) => {
        const {onUserDelete} = this.props;
        this.closeContexMenu();
        onUserDelete(userId);
    }

    handleShowUserProfile = (userId) => {
        const {onShowUserProfile} = this.props;
        this.setState({activeUserId: userId});
        onShowUserProfile(userId);
    }

    render(){
        const {users, onOpenUserForm} = this.props;
        const {activeContextMenu, activeUserId} = this.state;
        const listOfUsers = users.map(user => {
            if (!user.isAdmin)
                return <User
                            key={user.id}
                            user={user}
                            activeContextMenu={activeContextMenu}
                            activeUserId={activeUserId}
                            onShowUserProfile={this.handleShowUserProfile}
                            onUserContextMenu={this.handleUserContextMenu}
                            onOpenReviewFrom={this.handleOpenReviewFrom}
                            onUserDelete={this.handleUserDelete}
                        />
            return false;
        })
        return(
            <div>
                <button className="simpleButton addUserBtn" onClick={onOpenUserForm}>Add user</button>
                <ul>
                    {listOfUsers}
                </ul>
            </div>
        )
    }
}

export default ListOfUsers;