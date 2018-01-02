import React from 'react';

class User extends React.Component{

    handelUserSelect = (event, userId) => {
        const {onShowUserProfile} = this.props;
        const userElement = event.target.closest(".user");
        document.querySelectorAll(".user").forEach(elem => {
            if (elem !== userElement) elem.classList.remove("active");
        })
        if (!userElement.classList.contains("active")){
            userElement.classList.add("active");
            onShowUserProfile(userId);
        }
    }

    render(){
        const {user, onUserContextMenu, contextMenuUserId, onOpenReviewFrom, onUserDelete} = this.props;

        return(
            <li>
                <div className="userListItem">
                    <span className="user" onClick={(event) => this.handelUserSelect(event, user.id)}>
                        <span className="userIcon" >
                            <i className="material-icons">person</i>
                        </span>
                        <span className="userName">
                            {user.firstName} {user.lastName}
                        </span>
                    </span>
                    <span className={contextMenuUserId === user.id ? "userContextMenuBtn active" : "userContextMenuBtn"} onClick={() => onUserContextMenu(user.id)}>
                        <i className="material-icons">more_vert</i>
                    </span>
                </div>
                <div className={contextMenuUserId === user.id ? "userContextMenu open" : "userContextMenu"}>
                    <div className="contextMenuBody">
                        <div onClick={() => onOpenReviewFrom(user.id)}>Add review</div>
                        <div onClick={() => onUserDelete(user.id)}>Delete user</div>
                    </div>
                </div>
            </li>
        )
    }
}

class ListOfUsers extends React.Component{
    state = {
        contextMenuUserId: null
    };

    handlerClickOut = (event) => {
        if (event.target.closest(".userContextMenu") === null) {
            this.setState({contextMenuUserId: null});
            document.removeEventListener("click", this.handlerClickOut);
        }
    }

    handleUserContextMenu = (userId) =>{
        const {contextMenuUserId} = this.state;
        const resId = userId === contextMenuUserId ? null : userId;
        resId !== null && document.addEventListener("click", this.handlerClickOut);
        this.setState({contextMenuUserId : resId});
    }

    render(){
        const {users, onOpenUserForm, onShowUserProfile, onOpenReviewFrom, onUserDelete} = this.props;
        const {contextMenuUserId} = this.state;
        const listOfUsers = users.map(user => {
            if (!user.isAdmin)
                return <User
                            key={user.id}
                            user={user}
                            contextMenuUserId={contextMenuUserId}
                            onShowUserProfile={onShowUserProfile}
                            onUserContextMenu={this.handleUserContextMenu}
                            onOpenReviewFrom={onOpenReviewFrom}
                            onUserDelete={onUserDelete}
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