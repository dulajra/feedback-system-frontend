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
    allFeedback: [],
    pagination: {},
    currentPage: 1,
    newFeedback: {},
    saveFeedbackStatus: 'none',
    isFeedbackLoading: false,
};

export const feedbackReducer = createReducer(initialState, {
        [fetchAllFeedback.pending]: (state, action) => {
            state.isFeedbackLoading = true;
        },
        [fetchAllFeedback.fulfilled]: (state, action) => {
            state.allFeedback = action.payload.data;
            state.isFeedbackLoading = false;
        },
        [fetchAllFeedback.rejected]: (state, action) => {
            state.isFeedbackLoading = false;
        },
        [setPaginationMeta.type]: (state, action) => {
            state.pagination = action.payload || {}
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