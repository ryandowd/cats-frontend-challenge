import React from 'react';
import { Link } from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import ShowChartIcon from '@material-ui/icons/ShowChart';
import TimelineIcon from '@material-ui/icons/Timeline';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import LanguageIcon from '@material-ui/icons/Language';

export const navigationItems = (
  <>
    <Link to="/">
        <ListItem button>
        <ListItemIcon>
            <TimelineIcon />
        </ListItemIcon>
        <ListItemText primary="All Cats" />
        </ListItem>
    </Link>
    <Link to="/upload">
        <ListItem button>
        <ListItemIcon>
            <MonetizationOnIcon />
        </ListItemIcon>
        <ListItemText primary="Upload" />
        </ListItem>
    </Link>
  </>
);

