import { Button } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';

export default function NavLinks() {
    return (
        <>
            <Button to="/" component={NavLink} size="large" color="inherit">Home</Button>
            <Button to="/products" component={NavLink} size="large" color="inherit">Products</Button>
            <Button to="/blogs" component={NavLink} size="large" color="inherit">Blogs</Button>
            <Button to="/contact" component={NavLink} size="large" color="inherit">Contact</Button>
        </>
    )
}
