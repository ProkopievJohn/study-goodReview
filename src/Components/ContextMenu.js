import React from 'react';

class ContextMenu extends React.Component{
    render(){
        const {userId, activeContextMenu, onContextMenu, onOpenReviewFrom, onUserDelete} = this.props;
        return(
            <span className="contextMenuBlock">
                <span className={activeContextMenu === userId ? "contextMenuBtn active" : "contextMenuBtn"} onClick={() => onContextMenu(userId)}>
                    <i className="material-icons">more_vert</i>
                </span>
                <span className={activeContextMenu === userId ? "contextMenu open" : "contextMenu"}>
                    <div className="contextMenuBody">
                        <div onClick={() => onOpenReviewFrom(userId)}>Add review</div>
                        <div onClick={() => onUserDelete(userId)}>Delete user</div>
                    </div>
                </span>
            </span>
        );
    }
}

export default ContextMenu;