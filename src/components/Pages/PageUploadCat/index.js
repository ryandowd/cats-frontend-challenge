import React, { useEffect } from 'react';
import axios from 'axios';
import { DropzoneArea } from 'material-ui-dropzone'

import { 
    Container, 
    Grid,
    Button, 
    Paper, 
    Typography 
} from '@material-ui/core';

const PageUploadCat = ({ classes }) => {

    const dropzoneOnChange = async (files) => {
        console.log(files, 'files');
        const url = 'https://api.thecatapi.com/v1/images/upload';
        const subID = Math.random().toString(16).substr(2, 10);

        if (files.length > 0) {
            const formData = new FormData();
            formData.append('file', files[0]);
            // formData.append('sub_id', subID);
            
            const response = await axios({
                method: 'post',
                url: url,
                data: formData,
                headers: {
                    'x-api-key': '124f173f-1dd6-4a6f-8164-b8f27fdd3a00'
                }
              });

            console.log(response, 'response')

            if (response.status === 201) {            
                window.location = '/';
            }
        }



        // const response = await axios.get(
        //     `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
        //       address
        //     )}&key=${API_KEY}`
        // );


    }

    return (
        <main className={classes.content}>
            <div className={classes.appBarSpacer} />
            <Container maxWidth="lg" className={classes.container}>
                <Paper className={classes.paper}>
                    <DropzoneArea
                        onChange={files => dropzoneOnChange(files)}
                        filesLimit={1}
                        acceptedFiles={['image/jpeg', 'image/png']}
                        maxFileSize={5000000}
                    />
                    <Button variant="contained" color="primary">
                        Save Cat Photo
                    </Button>
                </Paper>
            </Container>
        </main>
    )
}

export default PageUploadCat;