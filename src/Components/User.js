import React from 'react';
import ContextMenuBlock from './ContextMenuBlock';

class User extends React.Component{
    state = {showContextMenu: false};

    closeContextMenu = () => {
        this.setState({showContextMenu: false});
    }

    handleOpenContextMenu = () =>{
        this.setState({showContextMenu : true});
    }

    handleUserDelete = (userId) => {
        const {onUserDelete} = this.props;
        this.closeContextMenu();
        onUserDelete(userId);
    }

    handleReviewFormOpen = (userId) => {
        const {onReviewFormOpen} = this.props;
        this.closeContextMenu();
        onReviewFormOpen(userId);
    }

    render(){
        const {user, selectedUserId, onSelectUser} = this.props;
        const {showContextMenu} = this.state;

        return(
            <li>
                <div className={selectedUserId !== user.id ? "usersListItem" : "usersListItem active"}>
                    <div className="user" onClick={() => onSelectUser(user.id)}>
                        <span className="userIcon" >
                            <i className="material-icons">person</i>
                        </span>
                        <span className="userName">
                            {user.firstName} {user.lastName}
                        </span>
                    </div>
                    <ContextMenuBlock
                        userId={user.id}
                        showContextMenu={showContextMenu}
                        onContextMenuBtn={this.handleOpenContextMenu}
                        onContextClose={this.closeContextMenu}
                        onReviewFormOpen={this.handleReviewFormOpen}
                        onUserDelete={this.handleUserDelete}
                    />
                </div>
            </li>
        )
    }
}

export default User;