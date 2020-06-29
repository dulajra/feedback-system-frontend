import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {Rating} from '@material-ui/lab'
import {FormLabel} from '@material-ui/core'
import {getNewFeedback} from "../../views/FeedbackView/selectors";
import {setNewFeedback} from "../../views/FeedbackView/actions";

class FeedbackRating extends React.Component {

    handleStarClick = (event, newValue) => {
        this.props.setNewFeedback({
            ...this.props.newFeedback,
            rating: newValue,
        });
    };

    render() {
        return (
            <div>
                <FormLabel><p>Rating</p></FormLabel>
                <Rating
                    name="feedback-rating"
                    id="feedback-rating"
                    value={this.props.newFeedback.rating}
                    precision={1}
                    onChange={this.handleStarClick}
                />
            </div>
        )
    }
}

FeedbackRating.propTyoes = {
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
)(FeedbackRating);