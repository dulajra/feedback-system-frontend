export const defaultFeedback = {
    rating: 0,
    name: '',
    comment: '',
};

export const initialState = {
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