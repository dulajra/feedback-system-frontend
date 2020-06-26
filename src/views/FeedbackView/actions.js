import {createAction, createAsyncThunk} from '@reduxjs/toolkit'
import {getAllFeedback, saveFeedback} from "../../services/feedback/feedback-service";

export const setNewFeedbackComment = createAction('SET_NEW_FEEDBACK_COMMENT');
export const setNewFeedbackRating = createAction('SET_NEW_FEEDBACK_RATING');
export const deleteFeedback = createAction('REMOVE_FEEDBACK');
export const setSaveFeedbackStatus = createAction('SET_SAVE_FEEDBACK_STATUS');
export const setCurrentPage = createAction('SET_CURRENT_PAGE');
export const setIsFeedbackLoading = createAction('SET_IS_FEEDBACK_LOADING');
export const setAllFeedback = createAction('SET_ALL_FEEDBACK');
export const setPaginationMeta = createAction('SET_PAGINATION_DATA');

export const saveNewFeedback = createAsyncThunk('SAVE_NEW_FEEDBACK', (feedback) => {
    return saveFeedback(feedback);
});

export const fetchAllFeedback = createAsyncThunk('FETCH_ALL_FEEDBACK', async (page) => {
    return getAllFeedback(page);
});
