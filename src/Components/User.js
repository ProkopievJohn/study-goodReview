import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
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
        const {dispatch} = this.props;
        this.closeContextMenu();
        dispatch(actions.removeUser(userId));
    }

    handleReviewFormOpen = (userId) => {
        const {dispatch} = this.props;
        this.closeContextMenu();
        dispatch({type: "OPEN_REVIEW_FORM", userId: userId});
    }

    selectUser = (userId) => {
        const {dispatch} = this.props;
        dispatch({type: "SELECT_USER", userId});
    }

    render(){
        const {user, selectedUserId} = this.props;
        const {showContextMenu} = this.state;

        return(
            <li>
                <div className={selectedUserId !== user.id ? "usersListItem" : "usersListItem active"}>
                    <div className="user" onClick={() => this.selectUser(user.id)}>
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

const mapStateToProps = (state) => {
    return {selectedUserId: state.profile.selectedUserId};
}

export default connect(
    mapStateToProps,
)(User);