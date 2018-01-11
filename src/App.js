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

  closeUserForm = () => {
    const {dispatch} = this.props;
    dispatch({type: "CLOSE_USER_FORM"});
  }

  closeReviewForm = () => {
    const {dispatch} = this.props;
    dispatch({type: "CLOSE_REVIEW_FORM"});
  }

  render() {
    const {selectedUserId, ui} = this.props;
    return (
      <div className="App">
        <Header/>
        <div className="content">
          <ListOfUsers/>
          {selectedUserId && <UserProfile/>}
        </div>
        {ui.showModalUserForm &&
          <ModalWindow onCloseModalWindow={this.closeUserForm}>
            <UserForm/>
          </ModalWindow>
        }
        {ui.showModalReviewForm &&
          <ModalWindow onCloseModalWindow={this.closeReviewForm}>
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
    selectedUserId: state.profile.selectedUserId,
    ui: state.ui
  };
}

export default connect(mapStateToProps)(App);