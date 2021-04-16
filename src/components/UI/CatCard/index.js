import React from 'react';

import { Paper, Grid } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

import "./CatCard.css";

const CatCard = ({ classes, cat }) => {
    console.log(cat, 'cat cat cat cat cat')
    return (
        <Grid item xs={12} md={3}>
            <Paper className={classes.paper}>
                <img src={cat.url} />
                {/* <div>
                    <FavoriteIcon />
                </div> */}
                <div className="btn-favorite">
                    <FavoriteBorderIcon />
                </div>
            </Paper>
        </Grid>
    );
}

export default CatCard;