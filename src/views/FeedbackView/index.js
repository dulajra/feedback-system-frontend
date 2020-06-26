import React from 'react'
import {Container, Grid} from '@material-ui/core'

import FeedbackForm from "../../components/FeedbackForm/FeedbackForm";
import FeedbackList from "../../components/FeedbackList/FeedbackList";

const FeedbackView = () => (
    <Container maxWidth="sm">
        <Grid container spacing={2} direction="column">
            <Grid item xs={12}>
                <FeedbackForm/>
            </Grid>
            <Grid item xs={12}>
                <FeedbackList/>
            </Grid>
        </Grid>
    </Container>
);

export default FeedbackView;