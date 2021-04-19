import React from 'react';

import { Paper, Grid } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';

import "./CatCard.css";
import useCatCard from './useCatCard';

const CatCard = ({ classes, cat, fetchAllCats }) => {
    const {
        handleAddFavourite,
        handleRemoveFavourite,
        handleVoteUp,
        handleVoteDown,
        handleDeleteCat,
        favouriteId
    } = useCatCard(cat, fetchAllCats);

    return (
        <Grid item xs={12} md={3}>
            <Paper className={classes.paper}>
                <img src={cat.url} />
                <div className="CatCard-controls">
                    { favouriteId ? (
                        <div className="btn-favorite" onClick={handleRemoveFavourite}>
                            <FavoriteIcon />
                        </div>
                    ) : (
                        <div className="btn-favorite" onClick={handleAddFavourite}>
                            <FavoriteBorderIcon />
                        </div>
                    )}
                    <div className="btn-voteup" onClick={handleVoteUp}>
                        <ThumbUpIcon />
                    </div>  
                    <div className="btn-votedown" onClick={handleVoteDown}>
                        <ThumbDownIcon />
                    </div>  
                    <div className="btn-delete" onClick={() => handleDeleteCat(cat.id)}>
                        <DeleteForeverIcon />
                    </div>
                </div>
            </Paper>
        </Grid>
    );
}

export default CatCard;