import {feedbackReducer} from "../reducer";

const defaultFeedback = {
    rating: 0,
    name: '',
    comment: '',
};

const initialState = {
    feedbackList: [],
    pagination: {
        currentPage: 0,
        pageSize: 5,
        totalItems: 0,
        totalPages: 0,
    },
    currentPage: 1,
    newFeedback: defaultFeedback,
    saveFeedbackStatus: 'none',
    isFeedbackLoading: false,
};

describe('views/FeedbackView reducer tests', () => {
    describe('action tests', () => {
        it('test FETCH_ALL_FEEDBACK/pending', () => {
            const action = {
                type: 'FETCH_ALL_FEEDBACK/pending',
            };

            const resultState = feedbackReducer(initialState, action);
            expect(resultState.isFeedbackLoading).toBe(true);
        });

        it('test FETCH_ALL_FEEDBACK/fulfilled', () => {
            const payload = {
                data: [
                    {
                        "comment": "Good product",
                        "rating": 4,
                        "id": 2
                    },
                    {
                        "comment": "Bad product",
                        "rating": 1,
                        "id": 3
                    },
                ],
                meta:  {
                    currentPage: 1,
                    pageSize: 5,
                    totalItems: 7,
                    totalPages: 2,
                }
            }
            const action = {
                type: 'FETCH_ALL_FEEDBACK/fulfilled',
                payload,
            };

            const resultState = feedbackReducer(initialState, action);
            expect(resultState.feedbackList).toEqual(payload.data);
            expect(resultState.pagination).toEqual(payload.meta);
            expect(resultState.isFeedbackLoading).toBe(false);
        });

        it('test FETCH_ALL_FEEDBACK/rejected', () => {
            const action = {
                type: 'FETCH_ALL_FEEDBACK/rejected',
            };

            const resultState = feedbackReducer(initialState, action);
            expect(resultState.isFeedbackLoading).toBe(false);
        });

       /* it('test SET_NEW_REVIEW_BODY', () => {
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
        });*/
    });
});