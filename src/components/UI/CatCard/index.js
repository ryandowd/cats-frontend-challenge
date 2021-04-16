import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { Paper, Grid } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';

import "./CatCard.css";

const CatCard = ({ classes, cat, fetchAllCats }) => {
    const [favouriteId, setFavouriteId] = useState();
    const [voteId, setVoteId] = useState();

    const handleAddFavourite = async () => {
        const response = await axios({
            method: 'POST',
            url: 'https://api.thecatapi.com/v1/favourites',
            data: {
                image_id:  cat.id
            },
            headers: {
                'x-api-key': '124f173f-1dd6-4a6f-8164-b8f27fdd3a00'
            }
        });

        if (response.status === 200) {   
            setFavouriteId(response?.data?.id);
        }

        // @TODO - I know the 'favourites' are not persistent
        // between page refreshses. I could have gotten a list 
        // of the favourites per cat (resulting in many calls to the API)
        // OR I could have gotten the whole list and updated my UI 
        // but that just seemed excessive and hacky. So I've left it
        // since none of those options were efficient. Essentially, 
        // at this point, I would ask for guidance from another dev. 
    }

    const handleRemoveFavourite = async () => {
        const response = await axios({
            method: 'DELETE',
            url: `https://api.thecatapi.com/v1/favourites/${favouriteId}`,
            headers: {
                'x-api-key': '124f173f-1dd6-4a6f-8164-b8f27fdd3a00'
            }
        });

        if (response.status === 200) {   
            setFavouriteId(false);
        }
    }
    
    const handleVoteUp = async () => {
        const response = await axios({
            method: 'POST',
            url: 'https://api.thecatapi.com/v1/votes',
            data: {
                image_id: cat.id,
                sub_id: cat.sub_id,
                value: 1
            },
            headers: {
                'x-api-key': '124f173f-1dd6-4a6f-8164-b8f27fdd3a00'
            }
        });

        if (response.status === 200) {   
            setVoteId(response.data.id);
        }
    }

    const handleVoteDown = async () => {
        // I stopped here because I couldn't figure out how the DB
        // was storing the up/down votes. Regardless of upvotes, the value
        // was always being returned as zero. 
    }

    const handleDeleteCat = async (imageId) => {
        const response = await axios({
            method: 'DELETE',
            url: `https://api.thecatapi.com/v1/images/${imageId}`,
            headers: {
                'x-api-key': '124f173f-1dd6-4a6f-8164-b8f27fdd3a00'
            }
        });

        if (response.status === 204) {   
            fetchAllCats();
        }
    }

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