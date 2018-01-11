import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from './Components/Header';
import ListOfUsers from './Components/ListOfUsers';
import UserProfile from './Components/UserProfile';
import ModalWindow from './Components/ModalWindow';
import UserForm from './Components/UserForm';
import ReviewForm from './Components/ReviewForm';
import PopupsBlock from './Components/PopupsBlock';

import './App.scss';

class App extends Component {
  render() {
    const {
      users,
      reviews,
      selectedUserId,
      modalForms,
      dispatch
    } = this.props;
    const admin = users.find(user => user.isAdmin === true);

    return (
      <div className="App">
        <Header account={admin}/>
        <div className="content">
          <ListOfUsers users={users}/>
          {selectedUserId !== null &&
            <UserProfile
              reviews={reviews.filter(r => r.userId === selectedUserId)}
              user={users.find(u => u.id === selectedUserId)}
            />
          }
        </div>
        {modalForms.showModalUserForm &&
          <ModalWindow onCloseModalWindow={() => dispatch({type: "CLOSE_USER_FORM"})}>
            <UserForm/>
          </ModalWindow>
        }
        {modalForms.showModalReviewForm &&
          <ModalWindow onCloseModalWindow={() => dispatch({type: "CLOSE_REVIEW_FORM"})}>
            <ReviewForm/>
          </ModalWindow>
        }
        <PopupsBlock/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    users: state.users,
    reviews: state.reviews,
    selectedUserId: state.ui.selectedUserId,
    modalForms: state.modalForms
  };
}

export default connect(mapStateToProps)(App);