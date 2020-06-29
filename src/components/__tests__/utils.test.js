import {validateFeedbackComment} from "../FeedbackForm/utils";

describe('test utils', () => {
    describe('test validateFeedbackComment method', () => {
        it('should return false when comment less than MIN', () => {
            let result = validateFeedbackComment('Hi');
            expect(result).toBe(false);
        });

        it('should return false when comment larger than MAX', () => {
            let result = validateFeedbackComment('This is a tool long comment. For example, with the following configuration jest will fail if there is less than 80% branch, line, and function coverage');
            expect(result).toBe(false);
        });

        it('should return true when comment in range', () => {
            let result = validateFeedbackComment('This is a correct comment');
            expect(result).toBe(true);
        });

    });
});