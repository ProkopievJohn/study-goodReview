import React from 'react';
import Review from './Review';

import './UserProfile.scss'

class UserProfile extends React.Component{
    render(){
        const {user, reviews, onReviewDelete} = this.props;
        reviews.sort((r1,r2) => {
            return r2.date - r1.date;
        })
        const reviewsList = reviews.map(review => <Review key={review.id} review={review} onReviewDelete={onReviewDelete}/>);
        return(
            <div>
                <div className="userInfoBlock">
                    <div className="userAvatar">
                        <i className="material-icons">account_box</i>
                    </div>
                    <div className="userInfo">
                        <div className="userFirstName">
                            <span>Name: </span><span>{user.firstName}</span>
                        </div>
                        <div className="userLastName">
                            <span>Last name: </span><span>{user.lastName}</span>
                        </div>
                        <div className="userSkills">
                            <span>Skills: </span><span>{user.skills.join(", ")}</span>
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

export default UserProfile;