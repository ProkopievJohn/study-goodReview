import React from 'react';
import ContextMenuBlock from './ContextMenuBlock';

class User extends React.Component{
    state = {showContextMenu: false};

    closeContextMenu = () => {
        this.setState({showContextMenu: false});
        document.removeEventListener("click", this.handlerClickOut, true);
    }

    handlerClickOut = (event) => {
        if (event.target.closest(".contextMenu") === null) {
            event.stopImmediatePropagation();
            this.closeContextMenu();
        }
    }

    handleContextMenu = () =>{
        document.addEventListener("click", this.handlerClickOut, true);
        this.setState({showContextMenu : true});
    }

    handleUserDelete = (userId) => {
        const {onUserDelete} = this.props;
        this.closeContextMenu();
        onUserDelete(userId);
    }

    render(){
        const {user, activeUserId, onSelectUser} = this.props;
        const {showContextMenu} = this.state;

        return(
            <li>
                <div className={activeUserId !== user.id ? "usersListItem" : "usersListItem active"}>
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
                        onContextMenu={this.handleContextMenu}
                        onUserDelete={this.handleUserDelete}
                    />
                </div>
            </li>
        )
    }
}

export default User;