import React, { Component } from 'react';
import Header from './Components/Header';
import ListOfUsers from './Components/ListOfUsers';
<<<<<<< 43e16366bd24e905943ce7bfc63be3b7d77f30fa
<<<<<<< 56ce5325884b1557a7b13d4ac0f50e29739ef095
import UserProfile from './Components/UserProfile';
=======
// import UserProfile from './Components/UserProfile';
>>>>>>> added Modal Window, User Form and Review Form components
import PopupsBlock from './Components/PopupsBlock';
=======
>>>>>>> Changed Modal Window structure and some fixes
import ModalWindow from './Components/ModalWindow';
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
    showModalWindow: false,
    modalWindowOptions: {},
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

<<<<<<< 43e16366bd24e905943ce7bfc63be3b7d77f30fa
<<<<<<< 56ce5325884b1557a7b13d4ac0f50e29739ef095
  render() {
    const {reviews, users, selectedUserId, popups} = this.state;
=======
  handleOpenUserForm = () => {
    this.setState({showModalUserForm: true})
=======
  handleCloseModalWindow = () => {
    this.setState({showModalWindow: false})
>>>>>>> Changed Modal Window structure and some fixes
  }

  handleOpenUserForm = () => {
    this.setState({showModalWindow: true, modalWindowOptions: {formName: 'UserForm', onUserFormSubmit: this.handleUserFormSubmit}})
  }

  handleUserFormSubmit = (user) => {
    let {popups, users} = this.state;
    users.push(user);
    popups.push({message: "New user created", id: popupId++});
    this.setState({showModalWindow: false, users, popups});
  }

  handleOpenReviewForm = (userId) => {
    this.setState({showModalWindow: true, modalWindowOptions: {formName: 'ReviewForm', onReviewCreated: this.handleReviewCreated, proceedUserId: userId}})
  }

  handleReviewCreated = (review) => {
    let {reviews, popups} = this.state;
    reviews.push(review);
    popups.push({message: "New review created", id: popupId++});
    this.setState({showModalWindow: false, reviews, popups});
  }

  render() {
    const {
      users,
      selectedUserId,
<<<<<<< 43e16366bd24e905943ce7bfc63be3b7d77f30fa
      popups,
      showModalUserForm,
      showModalReviewForm,
      procedUserId} = this.state;
>>>>>>> added Modal Window, User Form and Review Form components
=======
      showModalWindow,
      modalWindowOptions,
      popups} = this.state;
>>>>>>> Changed Modal Window structure and some fixes
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
<<<<<<< 43e16366bd24e905943ce7bfc63be3b7d77f30fa
<<<<<<< 56ce5325884b1557a7b13d4ac0f50e29739ef095
          {selectedUserId !== null &&
=======
          {/* {selectedUserId !== null &&
>>>>>>> added Modal Window, User Form and Review Form components
            <UserProfile
              reviews={reviews.filter(r => r.userId === selectedUserId)}
              user={users.find(u => u.id === selectedUserId)}
              onReviewDelete={this.handleDeleteReview}
            />
<<<<<<< 56ce5325884b1557a7b13d4ac0f50e29739ef095
          }
=======
          } */}
>>>>>>> added Modal Window, User Form and Review Form components
=======
>>>>>>> Changed Modal Window structure and some fixes
        </div>
        <ModalWindow showModalWindow={showModalWindow} options={modalWindowOptions} onCloseModalWindow={this.handleCloseModalWindow}/>
        <PopupsBlock popups={popups} onPopupClose={this.handlePopupClose}/>
      </div>
    );
  }
}

export default App;