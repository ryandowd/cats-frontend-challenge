import React, { useEffect, useState } from 'react';
import CatCard from '../../UI/CatCard';
import useCatsAPI from '../../../hooks/useCatsAPI';
import { 
    Container, 
    Grid
} from '@material-ui/core';
import LoadingSpinner from '../../UI/LoadingSpinner';

const PageAllCats = ({ classes }) => {
    const [allCats, setAllCats] = useState([]);

    const fetchAllCats = () => {
        useCatsAPI(
            'images',
            'GET',
            { limit: 50 }
        ).then(response => {
            setAllCats(response.data);
        });
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