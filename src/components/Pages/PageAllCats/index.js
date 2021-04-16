import React, { useEffect, useState } from 'react';
import axios from 'axios';

import CatCard from '../../UI/CatCard';
import { 
    Container, 
    Grid
} from '@material-ui/core';
import LoadingSpinner from '../../UI/LoadingSpinner';

const PageAllCats = ({ classes }) => {
    const [allCats, setAllCats] = useState([]);

    const fetchAllCats = async () => {
        const url = 'https://api.thecatapi.com/v1/images'
        const response = await axios({
            method: 'GET',
            url: url,
            headers: {
                'x-api-key': '124f173f-1dd6-4a6f-8164-b8f27fdd3a00'
            },
            params: {
                limit: 50
            }
        });
        
        if (response.data.length) {
            setAllCats(response.data);
        }
    }   

    useEffect(() => {
        fetchAllCats();
    }, []);

    return (
        <main className={classes.content}>
            <div className={classes.appBarSpacer} />
            <Container maxWidth="lg" className={classes.container}>
                <Grid container spacing={3} direction="row">
                    {allCats.length ? (
                        allCats.map(cat => {
                            return (
                                <CatCard 
                                    key={cat.id} 
                                    classes={classes} 
                                    cat={cat} 
                                    fetchAllCats={fetchAllCats}
                                />
                            )
                        })
                    ):(
                        <LoadingSpinner />
                    )}
                </Grid>
            </Container>
        </main>
    )
}

export default PageAllCats;