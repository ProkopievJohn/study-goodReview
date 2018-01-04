import React from 'react';

class ContextMenuBlock extends React.Component{
    render(){
        const {userId, showContextMenu, onContextMenuBtn, onContextClose, onUserDelete} = this.props;
        return(
            <div className="contextMenuBlock">
                <div className="contextMenuBtn" onClick={onContextMenuBtn}>
                    <i className="material-icons">more_vert</i>
                </div>
                <div className={showContextMenu === true ? "contextMenu open" : "contextMenu"}>
                    <div className="contextMenuBody">
                        <div>Add review</div>
                        <div onClick={() => onUserDelete(userId)}>Delete user</div>
                    </div>
                    <div className="contextMenuOverlay" onClick={onContextClose}></div>
                </div>
            </div>
        );
    }
}

export default ContextMenuBlock;