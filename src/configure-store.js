import {combineReducers} from 'redux';
import {configureStore} from '@reduxjs/toolkit'

import {feedbackReducer} from './views/FeedbackView/reducer';

const rootReducer = combineReducers({feedback: feedbackReducer});

export const store = configureStore({
    reducer: rootReducer,
});
