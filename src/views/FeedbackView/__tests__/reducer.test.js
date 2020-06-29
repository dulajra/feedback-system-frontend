import {fromJS} from "immutable";
import {SET_ALL_REVIEWS, SET_NEW_REVIEW_BODY, SET_NEW_REVIEW_RATING} from "../constants";
import {reviewReducer} from "../reducer";

const initialState = fromJS({
    reviews: [],
    pagination: {},
    currentPage: 1,
    newReview: {},
    saveReviewStatus: 'none',
    isLoading: false,
});

describe('Views/ReviewView reducer tests', () => {
    describe('action tests', () => {
        it('test SET_ALL_REVIEWS', () => {
            const reviews = [
                {
                    "body": "New review 4",
                    "rating": 4,
                    "id": 12
                },
                {
                    "body": "New review 5",
                    "rating": 5,
                    "id": 13
                },
            ];
            const action = {
                type: SET_ALL_REVIEWS,
                payload: reviews,
            };

            const resultState = reviewReducer(initialState, action);
            expect(resultState.getIn(['reviews'])).toEqual(fromJS(reviews));
        });

        it('test SET_NEW_REVIEW_BODY', () => {
            const newReviewBody = 'This is a new review';
            const action = {
                type: SET_NEW_REVIEW_BODY,
                payload: newReviewBody,
            };

            const resultState = reviewReducer(initialState, action);
            expect(resultState.getIn(['newReview', 'body'])).toEqual(newReviewBody);
        });

        it('test SET_NEW_REVIEW_RATING', () => {
            const newRating = 4;
            const action = {
                type: SET_NEW_REVIEW_RATING,
                payload: newRating,
            };

            const resultState = reviewReducer(initialState, action);
            expect(resultState.getIn(['newReview', 'rating'])).toEqual(newRating);
        });
    });
});