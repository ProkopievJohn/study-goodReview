import React from 'react';
import User from './User';

import './ListOfUsers.scss';

class ListOfUsers extends React.Component{
    state = {
        activeContextMenu: null,
        activeUserId: null,
    };

    closeContextMenu = () => {
        this.setState({activeContextMenu: null});
        document.removeEventListener("click", this.handlerClickOut, true);
    }

    handlerClickOut = (event) => {
        if (event.target.closest(".contextMenu") === null) {
            event.stopImmediatePropagation();
            this.closeContextMenu();
        }
    }

    handleContextMenu = (userId) =>{
        document.addEventListener("click", this.handlerClickOut, true);
        this.setState({activeContextMenu : userId});
    }

    handleOpenReviewFrom = (userId) => {
        const {onOpenReviewFrom} = this.props;
        this.closeContextMenu();
        onOpenReviewFrom(userId);
    }

    handleUserDelete = (userId) => {
        const {onUserDelete} = this.props;
        this.closeContextMenu();
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
            if (!user.isAdmin){
                return (
                    <User
                        key={user.id}
                        user={user}
                        activeUserId={activeUserId}
                        onShowUserProfile={this.handleShowUserProfile}
                        activeContextMenu={activeContextMenu}
                        onContextMenu={this.handleContextMenu}
                        onOpenReviewFrom={this.handleOpenReviewFrom}
                        onUserDelete={this.handleUserDelete}
                    />)
            }
            return false;
        });
        return(
            <div className="listOfUsersBlock">
                <button className="simpleButton addUserBtn" onClick={onOpenUserForm}>Add user</button>
                <ul>
                    {listOfUsers}
                </ul>
            </div>
        )
    }
}

export default ListOfUsers;