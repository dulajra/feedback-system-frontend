import React from 'react'
import {FormLabel, GridList, GridListTile, LinearProgress} from '@material-ui/core';
import {Pagination} from '@material-ui/lab';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import Feedback from './Feedback';
import {getAllFeedback, getCurrentPage, getPagination, isFeedbackLoading} from "../../views/FeedbackView/selectors";
import {deleteFeedback, fetchAllFeedback, setCurrentPage} from "../../views/FeedbackView/actions";

class FeedbackList extends React.Component {

    componentDidMount() {
        this.props.fetchAllFeedback(this.props.page);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.page !== this.props.page) {
            this.props.fetchAllFeedback(this.props.page);
        }
    }

    handlePaginationChange = (event, page) => {
        this.props.setCurrentPage(page);
        // this.props.fetchAllFeedback(page);
    };

    renderReviews() {
        const feedbackItems = [];

        this.props.allFeedback.forEach((feedback) => {
            feedbackItems.push(<GridListTile key={feedback.id}><Feedback feedback={feedback}
                                                                         deleteReview={this.props.deleteFeedback}/></GridListTile>);
        });

        return feedbackItems;
    }

    render() {
        return (
            <div>
                <FormLabel><p>Top Reviews</p></FormLabel>
                {
                    this.props.isLoading ?
                        <LinearProgress/> :
                        <div>
                            <GridList cellHeight='auto' cols={1} spacing={4}>
                                {this.renderReviews()}
                            </GridList>
                            <Pagination count={this.props.pagination.totalPages} page={this.props.page}
                                        onChange={this.handlePaginationChange}/>
                        </div>
                }
            </div>
        )
    }

}

FeedbackList.propTypes = {
    allFeedback: PropTypes.array.isRequired,
    isLoading: PropTypes.bool.isRequired,
    pagination: PropTypes.object.isRequired,
    page: PropTypes.number.isRequired,
    fetchAllFeedback: PropTypes.func.isRequired,
    deleteFeedback: PropTypes.func.isRequired,
    setCurrentPage: PropTypes.func.isRequired,
};

export default connect(
    ({feedback}) => ({
        allFeedback: getAllFeedback(feedback),
        isLoading: isFeedbackLoading(feedback),
        pagination: getPagination(feedback),
        page: getCurrentPage(feedback),
    }),
    {
        fetchAllFeedback,
        deleteFeedback,
        setCurrentPage,
    }
)(FeedbackList);