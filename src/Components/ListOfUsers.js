import React from 'react';
import { connect } from 'react-redux';
import User from './User';
import './ListOfUsers.scss';

class ListOfUsers extends React.Component{

    openUserForm = () => {
        const {dispatch} = this.props;
        dispatch({type: 'OPEN_USER_FORM'});
    }

    render(){
        const {users} = this.props;
        const listOfUsers = users.map(user => {
            if (!user.isAdmin){
                return (<User key={user.id} user={user} />)
            }
            return false;
        });
        return(
            <div className="listOfUsersBlock">
                <button className="simpleButton addUserBtn" onClick={this.openUserForm}>Add user</button>
                <ul>
                    {listOfUsers}
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        users: state.users
    };
}

export default connect(mapStateToProps)(ListOfUsers);