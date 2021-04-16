import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import { DropzoneArea } from 'material-ui-dropzone'

import CatCard from '../../UI/CatCard';
import { 
    Container, 
    Grid,
    Button, 
    Paper, 
    Typography 
} from '@material-ui/core';

const PageAllCats = ({ classes }) => {
    const [allCats, setAllCats] = useState([]);

    useEffect(() => {
        const fetchAllCats = async () => {
            const url = 'https://api.thecatapi.com/v1/images'
            const response = await axios({
                method: 'get',
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
                console.log(response.data, 'allCats allCats allCats')
            }
        }   
        fetchAllCats();
    }, []);

    // const cats = () => {
    //     const catList = []
    //     if (allCats.length) {
    //         allCats.map((cat, index) => {
    //             console.log(cat, '1231231231');
    //             catList.push(<img src={cat.url} />);
    //         })
    //     }

    //     return catList;
    // }

    return (
        <main className={classes.content}>
            <div className={classes.appBarSpacer} />
            <Container maxWidth="lg" className={classes.container}>
                <Grid container spacing={3} direction="row">
                    {allCats.length ? (
                        allCats.map(cat => <CatCard key={cat.id} classes={classes} cat={cat} />)
                    ):(
                        <h1>Please upload some cats</h1>
                    )}
                </Grid>
            </Container>
        </main>
    )
}

export default PageAllCats;