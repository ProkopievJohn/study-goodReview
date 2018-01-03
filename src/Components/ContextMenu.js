import React from 'react';

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

export default ContextMenu;