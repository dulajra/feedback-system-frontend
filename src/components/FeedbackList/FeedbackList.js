import React from 'react'
import {FormLabel, GridList, GridListTile, LinearProgress} from '@material-ui/core';
import {Pagination} from '@material-ui/lab';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import Feedback from './Feedback';
import {getFeedbackList, getCurrentPage, getPagination, isFeedbackLoading} from "../../views/FeedbackView/selectors";
import {fetchAllFeedback, removeFeedback, setCurrentPage} from "../../views/FeedbackView/actions";

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
    };

    renderReviews() {
        return this.props.allFeedback.map((feedback) => {
            return (
                <GridListTile key={feedback.id}>
                    <Feedback feedback={feedback} deleteFeedback={this.props.removeFeedback}/>
                </GridListTile>);
        });
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
    removeFeedback: PropTypes.func.isRequired,
    setCurrentPage: PropTypes.func.isRequired,
};

export default connect(
    ({feedback}) => ({
        allFeedback: getFeedbackList(feedback),
        isLoading: isFeedbackLoading(feedback),
        pagination: getPagination(feedback),
        page: getCurrentPage(feedback),
    }),
    {
        fetchAllFeedback,
        removeFeedback,
        setCurrentPage,
    }
)(FeedbackList);