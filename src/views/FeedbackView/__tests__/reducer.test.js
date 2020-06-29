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
    describe('FETCH_ALL_FEEDBACK', () => {
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
    });

    describe('SET_NEW_FEEDBACK', () => {
        it('test SET_NEW_FEEDBACK', () => {
            const payload = {
                rating: 4,
                name: 'John Doe',
                comment: 'Really good product',
            }
            const action = {
                type: 'SET_NEW_FEEDBACK',
                payload,
            };

            const resultState = feedbackReducer(initialState, action);
            expect(resultState.newFeedback).toEqual(payload);
        });
    });

    describe('SAVE_NEW_FEEDBACK', () => {
        const newFeedback = {
            rating: 4,
            name: 'John Doe',
            comment: 'Really good product',
        }
        let state;

        beforeEach(() => {
            const action = {
                type: 'SET_NEW_FEEDBACK',
                payload: newFeedback,
            };

            state = feedbackReducer(initialState, action);
        });

        it('test SAVE_NEW_FEEDBACK/fulfilled', () => {
            const action = {
                type: 'SAVE_NEW_FEEDBACK/fulfilled',
                payload: newFeedback,
            };

            const resultState = feedbackReducer(state, action);
            expect(resultState.newFeedback).toEqual(defaultFeedback);
            expect(resultState.saveFeedbackStatus).toBe('success');
        });

        it('test SAVE_NEW_FEEDBACK/rejected', () => {
            const action = {
                type: 'SAVE_NEW_FEEDBACK/rejected',
                payload: newFeedback,
            };

            const resultState = feedbackReducer(state, action);
            expect(resultState.newFeedback).toEqual(newFeedback);
            expect(resultState.saveFeedbackStatus).toBe('failed');
        });
    });

    describe('SET_SAVE_FEEDBACK_STATUS', () => {
        it('test SET_SAVE_FEEDBACK_STATUS', () => {
            const payload = 'success'
            const action = {
                type: 'SET_SAVE_FEEDBACK_STATUS',
                payload,
            };

            const resultState = feedbackReducer(initialState, action);
            expect(resultState.saveFeedbackStatus).toBe(payload);
        });
    });

    describe('SET_CURRENT_PAGE', () => {
        it('test SET_CURRENT_PAGE', () => {
            const payload = 1
            const action = {
                type: 'SET_CURRENT_PAGE',
                payload,
            };

            const resultState = feedbackReducer(initialState, action);
            expect(resultState.currentPage).toBe(payload);
        });
    });
});