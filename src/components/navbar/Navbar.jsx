import { Menu, ShoppingCart } from '@mui/icons-material';
import { AppBar, Autocomplete, Badge, IconButton, TextField, Toolbar, Tooltip, Typography, useMediaQuery } from '@mui/material';
import { Stack } from '@mui/system';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import logo from "../../assets/images/logo.png";
import notebookData from '../../data/notebooks';
import Cart from './Cart';
import NavLinks from './NavLinks';
import NavMenu from './NavMenu';

// Navbar
export default function Navbar() {
    const media = useMediaQuery('(max-width: 880px)');
    const [menuOpen, setMenuOpen] = useState(false);
    const [menuAnchor, setMenuAnchor] = useState();
    const products = useSelector(product => product.cart);
    const [isDrawerOpen, setDrawerOpen] = useState(false);
    const navigate = useNavigate();

    const toggleMenu = (e) => {
        setMenuAnchor(e.currentTarget);
        setMenuOpen(true);
    };

    const onSearch = (e, product) => {
        if (product.label !== "") {
            navigate(`/product/${product.label}`);
        }
    };

    return (
        <AppBar data-aos="fade-down" position="fixed">
            <Toolbar sx={{ justifyContent: "space-between" }}>

                <Stack
                    to="/"
                    sx={{ textDecoration: "none" }}
                    component={Link}
                    flexDirection="row"
                    alignItems="center">
                    <img src={logo} width="auto" alt="Gamers logo" />
                    <Typography color="secondary" sx={{ ml: 1 }} variant='h4'>GAMERS</Typography>
                </Stack>

                {!media ? (
                    <Stack flexDirection="row">
                        <NavLinks />
                    </Stack>
                ) : ""}

                <Stack flexDirection="row">

                    {!media ? (
                        <Autocomplete
                            onChange={onSearch}
                            sx={{ width: 200, mr: 2 }}
                            options={notebookData}
                            renderInput={(options) =>
                                <TextField
                                    {...options}
                                    color='secondary'
                                    variant="filled"
                                    className='navbarSearch'
                                    label="Search" />} />
                    ) : ""}

                    <Tooltip title="CART" arrow>
                        <IconButton onClick={() => setDrawerOpen(true)} color="inherit" size="large">
                            <Badge color='secondary' badgeContent={products.length}>
                                <ShoppingCart />
                            </Badge>
                        </IconButton>
                    </Tooltip>

                    {media ? (
                        <IconButton onClick={toggleMenu} color="inherit" edge="end" size="large">
                            <Menu fontSize='large' />
                        </IconButton>
                    ) : ""}
                </Stack>

            </Toolbar>

            <NavMenu open={menuOpen} anchor={menuAnchor} setMenuOpen={setMenuOpen} />

            <Cart isDrawerOpen={isDrawerOpen} setDrawerOpen={setDrawerOpen} products={products} />
        </AppBar>
    )
}
