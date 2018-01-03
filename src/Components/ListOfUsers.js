import React from 'react';
import User from './User'

import './ListOfUsers.scss';

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