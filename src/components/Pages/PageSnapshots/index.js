import React, { useEffect } from 'react';

import { useFetchAllAssets } from '../../../hooks/useFetchAllAssets';
import { useAssetContext } from '../../../context/assetContext';

import { Container, Typography, Paper } from '@material-ui/core';
import FormAddSnapshot from '../../UI/FormAddSnapshot';
import ModalWrapper from '../../UI/ModalWrapper';
import LatestSnapshots from '../../UI/LatestSnapshots';

const PageSnapshots = ({ classes }) => {
    // const { dispatchAsset } = useAssetContext();
    // const { fetchAllAssets } = useFetchAllAssets(dispatchAsset);

    // useEffect(() => {
    //     fetchAllAssets();

    //     console.log(assetState, 'assetState assetState assetState assetState')
    // }, []);
    
    return (
        <main className={classes.content}>
            <div className={classes.appBarSpacer} />
            <Container maxWidth="lg" className={classes.container}>
                <ModalWrapper buttonText={'Add snapshot'}>   
                    <FormAddSnapshot classes={classes} />
                </ModalWrapper>
                <Typography variant="h5" className={classes.titleMargin}>
                    Latest Snapshots
                </Typography>
                <Paper className={classes.paper} >
                    <LatestSnapshots />
                </Paper>
            </Container>
        </main>
    )
}

export default PageSnapshots;