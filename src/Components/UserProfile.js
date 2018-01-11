import React from 'react';
import { connect } from 'react-redux';
import Review from './Review';

import './UserProfile.scss'

class UserProfile extends React.Component{

    handleReviewDelete = (id) => {
        const {dispatch} = this.props;
        dispatch({type: "REMOVE_REVIEW", id});
        dispatch({type: "SHOW_POPUP", message: "Review deleted"})
    }

    render(){
        const {user, reviews} = this.props;
        reviews.sort((r1,r2) => {
            return r2.date - r1.date;
        })
        const reviewsList = reviews.map(review => <Review key={review.id} review={review} onReviewDelete={() => this.handleReviewDelete(review.id)}/>);
        return(
            <div className="userProfile">
                <div className="userInfoBlock">
                    <div className="userAvatar">
                        <i className="material-icons">account_box</i>
                    </div>
                    <div className="userInfo">
                        <div className="userFirstName">
                            <span className="fieldLable">Name: </span><span className="fieldText">{user.firstName}</span>
                        </div>
                        <div className="userLastName">
                            <span className="fieldLable">Last name: </span><span className="fieldText">{user.lastName}</span>
                        </div>
                        <div className="userSkills">
                            <span className="fieldLable">Skills: </span><span className="fieldText">{user.skills.join(", ")}</span>
                        </div>
                    </div>
                </div>
                <div className="reviewsBlock">
                    {reviewsList}
                </div>
            </div>
        )
    }
}

export default connect()(UserProfile);