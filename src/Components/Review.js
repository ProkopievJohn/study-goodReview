import React from 'react';

class Review extends React.Component{
    render(){
        const {review, onReviewDelete} = this.props
        return(
            <div className="review">
                <div className="reviewHeader">
                    <span className="reviewDate">{new Date(review.date).toLocaleString()}</span>
                    <span className="reviewDeleteBtn" onClick={() => onReviewDelete(review.id)}>
                        <i className="material-icons">close</i>
                    </span>
                </div>
                <div className="reviewText">
                    {review.reviewText}
                </div>
            </div>
        )
    }
}

export default Review;