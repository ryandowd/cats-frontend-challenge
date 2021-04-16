import React from 'react';
import { Button } from '@material-ui/core';

const Navigation = ({ classes }) => {    
    const isAllCats = window.location.pathname === '/' ? 'contained' : undefined;
    const isUploadCat = window.location.pathname === '/upload' ? 'contained' : undefined;
    return (
        <nav className={classes.nav}>
            <Button variant={isAllCats} color="primary" href="/">
                All Cats
            </Button>
            <Button variant={isUploadCat} color="primary" href="/upload">
                Upload Cat
            </Button>
        </nav>
    )
}

export default Navigation;