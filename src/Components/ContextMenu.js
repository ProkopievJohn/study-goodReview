import React from 'react';

class ContextMenu extends React.Component{
    render(){
        const {userId, activeContextMenu, onContextMenu, onOpenReviewFrom, onUserDelete} = this.props;
        return(
            <div className="contextMenuBlock">
                <div className="contextMenuBtn" onClick={() => onContextMenu(userId)}>
                    <i className="material-icons">more_vert</i>
                </div>
                <div className={activeContextMenu === userId ? "contextMenu open" : "contextMenu"}>
                    <div className="contextMenuBody">
                        <div onClick={() => onOpenReviewFrom(userId)}>Add review</div>
                        <div onClick={() => onUserDelete(userId)}>Delete user</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ContextMenu;