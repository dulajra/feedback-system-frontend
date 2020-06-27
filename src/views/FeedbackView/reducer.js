import {createReducer} from '@reduxjs/toolkit';

import {
    fetchAllFeedback,
    saveNewFeedback,
    setCurrentPage,
    setNewFeedbackComment,
    setNewFeedbackRating,
    setPaginationMeta,
    setSaveFeedbackStatus
} from "./actions";

const initialState = {
    feedbackList: [],
    pagination: {
        currentPage: 0,
        pageSize: 5,
        totalItems: 0,
        totalPages: 0,
    },
    currentPage: 1,
    newFeedback: {
        rating: 0,
        comment: '',
    },
    saveFeedbackStatus: 'none',
    isFeedbackLoading: false,
};

export const feedbackReducer = createReducer(initialState, {
        [fetchAllFeedback.pending]: (state, action) => {
            state.isFeedbackLoading = true;
        },
        [fetchAllFeedback.fulfilled]: (state, action) => {
            state.isFeedbackLoading = false;
            state.feedbackList = action.payload.data;
            state.pagination = action.payload.meta;
        },
        [fetchAllFeedback.rejected]: (state, action) => {
            state.isFeedbackLoading = false;
        },
        [setPaginationMeta.type]: (state, action) => {
            state.pagination = action.payload
        },
        [setNewFeedbackComment.type]: (state, action) => {
            state.newFeedback.comment = action.payload
        },
        [setNewFeedbackRating.type]: (state, action) => {
            state.newFeedback.rating = action.payload
        },
        [saveNewFeedback.fulfilled]: (state, action) => {
            state.newFeedback = {};
            state.saveFeedbackStatus = 'success';
        },
        [saveNewFeedback.rejected]: (state, action) => {
            state.saveFeedbackStatus = 'failed'
        },
        [setSaveFeedbackStatus.type]: (state, action) => {
            state.saveFeedbackStatus = action.payload
        },
        [setCurrentPage.type]: (state, action) => {
            state.currentPage = action.payload
        },
    }
);