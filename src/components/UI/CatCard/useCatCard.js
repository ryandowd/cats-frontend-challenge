import { useState } from 'react';
import useCatsAPI from '../../../hooks/useCatsAPI';

const useCatCard = (cat, fetchAllCats) => {
    const [favouriteId, setFavouriteId] = useState();
    const [voteId, setVoteId] = useState();

    const handleAddFavourite = async () => {
        useCatsAPI(
            'favourites',
            'POST',
            null,
            { image_id:  cat.id }
        ).then(response => {
            if (response.status === 200) {   
                setFavouriteId(response?.data?.id);
            }
        });
        // @TODO - I know the 'favourites' are not persistent
        // between page refreshses. I could have gotten a list 
        // of the favourites per cat (resulting in many calls to the API)
        // OR I could have gotten the whole list and updated my UI 
        // but that just seemed excessive and hacky. So I've left it
        // since none of those options were efficient. Essentially, 
        // at this point, I would ask for guidance from another dev. 
    }

    const handleRemoveFavourite = async () => {
        useCatsAPI(
            `favourites/${favouriteId}`,
            'DELETE'
        ).then(response => {
            if (response.status === 200) {   
                setFavouriteId(false);
            }
        });
    }
    
    const handleVoteUp = async () => {
        useCatsAPI(
            'votes',
            'POST',
            null,
            {
                image_id: cat.id,
                sub_id: cat.sub_id,
                value: 1
            }
        ).then(response => {
            if (response.status === 200) {   
                setVoteId(response.data.id);
            }
        });
    }

    const handleVoteDown = async () => {
        // I stopped here because I couldn't figure out how the DB
        // was storing the up/down votes. Regardless of upvotes, the value
        // was always being returned as zero. I'd need to refer back to the API
        // docs then I would ask another dev for their thoughts.
    }

    const handleDeleteCat = async (imageId) => {
        useCatsAPI(
            `images/${imageId}`,
            'DELETE'
        ).then(response => {
            if (response.status === 204) {   
                fetchAllCats();
            }
        });
    }

    return {
        handleAddFavourite,
        handleRemoveFavourite,
        handleVoteUp,
        handleVoteDown,
        handleDeleteCat,
        favouriteId
    }
}

export default useCatCard;