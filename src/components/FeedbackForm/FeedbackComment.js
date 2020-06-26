import React from 'react'
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {TextField} from '@material-ui/core'
import {getNewFeedback} from "../../views/FeedbackView/selectors";
import {FEEDBACK_COMMENT_MAX_LENGTH, validateFeedbackComment} from "./utils";
import {setNewFeedbackComment} from "../../views/FeedbackView/actions";

const placeholderText = 'Leave your allFeedback here...';

class FeedbackComment extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            feedbackCommentHelperText: `0/${FEEDBACK_COMMENT_MAX_LENGTH}`,
        };
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.newFeedbackComment !== this.props.newFeedbackComment) {
            this.setState({
                feedbackCommentHelperText: `${this.props.newFeedbackComment.length}/${FEEDBACK_COMMENT_MAX_LENGTH}`,
            })
        }
    }

    handleReviewBodyChange = (e) => {
        this.props.setNewFeedbackComment(e.target.value);
    };

    isReviewValid = () => {
        return this.props.newFeedbackComment.length === 0 || validateFeedbackComment(this.props.newFeedbackComment);
    };

    render() {
        return (
            <div>
                <TextField
                    multiline
                    fullWidth
                    id="feedback-comment"
                    label="Review"
                    variant="outlined"
                    required
                    error={!this.isReviewValid()}
                    helperText={this.state.feedbackCommentHelperText}
                    placeholder={placeholderText}
                    value={this.props.newFeedbackComment}
                    onChange={this.handleReviewBodyChange}
                />
            </div>
        )
    }
}

FeedbackComment.propTypes = {
    newFeedbackComment: PropTypes.string.isRequired,
    setNewFeedbackComment: PropTypes.func.isRequired,
};

export default connect(
    ({feedback}) => ({
        newFeedbackComment: getNewFeedback(feedback).comment || '',
    }),
    {
        setNewFeedbackComment,
    }
)
(FeedbackComment);