export const FEEDBACK_COMMENT_MAX_LENGTH = 150;
export const FEEDBACK_COMMENT_MIN_LENGTH = 5;

export const validateFeedbackComment = (comment) => {
    const length = comment.length;
    return length >= FEEDBACK_COMMENT_MIN_LENGTH && length <= FEEDBACK_COMMENT_MAX_LENGTH;
};
