import React from 'react';

import { Paper } from '@material-ui/core';

const CatCard = ({ classes, cat }) => {
    console.log(cat, 'cat cat cat cat cat')
    return (
        <Paper className={classes.paper}>
            <img src={cat.url} />
        </Paper>
    );
}

export default CatCard;