import React from 'react';
import {shallow} from 'enzyme';
import configureMockStore from 'redux-mock-store';
import FeedbackRating from "../FeedbackForm/FeedbackRating";
import {defaultFeedback, initialState} from "../__mocks__/constants";

describe('FeedbackRating component', () => {

    const mockState = {
        feedback: initialState,
    };

    const mockStore = configureMockStore();
    const store = mockStore(mockState);

    let wrapper;

    beforeEach(() => {
        wrapper = wrapper = shallow(<FeedbackRating store={store}/>).dive().dive();
    });

    it('should test initial props loading', () => {
        const props = wrapper.instance().props;
        expect(props.newFeedback).toBe(defaultFeedback);
    });

    it('should test handleStarClick', () => {
        wrapper.instance().handleStarClick({}, 3);
        const action = store.getActions()[0];
        expect(action.type).toBe('SET_NEW_FEEDBACK');
        expect(action.payload.rating).toBe(3);
    });
})