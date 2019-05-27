import * as types from '../Constants';

const reviewsArr = [
    {reviewText: 'test review 1', id: 1, userId: 1, isAproved: true, date: Date.now() - 100*60*1000},
    {reviewText: 'test review 2', id: 2, userId: 1, isAproved: true, date: Date.now()},
    {reviewText: 'test review 3', id: 3, userId: 2, isAproved: true, date: Date.now() - 100*60*1000},
    {reviewText: 'test review 4', id: 4, userId: 2, isAproved: true, date: Date.now()},
    {reviewText: 'default review', id: 5, userId: 3, isAproved: true, date: Date.now()}
]

var reviewId = 6;

function review (state, action) {
    switch (action.type) {
        case types.ADD_REVIEW:
            return {
                id: reviewId++,
                reviewText: action.reviewText,
                userId: action.userId,
                isAproved: false,
                date: Date.now()
            }
        default: return state
    }
}

function reviews (state = reviewsArr, action){
    switch (action.type) {
        case types.ADD_REVIEW:
            return [...state, review(undefined, action)];
        case types.REMOVE_REVIEW:
            return state.filter(review => review.id !== action.id);
        case types.REMOVE_USER_REVIEWS:
            return state.filter(review => review.userId !== action.userId)
        default: return state
    }
}

export default reviews;