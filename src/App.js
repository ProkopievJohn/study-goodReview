import React, { Component } from 'react';
import Header from './Components/Header';
import ListOfUsers from './Components/ListOfUsers';
import UserProfile from './Components/UserProfile';
import ModalWindow from './Components/ModalWindow';
import UserForm from './Components/UserForm';
import ReviewForm from './Components/ReviewForm';
import PopupsBlock from './Components/PopupsBlock';
import './App.scss';

var popupId = 1;

const usersArr = [
  {firstName: "Test", lastName: "User", id: 1, isAdmin: false, skills: ["React", "Koa"]},
  {firstName: "Test", lastName: "User 2", id: 2, isAdmin: false, skills: ["Angular", "Express"]},
  {firstName: "Admin", lastName: "User", id: 3, isAdmin: true, skills: ["React, Redux"]}
]

const reviewsArr = [
  {reviewText: 'test review 1', id: 1, userId:usersArr[0].id, isAproved: true, date: Date.now() - 100*60*1000},
  {reviewText: 'test review 2', id: 2, userId:usersArr[0].id, isAproved: true, date: Date.now()},
  {reviewText: 'test review 3', id: 3, userId:usersArr[1].id, isAproved: true, date: Date.now() - 100*60*1000},
  {reviewText: 'test review 4', id: 4, userId:usersArr[1].id, isAproved: true, date: Date.now()},
  {reviewText: 'default review', id: 5, userId:usersArr[2].id, isAproved: true, date: Date.now()}
]

class App extends Component {
  state = {
    users: usersArr,
    reviews: reviewsArr,
    selectedUserId: null,
    showModalUserForm: false,
    showModalReviewForm: false,
    proceedUserId: null,
    popups: []
  };

  handlePopupClose = (id) => {
    let {popups} = this.state;
    popups = popups.filter(popup => popup.id !== id);
    this.setState({popups});
  }

  handleUserSelect = (userId) => {
    this.setState({selectedUserId: userId});
  }

  handleDeleteUser = (userId) => {
    let {reviews, users, selectedUserId, popups} = this.state;
    reviews = reviews.filter(rev => rev.userId !== userId);
    users = users.filter(usr => usr.id !== userId);
    selectedUserId = selectedUserId ===  userId ? null : selectedUserId;
    popups.push({message: "User deleted", id: popupId++});
    this.setState({popups, users, reviews, selectedUserId});
  }

  handleDeleteReview = (reviewId) => {
    let {reviews, popups} = this.state;
    reviews = reviews.filter(rev => rev.id !== reviewId);
    popups.push({message: "Review deleted", id: popupId++});
    this.setState({reviews, popups});
  }

  handleOpenUserForm = () => {
    this.setState({showModalUserForm: true})
  }

  handleCloseUserForm = () => {
    this.setState({showModalUserForm: false})
  }

  handleUserFormSubmit = (user) => {
    let {popups, users} = this.state;
    users.push(user);
    popups.push({message: "New user created", id: popupId++});
    this.setState({showModalUserForm: false, users, popups});
  }

  handleOpenReviewForm = (userId) => {
    this.setState({showModalReviewForm: true, proceedUserId: userId})
  }

  handleCloseReviewForm = () => {
    this.setState({showModalReviewForm: false})
  }

  handleReviewCreated = (review) => {
    let {reviews, popups} = this.state;
    reviews.push(review);
    popups.push({message: "New review created", id: popupId++});
    this.setState({showModalReviewForm: false, reviews, popups});
  }

  render() {
    const {
      users,
      reviews,
      selectedUserId,
      showModalUserForm,
      showModalReviewForm,
      proceedUserId,
      popups} = this.state;
    const admin = usersArr.find(user => user.isAdmin === true);

    return (
      <div className="App">
        <Header account={admin}/>
        <div className="content">
          <ListOfUsers
            users={users}
            selectedUserId={selectedUserId}
            onUserSelect={this.handleUserSelect}
            onUserDelete={this.handleDeleteUser}
            onReviewFormOpen={this.handleOpenReviewForm}
            onNewUser={this.handleOpenUserForm}
          />
          {selectedUserId !== null &&
            <UserProfile
              reviews={reviews.filter(r => r.userId === selectedUserId)}
              user={users.find(u => u.id === selectedUserId)}
              onReviewDelete={this.handleDeleteReview}
            />
          }
        </div>
        {showModalUserForm &&
          <ModalWindow
            onCloseModalWindow={this.handleCloseUserForm}
            form={<UserForm onUserFormSubmit={this.handleUserFormSubmit}/>}
          />
        }
        {showModalReviewForm &&
           <ModalWindow
            onCloseModalWindow={this.handleCloseReviewForm}
            form={<ReviewForm userId={proceedUserId} onReviewCreated={this.handleReviewCreated}/>}
          />
        }
        <PopupsBlock popups={popups} onPopupClose={this.handlePopupClose}/>
      </div>
    );
  }
}

export default App;