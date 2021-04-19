import React, { useState } from 'react';
import useCatsAPI from '../../../hooks/useCatsAPI';

import { 
    Container, 
    Button, 
    Paper,
    Typography
} from '@material-ui/core';
import { DropzoneArea } from 'material-ui-dropzone'
import LoadingSpinner from '../../UI/LoadingSpinner';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

const PageUploadCat = ({ classes }) => {
    const [file, setFile] = useState();
    const [isUploading, setIsUploading] = useState(false);
    const [showError, setShowError] = useState(false);

    const dropzoneOnChange = (files) => {
        if (files.length > 0) {
            setFile(files[0])
        }
    }

    const handleUploadImage = async () => {
        if (!file) {
            setShowError(true)
        } else {
            setIsUploading(true);
            const formData = new FormData();
            formData.append('file', file);
            formData.append('sub_id', 'Ryan');

            useCatsAPI(
                'images/upload',
                'POST',
                null,
                formData
            ).then(response => {
                if (response.status === 201) {
                    window.location = '/';
                }
            });
        }

    }

    return (
        <main className={classes.content}>
            <div className={classes.appBarSpacer} />
            <Container maxWidth="lg" className={classes.container}>
                <Paper className={classes.paper}>
                    {showError && (
                        <Typography variant="h4" component="p" className={classes.errorMessage}>
                            Please upload a file to save
                        </Typography>
                    )}
                    {isUploading ? (
                        <LoadingSpinner />
                    ) : (
                        <>
                            <DropzoneArea
                                onChange={files => dropzoneOnChange(files)}
                                filesLimit={1}
                                acceptedFiles={['image/jpeg', 'image/png']}
                                maxFileSize={5000000}
                                className="dropzone__container"
                            />
                            <Button
                                variant="contained"
                                color="primary"
                                className={classes.button}
                                onClick={handleUploadImage}
                                size="large"
                                startIcon={<CloudUploadIcon />}
                            >
                                Save Cat Photo
                            </Button>
                        </>
                    )}
                </Paper>
            </Container>
        </main>
    )
}

export default PageUploadCat;