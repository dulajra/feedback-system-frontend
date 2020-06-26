import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {Rating} from '@material-ui/lab'
import {FormLabel} from '@material-ui/core'
import {getNewFeedback} from "../../views/FeedbackView/selectors";
import {setNewFeedbackRating} from "../../views/FeedbackView/actions";

class FeedbackRating extends React.Component {

    handleStarClick = (event, newValue) => {
        this.props.setNewFeedbackRating(newValue);
    };

    render() {
        return (
            <div>
                <FormLabel><p>Rating</p></FormLabel>
                <Rating
                    name="feedback-rating"
                    id="feedback-rating"
                    value={this.props.newFeedbackRating}
                    precision={1}
                    onChange={this.handleStarClick}
                />
            </div>
        )
    }
}

FeedbackRating.propTyoes = {
    newFeedbackRating: PropTypes.number.isRequired,
    setNewFeedbackRating: PropTypes.func.isRequired,
};

export default connect(
    ({feedback}) => ({
        newFeedbackRating: parseInt(getNewFeedback(feedback).rating) || 0,
    }),
    {
        setNewFeedbackRating
    }
)(FeedbackRating);