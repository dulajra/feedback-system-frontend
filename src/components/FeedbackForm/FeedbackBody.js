import React from 'react'
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {TextField} from '@material-ui/core'
import {getNewFeedback} from "../../views/FeedbackView/selectors";
import {FEEDBACK_COMMENT_MAX_LENGTH, validateFeedbackComment} from "./utils";
import {setNewFeedback} from "../../views/FeedbackView/actions";

const feedbackCommentPlaceHolder = 'Leave your feedback here...';
const feedbackNamePlaceHolder = 'Who you are? (Optional)';

class FeedbackBody extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            feedbackCommentHelperText: `0/${FEEDBACK_COMMENT_MAX_LENGTH}`,
        };
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.newFeedback.comment !== this.props.newFeedback.comment) {
            this.setState({
                feedbackCommentHelperText: `${this.props.newFeedback.comment.length}/${FEEDBACK_COMMENT_MAX_LENGTH}`,
            })
        }
    }

    handleFeedbackNameChange = (e) => {
        this.props.setNewFeedback({
            ...this.props.newFeedback,
            name: e.target.value,
        });
    };

    handleFeedbackCommentChange = (e) => {
        this.props.setNewFeedback({
            ...this.props.newFeedback,
            comment: e.target.value,
        });
    };

    isReviewValid = () => {
        return this.props.newFeedback.comment.length === 0 || validateFeedbackComment(this.props.newFeedback.comment);
    };

    render() {
        return (
            <div>
                <TextField
                    fullWidth
                    id="feedback-name"
                    label="Name"
                    variant="outlined"
                    placeholder={feedbackNamePlaceHolder}
                    value={this.props.newFeedback.name}
                    onChange={this.handleFeedbackNameChange}
                    margin='dense'
                />
                <TextField
                    multiline
                    fullWidth
                    id="feedback-comment"
                    label="Review"
                    variant="outlined"
                    required
                    error={!this.isReviewValid()}
                    helperText={this.state.feedbackCommentHelperText}
                    placeholder={feedbackCommentPlaceHolder}
                    value={this.props.newFeedback.comment}
                    onChange={this.handleFeedbackCommentChange}
                    margin='normal'
                />
            </div>
        )
    }
}

FeedbackBody.propTypes = {
    newFeedback: PropTypes.object.isRequired,
    setNewFeedback: PropTypes.func.isRequired,
};

export default connect(
    ({feedback}) => ({
        newFeedback: getNewFeedback(feedback),
    }),
    {
        setNewFeedback,
    }
)
(FeedbackBody);