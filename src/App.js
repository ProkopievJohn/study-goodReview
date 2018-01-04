import React, { Component } from 'react';
import Header from './Components/Header';
import PopupsBlock from './Components/PopupsBlock';
import './App.scss';

var popupId = 1;

const usersArr = [
  {firstName: "Test", lastName: "User", id: 1, isAdmin: false, skills: ["React", "Koa"]},
  {firstName: "Test", lastName: "User 2", id: 2, isAdmin: false, skills: ["Angular", "Express"]},
  {firstName: "Admin", lastName: "User", id: 3, isAdmin: true, skills: ["React, Redux"]}
]

const reviewsArr = [
  {reviewText: 'test review 1', id: 1, userId:usersArr[0].id, date: Date.now() - 100*60*1000},
  {reviewText: 'test review 2', id: 2, userId:usersArr[0].id, date: Date.now()},
  {reviewText: 'test review 3', id: 3, userId:usersArr[1].id, date: Date.now() - 100*60*1000},
  {reviewText: 'test review 4', id: 4, userId:usersArr[1].id, date: Date.now()},
  {reviewText: 'default review', id: 5, userId:usersArr[2].id, date: Date.now()}
]

const admin = usersArr.find(user => user.isAdmin === true);

class App extends Component {
  state = {
    users: usersArr,
    reviews: reviewsArr,
    popups: []
  };

  render() {
    const {popups} = this.state;

    return (
      <div className="App">
        <Header account={admin}/>
        <PopupsBlock popups={popups} onPopupClose={this.handlePopupClose}/>
      </div>
    );
  }
}

export default App;