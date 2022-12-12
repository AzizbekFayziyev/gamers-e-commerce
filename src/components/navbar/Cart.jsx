import { Close, Delete, ShoppingBagOutlined } from '@mui/icons-material';
import { Avatar, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Drawer, IconButton, List, ListItem, ListItemAvatar, ListItemIcon, ListItemText, ListSubheader, Stack, Tooltip, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { decrementProduct, incrementProduct, removeProduct, removeProducts } from '../../store/actions';

export default function Cart({ isDrawerOpen, setDrawerOpen, products }) {
    const dispatch = useDispatch();
    const totalPrice = useSelector(state => state.totalPrice);
    const [isModalOpen, setModalOpen] = useState(false);

    const increment = (e) => {
        dispatch(incrementProduct(e))
    }

    const decrement = (e) => {
        dispatch(decrementProduct(e))
    }

    const removeProductFromCart = (e) => {
        dispatch(removeProduct(e));
    }

    const clearCart = () => {
        dispatch(removeProducts());
        setModalOpen(false);
    }

    return (
        <Drawer anchor="right" open={isDrawerOpen} onClose={() => setDrawerOpen(false)}>
            <List>
                <ListSubheader sx={{ my: 1 }}>
                    <Stack flexDirection="row" alignItems="center" justifyContent="space-between">
                        <Typography variant="subtitle2">MY CART({products.length})</Typography>
                        <Tooltip title="Close" arrow>
                            <IconButton onClick={() => setDrawerOpen(false)} size="large" edge="end">
                                <Close />
                            </IconButton>
                        </Tooltip>
                    </Stack>
                </ListSubheader>
                {products.length ? products.map((e, id) => {
                    return <ListItem key={id} divider>
                        <ListItemAvatar>
                            <Avatar src={e.img1} variant="rounded" alt={e.label} />
                        </ListItemAvatar>
                        <ListItemText primary={e.label} secondary={`${e.price}$`} />

                        <Stack sx={{ mx: 2, height: 35 }} bgcolor="#FECEDE" borderRadius={1} flexDirection="row" alignItems="center">
                            <IconButton onClick={() => increment(e)} disableRipple>
                                <Typography component="span" variant="h5">+</Typography>
                            </IconButton>
                            <Typography component="span" variant="subtitle1" sx={{ mx: 1 }}>{e.quantity}</Typography>
                            <IconButton onClick={() => decrement(e)} disableRipple>
                                <Typography component="span" variant="h4">-</Typography>
                            </IconButton>
                        </Stack>

                        <ListItemIcon>
                            <Tooltip title="Remove" arrow>
                                <IconButton onClick={() => removeProductFromCart(e)} edge="end" size="large">
                                    <Delete />
                                </IconButton>
                            </Tooltip>
                        </ListItemIcon>
                    </ListItem>
                }) : (
                    <Stack sx={{ m: 4 }} alignItems="center" justifyContent="center">
                        <ShoppingBagOutlined fontSize='large' />
                        <Typography variant="h6" sx={{ my: 2 }}>CART IS EMPTY!</Typography>
                        <Button onClick={() => setDrawerOpen(false)} component={Link} to="/products" variant="outlined">SHOP</Button>
                    </Stack>
                )}

                {products.length ? (
                    <Stack bgcolor="#FECEDE" sx={{ py: 3 }} justifyContent="center" alignItems="center">
                        <ListItem sx={{ textAlign: "center" }}>
                            <ListItemText>TOTAL PRICE: {totalPrice}$</ListItemText>
                        </ListItem>

                        <Stack flexDirection="row" sx={{ mt: 2 }}>
                            <Button variant='contained' sx={{ mr: 2 }}>Checkout</Button>
                            <Button onClick={() => setModalOpen(true)} color="secondary" variant='contained'>Clear Cart</Button>
                        </Stack>
                    </Stack>
                ) : ""}
            </List>

            <Dialog open={isModalOpen} onClose={() => setModalOpen(false)}>
                <DialogTitle>ARE YOU SURE?</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Clear all products in cart?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setModalOpen(false)} color="primary">NO</Button>
                    <Button onClick={clearCart} color="secondary">YES</Button>
                </DialogActions>
            </Dialog>
        </Drawer>
    )
}
