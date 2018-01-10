import React from 'react';

class Review extends React.Component{
    render(){
        const {review, onReviewDelete} = this.props
        return(
            <div className={review.isAproved ? "review" : "review notAproved"}>
                <div className="reviewHeader">
                    <div className="reviewDate">{new Date(review.date).toLocaleString()}</div>
                    <div className="reviewDeleteBtn" onClick={() => onReviewDelete(review.id)}>
                        <i className="material-icons">close</i>
                    </div>
                </div>
                <div className="reviewText">
                    {review.reviewText}
                </div>
            </div>
        )
    }
}

export default Review;