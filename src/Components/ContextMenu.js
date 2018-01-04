import React from 'react';

class ContextMenu extends React.Component{
    render(){
        const {userId, showContextMenu, onContextMenu, onUserDelete} = this.props;
        return(
            <div className="contextMenuBlock">
                <div className="contextMenuBtn" onClick={onContextMenu}>
                    <i className="material-icons">more_vert</i>
                </div>
                <div className={showContextMenu === true ? "contextMenu open" : "contextMenu"}>
                    <div className="contextMenuBody">
                        <div>Add review</div>
                        <div onClick={() => onUserDelete(userId)}>Delete user</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ContextMenu;