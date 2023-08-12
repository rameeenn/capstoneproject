import React from 'react';
import { Link } from "react-router-dom";

const navbar = () => {
    const navbarstyles = {
        color: '#F4CE14',
        textDecoration: 'none',
        margin: '0 10px',
    }
    return (
        <div>
            <li style={navbarstyles}>
                <Link to="/">About</Link>
            </li>
            <li style={navbarstyles}>
                <Link to="/menu">Menu</Link>
            </li>
            <li style={navbarstyles}>
                <Link to="/reservations">Reservations</Link>
            </li>
        </div>
    );
}

export default navbar;