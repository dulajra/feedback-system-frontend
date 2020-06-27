import React from 'react'
import {Button, FormLabel} from '@material-ui/core'
import {connect} from 'react-redux';
import PropTypes from "prop-types";

import FeedbackRating from './FeedbackRating'
import FeedbackBody from './FeedbackBody'
import {validateFeedbackComment} from "./utils";
import {getNewFeedback, getSaveFeedbackStatus} from "../../views/FeedbackView/selectors";
import {saveNewFeedback, setSaveFeedbackStatus} from "../../views/FeedbackView/actions";

class FeedbackForm extends React.Component {

    componentDidUpdate() {
        if (this.props.saveFeedbackStatus === 'success' || this.props.saveFeedbackStatus === 'failed') {
            setTimeout(() => {
                this.props.setSaveFeedbackStatus('none');
            }, 3000);
        }
    }

    handleSaveFeedback = () => {
        this.props.saveNewFeedback(this.props.newFeedback);
    };

    isSaveFeedbackEnabled = () => {
        const {comment, rating} = this.props.newFeedback;
        return comment && rating && validateFeedbackComment(comment);
    };

    render() {
        return (
            <form>
                <FeedbackBody/>
                <FeedbackRating/>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={this.handleSaveFeedback}
                    disabled={!this.isSaveFeedbackEnabled()}
                >
                    Save Feedback
                </Button>
                {
                    this.props.saveFeedbackStatus === 'success' &&
                    (<FormLabel><p style={{color: 'green'}}>Feedback saved successfully!</p></FormLabel>)
                }
                {
                    this.props.saveFeedbackStatus === 'failed' &&
                    (<FormLabel><p style={{color: 'red'}}>Feedback saving failed!</p></FormLabel>)
                }
            </form>
        )
    }
}

FeedbackForm.propTypes = {
    newFeedback: PropTypes.object.isRequired,
    saveFeedbackStatus: PropTypes.string.isRequired,
    saveNewFeedback: PropTypes.func.isRequired,
    setSaveFeedbackStatus: PropTypes.func.isRequired,
};
export default connect(
    ({feedback}) => ({
        newFeedback: getNewFeedback(feedback),
        saveFeedbackStatus: getSaveFeedbackStatus(feedback),
    }),
    {
        saveNewFeedback,
        setSaveFeedbackStatus,
    }
)(FeedbackForm);