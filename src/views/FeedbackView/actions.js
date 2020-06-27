import {createAction, createAsyncThunk} from '@reduxjs/toolkit'

import {getCurrentPage, getFeedbackList, getPagination} from "./selectors";
import {deleteFeedback, getAllFeedback, saveFeedback} from "../../services/feedback/feedback-service";

export const setNewFeedbackComment = createAction('SET_NEW_FEEDBACK_COMMENT');
export const setNewFeedbackRating = createAction('SET_NEW_FEEDBACK_RATING');
export const setSaveFeedbackStatus = createAction('SET_SAVE_FEEDBACK_STATUS');
export const setCurrentPage = createAction('SET_CURRENT_PAGE');
export const setPaginationMeta = createAction('SET_PAGINATION_META');

export const saveNewFeedback = createAsyncThunk('SAVE_NEW_FEEDBACK', async (newFeedback, {dispatch, getState}) => {
    const res = await saveFeedback(newFeedback);

    const {feedback} = getState();
    const currentPage = getCurrentPage(feedback);
    dispatch(fetchAllFeedback(currentPage));

    return res;
});

export const fetchAllFeedback = createAsyncThunk('FETCH_ALL_FEEDBACK', async (page, {getState}) => {
    return getAllFeedback(page);
});

export const removeFeedback = createAsyncThunk('REMOVE_FEEDBACK', async (id, {getState, dispatch}) => {
    const {feedback} = getState();
    const allFeedback = getFeedbackList(feedback);
    const pagination = getPagination(feedback);
    const currentPage = getCurrentPage(feedback);
    await deleteFeedback(id);

    if (currentPage > 1 && currentPage === pagination.totalPages && allFeedback.length === 1) {
        dispatch(setCurrentPage(currentPage - 1));
        dispatch(fetchAllFeedback(currentPage - 1));
    } else {
        dispatch(fetchAllFeedback(currentPage));
    }
});
