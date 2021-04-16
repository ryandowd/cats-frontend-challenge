import React from 'react';
import { NavLink } from 'react-router-dom'

import "./Navigation.css";

const Navigation = () => {
    return (
        <nav className="Nav">
            <ul className="Nav__list">
                <li><NavLink exact activeClassName="active" to='/' >All Cats</NavLink></li>
                <li><NavLink activeClassName="active" to='/upload' >Upload Cats</NavLink></li>
            </ul>
        </nav>
    )
}

export default Navigation;