import React from 'react'
import PropTypes from 'prop-types';
import {Button, FormLabel, Grid, Paper} from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete';
import {Rating} from "@material-ui/lab";

class Feedback extends React.Component {

    handleDeleteFeedback = () => {
        this.props.deleteFeedback(this.props.feedback.id);
    };

    render() {
        return (
            <Paper variant="outlined" elevation={2} style={{margin: '5px', padding: '5px'}}>
                <Grid container direction="row" alignItems="center">
                    <Grid item xs={10}>
                        <FormLabel><p>{this.props.feedback.comment}</p></FormLabel>
                        <Rating
                            id="feedback-rating"
                            value={this.props.feedback.rating}
                            precision={1}
                            readOnly
                        />
                    </Grid>
                    <Grid item xs={2}>
                        <Button onClick={this.handleDeleteFeedback}><DeleteIcon/></Button>
                    </Grid>
                </Grid>
            </Paper>
        )
    }

}

Feedback.propTypes = {
    feedback: PropTypes.object.isRequired,
    deleteFeedback: PropTypes.func.isRequired,
};

export default Feedback