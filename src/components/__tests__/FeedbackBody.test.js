import React from 'react';
import {shallow} from 'enzyme';
import configureMockStore from 'redux-mock-store';
import {defaultFeedback, initialState} from "../__mocks__/constants";
import FeedbackBody from "../FeedbackForm/FeedbackBody";

describe('FeedbackBody component', () => {

    const mockState = {
        feedback: initialState,
    };

    const mockStore = configureMockStore();
    const store = mockStore(mockState);

    let wrapper;

    beforeEach(() => {
        wrapper = wrapper = shallow(<FeedbackBody store={store}/>).dive().dive();
    });

    it('should test initial props loading', () => {
        const props = wrapper.instance().props;
        expect(props.newFeedback).toBe(defaultFeedback);
    });

    it('should test initial state loading', () => {
        const state = wrapper.instance().state;
        expect(state.feedbackCommentHelperText).toBe('0/150');
    });

    it('should test initial isCommentValid', () => {
        const result = wrapper.instance().isCommentValid();
        expect(result).toBe(true);
    });

    it('should test isCommentValid with a valid body', () => {
        wrapper.setProps({newFeedback:{comment:  'This is a valid comment'}});
        const result = wrapper.instance().isCommentValid();
        expect(result).toBe(true);
    });

    it('should test isCommentValid with an invalid body', () => {
        wrapper.setProps({newFeedback:{comment:  'Hi'}});
        const result = wrapper.instance().isCommentValid();
        expect(result).toBe(false);
    });

    it('should test handleFeedbackCommentChange', () => {
        wrapper.instance().handleFeedbackCommentChange({target: {value: 'This has 22 characters'}});
        wrapper.update();

        const action = store.getActions()[0];
        expect(action.type).toBe('SET_NEW_FEEDBACK');
        expect(action.payload.comment).toBe('This has 22 characters');
    });
});